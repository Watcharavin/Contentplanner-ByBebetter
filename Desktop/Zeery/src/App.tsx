import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'
import AppShell from './components/layout/AppShell'
import Dashboard from './pages/Dashboard'
import Transactions from './pages/Transactions'
import AddTransaction from './pages/AddTransaction'
import Budget from './pages/Budget'
import Savings from './pages/Savings'
import NetWorth from './pages/NetWorth'
import Recurring from './pages/Recurring'
import Report from './pages/Report'
import Export from './pages/Export'
import SlipOCR from './pages/SlipOCR'

function App() {
  const { loading } = useAuth()

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100svh',
        background: 'var(--bg)',
        color: 'var(--text2)',
        fontFamily: 'DM Sans, sans-serif',
      }}>
        <p>กำลังโหลด...</p>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<Dashboard />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="add" element={<AddTransaction />} />
          <Route path="budget" element={<Budget />} />
          <Route path="savings" element={<Savings />} />
          <Route path="networth" element={<NetWorth />} />
          <Route path="recurring" element={<Recurring />} />
          <Route path="report" element={<Report />} />
          <Route path="export" element={<Export />} />
          <Route path="slip" element={<SlipOCR />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
