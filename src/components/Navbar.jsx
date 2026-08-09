import { NavLink, Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const securityLinks = [
  { to: '/security', label: 'Overview' },
  { to: '/security/services', label: 'Services' },
  { to: '/security/methodology', label: 'Methodology' },
  { to: '/security/sample-report', label: 'Sample Report' },
  { to: '/security/why-choose-me', label: 'Why Choose Me' },
  { to: '/security/faq', label: 'FAQ' },
  { to: '/security/contact', label: 'Contact' },
]

export default function Navbar() {
  const linkClass = ({ isActive }) => `nav-link ${isActive ? 'active' : ''}`

  return (
    <nav className="navbar navbar-expand-lg bg-body sticky-top border-bottom shadow-sm">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2 fw-semibold" to="/">
          <img src="/profile.gif" alt="Md Omar Faruk" width="32" height="32" className="rounded-circle" />
          <span>Md Omar Faruk</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <NavLink className={linkClass} to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={linkClass} to="/portfolio">
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle d-flex align-items-center"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Security
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                {securityLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink className={({ isActive }) => `dropdown-item ${isActive ? 'active' : ''}`} to={link.to} end={link.to === '/security'}>
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className={linkClass} to="/security/contact">
                Contact
              </NavLink>
            </li>
            <ThemeToggle />
            <li className="nav-item ms-lg-2">
              <a className="btn btn-primary btn-sm" href="mailto:mdomorffaruk@gmail.com">
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
