import { Bell, Menu, MessageSquare, Plus, Search } from '../Icons'

export default function Header({ onMenuToggle, onNavigate }) {
  return (
    <header className="topbar">
      <button type="button" className="menu-toggle" onClick={onMenuToggle} aria-label="Open menu">
        <Menu size={18} />
      </button>

      <label className="search-field">
        <Search size={16} />
        <input type="search" placeholder="Search properties, clients or deals..." />
      </label>

      <div className="topbar-actions">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => onNavigate('properties')}
        >
          <Plus size={16} />
          <span className="btn-label">Add New</span>
        </button>
        <button type="button" className="icon-btn" aria-label="Notifications">
          <Bell size={17} />
          <span className="dot" />
        </button>
        <button
          type="button"
          className="icon-btn"
          aria-label="Messages"
          onClick={() => onNavigate('messages')}
        >
          <MessageSquare size={17} />
        </button>
        <div className="avatar" title="Alex Morgan">
          AM
        </div>
      </div>
    </header>
  )
}
