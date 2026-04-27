import { useState } from 'react'
import { useTransactions } from '../hooks/useTransactions'
import { useAuth } from '../hooks/useAuth'
import { deleteTransaction } from '../lib/firestore'
import { getCategoryById, CATEGORIES } from '../types'
import { useNavigate } from 'react-router-dom'

function fmt(n: number) {
  return Math.abs(n).toLocaleString('th-TH', { maximumFractionDigits: 0 })
}

function groupByDate(txs: ReturnType<typeof useTransactions>['transactions']) {
  const map: Record<string, typeof txs> = {}
  for (const tx of txs) {
    if (!map[tx.date]) map[tx.date] = []
    map[tx.date].push(tx)
  }
  return Object.entries(map).sort(([a], [b]) => b.localeCompare(a))
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('th-TH', { weekday: 'short', day: 'numeric', month: 'short' })
}

export default function Transactions() {
  const { uid } = useAuth()
  const { transactions, loading } = useTransactions()
  const navigate = useNavigate()

  const [search, setSearch] = useState('')
  const [filterCat, setFilterCat] = useState('')
  const [filterType, setFilterType] = useState<'all' | 'income' | 'expense'>('all')
  const [deleting, setDeleting] = useState<string | null>(null)

  // Filter
  const filtered = transactions.filter(tx => {
    if (filterType === 'income' && tx.amount <= 0) return false
    if (filterType === 'expense' && tx.amount >= 0) return false
    if (filterCat && tx.catId !== filterCat) return false
    if (search) {
      const q = search.toLowerCase()
      if (!tx.name.toLowerCase().includes(q) && !(tx.note ?? '').toLowerCase().includes(q)) return false
    }
    return true
  })

  const groups = groupByDate(filtered)

  const handleDelete = async (id: string) => {
    if (!uid) return
    setDeleting(id)
    await deleteTransaction(uid, id)
    setDeleting(null)
  }

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
        <div style={{ width: 32, height: 32, border: '3px solid var(--border)', borderTopColor: 'var(--accent)', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '520px', margin: '0 auto', padding: '16px 16px 80px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', gap: '10px' }}>
        <h1 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text)', flex: 1 }}>รายการ</h1>
        <button
          onClick={() => navigate('/add')}
          style={{
            padding: '7px 14px', borderRadius: '8px', border: 'none',
            background: 'var(--accent)', color: '#fff', fontWeight: 600,
            fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem', cursor: 'pointer',
          }}
        >
          + เพิ่ม
        </button>
      </div>

      {/* Search */}
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="ค้นหารายการ..."
        style={{
          width: '100%', padding: '10px 12px', borderRadius: '10px',
          border: '1px solid var(--border)', background: 'var(--bg2)',
          color: 'var(--text)', fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem',
          outline: 'none', boxSizing: 'border-box', marginBottom: '10px',
        }}
      />

      {/* Filter row */}
      <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '4px', marginBottom: '16px' }}>
        {/* Type filter */}
        {([['all', 'ทั้งหมด'], ['income', 'รายรับ'], ['expense', 'รายจ่าย']] as const).map(([v, l]) => (
          <button
            key={v}
            onClick={() => setFilterType(v)}
            style={{
              padding: '5px 12px', borderRadius: '20px', border: 'none', cursor: 'pointer',
              background: filterType === v ? 'var(--accent)' : 'var(--bg2)',
              color: filterType === v ? '#fff' : 'var(--text2)',
              fontSize: '0.78rem', fontFamily: 'DM Sans, sans-serif', fontWeight: 500,
              whiteSpace: 'nowrap', flexShrink: 0,
            }}
          >
            {l}
          </button>
        ))}

        <div style={{ width: '1px', background: 'var(--border)', flexShrink: 0 }} />

        {/* Category filter */}
        <button
          onClick={() => setFilterCat('')}
          style={{
            padding: '5px 10px', borderRadius: '20px', border: 'none', cursor: 'pointer',
            background: filterCat === '' ? 'var(--bg3)' : 'var(--bg2)',
            color: filterCat === '' ? 'var(--text)' : 'var(--text2)',
            fontSize: '0.78rem', fontFamily: 'DM Sans, sans-serif',
            whiteSpace: 'nowrap', flexShrink: 0,
            outline: filterCat === '' ? '1px solid var(--border)' : 'none',
          }}
        >
          ทุกหมวด
        </button>
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => setFilterCat(filterCat === cat.id ? '' : cat.id)}
            style={{
              padding: '5px 10px', borderRadius: '20px', border: 'none', cursor: 'pointer',
              background: filterCat === cat.id ? cat.color + '22' : 'var(--bg2)',
              color: filterCat === cat.id ? cat.color : 'var(--text2)',
              fontSize: '0.78rem', fontFamily: 'DM Sans, sans-serif',
              whiteSpace: 'nowrap', flexShrink: 0,
              outline: filterCat === cat.id ? `1px solid ${cat.color}55` : 'none',
            }}
          >
            {cat.emoji} {cat.label}
          </button>
        ))}
      </div>

      {/* Summary bar */}
      {filtered.length > 0 && (
        <div style={{
          display: 'flex', gap: '10px', marginBottom: '16px',
          background: 'var(--bg2)', borderRadius: '10px', padding: '10px 14px',
          border: '1px solid var(--border)',
        }}>
          {[
            { label: 'รายการ', value: filtered.length.toString(), color: 'var(--text)' },
            {
              label: 'รายรับ',
              value: '฿' + filtered.filter(t => t.amount > 0).reduce((s, t) => s + t.amount, 0).toLocaleString('th-TH', { maximumFractionDigits: 0 }),
              color: 'var(--green)',
            },
            {
              label: 'รายจ่าย',
              value: '฿' + filtered.filter(t => t.amount < 0).reduce((s, t) => s + Math.abs(t.amount), 0).toLocaleString('th-TH', { maximumFractionDigits: 0 }),
              color: 'var(--red)',
            },
          ].map(s => (
            <div key={s.label} style={{ flex: 1, textAlign: 'center' }}>
              <p style={{ fontSize: '0.65rem', color: 'var(--text2)', marginBottom: '2px' }}>{s.label}</p>
              <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.82rem', fontWeight: 600, color: s.color }}>{s.value}</p>
            </div>
          ))}
        </div>
      )}

      {/* Groups */}
      {groups.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '48px 16px', color: 'var(--text2)' }}>
          <p style={{ fontSize: '2rem', marginBottom: '8px' }}>📋</p>
          <p style={{ fontSize: '0.85rem' }}>
            {transactions.length === 0 ? 'ยังไม่มีรายการ' : 'ไม่พบรายการที่ตรงกัน'}
          </p>
          {transactions.length === 0 && (
            <button
              onClick={() => navigate('/add')}
              style={{
                marginTop: '12px', padding: '8px 20px', borderRadius: '8px', border: 'none',
                background: 'var(--accent)', color: '#fff', fontWeight: 600,
                fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', cursor: 'pointer',
              }}
            >
              + เพิ่มรายการแรก
            </button>
          )}
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {groups.map(([date, txList]) => {
            const dayIncome = txList.filter(t => t.amount > 0).reduce((s, t) => s + t.amount, 0)
            const dayExpense = txList.filter(t => t.amount < 0).reduce((s, t) => s + Math.abs(t.amount), 0)
            return (
              <div key={date}>
                {/* Date header */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', gap: '8px' }}>
                  <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text2)' }}>{formatDate(date)}</span>
                  <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
                  {dayIncome > 0 && <span style={{ fontSize: '0.72rem', color: 'var(--green)', fontFamily: 'DM Mono, monospace' }}>+{fmt(dayIncome)}</span>}
                  {dayExpense > 0 && <span style={{ fontSize: '0.72rem', color: 'var(--red)', fontFamily: 'DM Mono, monospace' }}>-{fmt(dayExpense)}</span>}
                </div>

                {/* Transactions */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {txList.map(tx => {
                    const cat = getCategoryById(tx.catId)
                    const isIncome = tx.amount > 0
                    return (
                      <div
                        key={tx.id}
                        style={{
                          background: 'var(--bg2)', borderRadius: '12px', padding: '12px 14px',
                          border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '10px',
                          opacity: deleting === tx.id ? 0.4 : 1, transition: 'opacity 0.2s',
                        }}
                      >
                        <span style={{ fontSize: '1.2rem' }}>{cat.emoji}</span>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <p style={{ fontWeight: 500, fontSize: '0.88rem', color: 'var(--text)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {tx.name}
                          </p>
                          <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginTop: '2px' }}>
                            <span style={{ fontSize: '0.7rem', color: 'var(--text2)' }}>{cat.label}</span>
                            {tx.note && <span style={{ fontSize: '0.7rem', color: 'var(--text2)' }}>· {tx.note}</span>}
                            {tx.source === 'ocr' && <span style={{ fontSize: '0.62rem', color: 'var(--accent)', background: 'rgba(232,93,36,0.1)', padding: '1px 5px', borderRadius: '4px' }}>OCR</span>}
                            {tx.source === 'recurring' && <span style={{ fontSize: '0.62rem', color: 'var(--purple)', background: 'rgba(124,58,237,0.1)', padding: '1px 5px', borderRadius: '4px' }}>ประจำ</span>}
                          </div>
                        </div>
                        <span style={{
                          fontFamily: 'DM Mono, monospace', fontWeight: 700, fontSize: '0.95rem',
                          color: isIncome ? 'var(--green)' : 'var(--red)',
                        }}>
                          {isIncome ? '+' : '-'}฿{fmt(tx.amount)}
                        </span>
                        <button
                          onClick={() => handleDelete(tx.id)}
                          disabled={deleting === tx.id}
                          style={{
                            padding: '4px 7px', borderRadius: '6px', border: '1px solid rgba(220,38,38,0.3)',
                            background: 'rgba(220,38,38,0.06)', color: 'var(--red)', cursor: 'pointer',
                            fontSize: '0.75rem', flexShrink: 0,
                          }}
                        >
                          ลบ
                        </button>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
