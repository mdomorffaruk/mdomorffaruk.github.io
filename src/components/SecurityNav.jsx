import { NavLink } from 'react-router-dom'

const links = [
  { to: '/security', label: 'Overview', end: true },
  { to: '/security/services', label: 'Services', end: false },
  { to: '/security/methodology', label: 'Methodology', end: false },
  { to: '/security/sample-report', label: 'Sample Report', end: false },
  { to: '/security/why-choose-me', label: 'Why Choose Me', end: false },
  { to: '/security/faq', label: 'FAQ', end: false },
  { to: '/security/contact', label: 'Contact', end: false },
]

export default function SecurityNav() {
  return (
    <nav className="navbar navbar-expand bg-body-secondary border-bottom" aria-label="Security sections">
      <div className="container">
        <ul className="navbar-nav flex-row flex-wrap gap-1 mx-auto">
          {links.map((link) => (
            <li key={link.to} className="nav-item">
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) => `nav-link rounded px-3 py-1 ${isActive ? 'active bg-primary text-white' : ''}`}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
