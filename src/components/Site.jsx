import { useState } from 'react'

const btn = 'inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 font-mono text-sm font-medium transition-colors'
const btnPrimary = `${btn} bg-accent text-accent-ink hover:bg-accent-strong`

const pageLinks = [
  { route: '/', label: 'Home', section: 'top' },
  { route: '/tools', label: 'Tools' },
  { route: '/simpletube-feed', label: 'Products' },
]
const homeSectionLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Work' },
  { id: 'services', label: 'Services' },
  { id: 'security', label: 'Security' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

function ThemeToggle() {
  const [dark, setDark] = useState(
    () => typeof document !== 'undefined' && document.documentElement.classList.contains('dark'),
  )
  const toggle = () => {
    setDark((prev) => {
      const next = !prev
      document.documentElement.classList.toggle('dark', next)
      try {
        localStorage.setItem('site-theme', next ? 'dark' : 'light')
      } catch (err) {
        /* ignore */
      }
      return next
    })
  }
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink transition-colors hover:border-accent hover:text-accent"
    >
      {dark ? (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4m11.4-11.4 1.4-1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ) : (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M20.4 14.4A8.5 8.5 0 0 1 9.6 3.6a8.5 8.5 0 1 0 10.8 10.8Z" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )}
    </button>
  )
}

function NavItem({ href, label, active, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-current={active ? 'location' : undefined}
      className={`rounded-md px-3 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
        active ? 'text-accent' : 'text-muted hover:text-ink'
      }`}
    >
      {label}
    </a>
  )
}

export function SiteHeader({ route, activeSection = '' }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Mohammad Omor Faruk">
          <img src="/profile.gif" alt="" className="h-8 w-8 rounded-full border border-line object-cover" />
          <span className="font-serif text-base font-semibold leading-tight">Mohammad Omor Faruk</span>
        </a>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {homeSectionLinks.map((s) => (
            <NavItem key={s.id} href={`#${s.id}`} label={s.label} active={route === '/' && activeSection === s.id} />
          ))}
          <NavItem href="#/tools" label="Tools" active={route === '/tools'} />
          <NavItem href="#/simpletube-feed" label="Products" active={route === '/simpletube-feed'} />
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href="#contact" className={`${btnPrimary} hidden px-4 py-2 text-xs md:inline-flex`}>
            Hire me
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink transition-colors hover:border-accent hover:text-accent lg:hidden"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              {menuOpen ? (
                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <path d="M2 4.5h12M2 8h12M2 11.5h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" className="border-t border-line bg-paper lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-4 sm:px-8">
            {pageLinks.map((l) => (
              <a
                key={l.label}
                href={l.route === '/' ? '#top' : `#${l.route}`}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between border-b border-line py-3.5 font-serif text-lg"
              >
                {l.label}
              </a>
            ))}
            {homeSectionLinks.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between border-b border-line py-3.5 font-serif text-lg"
              >
                {s.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} className={`${btnPrimary} mt-5`}>
              Hire me
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif text-lg font-semibold">Mohammad Omor Faruk</p>
          <p className="mt-1 font-mono text-xs text-muted">Backend Engineer &amp; Security Researcher</p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer">
          <a href="#/tools" className="font-mono text-xs text-muted transition-colors hover:text-accent">Tools</a>
          <a href="#/simpletube-feed" className="font-mono text-xs text-muted transition-colors hover:text-accent">Products</a>
          <a href="#/simpletube-feed/docs" className="font-mono text-xs text-muted transition-colors hover:text-accent">Docs</a>
        </nav>
        <div className="flex flex-wrap items-center gap-4">
          <a href="https://github.com/mdomorffaruk" target="_blank" rel="noreferrer" className="font-mono text-xs text-muted transition-colors hover:text-accent">GitHub</a>
          <a href="https://linkedin.com/in/mdomorffaruk" target="_blank" rel="noreferrer" className="font-mono text-xs text-muted transition-colors hover:text-accent">LinkedIn</a>
          <a href="/resume.pdf" className="font-mono text-xs text-muted transition-colors hover:text-accent">Resume</a>
        </div>
        <p className="font-mono text-xs text-muted">© {new Date().getFullYear()} Mohammad Omor Faruk</p>
      </div>
    </footer>
  )
}
