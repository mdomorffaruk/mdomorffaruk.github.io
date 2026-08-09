import { useState } from 'react'
import { Link } from 'react-router-dom'
import { hero, stats, services, projectCategories, projects, processSteps, testimonials, faqs, contact } from '../data/home'
import Counter from '../components/Counter'
import SectionHeading from '../components/SectionHeading'
import ContactForm from '../components/ContactForm'
import Marquee from '../components/Marquee'

const marqueeItems = [
  'Node.js',
  'React',
  'Python',
  'PHP',
  'Kotlin',
  'PostgreSQL',
  'MySQL',
  'OWASP Top 10',
  'Burp Suite',
  'Nuclei',
  'Subfinder',
  'GraphQL',
  'REST APIs',
  'Docker',
  'Linux',
  'Bash',
  'CI/CD',
]

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function TestimonialCard({ t }) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body d-flex flex-column">
        <div className="text-warning mb-2" aria-hidden="true">
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
        </div>
        <p className="card-text text-secondary flex-grow-1">&ldquo;{t.text}&rdquo;</p>
        <div className="d-flex align-items-center gap-2">
          <span className="d-flex align-items-center justify-content-center bg-primary-subtle text-primary rounded-circle fw-semibold" style={{ width: 40, height: 40 }}>
            {t.name.charAt(0).toUpperCase()}
          </span>
          <div>
            <div className="fw-semibold small">{t.name}</div>
            <div className="text-secondary small">{t.role}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const [category, setCategory] = useState('All')
  const filtered = category === 'All' ? projects : projects.filter((p) => p.category === category)

  return (
    <>
      <section className="py-5 bg-body-tertiary border-bottom">
        <div className="container py-lg-4">
          <div className="row align-items-center gy-4">
            <div className="col-lg-7">
              <span className="badge bg-success-subtle text-success border border-success-subtle rounded-pill px-3 py-2 mb-3">
                <i className="bi bi-check-circle-fill me-1" aria-hidden="true"></i>
                {hero.badge}
              </span>
              <h1 className="display-4 fw-bold lh-sm mb-3 hero-title">
                Build systems that don&apos;t break.
                <br />
                Find the ones that do.
              </h1>
              <p className="lead text-secondary mb-4" style={{ maxWidth: '38rem' }}>
                {hero.subtitle}
              </p>
              <div className="d-flex flex-wrap gap-2">
                <button type="button" className="btn btn-primary btn-lg" onClick={() => scrollToId('contact')}>
                  {hero.ctaPrimary.label}
                </button>
                <button type="button" className="btn btn-outline-primary btn-lg" onClick={() => scrollToId('projects')}>
                  {hero.ctaSecondary.label}
                </button>
              </div>
              <div className="d-flex flex-wrap gap-3 mt-4 text-secondary small">
                <a className="text-decoration-none" href={contact.github} target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-github me-1" aria-hidden="true"></i>GitHub
                </a>
                <a className="text-decoration-none" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin me-1" aria-hidden="true"></i>LinkedIn
                </a>
                <a className="text-decoration-none" href={contact.fiverr} target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-briefcase me-1" aria-hidden="true"></i>Fiverr
                </a>
              </div>
            </div>
            <div className="col-lg-5 text-center">
              <img src="/profile.gif" alt="Md Omar Faruk" className="img-fluid rounded-circle shadow" style={{ maxWidth: 260 }} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 bg-body-tertiary border-bottom" aria-label="Trust stats">
        <div className="container">
          <div className="row text-center g-4">
            {stats.map((s) => (
              <div className="col-6 col-md-2" key={s.label}>
                <div className="display-6 fw-bold text-primary">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="text-secondary small">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-3 bg-body-secondary border-top border-bottom" aria-label="Technologies">
        <Marquee speed={45}>
          {marqueeItems.map((item) => (
            <span key={item} className="marquee-item">
              <i className="bi bi-dot text-primary fs-5" aria-hidden="true"></i>
              {item}
            </span>
          ))}
        </Marquee>
      </section>

      <section className="py-5" id="services" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-header mb-5">
            <SectionHeading
              id="services-heading"
              tag="Services"
              title="What I can do for you"
              subtitle="Six ways I can help you ship faster, build safer, and automate the busywork."
            />
          </div>
          <div className="row g-4">
            {services.map((s) => (
              <div className="col-md-6 col-lg-4" key={s.title}>
                <div className="card h-100 border-0 shadow-sm hover-lift">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center justify-content-center bg-primary-subtle text-primary rounded-3 mb-3" style={{ width: 52, height: 52 }}>
                      <i className={`bi ${s.icon} fs-4`} aria-hidden="true"></i>
                    </div>
                    <h3 className="h5 fw-bold mb-2">{s.title}</h3>
                    <p className="text-secondary small mb-3">{s.description}</p>
                    <div className="d-flex flex-wrap gap-1 mb-3">
                      {s.features.map((f) => (
                        <span key={f} className="badge text-bg-light border small">
                          {f}
                        </span>
                      ))}
                    </div>
                    <div className="small text-secondary">
                      <i className="bi bi-clock me-1" aria-hidden="true"></i>
                      {s.timeline}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-body-tertiary" id="projects" aria-labelledby="projects-heading">
        <div className="container">
          <div className="section-header mb-5">
            <SectionHeading
              id="projects-heading"
              tag="Projects"
              title="Selected work"
              subtitle="Production systems, security tooling, and automation — built and shipped."
            />
          </div>
          <div className="d-flex flex-wrap gap-2 mb-4">
            {projectCategories.map((c) => (
              <button
                key={c}
                type="button"
                className={`btn btn-sm ${category === c ? 'btn-primary' : 'btn-outline-secondary'}`}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="row g-4">
            {filtered.map((p) => (
              <div className="col-md-6 col-lg-4" key={p.title}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <span className="badge bg-primary-subtle text-primary border border-primary-subtle mb-2">{p.category}</span>
                    <h3 className="h5 fw-bold mb-2">{p.title}</h3>
                    <p className="text-secondary small mb-3">{p.description}</p>
                    <div className="d-flex flex-wrap gap-1 mb-3">
                      {p.tech.map((t) => (
                        <span key={t} className="badge text-bg-light border small">
                          {t}
                        </span>
                      ))}
                    </div>
                    {p.links.github && (
                      <a href={p.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary">
                        <i className="bi bi-github me-1" aria-hidden="true"></i>
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5" id="process" aria-labelledby="process-heading">
        <div className="container">
          <div className="section-header mb-5">
            <SectionHeading
              id="process-heading"
              tag="Process"
              title="How we work together"
              subtitle="A simple, transparent process from first call to final delivery."
            />
          </div>
          <div className="row g-4">
            {processSteps.map((step) => (
              <div className="col-md-6 col-lg-3" key={step.number}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <span className="display-6 fw-bold text-primary-subtle">{step.number}</span>
                    <h3 className="h5 fw-bold mt-2 mb-2">{step.title}</h3>
                    <p className="text-secondary small mb-0">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-body-tertiary" id="testimonials" aria-labelledby="testimonials-heading">
        <div className="container">
          <div className="section-header mb-5">
            <SectionHeading
              id="testimonials-heading"
              tag="Testimonials"
              title="What clients say"
              subtitle="Real reviews from Fiverr clients across the globe."
            />
          </div>
          <div className="row g-4">
            {testimonials.map((t) => (
              <div className="col-md-6 col-lg-4" key={t.name + t.text}>
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5" id="faq" aria-labelledby="faq-heading">
        <div className="container">
          <div className="section-header mb-5">
            <SectionHeading id="faq-heading" tag="FAQ" title="Frequently asked questions" />
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="faqAccordion">
                {faqs.map((f, i) => (
                  <div className="accordion-item" key={f.question}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${i > 0 ? 'collapsed' : ''}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq-${i}`}
                        aria-expanded={i === 0}
                        aria-controls={`faq-${i}`}
                      >
                        {f.question}
                      </button>
                    </h2>
                    <div id={`faq-${i}`} className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`} data-bs-parent="#faqAccordion">
                      <div className="accordion-body text-secondary">{f.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-body-tertiary border-top" id="contact" aria-labelledby="contact-heading">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-5">
              <SectionHeading
                id="contact-heading"
                tag="Contact"
                title="Let's build something"
                subtitle="Tell me about your project and I'll get back to you within 24 hours. Prefer security consulting? Check the dedicated security section."
              />
              <div className="d-flex flex-column gap-3 mt-4">
                <a className="d-flex align-items-center gap-3 text-decoration-none" href={`mailto:${contact.email}`}>
                  <span className="d-flex align-items-center justify-content-center bg-primary-subtle text-primary rounded-3" style={{ width: 44, height: 44 }}>
                    <i className="bi bi-envelope" aria-hidden="true"></i>
                  </span>
                  <span>
                    <span className="d-block text-secondary small">Email</span>
                    <span className="fw-medium">{contact.email}</span>
                  </span>
                </a>
                <a className="d-flex align-items-center gap-3 text-decoration-none" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                  <span className="d-flex align-items-center justify-content-center bg-primary-subtle text-primary rounded-3" style={{ width: 44, height: 44 }}>
                    <i className="bi bi-linkedin" aria-hidden="true"></i>
                  </span>
                  <span>
                    <span className="d-block text-secondary small">LinkedIn</span>
                    <span className="fw-medium">mdomorffaruk</span>
                  </span>
                </a>
                <a className="d-flex align-items-center gap-3 text-decoration-none" href={contact.github} target="_blank" rel="noopener noreferrer">
                  <span className="d-flex align-items-center justify-content-center bg-primary-subtle text-primary rounded-3" style={{ width: 44, height: 44 }}>
                    <i className="bi bi-github" aria-hidden="true"></i>
                  </span>
                  <span>
                    <span className="d-block text-secondary small">GitHub</span>
                    <span className="fw-medium">mdomorffaruk</span>
                  </span>
                </a>
                <a className="d-flex align-items-center gap-3 text-decoration-none" href={contact.fiverr} target="_blank" rel="noopener noreferrer">
                  <span className="d-flex align-items-center justify-content-center bg-primary-subtle text-primary rounded-3" style={{ width: 44, height: 44 }}>
                    <i className="bi bi-briefcase" aria-hidden="true"></i>
                  </span>
                  <span>
                    <span className="d-block text-secondary small">Fiverr</span>
                    <span className="fw-medium">mdofrbn7</span>
                  </span>
                </a>
                <a className="d-flex align-items-center gap-3 text-decoration-none" href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                  <span className="d-flex align-items-center justify-content-center bg-primary-subtle text-primary rounded-3" style={{ width: 44, height: 44 }}>
                    <i className="bi bi-whatsapp" aria-hidden="true"></i>
                  </span>
                  <span>
                    <span className="d-block text-secondary small">WhatsApp</span>
                    <span className="fw-medium">Chat directly</span>
                  </span>
                </a>
                <Link className="d-flex align-items-center gap-3 text-decoration-none" to="/security/contact">
                  <span className="d-flex align-items-center justify-content-center bg-primary-subtle text-primary rounded-3" style={{ width: 44, height: 44 }}>
                    <i className="bi bi-shield-lock" aria-hidden="true"></i>
                  </span>
                  <span>
                    <span className="d-block text-secondary small">Security consulting</span>
                    <span className="fw-medium">Schedule a free consultation</span>
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4 p-lg-5">
                  <ContactForm variant="general" subject="Project Inquiry" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
