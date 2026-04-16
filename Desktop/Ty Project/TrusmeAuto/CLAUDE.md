# Trusme Content Planner — Project Context

## Project Overview
Auto content planner + auto post system สำหรับ Trusme Cosmet (โรงงาน OEM เครื่องสำอาง)
- ลูกค้ากด generate → n8n สร้าง content plan 7 วัน → review → gen รูป → schedule → post Facebook

## Full Flow
```
[ลูกค้า] กด "สร้าง Content Plan" + เลือกวันเริ่มต้น (index.html)
    ↓ POST webhook
n8n: generate content text 7 posts → Google Sheets (status: writing)
    ↓
LINE Notify แจ้งลูกค้า "content พร้อม review"
    ↓
[ลูกค้า] เข้าหน้า Content Review (content-review.html)
    → Approve (status: approved) / Reject (status: rejected)
    ↓ approved only
n8n: generate AI Image → บันทึก link1/2/3 → Google Sheets (status: ready)
    ↓
[ลูกค้า] เข้าหน้า Schedule (dashboard.html)
    → ดูรูป + เลือกวันที่ post → Confirm (status: scheduled)
    ↓
n8n: auto post Facebook ตามวันที่ + เวลาที่ lock ไว้ใน n8n
    → Google Sheets (status: posted)
```

## Status Legend (Google Sheets column A)
| Status | ความหมาย |
|--------|----------|
| `draft` | เริ่มต้น ยังไม่ generate |
| `writing` | n8n generate content text เสร็จแล้ว รอลูกค้า review |
| `approved` | ลูกค้า approve → รอ n8n gen รูป |
| `rejected` | ลูกค้า reject → จบ ไม่ post ไม่ gen รูป |
| `img gen` | n8n กำลัง generate ภาพ |
| `ready` | รูปพร้อมแล้ว รอลูกค้า set schedule |
| `scheduled` | ลูกค้า set วันที่แล้ว รอ post |
| `published` / `posted` / `done` | post แล้ว |

## Google Sheets Structure
**Sheet: `content_plan`** (main database)

| Column | Field | หมายเหตุ |
|--------|-------|---------|
| A | `status` | ตาม Status Legend ด้านบน |
| B | `row_id` | CP001, CP002, ... |
| C | `date (YYYY-MM-DD)` | วันที่ post — ลูกค้าแก้ได้ใน หน้า 2 |
| D | `content_pillars` | product_content / company_profile / general_knowledge / seasonal |
| E | `post_structure` | single_image / carousel_3 / credibility_stack_board / etc. |
| F | `product_code` | รหัสสินค้า เช่น LIP_VELVET_MATTE, PJ, CVA |
| G | `seasonal_event_key` | ชื่อเทศกาล หรือ "none" |
| H | `strategy_pattern_id` | description ของ strategy (text ยาว) |
| I | `layout_family` | product_grid_board / carousel_3 / hero_product_single / etc. |
| J | `example_brief` | brief ตัวอย่าง |
| K | `reviewer_note` | note จาก reviewer |
| L | `core_tension` | tension หลักของ post |
| M | `big_idea_line` | ไอเดียหลัก (1 ประโยค) — โชว์ใน หน้า 1 |
| N | `visual_mode` | hero / conversion / proof / etc. |
| O | `visual_direction_note` | คำแนะนำสำหรับ gen รูป |
| P | `headline` | หัวข้อ post — โชว์ใน หน้า 2 |
| Q | `body_copy` | caption เต็ม — โชว์ใน หน้า 2 |
| R | `cta` | call to action — โชว์ใน หน้า 2 |
| S | `angle_tags` | hashtags — โชว์ใน หน้า 2 |
| T | `drive_folder` | Google Drive folder URL |
| U | `link1` | รูปที่ 1 (Google Drive URL) |
| W | `link2` | รูปที่ 2 |
| Y | `link3` | รูปที่ 3 |

---

## Pages (3 หน้า)

### หน้า Home — Overview & Generate (`index.html`)
**จุดเริ่มต้นของ workflow ทั้งหมด**
- แสดง stats overview: posts รอ review / scheduled / posted
- แสดง recent batches พร้อม progress bar และ status pills
- แสดง pipeline bar บอก step ปัจจุบันของ batch ล่าสุด
- **Generate Card:** ลูกค้าเลือก "วันเริ่มต้น" → preview 7 วันที่จะ generate → กด confirm → POST webhook ไป n8n
- แสดง progress animation ระหว่าง n8n กำลัง generate
- เมื่อ generate เสร็จ: toast แจ้ง + nav "Content Review" ไฮไลต์

**n8n Webhook payload:**
```json
{ "startDate": "2026-04-14", "days": 7 }
```

**Config:**
```javascript
const N8N_WEBHOOK = 'YOUR_N8N_WEBHOOK_URL';
```

---

### หน้า 1 — Content Review (`content-review.html`)
- **Filter:** status = `writing`
- **แสดง columns (table layout):** `row_id`, `big_idea_line`, `content_pillars`, `product_code`, `post_structure`, `layout_family`, `seasonal_event_key`
- **ไม่แสดง:** headline, body_copy, รูป (อยู่หน้า 2)
- **Action per row:** Approve (→ `approved`) / Reject (→ `rejected`) / เปลี่ยนใจ (→ `writing`)
- **Bulk action:** Approve ทั้งหมด
- **Progress bar:** บอก % ที่ review แล้ว
- **เมื่อ review ครบ:** แสดง next-cta ปุ่มไปหน้า 2

---

### หน้า 2 — Schedule & Publish (`dashboard.html`)
- **Filter:** status = `ready` (รูปพร้อมแล้ว)
- **แสดง (card layout):** รูป slider (link1/2/3), headline, body_copy, angle_tags, pillar tag, row_id
- **Action:** เลือกวันที่ (แก้ column `date`) → Confirm (→ `scheduled`) / Skip (→ `rejected`) / แก้ไข (unschedule → `pending`)
- **เวลา post:** lock ไว้ใน n8n — ลูกค้าเลือกได้แค่วันที่
- **Post วันเดียวกันได้หลาย posts**

---

## Navigation Structure
```
index.html          ← Home (⌂ Overview)
  └── content-review.html   ← Stage 1 (1 Content Review)
        └── dashboard.html  ← Stage 2 (2 Schedule & Publish)
```

Header nav มี 3 tabs: ⌂ Overview | 1 Content Review | 2 Schedule & Publish

---

## Auth
- **LINE Login** (OAuth 2.0) — ทุกหน้า
- **LINE Notify** — แจ้งเมื่อ content พร้อม review

```javascript
// Production LINE Login redirect
const LINE_AUTH_URL = `https://access.line.me/oauth2/v2.1/authorize
  ?response_type=code
  &client_id=${LINE_CLIENT_ID}
  &redirect_uri=${REDIRECT_URI}
  &state=${randomState}
  &scope=profile%20openid`;
// Exchange code via Apps Script proxy (avoid CORS)
// Store session: { displayName, userId, pictureUrl } in localStorage
```

---

## Backend

### Google Apps Script (Web App API)
```javascript
const SHEET_NAME = 'content_plan';
const SHEET_ID   = 'YOUR_GOOGLE_SHEET_ID';

function doGet(e) {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
  const [headers, ...rows] = sheet.getDataRange().getValues();
  const data = rows.map((row, i) => {
    const obj = { rowIndex: i + 2 };
    headers.forEach((h, j) => { obj[h] = row[j]; });
    return obj;
  }).filter(r => r.status);
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const { rowIndex, status, date } = JSON.parse(e.postData.contents);
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  if (status) sheet.getRange(rowIndex, headers.indexOf('status') + 1).setValue(status);
  if (date)   sheet.getRange(rowIndex, headers.indexOf('date (YYYY-MM-DD)') + 1).setValue(date);
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

**Config ใน frontend:**
```javascript
const SCRIPT_URL  = 'YOUR_APPS_SCRIPT_WEB_APP_URL';
const N8N_WEBHOOK = 'YOUR_N8N_WEBHOOK_URL';
```

### n8n Workflows
| Workflow | Trigger | Action |
|----------|---------|--------|
| Generate content | POST webhook จาก index.html | สร้าง content 7 posts → เขียน sheet → LINE Notify |
| Generate image | sheet status = `approved` (poll/webhook) | AI image gen → บันทึก link1 → update status = `ready` |
| Auto post | Poll sheet ทุกชั่วโมง | หา `scheduled` ที่ date = today → post Facebook → update `posted` |

---

## Design System (UI Theme)

### Fonts
```
Display: 'Cormorant Garamond', serif — brand name, page titles, headings, stat numbers
Body:    'Sarabun', sans-serif       — body text, UI, buttons, Thai text
```

### Color Palette
```css
--bg:       #F5F3EE  /* page background — warm off-white */
--surface:  #FFFFFF  /* cards, panels, modals */
--surface2: #EFECE5  /* subtle backgrounds, table headers, inputs */
--surface3: #E8E4DB  /* tags, inactive chips */
--ink:      #1C1A16  /* primary text */
--ink2:     #6A6660  /* secondary text */
--ink3:     #AAA69F  /* muted / placeholder / labels */
--accent:   #2D6A4F  /* primary CTA — forest green */
--accent-l: #D6EDE3  /* accent light fill */
--accent-d: #1E4D38  /* accent hover/dark */
--danger:   #C0392B  /* reject / error */
--danger-l: #FAEAEA  /* danger light fill */
--border:   #E2DDD4  /* all borders and dividers */
```

### Status Colors
```css
/* Writing / Pending / Waiting */
--w-bg: #FFF8EC;  --w-ink: #7A5400;  --w-bd: #F5D58A;

/* Approved / Success */
--a-bg: #E9F6EE;  --a-ink: #1A5C35;  --a-bd: #8FD4AC;

/* Rejected / Error */
--r-bg: #FAEAEA;  --r-ink: #7A1A1A;  --r-bd: #F0A0A0;

/* Scheduled / Info */
--s-bg: #E6F3FB;  --s-ink: #0C5460;  --s-bd: #B5D4F4;

/* Posted / Done */
--d-bg: #E8F5EC;  --d-ink: #155724;  --d-bd: #9FE1CB;
```

### Component Patterns
| Component | Spec |
|-----------|------|
| Header | height 56px, sticky top, surface bg, 1px border-bottom |
| Stage nav | tabs below header, 2px accent underline for active tab |
| Cards | border-radius 12–14px, 1px border, subtle box-shadow |
| Status pills | border-radius 20px, 10px font, uppercase, letter-spacing |
| Category tags | border-radius 4px, 11px font |
| Primary button | bg accent, white text, radius 8–10px |
| Danger button | 1px border #E8B4B4, color danger, transparent bg |
| Ghost button | 1px border var(--border), color ink3 |
| Progress bar | 5–6px height, accent fill, surface2 track, radius 3px |
| Modal | border-radius 20px, rgba overlay 0.45, max-width 420px |

### Animations
```css
@keyframes rise {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}
/* stagger: animation-delay: ${i * 30}ms on list items */
/* spinner: border-top-color accent, 0.8s linear infinite */
```

### Layout
| Page | Max Width | Notes |
|------|-----------|-------|
| index.html | 1080px | 2-col hero grid (1fr 360px) |
| content-review.html | 1000px | table layout |
| dashboard.html | 1160px | card grid auto-fill minmax(330px, 1fr) |

Padding: 32px all pages

### Image handling (Google Drive)
```javascript
// Convert Drive share URL to thumbnail
function thumb(url) {
  const m = url.match(/\/d\/([^/?]+)/);
  return m ? `https://drive.google.com/thumbnail?id=${m[1]}&sz=w600` : url;
}
```
