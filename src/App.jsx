import { useEffect, useRef, useState } from 'react'
import { contact, hero, services, stats } from './data/home.json'
import {
  about,
  apps,
  certifications,
  portfolioProjects,
  skillCategories,
  timeline,
  writeups,
} from './data/portfolio.json'

const sections = [
  { id: 'about', label: 'About', index: '01' },
  { id: 'experience', label: 'Experience', index: '02' },
  { id: 'projects', label: 'Work', index: '03' },
  { id: 'security', label: 'Security', index: '04' },
  { id: 'skills', label: 'Skills', index: '05' },
  { id: 'contact', label: 'Contact', index: '06' },
]

const btn = 'inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 font-mono text-sm font-medium transition-colors'
const btnPrimary = `${btn} bg-accent text-accent-ink hover:bg-accent-strong`
const btnGhost = `${btn} border border-line text-ink hover:border-accent hover:text-accent`

const linkMono =
  'font-mono text-xs font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent'

const focus = [
  {
    term: 'Security engineering',
    def: 'Web application security, API security, and secure architecture: testing and hardening the systems I ship.',
  },
  {
    term: 'Backend engineering',
    def: 'APIs, databases, and production infrastructure across Node.js, PHP, and Python.',
  },
  {
    term: 'Automation & tooling',
    def: 'Recon pipelines, vulnerability triage, and CLI tooling that make assessments repeatable.',
  },
  {
    term: 'Full-stack delivery',
    def: 'React frontends and Kotlin Android apps shipped end-to-end, from contract to production.',
  },
]

const featuredTitles = [
  'Southeast Bank Alarm Management',
  'VulnXposer',
  'Recon Automation Toolkit',
  'Smart Helmet',
]

const featured = featuredTitles
  .map((title) => portfolioProjects.find((p) => p.title === title))
  .filter(Boolean)
const otherProjects = portfolioProjects.filter((p) => !featuredTitles.includes(p.title))
const experience = timeline.filter((t) => t.type === 'experience')

const securityTools = skillCategories
  .filter((c) => c.category === 'Tools' || c.category === 'Recon & Automation')
  .flatMap((c) => c.skills)

const securityGroups = [
  {
    title: 'Application security',
    text: 'Testing web apps, APIs, and authentication flows the way an attacker would.',
    items: ['Web application testing', 'API & auth security', 'Business logic flaws', 'OWASP Top 10'],
  },
  {
    title: 'Offensive & recon',
    text: 'Mapping the attack surface, then exploiting and chaining what matters.',
    items: ['Reconnaissance & enumeration', 'Vulnerability discovery', 'Exploitation & chaining', 'Red-team methodology'],
  },
  {
    title: 'Security engineering',
    text: 'Turning findings into repeatable automation and safer architecture.',
    items: ['Recon & triage automation', 'Assessment tooling', 'Hardening & secure defaults', 'Detection & monitoring'],
  },
  {
    title: 'Reverse & malware',
    text: 'Breaking binaries and understanding adversary tradecraft from the inside.',
    items: ['Malware analysis', 'Reverse engineering', 'Kernel & exploit research', 'Defensive countermeasures'],
  },
]

function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          io.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  )
}

function useScrollSpy(ids) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const targets = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (targets.length === 0) return undefined
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
            break
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    targets.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [ids])

  return active
}

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
        /* ignore storage errors */
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
          <path
            d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4m11.4-11.4 1.4-1.4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M20.4 14.4A8.5 8.5 0 0 1 9.6 3.6a8.5 8.5 0 1 0 10.8 10.8Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  )
}

function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-card px-3 py-1 font-mono text-xs text-muted">
      {children}
    </span>
  )
}

function SectionHead({ index, title, intro }) {
  return (
    <Reveal>
      <div className="mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">{index}</p>
        <div className="mt-3 flex items-center gap-4">
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          <div className="h-px flex-1 bg-line" aria-hidden="true" />
        </div>
        {intro && <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">{intro}</p>}
      </div>
    </Reveal>
  )
}

function Header({ active, menuOpen, setMenuOpen }) {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center" aria-label="Mohammad Omor Faruk">
          <img
            src="/profile.gif"
            alt=""
            className="h-8 w-8 rounded-full border border-line object-cover"
          />
        </a>
        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Primary">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-current={active === s.id ? 'true' : undefined}
              className={`rounded-md px-3 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                active === s.id ? 'text-accent' : 'text-muted hover:text-ink'
              }`}
            >
              {s.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href="#contact" className={`${btnPrimary} hidden px-4 py-2 text-xs md:inline-flex`}>
            Hire me
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink transition-colors hover:border-accent hover:text-accent md:hidden"
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
        <nav
          id="mobile-menu"
          className="border-t border-line bg-paper md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-4 sm:px-8">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between border-b border-line py-3.5 font-serif text-lg"
              >
                {s.label}
                <span className="font-mono text-xs text-accent">{s.index}</span>
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

function Hero() {
  const [headline, subline] = hero.title.split('\n')
  const heroStats = [stats[0], stats[1], stats[2], stats[5]]

  return (
    <section className="border-b border-line" aria-label="Introduction">
      <div className="mx-auto max-w-6xl px-5 pt-20 pb-16 sm:px-8 sm:pt-28 sm:pb-24">
        <Reveal>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-ok" aria-hidden="true" />
              {hero.badge}
            </span>
            <span aria-hidden="true">·</span>
            <span>Bogura, Bangladesh · UTC+6</span>
          </p>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-accent">
            Mohammad Omor Faruk · {about.role}
          </p>
        </Reveal>

        <Reveal delay={60}>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            {headline}
            <span className="mt-2 block italic text-accent">{subline}</span>
          </h1>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">{hero.subtitle}</p>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-8 flex flex-wrap gap-2">
            {services.map((s) => (
              <Chip key={s.title}>{s.title}</Chip>
            ))}
          </div>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a href={hero.ctaPrimary.href} className={btnPrimary}>
              {hero.ctaPrimary.label}
            </a>
            <a href={hero.ctaSecondary.href} className={btnGhost}>
              {hero.ctaSecondary.label}
            </a>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <a href={contact.github} target="_blank" rel="noreferrer" className={linkMono}>
                GitHub ↗
              </a>
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className={linkMono}>
                LinkedIn ↗
              </a>
              <a href="/resume.pdf" className={linkMono}>
                Resume ↗
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-4">
            {heroStats.map((s) => (
              <div key={s.label} className="bg-paper px-5 py-5">
                <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">{s.label}</dt>
                <dd className="mt-1 font-serif text-3xl font-semibold">
                  {s.value}
                  {s.suffix}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}

function About() {
  const philosophy = about.philosophy.replace(/^"+|"+$/g, '')
  const visibleCerts = certifications.slice(0, 8)

  return (
    <section id="about" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHead index="01" title="About" />
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-base leading-relaxed">{about.summary}</p>
            <h3 className="mt-10 font-mono text-xs uppercase tracking-[0.25em] text-accent">Focus</h3>
            <ul className="mt-5 space-y-5">
              {focus.map((f) => (
                <li key={f.term} className="flex gap-4">
                  <span className="mt-2 h-px w-6 shrink-0 bg-accent" aria-hidden="true" />
                  <div>
                    <p className="font-serif text-base font-semibold">{f.term}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{f.def}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <aside className="space-y-10 lg:border-l lg:border-line lg:pl-10">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-accent">Approach</h3>
              <blockquote className="mt-4 border-l-2 border-accent pl-4 font-serif text-lg italic leading-relaxed">
                {philosophy}
              </blockquote>
            </div>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                Credentials
              </h3>
              <ul className="mt-4 space-y-3">
                {visibleCerts.map((c) => (
                  <li key={c.name} className="flex items-baseline justify-between gap-4 text-sm">
                    {c.credentialUrl ? (
                      <a
                        href={c.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="transition-colors hover:text-accent"
                      >
                        {c.name} <span className="font-mono text-xs text-accent">↗</span>
                      </a>
                    ) : (
                      <span>{c.name}</span>
                    )}
                    <span className="shrink-0 font-mono text-xs text-muted">{c.issuer}</span>
                  </li>
                ))}
              </ul>
              {certifications.length > visibleCerts.length && (
                <p className="mt-4 font-mono text-xs text-muted">
                  + {certifications.length - visibleCerts.length} more
                </p>
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHead
          index="02"
          title="Experience"
          intro="Three years of security research layered on top of six years building production systems."
        />
        <ol className="relative space-y-12 border-l border-line pl-6 sm:pl-8">
          {experience.map((item, i) => (
            <Reveal key={`${item.title}-${item.year}`} delay={Math.min(i * 60, 180)}>
              <li className="relative">
                <span
                  className="absolute top-1.5 -left-[1.81rem] h-2.5 w-2.5 rounded-full border-2 border-accent bg-paper sm:-left-[2.31rem]"
                  aria-hidden="true"
                />
                <p className="font-mono text-xs font-medium uppercase tracking-wider text-accent">
                  {item.year}
                </p>
                <h3 className="mt-1 font-serif text-xl font-semibold sm:text-2xl">{item.title}</h3>
                <p className="mt-0.5 text-sm text-muted">{item.organization}</p>
                <ul className="mt-4 space-y-2">
                  {item.description.split('\n').map((d) => (
                    <li key={d} className="flex gap-3 text-sm leading-relaxed text-ink/85">
                      <span className="font-mono text-xs leading-6 text-accent" aria-hidden="true">
                        ›
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHead
          index="03"
          title="Work"
          intro="Production systems I've shipped and research tooling I've built: from banking infrastructure to vulnerability assessment platforms."
        />
        <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
          {featured.map((p, i) => (
            <Reveal key={p.title} className="h-full" delay={Math.min(i * 60, 180)}>
              <article className="group flex h-full flex-col bg-card p-6 transition-colors hover:bg-accent-soft/40 sm:p-8">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, '0')} / {String(featured.length).padStart(2, '0')}
                  </p>
                  {p.links?.github && (
                    <a
                      href={p.links.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.title} source`}
                      className="font-mono text-xs text-muted transition-colors hover:text-accent"
                    >
                      ↗
                    </a>
                  )}
                </div>
                <h3 className="mt-4 font-serif text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent">
                  {p.title}
                </h3>
                {p.tech?.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded border border-line bg-paper px-2 py-0.5 font-mono text-[11px] text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
                {p.links?.github && (
                  <p className="mt-5 font-mono text-xs">
                    <a
                      href={p.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
                    >
                      Source →
                    </a>
                  </p>
                )}
              </article>
            </Reveal>
          ))}
        </div>

        {otherProjects.length > 0 && (
          <>
            <h3 className="mt-14 font-mono text-xs uppercase tracking-[0.25em] text-accent">
              Also building
            </h3>
            <ul className="mt-4 border-t border-line">
              {otherProjects.map((p) => (
                <Reveal key={p.title}>
                  <li className="group flex items-center justify-between gap-6 border-b border-line py-5">
                    <div>
                      <p className="font-serif text-lg font-semibold transition-colors group-hover:text-accent">
                        {p.title}
                      </p>
                      <p className="mt-1 text-sm text-muted">{p.description}</p>
                    </div>
                    {p.links?.github && (
                      <a
                        href={p.links.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${p.title} source`}
                        className="shrink-0 font-mono text-xs text-muted transition-colors hover:text-accent"
                      >
                        ↗
                      </a>
                    )}
                  </li>
                </Reveal>
              ))}
            </ul>
          </>
        )}

        {apps.length > 0 && (
          <div className="mt-10 flex flex-wrap items-baseline gap-x-2 gap-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
              Play Store
            </span>
            {apps.map((a, i) => (
              <span key={a.name} className="font-mono text-xs">
                {i > 0 && <span className="text-muted"> · </span>}
                <a
                  href={a.playUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted transition-colors hover:text-accent"
                >
                  {a.name}
                </a>
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function Security() {
  return (
    <section id="security" className="border-b border-line bg-accent-soft/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHead
          index="04"
          title="Security"
          intro="Offensive research and defensive engineering: bug bounty work, vulnerability tooling, and the writeups that came out of it."
        />
        <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
          {securityGroups.map((g, i) => (
            <Reveal key={g.title} className="h-full" delay={Math.min(i * 60, 180)}>
              <div className="h-full bg-card p-6 sm:p-8">
                <h3 className="font-serif text-xl font-semibold">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{g.text}</p>
                <ul className="mt-4 grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
                  {g.items.map((it) => (
                    <li key={it} className="flex gap-2 text-sm leading-relaxed">
                      <span className="font-mono text-xs leading-6 text-accent" aria-hidden="true">
                        ›
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-2">
          <span className="mr-1 font-mono text-xs uppercase tracking-[0.25em] text-accent">
            Tools
          </span>
          {securityTools.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>

        <h3 className="mt-16 font-mono text-xs uppercase tracking-[0.25em] text-accent">
          Research & writing
        </h3>
        <ul className="mt-4 border-t border-line">
          {writeups.map((w) => (
            <Reveal key={w.title}>
              <li>
                <a
                  href={w.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-baseline justify-between gap-6 border-b border-line py-5 transition-colors"
                >
                  <div className="min-w-0">
                    <p className="truncate font-serif text-lg font-semibold transition-colors group-hover:text-accent">
                      {w.title}
                    </p>
                    <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted">
                      {w.category} <span className="text-line">·</span> {w.readingTime}
                    </p>
                  </div>
                  <span
                    className="shrink-0 font-mono text-sm text-muted transition-all group-hover:translate-x-1 group-hover:text-accent"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHead
          index="05"
          title="Skills"
          intro="The stack I work with day-to-day, organized by discipline."
        />
        <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.category} delay={Math.min(i * 40, 160)}>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                  {cat.category}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{cat.skills.join(' · ')}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const channels = [
    { label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { label: 'LinkedIn', value: contact.linkedin, href: contact.linkedin },
    { label: 'GitHub', value: contact.github, href: contact.github },
    { label: 'WhatsApp', value: 'Direct chat', href: contact.whatsapp },
    { label: 'Fiverr', value: contact.fiverr, href: contact.fiverr },
  ]

  const pretty = (url) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

  return (
    <section id="contact" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                06 · Contact
              </p>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Let's build something that holds up in production.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
                I'm open to backend engineering, security assessment, and automation work:
                full-time, contract, or consulting. I usually reply within a day.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={`mailto:${contact.email}`} className={btnPrimary}>
                  Email me
                </a>
                <a href="/resume.pdf" className={btnGhost} download>
                  Resume (.pdf)
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ul className="border-t border-line">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noreferrer"
                    className="group flex items-baseline justify-between gap-4 border-b border-line py-5 transition-colors"
                  >
                    <span className="font-mono text-xs uppercase tracking-wider text-muted transition-colors group-hover:text-accent">
                      {c.label}
                    </span>
                    <span className="truncate font-serif text-base transition-colors group-hover:text-accent">
                      {c.label === 'Email' ? c.value : pretty(c.value)}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif text-lg font-semibold">Mohammad Omor Faruk</p>
          <p className="mt-1 font-mono text-xs text-muted">{about.role}</p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="font-mono text-xs text-muted transition-colors hover:text-accent"
            >
              {s.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs">
          <a href={contact.github} target="_blank" rel="noreferrer" className="text-muted transition-colors hover:text-accent">
            GitHub
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="text-muted transition-colors hover:text-accent">
            LinkedIn
          </a>
          <a href="/resume.pdf" className="text-muted transition-colors hover:text-accent">
            Resume
          </a>
        </div>
        <p className="font-mono text-xs text-muted">© {new Date().getFullYear()} Mohammad Omor Faruk</p>
      </div>
    </footer>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useScrollSpy(sections.map((s) => s.id))

  return (
    <div id="top" className="min-h-screen bg-paper text-ink">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header active={active} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Security />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
