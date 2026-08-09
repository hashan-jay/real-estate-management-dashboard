import { useState } from 'react'
import Sidebar from './components/layout/Sidebar'
import Header from './components/layout/Header'
import Dashboard from './pages/Dashboard'
import Properties from './pages/Properties'
import Listings from './pages/Listings'
import Deals from './pages/Deals'
import Reports from './pages/Reports'
import Marketing from './pages/Marketing'
import CalendarPage from './pages/Calendar'
import Messages from './pages/Messages'
import Documents from './pages/Documents'

const pages = {
  dashboard: Dashboard,
  properties: Properties,
  listings: Listings,
  deals: Deals,
  reports: Reports,
  marketing: Marketing,
  calendar: CalendarPage,
  messages: Messages,
  documents: Documents,
}

export default function App() {
  const [activePage, setActivePage] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const ActiveView = pages[activePage] ?? Dashboard

  const handleNavigate = (page) => {
    setActivePage(page)
    setSidebarOpen(false)
  }

  return (
    <div className="app-shell">
      <div
        className={`overlay ${sidebarOpen ? 'show' : ''}`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden="true"
      />
      <Sidebar
        activePage={activePage}
        onNavigate={handleNavigate}
        open={sidebarOpen}
      />
      <div className="main-area">
        <Header
          onMenuToggle={() => setSidebarOpen((open) => !open)}
          onNavigate={handleNavigate}
        />
        <main className="content">
          <ActiveView />
        </main>
      </div>
    </div>
  )
}
