import { FiCode, FiMusic, FiMenu } from 'react-icons/fi'
import { useState } from 'react'

function Header({ activeTab, onNavigate }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="brand">
        <span className="badge">Portfolio</span>
        <h1>Zack Hagan</h1>
      </div>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        <FiMenu size={22} />
      </button>
      <nav className={`nav ${open ? 'nav--open' : ''}`}>
        <button
          className={`nav-pill ${activeTab === 'music' ? 'is-active' : ''}`}
          onClick={() => {
            onNavigate('music')
            setOpen(false)
          }}
        >
          <FiMusic /> Music
        </button>
        <button
          className={`nav-pill ${activeTab === 'dev' ? 'is-active' : ''}`}
          onClick={() => {
            onNavigate('dev')
            setOpen(false)
          }}
        >
          <FiCode /> Developer
        </button>
      </nav>
    </header>
  )
}

export default Header
