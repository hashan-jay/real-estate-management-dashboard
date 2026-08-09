import {
  LayoutDashboard,
  Building2,
  ListChecks,
  Handshake,
  BarChart3,
  Megaphone,
  CalendarDays,
  MessageSquare,
  FileText,
} from '../Icons'

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'properties', label: 'Properties', icon: Building2 },
  { id: 'listings', label: 'Listings', icon: ListChecks },
  { id: 'deals', label: 'Deals', icon: Handshake },
  { id: 'reports', label: 'Reports', icon: BarChart3 },
  { id: 'marketing', label: 'Marketing', icon: Megaphone },
  { id: 'calendar', label: 'Calendar', icon: CalendarDays },
  { id: 'messages', label: 'Messages', icon: MessageSquare },
  { id: 'documents', label: 'Documents', icon: FileText },
]

export default function Sidebar({ activePage, onNavigate, open }) {
  return (
    <aside className={`sidebar ${open ? 'open' : ''}`}>
      <div className="brand">
        <div className="brand-mark" aria-hidden="true">
          <Building2 size={20} />
        </div>
        <div className="brand-text">
          <strong>Ceylon Estate Max</strong>
          <span>Property OS · 2026</span>
        </div>
      </div>

      <nav className="nav-list" aria-label="Primary">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            className={`nav-item ${activePage === id ? 'active' : ''}`}
            onClick={() => onNavigate(id)}
          >
            <Icon />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </aside>
  )
}
