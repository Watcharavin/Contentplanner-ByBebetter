import { useAuth } from './hooks/useAuth'

function App() {
  const { uid, loading } = useAuth()

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100svh', color: 'var(--text2)' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif' }}>กำลังโหลด...</p>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100svh', color: 'var(--text)' }}>
      <div style={{ textAlign: 'center', fontFamily: 'DM Sans, sans-serif' }}>
        <p style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Flow — Finance Tracker</p>
        <p style={{ fontSize: '0.75rem', color: 'var(--text2)', fontFamily: 'DM Mono, monospace' }}>uid: {uid}</p>
      </div>
    </div>
  )
}

export default App
