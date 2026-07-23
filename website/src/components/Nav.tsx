import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import './Nav.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function Nav() {
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const onHero = location.pathname === '/'

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={[
        'nav',
        onHero ? 'nav--hero' : '',
        scrolled || !onHero || open ? 'nav--solid' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="nav__inner">
        <NavLink to="/" className="nav__brand">
          Richard Sawyers
        </NavLink>

        <button
          className="nav__menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span aria-hidden="true">{open ? 'Close' : 'Menu'}</span>
        </button>

        <nav id="site-nav" className={`nav__links ${open ? 'is-open' : ''}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `nav__link ${isActive ? 'is-active' : ''}`
              }
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
          <a
            className="nav__link"
            href="https://instagram.com/richardsawyers"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <button
            type="button"
            className="nav__theme"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? 'Blue hour' : 'Daylight'}
          </button>
        </nav>
      </div>
    </header>
  )
}
