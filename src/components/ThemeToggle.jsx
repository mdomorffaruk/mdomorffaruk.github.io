import { useTheme } from './ThemeProvider'

const modes = [
  { value: 'light', label: 'Light', icon: 'bi-sun' },
  { value: 'dark', label: 'Dark', icon: 'bi-moon-stars' },
  { value: 'system', label: 'System', icon: 'bi-circle-half' },
]

export default function ThemeToggle() {
  const { mode, setTheme } = useTheme()
  const current = modes.find((m) => m.value === mode)

  return (
    <li className="nav-item dropdown">
      <button
        className="btn btn-sm btn-outline-primary d-flex align-items-center gap-2 ms-2"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        aria-label="Theme"
      >
        <i className={`bi ${current ? current.icon : 'bi-circle-half'}`} aria-hidden="true" />
        <span className="d-none d-lg-inline">{current ? current.label : 'Theme'}</span>
      </button>
      <ul className="dropdown-menu dropdown-menu-end">
        {modes.map((m) => (
          <li key={m.value}>
            <button className={`dropdown-item d-flex align-items-center gap-2 ${mode === m.value ? 'active' : ''}`} type="button" onClick={() => setTheme(m.value)}>
              <i className={`bi ${m.icon}`} aria-hidden="true" />
              {m.label}
            </button>
          </li>
        ))}
      </ul>
    </li>
  )
}
