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

export default function Export() {
  const { uid } = useAuth()
  const [fromMonth, setFromMonth] = useState(MONTHS_BACK[1])
  const [toMonth, setToMonth] = useState(MONTHS_BACK[0])
  const [csvLoading, setCsvLoading] = useState(false)
  const [jsonLoading, setJsonLoading] = useState(false)

  const handleCSV = async () => {
    if (!uid) return
    setCsvLoading(true)
    try {
      const from = fromMonth + '-01'
      const to = toMonth + '-31'
      await new Promise<void>(resolve => {
        const unsub = subscribeTransactions(uid, txs => {
          unsub()
          const filtered = txs.filter(tx => tx.date >= from && tx.date <= to)
            .sort((a, b) => a.date.localeCompare(b.date))
          const csv = txToCSV(filtered)
          downloadText(csv, `flow-transactions-${fromMonth}-${toMonth}.csv`)
          resolve()
        })
      })
    } finally {
      setCsvLoading(false)
    }
  }

  const handlePDF = () => {
    window.print()
  }

  const handleJSON = async () => {
    if (!uid) return
    setJsonLoading(true)
    try {
      const [txSnap, budgetSnap, goalSnap, assetSnap, liabSnap, recurSnap] = await Promise.all([
        getDocs(userCol(uid, 'transactions')),
        getDocs(userCol(uid, 'budgets')),
        getDocs(userCol(uid, 'goals')),
        getDocs(userCol(uid, 'assets')),
        getDocs(userCol(uid, 'liabilities')),
        getDocs(userCol(uid, 'recurring')),
      ])

      const dump = {
        exportedAt: new Date().toISOString(),
        transactions: txSnap.docs.map(d => ({ id: d.id, ...d.data() })),
        budgets: budgetSnap.docs.map(d => ({ id: d.id, ...d.data() })),
        goals: goalSnap.docs.map(d => ({ id: d.id, ...d.data() })),
        assets: assetSnap.docs.map(d => ({ id: d.id, ...d.data() })),
        liabilities: liabSnap.docs.map(d => ({ id: d.id, ...d.data() })),
        recurring: recurSnap.docs.map(d => ({ id: d.id, ...d.data() })),
      }

      downloadText(JSON.stringify(dump, null, 2), `flow-backup-${new Date().toISOString().slice(0, 10)}.json`, 'application/json')
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
          <ActionButton onClick={handleCSV} loading={csvLoading} color="var(--green)">
            ⬇ ดาวน์โหลด CSV
          </ActionButton>
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
          <ActionButton onClick={handleJSON} loading={jsonLoading} color="var(--purple)">
            ⬇ ดาวน์โหลด JSON
          </ActionButton>
        </ExportCard>
      </div>

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
