import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/destinations', label: 'Destinations' },
  { to: '/packages', label: 'Packages' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkBase = 'nav-link'
  const activeClass = 'nav-link--active'
  const inactiveClass = ''

  return (
    <header className={`header ${scrolled ? 'header--elev' : ''}`}>
      <div className="container">
        <nav className="nav">
          {/* Brand */}
          <div className="brand">
            <Link to="/" className="brand">
              <span className="brand-badge">TA</span>
              <span className="text-lg fw-bold">Travel Agency</span>
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="nav-links">
            {navItems.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) => `${linkBase} ${isActive ? activeClass : inactiveClass}`}
                onClick={() => setOpen(false)}
                end={n.to === '/'}
              >
                {n.label}
              </NavLink>
            ))}
          </div>

          {/* Right actions */}
          <div style={{display:'flex', alignItems:'center', gap:8}}>
            <Link to="/booking" className="btn btn-primary cta">
              Book Now
            </Link>
            <ThemeToggle />
            <button className="menu-btn" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
              {open ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mobile-menu"
          >
            <div className="mobile-menu-inner">
              {navItems.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  className={({ isActive }) => `mobile-link ${isActive ? 'mobile-link--active' : ''}`}
                  onClick={() => setOpen(false)}
                  end={n.to === '/'}
                >
                  {n.label}
                </NavLink>
              ))}
              <Link
                to="/booking"
                onClick={() => setOpen(false)}
                className="btn btn-primary"
              >
                Plan Your Trip
              </Link>
            </div>
          </motion.div>
        )}
    </header>
  )
}
