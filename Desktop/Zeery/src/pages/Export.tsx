import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { subscribeTransactions } from '../lib/firestore'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../lib/firebase'
import { CATEGORIES } from '../types'
import type { Transaction } from '../types'

function userCol(uid: string, sub: string) {
  return collection(db, 'users', uid, sub)
}

// ── CSV export ────────────────────────────────────────────────────────────────

function txToCSV(txs: Transaction[]): string {
  const header = 'date,name,category,amount,note'
  const rows = txs.map(tx => {
    const cat = CATEGORIES.find(c => c.id === tx.catId)?.label ?? tx.catId
    const note = (tx.note ?? '').replace(/,/g, ' ').replace(/\n/g, ' ')
    const name = tx.name.replace(/,/g, ' ')
    return `${tx.date},${name},${cat},${tx.amount},${note}`
  })
  return [header, ...rows].join('\n')
}

function downloadText(text: string, filename: string, mime = 'text/csv') {
  const blob = new Blob(['\uFEFF' + text], { type: mime + ';charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

// ── helpers ───────────────────────────────────────────────────────────────────

function monthLabel(m: string) {
  const [y, mo] = m.split('-')
  return `${y}/${mo}`
}

const MONTHS_BACK = Array.from({ length: 12 }, (_, i) => {
  const d = new Date()
  d.setDate(1)
  d.setMonth(d.getMonth() - i)
  return d.toISOString().slice(0, 7)
})

type PreviewData =
  | { kind: 'csv'; rows: Transaction[]; total: number }
  | { kind: 'json'; text: string }

export default function Export() {
  const { uid } = useAuth()
  const [fromMonth, setFromMonth] = useState(MONTHS_BACK[1])
  const [toMonth, setToMonth] = useState(MONTHS_BACK[0])
  const [csvLoading, setCsvLoading] = useState(false)
  const [jsonLoading, setJsonLoading] = useState(false)
  const [preview, setPreview] = useState<PreviewData | null>(null)

  // Fetch filtered transactions (shared by preview + download)
  const fetchCSVTxs = (): Promise<Transaction[]> => {
    return new Promise(resolve => {
      if (!uid) { resolve([]); return }
      const from = fromMonth + '-01'
      const to = toMonth + '-31'
      const unsub = subscribeTransactions(uid, txs => {
        unsub()
        resolve(
          txs
            .filter(tx => tx.date >= from && tx.date <= to)
            .sort((a, b) => a.date.localeCompare(b.date))
        )
      })
    })
  }

  const handleCSVPreview = async () => {
    if (!uid) return
    setCsvLoading(true)
    try {
      const txs = await fetchCSVTxs()
      setPreview({ kind: 'csv', rows: txs, total: txs.length })
    } finally {
      setCsvLoading(false)
    }
  }

  const handleCSV = async () => {
    if (!uid) return
    setCsvLoading(true)
    try {
      const txs = await fetchCSVTxs()
      downloadText(txToCSV(txs), `flow-transactions-${fromMonth}-${toMonth}.csv`)
    } finally {
      setCsvLoading(false)
    }
  }

  const handlePDF = () => {
    window.print()
  }

  const fetchJSONDump = async () => {
    if (!uid) return null
    const [txSnap, budgetSnap, goalSnap, assetSnap, liabSnap, recurSnap] = await Promise.all([
      getDocs(userCol(uid, 'transactions')),
      getDocs(userCol(uid, 'budgets')),
      getDocs(userCol(uid, 'goals')),
      getDocs(userCol(uid, 'assets')),
      getDocs(userCol(uid, 'liabilities')),
      getDocs(userCol(uid, 'recurring')),
    ])
    return {
      exportedAt: new Date().toISOString(),
      transactions: txSnap.docs.map(d => ({ id: d.id, ...d.data() })),
      budgets: budgetSnap.docs.map(d => ({ id: d.id, ...d.data() })),
      goals: goalSnap.docs.map(d => ({ id: d.id, ...d.data() })),
      assets: assetSnap.docs.map(d => ({ id: d.id, ...d.data() })),
      liabilities: liabSnap.docs.map(d => ({ id: d.id, ...d.data() })),
      recurring: recurSnap.docs.map(d => ({ id: d.id, ...d.data() })),
    }
  }

  const handleJSONPreview = async () => {
    if (!uid) return
    setJsonLoading(true)
    try {
      const dump = await fetchJSONDump()
      if (dump) setPreview({ kind: 'json', text: JSON.stringify(dump, null, 2) })
    } finally {
      setJsonLoading(false)
    }
  }

  const handleJSON = async () => {
    if (!uid) return
    setJsonLoading(true)
    try {
      const dump = await fetchJSONDump()
      if (dump) downloadText(JSON.stringify(dump, null, 2), `flow-backup-${new Date().toISOString().slice(0, 10)}.json`, 'application/json')
    } finally {
      setJsonLoading(false)
    }
  }

  return (
    <>
      {/* Print stylesheet */}
      <style>{`
        @media print {
          body * { visibility: hidden; }
          #print-area, #print-area * { visibility: visible; }
          #print-area { position: absolute; inset: 0; padding: 24px; }
        }
      `}</style>

      <div style={{ maxWidth: '520px', margin: '0 auto', padding: '16px 16px 80px' }}>
        <h1 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>Export</h1>
        <p style={{ fontSize: '0.8rem', color: 'var(--text2)', marginBottom: '24px' }}>ดาวน์โหลดข้อมูลของคุณ</p>

        {/* CSV */}
        <ExportCard
          emoji="📄"
          title="CSV"
          description="รายการธุรกรรมพร้อมกรองช่วงเวลา"
          columns="date, name, category, amount, note"
        >
          <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '120px' }}>
              <label style={{ fontSize: '0.72rem', color: 'var(--text2)', display: 'block', marginBottom: '4px' }}>จาก</label>
              <select
                value={fromMonth}
                onChange={e => setFromMonth(e.target.value)}
                style={selectStyle}
              >
                {MONTHS_BACK.map(m => (
                  <option key={m} value={m}>{monthLabel(m)}</option>
                ))}
              </select>
            </div>
            <div style={{ flex: 1, minWidth: '120px' }}>
              <label style={{ fontSize: '0.72rem', color: 'var(--text2)', display: 'block', marginBottom: '4px' }}>ถึง</label>
              <select
                value={toMonth}
                onChange={e => setToMonth(e.target.value)}
                style={selectStyle}
              >
                {MONTHS_BACK.map(m => (
                  <option key={m} value={m}>{monthLabel(m)}</option>
                ))}
              </select>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={handleCSVPreview}
              disabled={csvLoading}
              style={{ ...ghostBtn, flex: 1 }}
            >
              👁 ดูตัวอย่าง
            </button>
            <ActionButton onClick={handleCSV} loading={csvLoading} color="var(--green)">
              ⬇ ดาวน์โหลด
            </ActionButton>
          </div>
        </ExportCard>

        {/* PDF */}
        <ExportCard
          emoji="🖨️"
          title="PDF"
          description="สรุปรายเดือน — พิมพ์หรือบันทึกเป็น PDF"
          columns="รายรับ, รายจ่าย, budget, savings"
        >
          <ActionButton onClick={handlePDF} color="var(--accent)">
            🖨 พิมพ์ / บันทึก PDF
          </ActionButton>
        </ExportCard>

        {/* JSON */}
        <ExportCard
          emoji="💾"
          title="JSON Backup"
          description="ข้อมูลทั้งหมดจาก Firestore"
          columns="transactions + budgets + goals + assets + liabilities + recurring"
        >
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={handleJSONPreview}
              disabled={jsonLoading}
              style={{ ...ghostBtn, flex: 1 }}
            >
              👁 ดูตัวอย่าง
            </button>
            <ActionButton onClick={handleJSON} loading={jsonLoading} color="var(--purple)">
              ⬇ ดาวน์โหลด
            </ActionButton>
          </div>
        </ExportCard>
      </div>

      {/* Preview modal */}
      {preview && (
        <div
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)',
            display: 'flex', alignItems: 'flex-end', justifyContent: 'center', zIndex: 300,
          }}
          onClick={e => { if (e.target === e.currentTarget) setPreview(null) }}
        >
          <div style={{
            background: 'var(--bg2)', borderRadius: '20px 20px 0 0',
            width: '100%', maxWidth: '600px', maxHeight: '80vh',
            display: 'flex', flexDirection: 'column',
          }}>
            {/* Modal header */}
            <div style={{
              display: 'flex', alignItems: 'center', padding: '16px 20px',
              borderBottom: '1px solid var(--border)', flexShrink: 0,
            }}>
              <span style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text)', flex: 1 }}>
                {preview.kind === 'csv'
                  ? `ตัวอย่าง CSV — ${preview.total} รายการ`
                  : 'ตัวอย่าง JSON Backup'}
              </span>
              <button
                onClick={() => setPreview(null)}
                style={{ background: 'none', border: 'none', color: 'var(--text2)', cursor: 'pointer', fontSize: '1.1rem', padding: '4px' }}
              >✕</button>
            </div>

            {/* Content */}
            <div style={{ overflowY: 'auto', flex: 1, padding: '0' }}>
              {preview.kind === 'csv' && (
                preview.rows.length === 0 ? (
                  <p style={{ padding: '32px', textAlign: 'center', color: 'var(--text2)', fontSize: '0.85rem' }}>
                    ไม่มีรายการในช่วงนี้
                  </p>
                ) : (
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.78rem' }}>
                    <thead>
                      <tr style={{ background: 'var(--bg3)', position: 'sticky', top: 0 }}>
                        {['วันที่', 'ชื่อ', 'หมวด', 'จำนวน', 'โน้ต'].map(h => (
                          <th key={h} style={{ padding: '10px 12px', textAlign: 'left', color: 'var(--text2)', fontWeight: 600, whiteSpace: 'nowrap' }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {preview.rows.map((tx, i) => {
                        const cat = CATEGORIES.find(c => c.id === tx.catId)
                        return (
                          <tr key={tx.id} style={{ borderBottom: '1px solid var(--border)', background: i % 2 === 0 ? 'transparent' : 'var(--bg3)' }}>
                            <td style={{ padding: '8px 12px', color: 'var(--text2)', fontFamily: 'DM Mono, monospace', whiteSpace: 'nowrap' }}>{tx.date}</td>
                            <td style={{ padding: '8px 12px', color: 'var(--text)', maxWidth: '140px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{tx.name}</td>
                            <td style={{ padding: '8px 12px', color: 'var(--text2)', whiteSpace: 'nowrap' }}>{cat?.emoji} {cat?.label}</td>
                            <td style={{ padding: '8px 12px', fontFamily: 'DM Mono, monospace', fontWeight: 600, color: tx.amount > 0 ? 'var(--green)' : 'var(--red)', whiteSpace: 'nowrap' }}>
                              {tx.amount > 0 ? '+' : ''}{tx.amount.toLocaleString('th-TH')}
                            </td>
                            <td style={{ padding: '8px 12px', color: 'var(--text2)', maxWidth: '100px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{tx.note ?? ''}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                )
              )}

              {preview.kind === 'json' && (
                <pre style={{
                  margin: 0, padding: '16px 20px',
                  fontFamily: 'DM Mono, monospace', fontSize: '0.72rem',
                  color: 'var(--text)', lineHeight: 1.6,
                  whiteSpace: 'pre-wrap', wordBreak: 'break-all',
                }}>
                  {preview.text.slice(0, 8000)}{preview.text.length > 8000 ? '\n\n... (ตัดสั้นเพื่อแสดงผล)' : ''}
                </pre>
              )}
            </div>

            {/* Modal footer */}
            <div style={{ padding: '12px 20px', borderTop: '1px solid var(--border)', flexShrink: 0 }}>
              <button
                onClick={() => {
                  if (preview.kind === 'csv') handleCSV()
                  else handleJSON()
                  setPreview(null)
                }}
                style={{
                  width: '100%', padding: '11px', borderRadius: '10px', border: 'none',
                  background: preview.kind === 'csv' ? 'var(--green)' : 'var(--purple)',
                  color: '#fff', fontWeight: 600, fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.9rem', cursor: 'pointer',
                }}
              >
                ⬇ ดาวน์โหลด{preview.kind === 'csv' ? ' CSV' : ' JSON'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Print area */}
      <div id="print-area" style={{ display: 'none' }}>
        <PrintSummary />
      </div>
    </>
  )
}

// ── sub-components ────────────────────────────────────────────────────────────

function ExportCard({
  emoji, title, description, columns, children,
}: {
  emoji: string; title: string; description: string; columns: string; children: React.ReactNode
}) {
  return (
    <div style={{
      background: 'var(--bg2)', borderRadius: '14px', padding: '18px',
      border: '1px solid var(--border)', marginBottom: '14px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
        <span style={{ fontSize: '1.4rem' }}>{emoji}</span>
        <div>
          <p style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text)' }}>{title}</p>
          <p style={{ fontSize: '0.75rem', color: 'var(--text2)' }}>{description}</p>
        </div>
      </div>
      <p style={{ fontSize: '0.68rem', color: 'var(--text2)', fontFamily: 'DM Mono, monospace', marginBottom: '12px', background: 'var(--bg3)', padding: '6px 10px', borderRadius: '6px' }}>
        {columns}
      </p>
      {children}
    </div>
  )
}

function ActionButton({
  onClick, loading, color, children,
}: {
  onClick: () => void; loading?: boolean; color: string; children: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      style={{
        width: '100%', padding: '10px', borderRadius: '10px', border: 'none',
        background: color, color: '#fff', fontWeight: 600,
        fontFamily: 'DM Sans, sans-serif', fontSize: '0.88rem',
        cursor: loading ? 'wait' : 'pointer', opacity: loading ? 0.7 : 1,
      }}
    >
      {loading ? 'กำลังโหลด...' : children}
    </button>
  )
}

function PrintSummary() {
  return (
    <div style={{ fontFamily: 'sans-serif', color: '#111' }}>
      <h1 style={{ fontSize: '1.4rem', marginBottom: '4px' }}>Flow — สรุปรายงาน</h1>
      <p style={{ color: '#666', fontSize: '0.85rem', marginBottom: '24px' }}>
        พิมพ์เมื่อ: {new Date().toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>
      <p style={{ color: '#888', fontSize: '0.82rem' }}>
        ดูรายละเอียดแบบเต็มได้ใน Flow app — หน้า รายงาน
      </p>
    </div>
  )
}

const selectStyle: React.CSSProperties = {
  width: '100%', padding: '8px 10px', borderRadius: '8px',
  border: '1px solid var(--border)', background: 'var(--bg3)',
  color: 'var(--text)', fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem',
  outline: 'none', cursor: 'pointer',
}

const ghostBtn: React.CSSProperties = {
  padding: '10px', borderRadius: '10px', border: '1px solid var(--border)',
  background: 'var(--bg3)', color: 'var(--text2)', fontWeight: 600,
  fontFamily: 'DM Sans, sans-serif', fontSize: '0.88rem', cursor: 'pointer',
}
