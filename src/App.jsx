import { useState } from 'react'
import { contact, hero, services, projects } from './data/home.json'
import { about, timeline, skillCategories, certifications, writeups, apps } from './data/portfolio.json'

const NAME = 'Mohammad Omor Faruk'
const SERVICES_LINE = services.map((s) => s.title).join('  ·  ')

const experience = timeline.filter((t) => t.type === 'experience')
const education = timeline.filter((t) => t.type === 'education')
const awards = timeline.filter((t) => t.type === 'award')

const contactLinks = [
  { label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
  { label: 'WhatsApp', value: 'Chat directly', href: contact.whatsapp },
  { label: 'Fiverr', value: 'mdofrbn7', href: contact.fiverr },
  { label: 'GitHub', value: 'mdomorffaruk', href: contact.github },
  { label: 'LinkedIn', value: 'mdomorffaruk', href: contact.linkedin },
]

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'Writeups', href: '#writeups' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function Chevron() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-3 w-3 transition-transform duration-200 group-open:rotate-180">
      <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-3 w-3">
      <path d="M4 12L12 4M5.5 4H12v6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ThemeToggle() {
  const [dark, setDark] = useState(() => typeof document !== 'undefined' && document.documentElement.classList.contains('dark'))

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem('site-theme', next ? 'dark' : 'light')
    } catch {
      /* storage unavailable */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="rounded-full p-2 text-muted transition-colors hover:bg-accent-soft hover:text-accent"
    >
      {dark ? (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4l1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4m11.4-11.4l1.4-1.4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
          <path
            d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  )
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-2xl scroll-mt-20 px-6 py-14">
      <h2 className="mb-7 font-serif text-2xl font-semibold tracking-tight">{title}</h2>
      {children}
    </section>
  )
}

function ExpandRow({ title, meta, children }) {
  return (
    <details className="group">
      <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4 py-3.5 text-sm transition-colors hover:text-accent">
        <span className="font-medium">{title}</span>
        <span className="flex shrink-0 items-center gap-2.5">
          {meta && <span className="font-mono text-xs text-muted">{meta}</span>}
          <Chevron />
        </span>
      </summary>
      <div className="pb-4 text-sm leading-relaxed text-muted">{children}</div>
    </details>
  )
}

function Chips({ items }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <span key={item} className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-muted">
          {item}
        </span>
      ))}
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-line bg-cream/85 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-2xl items-center justify-between gap-4 px-6">
          <a href="#top" className="font-serif text-[15px] font-semibold tracking-tight">
            {NAME}
          </a>
          <nav className="flex items-center gap-1 text-sm">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hidden px-2 py-1.5 text-muted transition-colors hover:text-ink sm:block">
                {link.label}
              </a>
            ))}
            <span className="hidden sm:block">&nbsp;</span>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main id="top">
        {/* Intro */}
        <section className="mx-auto max-w-2xl px-6 pb-12 pt-16 sm:pt-20">
          <p className="mb-5 flex items-center gap-2 font-mono text-xs text-muted">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
            {hero.badge}
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">{NAME}</h1>
          <p className="mt-4 text-lg leading-relaxed text-ink/85">{hero.subtitle}</p>
          <p className="mt-3 text-sm text-muted">
            Based in Bogura, Bangladesh · 6+ years in engineering · 3+ years in security research
          </p>
          <p className="mt-8 border-l-2 border-accent pl-4 font-mono text-xs leading-relaxed text-muted">{SERVICES_LINE}</p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href={`mailto:${contact.email}`} className="font-medium text-accent hover:underline">
              Email
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:underline">
              GitHub
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:underline">
              LinkedIn
            </a>
            <a href={contact.fiverr} target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:underline">
              Fiverr
            </a>
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:underline">
              WhatsApp
            </a>
          </div>
        </section>

        {/* Work */}
        <Section id="work" title="Work">
          <div className="divide-y divide-line">
            {experience.map((job) => (
              <ExpandRow key={job.title} title={`${job.title} · ${job.organization}`} meta={job.year}>
                {job.description.split('\n').map((line, i) => (
                  <p key={i} className={i > 0 ? 'mt-1' : ''}>
                    {line}
                  </p>
                ))}
              </ExpandRow>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Projects">
          <div className="divide-y divide-line">
            {projects.map((p) => (
              <ExpandRow key={p.title} title={p.title} meta={p.category}>
                <p>{p.description}</p>
                <div className="mt-3">
                  <Chips items={p.tech} />
                </div>
                {p.links.github && (
                  <a
                    href={p.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
                  >
                    Source <ArrowUpRight />
                  </a>
                )}
              </ExpandRow>
            ))}
            <ExpandRow title="Android apps on Google Play" meta={`${apps.length} apps`}>
              <p className="mb-3">Kotlin apps published and maintained on the Play Store.</p>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {apps.map((app) => (
                  <a key={app.name} href={app.playUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-accent hover:underline">
                    {app.name}
                  </a>
                ))}
              </div>
            </ExpandRow>
          </div>
        </Section>

        {/* Writeups */}
        <Section id="writeups" title="Writeups">
          <div className="divide-y divide-line">
            {writeups.map((w) => (
              <a key={w.title} href={w.url} target="_blank" rel="noopener noreferrer" className="group flex items-baseline justify-between gap-4 py-3.5 text-sm">
                <span className="font-medium transition-colors group-hover:text-accent">{w.title}</span>
                <span className="flex shrink-0 items-center gap-2.5">
                  <span className="font-mono text-xs text-muted">{w.category}</span>
                  <span className="font-mono text-xs text-muted">{w.readingTime}</span>
                  <ArrowUpRight />
                </span>
              </a>
            ))}
          </div>
        </Section>

        {/* About */}
        <Section id="about" title="About">
          <p className="text-sm leading-relaxed text-muted">{about.summary}</p>
          <div className="mt-6 divide-y divide-line">
            <ExpandRow title="Education & credentials" meta={`${certifications.length} items`}>
              <ul className="space-y-1.5">
                {education.map((item) => (
                  <li key={item.title}>
                    {item.title}
                    {item.year ? ` · ${item.year}` : ''}
                  </li>
                ))}
              </ul>
              <p className="mb-2 mt-4 font-mono text-xs">Certifications</p>
              <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                {certifications.map((cert) => (
                  <a key={cert.name} href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline">
                    {cert.name}
                  </a>
                ))}
              </div>
            </ExpandRow>
            <ExpandRow title="Skills" meta={`${skillCategories.length} areas`}>
              <div className="space-y-3">
                {skillCategories.map((group) => (
                  <div key={group.category}>
                    <p className="mb-1.5 font-mono text-xs text-ink/70">{group.category}</p>
                    <Chips items={group.skills} />
                  </div>
                ))}
              </div>
            </ExpandRow>
            <ExpandRow title="Awards" meta={`${awards.length} items`}>
              <ul className="space-y-1.5">
                {awards.map((a) => (
                  <li key={a.title}>
                    {a.title}
                    {a.organization ? ` · ${a.organization}` : ''}
                    {a.year ? ` · ${a.year}` : ''}
                  </li>
                ))}
              </ul>
            </ExpandRow>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact">
          <p className="mb-5 text-sm leading-relaxed text-muted">
            Open to backend, automation, security, and Android projects. I usually reply within 24 hours.
          </p>
          <div className="divide-y divide-line">
            {contactLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="group flex items-baseline justify-between gap-4 py-3.5 text-sm">
                <span className="font-medium transition-colors group-hover:text-accent">{link.label}</span>
                <span className="flex shrink-0 items-center gap-2.5 font-mono text-xs text-muted">
                  {link.value}
                  <ArrowUpRight />
                </span>
              </a>
            ))}
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="border-t border-line">
        <div className="mx-auto max-w-2xl px-6 py-10 text-sm text-muted">
          © {new Date().getFullYear()} {NAME}. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
