const MODEL = 'anthropic/claude-sonnet-4-5'
const API_URL = 'https://openrouter.ai/api/v1/chat/completions'

export interface SlipData {
  amount: number
  receiver: string | null
  bank: string | null
  date: string | null
  time: string | null
  ref: string | null
  suggestCat: 'food' | 'travel' | 'entertain' | 'home' | 'health' | 'savings' | 'other'
}

export async function readSlip(base64Image: string, mimeType: string): Promise<SlipData> {
  const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY
  if (!apiKey) throw new Error('VITE_OPENROUTER_API_KEY not set')

  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'image_url',
              image_url: { url: `data:${mimeType};base64,${base64Image}` },
            },
            {
              type: 'text',
              text: `คุณคือ OCR สำหรับ e-slip โอนเงินไทย
ตอบกลับเป็น JSON เท่านั้น ไม่มีข้อความอื่น ไม่มี markdown:
{
  "amount": number,
  "receiver": string | null,
  "bank": string | null,
  "date": "YYYY-MM-DD" | null,
  "time": "HH:MM" | null,
  "ref": string | null,
  "suggestCat": "food|travel|entertain|home|health|savings|other"
}`,
            },
          ],
        },
      ],
    }),
  })

  if (!res.ok) {
    const err = await res.text()
    throw new Error(`OpenRouter API error ${res.status}: ${err}`)
  }

  const data = await res.json()
  const text: string = data.choices?.[0]?.message?.content ?? ''

  try {
    // strip markdown code fences if present: ```json ... ``` or ``` ... ```
    const clean = text.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim()
    return JSON.parse(clean) as SlipData
  } catch {
    throw new Error(`Failed to parse OCR response: ${text}`)
  }
}
