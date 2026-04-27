import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useTransactions } from '../hooks/useTransactions'
import { addTransaction } from '../lib/firestore'
import { CATEGORIES, getCategoryById } from '../types'

// ── helpers ───────────────────────────────────────────────────────────────────

function todayStr() {
  return new Date().toISOString().split('T')[0]
}

function fmt(n: number) {
  if (n === 0) return '0'
  return n.toLocaleString('th-TH', { minimumFractionDigits: n % 1 !== 0 ? 2 : 0, maximumFractionDigits: 2 })
}

type TxType = 'expense' | 'income' | 'savings'

const TYPE_LABELS: Record<TxType, string> = {
  expense: 'รายจ่าย',
  income: 'รายรับ',
  savings: 'โอนออม',
}

const DEFAULT_CAT: Record<TxType, string> = {
  expense: 'food',
  income: 'income',
  savings: 'savings',
}

const NUM_KEYS = ['7','8','9','4','5','6','1','2','3','.','0','⌫']

const DEFAULT_CHIPS = [50, 100, 200, 500, 1000, 2000]

// ── component ─────────────────────────────────────────────────────────────────

export default function AddTransaction() {
  const navigate = useNavigate()
  const { uid } = useAuth()
  const { transactions } = useTransactions()

  const [type, setType] = useState<TxType>('expense')
  const [amountStr, setAmountStr] = useState('0')
  const [catId, setCatId] = useState('food')
  const [note, setNote] = useState('')
  const [date, setDate] = useState(todayStr())
  const [showNote, setShowNote] = useState(false)
  const [saving, setSaving] = useState(false)

  const amount = parseFloat(amountStr) || 0

  // quick chips: top 6 amounts from history
  const quickChips = useMemo(() => {
    const freq: Record<number, number> = {}
    for (const tx of transactions) {
      const abs = Math.round(Math.abs(tx.amount))
      if (abs > 0) freq[abs] = (freq[abs] || 0) + 1
    }
    const sorted = Object.entries(freq)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([v]) => Number(v))
    return sorted.length >= 3 ? sorted : DEFAULT_CHIPS
  }, [transactions])

  const handleTypeChange = (t: TxType) => {
    setType(t)
    setCatId(DEFAULT_CAT[t])
  }

  const handleKey = (key: string) => {
    if (key === '⌫') {
      setAmountStr(s => (s.length <= 1 ? '0' : s.slice(0, -1)))
      return
    }
    if (key === '.') {
      if (!amountStr.includes('.')) setAmountStr(s => s + '.')
      return
    }
    setAmountStr(s => {
      if (s.includes('.') && s.split('.')[1].length >= 2) return s
      if (s === '0') return key
      return s + key
    })
  }

  const handleChip = (v: number) => {
    setAmountStr(String(v))
  }

  const handleSave = async () => {
    if (!uid || amount <= 0 || saving) return
    setSaving(true)
    try {
      const sign = type === 'income' ? 1 : -1
      const cat = getCategoryById(catId)
      await addTransaction(uid, {
        name: note.trim() || cat.label,
        catId,
        amount: amount * sign,
        date,
        note: note.trim() || undefined,
        source: 'manual',
      })
      navigate('/')
    } catch (e) {
      console.error(e)
      setSaving(false)
    }
  }

  const accentColor = type === 'income' ? 'var(--green)' : type === 'savings' ? 'var(--purple)' : 'var(--accent)'

  return (
    <div style={{ maxWidth: '420px', margin: '0 auto', padding: '16px 16px 80px' }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
        <button
          onClick={() => navigate('/')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text2)', fontSize: '1.2rem', padding: '4px' }}
        >
          ←
        </button>
        <h1 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text)' }}>เพิ่มรายการ</h1>
      </div>

      {/* Type selector */}
      <div style={{ display: 'flex', background: 'var(--bg3)', borderRadius: '10px', padding: '4px', marginBottom: '20px' }}>
        {(Object.keys(TYPE_LABELS) as TxType[]).map(t => (
          <button
            key={t}
            onClick={() => handleTypeChange(t)}
            style={{
              flex: 1,
              padding: '8px',
              borderRadius: '7px',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.85rem',
              fontWeight: 600,
              background: type === t ? 'var(--bg2)' : 'transparent',
              color: type === t ? accentColor : 'var(--text2)',
              boxShadow: type === t ? '0 1px 4px var(--border)' : 'none',
              transition: 'all 0.15s',
            }}
          >
            {TYPE_LABELS[t]}
          </button>
        ))}
      </div>

      {/* Amount display */}
      <div style={{
        textAlign: 'center',
        padding: '16px 0 8px',
        marginBottom: '4px',
      }}>
        <span style={{ fontSize: '0.85rem', color: 'var(--text2)', marginRight: '4px' }}>฿</span>
        <span style={{
          fontFamily: 'DM Mono, monospace',
          fontSize: amount.toString().length > 7 ? '2.2rem' : '3rem',
          fontWeight: 500,
          color: amount === 0 ? 'var(--text2)' : accentColor,
          transition: 'color 0.15s',
        }}>
          {fmt(amount)}
        </span>
        {amountStr.endsWith('.') && (
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '3rem', color: accentColor }}>.</span>
        )}
      </div>

      {/* Quick chips */}
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', padding: '4px 0 12px', scrollbarWidth: 'none' }}>
        {quickChips.map(v => (
          <button
            key={v}
            onClick={() => handleChip(v)}
            style={{
              flexShrink: 0,
              padding: '6px 14px',
              borderRadius: '99px',
              border: '1px solid var(--border)',
              background: amount === v ? accentColor : 'var(--bg3)',
              color: amount === v ? '#fff' : 'var(--text)',
              fontFamily: 'DM Mono, monospace',
              fontSize: '0.82rem',
              cursor: 'pointer',
              transition: 'all 0.15s',
            }}
          >
            {v.toLocaleString('th-TH')}
          </button>
        ))}
      </div>

      {/* NumPad */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '20px' }}>
        {NUM_KEYS.map(k => (
          <button
            key={k}
            onClick={() => handleKey(k)}
            style={{
              padding: '18px 0',
              borderRadius: '10px',
              border: 'none',
              background: k === '⌫' ? 'rgba(232,93,36,0.1)' : 'var(--bg3)',
              color: k === '⌫' ? 'var(--accent)' : 'var(--text)',
              fontSize: k === '⌫' ? '1.2rem' : '1.3rem',
              fontFamily: 'DM Mono, monospace',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'opacity 0.1s',
              WebkitTapHighlightColor: 'transparent',
            }}
            onPointerDown={e => (e.currentTarget.style.opacity = '0.6')}
            onPointerUp={e => (e.currentTarget.style.opacity = '1')}
            onPointerLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            {k}
          </button>
        ))}
      </div>

      {/* Category grid */}
      <p style={{ fontSize: '0.72rem', color: 'var(--text2)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
        หมวดหมู่
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '16px' }}>
        {CATEGORIES.map(cat => {
          const selected = catId === cat.id
          return (
            <button
              key={cat.id}
              onClick={() => setCatId(cat.id)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                padding: '10px 4px',
                borderRadius: '10px',
                border: selected ? `2px solid ${cat.color}` : '2px solid transparent',
                background: selected ? `${cat.color}18` : 'var(--bg3)',
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              <span style={{ fontSize: '1.3rem' }}>{cat.emoji}</span>
              <span style={{
                fontSize: '0.65rem',
                color: selected ? cat.color : 'var(--text2)',
                fontWeight: selected ? 600 : 400,
                fontFamily: 'DM Sans, sans-serif',
              }}>
                {cat.label}
              </span>
            </button>
          )
        })}
      </div>

      {/* Date + Note */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: '0.72rem', color: 'var(--text2)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>วันที่</p>
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '8px',
              border: '1px solid var(--border)',
              background: 'var(--bg3)',
              color: 'var(--text)',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.85rem',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
            <p style={{ fontSize: '0.72rem', color: 'var(--text2)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>โน้ต</p>
            <button
              onClick={() => setShowNote(s => !s)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.72rem', color: 'var(--accent)' }}
            >
              {showNote ? 'ซ่อน' : 'เพิ่ม'}
            </button>
          </div>
          {showNote && (
            <input
              type="text"
              value={note}
              onChange={e => setNote(e.target.value)}
              placeholder="รายละเอียด..."
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                background: 'var(--bg3)',
                color: 'var(--text)',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.85rem',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          )}
        </div>
      </div>

      {/* Save button */}
      <button
        onClick={handleSave}
        disabled={amount <= 0 || saving}
        style={{
          width: '100%',
          padding: '16px',
          borderRadius: '12px',
          border: 'none',
          background: amount <= 0 ? 'var(--bg3)' : accentColor,
          color: amount <= 0 ? 'var(--text2)' : '#fff',
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '1rem',
          fontWeight: 700,
          cursor: amount <= 0 ? 'not-allowed' : 'pointer',
          transition: 'all 0.2s',
          letterSpacing: '0.02em',
        }}
      >
        {saving ? 'กำลังบันทึก...' : `บันทึก ${amount > 0 ? '฿' + fmt(amount) : ''}`}
      </button>

    </div>
  )
}
