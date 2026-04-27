# Flow — Task Checklist

> **Claude:** อ่านไฟล์นี้ก่อนเริ่มทุกครั้ง หา task แรกที่ยัง `[ ]` แล้วทำต่อจากนั้น
> อัปเดต `[ ]` → `[x]` ทุกครั้งที่ task เสร็จ

---

## สถานะรวม

| # | Task | สถานะ |
|---|------|--------|
| 1 | Project setup | `[x]` |
| 2 | Auth | `[x]` |
| 3 | Layout | `[x]` |
| 4 | Dashboard | `[x]` |
| 5 | Add transaction | `[ ]` |
| 6 | E-Slip OCR | `[ ]` |
| 7 | Budget | `[ ]` |
| 8 | Savings goals | `[ ]` |
| 9 | Net worth | `[ ]` |
| 10 | Recurring | `[ ]` |
| 11 | Report | `[ ]` |
| 12 | Export | `[ ]` |

---

## Task 1 — Project setup
**เป้าหมาย:** `npm run dev` รันได้ ไม่มี error

- [x] `npm create vite@latest flow -- --template react-ts`
- [x] ติดตั้ง dependencies: `tailwindcss` `firebase` `recharts` `react-router-dom`
- [x] ตั้งค่า Tailwind CSS v3
- [x] สร้าง `src/lib/firebase.ts` (placeholder config)
- [x] สร้าง `src/lib/firestore.ts` (CRUD helpers)
- [x] สร้าง `src/lib/dotchart.ts` (Canvas dot chart renderer)
- [x] สร้าง `src/lib/claude.ts` (OCR helper)
- [x] สร้าง `src/types/index.ts` (types ทั้งหมด)
- [x] สร้าง `.env` พร้อม `VITE_OPENROUTER_API_KEY`
- [x] `npm run dev` ขึ้นหน้าเปล่าได้

**โครงสร้างไฟล์:**
```
src/
  components/
    layout/       TopBar, Sidebar, BottomNav
    dashboard/    BentoGrid, DotChart, StatCard
    transaction/  AddForm, NumPad, ChipSelector, CategoryGrid
    slip/         SlipUpload, SlipConfirm
    budget/       BudgetCard, BudgetBar
    savings/      GoalCard, GoalProgress
    networth/     AssetList
    recurring/    RecurringList
    report/       LineChart, CategoryBreakdown
    export/       ExportOptions
  pages/
    Dashboard.tsx
    AddTransaction.tsx
    Budget.tsx
    Savings.tsx
    NetWorth.tsx
    Recurring.tsx
    Report.tsx
    Export.tsx
  lib/
    firebase.ts
    firestore.ts
    dotchart.ts
    claude.ts
  hooks/
    useTransactions.ts
    useBudget.ts
    useGoals.ts
    useNetWorth.ts
    useAuth.ts
  types/
    index.ts
```

---

## Task 2 — Auth
**เป้าหมาย:** user sign-in อัตโนมัติ ไม่ต้อง login

- [ ] เปิด Anonymous Auth ใน Firebase console (ทำใน Firebase console ด้วยตัวเอง)
- [x] `signInAnonymously()` ตอน app โหลด ครั้งแรก
- [x] persist session ใน IndexedDB อัตโนมัติผ่าน Firebase SDK
- [x] สร้าง `AuthContext` เก็บ `uid`, `isAnonymous`, `loading`
- [ ] ปุ่ม "เชื่อมต่อ Google account" ใน Settings (optional — ซิงค์ข้ามเครื่อง)

---

## Task 3 — Layout
**เป้าหมาย:** shell แอปพร้อม navigation และ theme

- [ ] `TopBar` — logo + ชื่อเดือน + ยอดคงเหลือ + toggle period
- [ ] `Sidebar` — desktop ≥768px: nav items แยก section (หลัก / ออม / อื่นๆ)
- [ ] `BottomNav` — mobile <768px: 5 icon tabs + FAB `+` ตรงกลาง
- [ ] React Router v6 — routes ครบทุกหน้า
- [ ] CSS variables ครบ (ดู PROMPT.md หัวข้อ Design Spec)
- [ ] Auto dark/light ตาม `prefers-color-scheme` + toggle manual ได้

**Nav items:**
```
Overview → /
รายการ  → /transactions
Budget  → /budget
ออม     → /savings
เพิ่ม   → FAB เปิด modal (mobile) / /add (desktop)
อื่นๆ   → /networth, /recurring, /report, /export
```

---

## Task 4 — Dashboard
**เป้าหมาย:** Bento grid พร้อม dot chart interactive

### Dot chart (`src/lib/dotchart.ts`)
```typescript
type DotChartOpts = {
  canvas: HTMLCanvasElement
  type: 'bar' | 'fill' | 'ring'
  data?: number[]      // bar: array 0–1 per column
  pct?: number         // fill/ring: 0–1
  cols?: number        // default 28
  rows?: number        // default 7
  dotRadius?: number   // default 2.5
  accentFn?: (alpha: number) => string
  accent?: string
}
```

### Bento cards
- [ ] **รายรับ** (2 col) — dot `bar` สีเขียว + ยอด + % change badge
- [ ] **รายจ่าย** (1 col) — dot `bar` สีส้ม + ยอด
- [ ] **คงเหลือ** (1 col) — dot `ring` + ยอด + % จากรายรับ
- [ ] **Budget** (1 col) — dot `bar` overview + progress bar 3 หมวดแรก
- [ ] **เป้าออม** (1 col) — dot `fill` สีม่วง 2 goals + ETA
- [ ] **ล่าสุด** (1 col) — 3 รายการ + slip zone shortcut

- [ ] Toggle Weekly / Monthly บน TopBar → dot chart + ตัวเลขเปลี่ยน real-time
- [ ] ข้อมูลจาก Firestore real-time (onSnapshot)

---

## Task 5 — Add transaction
**เป้าหมาย:** บันทึกรายการได้ใน 3 tap

- [ ] Type selector: **รายจ่าย** / **รายรับ** / **โอนออม**
- [ ] **NumPad** — กดตัวเลขทีละหลัก, `.` ทศนิยม, `⌫` ลบ, แสดงยอดใหญ่
- [ ] **Quick chips** — preset ยอดที่ใช้บ่อย (top 6 จาก history อัตโนมัติ)
- [ ] **CategoryGrid** — icon + label 4 col, เลือกได้ 1
- [ ] Note input (optional, show/hide)
- [ ] Date picker (default = วันนี้)
- [ ] บันทึกลง Firestore → dashboard update real-time → ปิดฟอร์ม

---

## Task 6 — E-Slip OCR
**เป้าหมาย:** paste/upload slip → ดึงข้อมูล → confirm → save

### Flow
```
paste/upload รูป
→ แปลง base64
→ Claude API (claude-sonnet-4-6) + system prompt
→ parse JSON response
→ SlipConfirm form (แก้ได้)
→ กด "นำเข้า" → save transaction
```

### API ที่ใช้
- **OpenRouter** endpoint: `https://openrouter.ai/api/v1/chat/completions`
- **Model:** `anthropic/claude-sonnet-4-5`
- **Auth header:** `Authorization: Bearer ${VITE_OPENROUTER_API_KEY}`
- format request เป็น OpenAI-compatible (ดู `src/lib/claude.ts`)

- [ ] Drag & drop zone
- [ ] Paste จาก clipboard (Ctrl+V / ⌘V)
- [ ] Preview รูปก่อน process
- [ ] Loading spinner ระหว่าง API call
- [ ] Error state (รูปไม่ชัด / API fail / parse fail)
- [ ] SlipConfirm — แสดง field ทั้งหมด แก้ได้ก่อน save

---

## Task 7 — Budget
**เป้าหมาย:** ตั้งและติดตาม budget รายหมวดแบบ real-time

- [ ] ตั้งวงเงินต่อหมวดต่อเดือน (save ใน Firestore `budgets/{catId}`)
- [ ] คำนวณ `spent` จาก transactions เดือนนั้น real-time
- [ ] Progress bar + % พร้อมสี (เขียว → เหลือง → แดงเมื่อเกิน)
- [ ] Badge แจ้งเตือน: `⚠️` เมื่อ ≥90%, `🔴` เมื่อเกิน
- [ ] แนะนำ 50/30/20 rule คำนวณจากรายรับเดือนนั้นอัตโนมัติ
- [ ] เพิ่ม / แก้ / ลบ budget category ได้

---

## Task 8 — Savings goals
**เป้าหมาย:** ติดตามเป้าออม 3 โหมด

**โหมด 1 — % รายได้**
- [ ] ตั้ง % ที่อยากออม
- [ ] คำนวณยอดที่ควรออมจากรายรับเดือนนั้น
- [ ] เปรียบเทียบกับที่โอนออมจริง (catId = 'savings')

**โหมด 2 — ยอดคงที่**
- [ ] ตั้งยอดบาท/เดือน
- [ ] track ว่าโอนครบหรือยัง

**โหมด 3 — เป้าหมายเฉพาะ**
- [ ] ชื่อเป้า, ยอดรวม, ออม/เดือน, deadline
- [ ] คำนวณ ETA อัตโนมัติ
- [ ] Dot `fill` progress สีม่วง
- [ ] เชื่อมกับ recurring ได้
- [ ] เพิ่ม / แก้ / ลบ goal ได้

---

## Task 9 — Net worth
**เป้าหมาย:** ภาพรวมทรัพย์สินและหนี้สิน

- [ ] เพิ่ม / แก้ / ลบ asset (cash, investment, property, other)
- [ ] เพิ่ม / แก้ / ลบ liability (credit, loan, other)
- [ ] คำนวณ net worth = Σassets − Σliabilities real-time
- [ ] บันทึก snapshot รายเดือน (เพื่อดูการเปลี่ยนแปลง)
- [ ] แสดง Δ% จากเดือนที่แล้ว

---

## Task 10 — Recurring
**เป้าหมาย:** รายการที่เกิดซ้ำทุกเดือน

- [ ] เพิ่ม / แก้ / ลบ recurring item
- [ ] ระบุวันที่ตัด (1–31)
- [ ] ประเภท: expense / income / savings-transfer
- [ ] Toggle pause / active
- [ ] Auto-create transaction เมื่อถึงวันที่ตัด (check ตอน app โหลด)
- [ ] ป้องกัน duplicate (เช็ค `lastCreated` เดือน/ปี)
- [ ] เชื่อม savings-transfer กับ goal ได้

---

## Task 11 — Report
**เป้าหมาย:** กราฟสรุปรายเดือน / สัปดาห์ / ปี

- [ ] Toggle: สัปดาห์ / เดือน / ปี
- [ ] Line chart (Recharts) — 3 เส้น: รายรับ, รายจ่าย, ออม
- [ ] Horizontal bar breakdown รายหมวด — ยอด + %
- [ ] เปรียบเทียบ Δ% กับช่วงก่อนหน้า
- [ ] Tooltip เมื่อ hover

---

## Task 12 — Export
**เป้าหมาย:** ดาวน์โหลดข้อมูลได้ 3 format

- [ ] **CSV** — transactions พร้อม date range selector
  - columns: `date, name, category, amount, note`
- [ ] **PDF** — สรุปรายเดือน ใช้ `window.print()` + print stylesheet
  - รายรับ, รายจ่าย, budget usage, savings progress
- [ ] **JSON** — dump ทั้งหมดจาก Firestore
  - transactions + budgets + goals + assets + liabilities + recurring

---

## Notes

- ถ้า task ไหนเสร็จบางส่วน ใส่ `[~]` แทน แล้วบอก user ว่าค้างอะไรไว้
- ถ้า task ไหนติดปัญหา ใส่ `[!]` แล้วอธิบายปัญหาด้านล่าง task นั้น
- commit message format: `feat: task {n} {ชื่อ task}` หรือ `fix: task {n} {สิ่งที่แก้}`
