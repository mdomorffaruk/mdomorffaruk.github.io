import { about, timeline, skillCategories, certifications, apps, portfolioProjects, writeups, testimonials } from '../data/portfolio'
import SectionHeading from '../components/SectionHeading'
import Marquee from '../components/Marquee'

const typeLabels = {
  experience: { label: 'Experience', cls: 'text-bg-primary' },
  education: { label: 'Education', cls: 'text-bg-success' },
  award: { label: 'Award', cls: 'text-bg-warning' },
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

export default function Portfolio() {
  return (
    <>
      <section className="py-5 bg-body-tertiary border-bottom">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-8">
              <p className="text-uppercase text-primary fw-semibold mb-2" style={{ fontSize: '0.75rem', letterSpacing: '0.12em' }}>
                Portfolio
              </p>
              <h1 className="display-5 fw-bold mb-3">{about.role}</h1>
              <p className="lead text-secondary mb-3">{about.summary}</p>
              <blockquote className="fst-italic text-secondary mb-4">&ldquo;{about.philosophy}&rdquo;</blockquote>
              <ul className="list-unstyled d-flex flex-wrap gap-2 mb-0">
                {about.highlights.map((h) => (
                  <li key={h} className="badge text-bg-light border px-3 py-2 text-body">
                    <i className="bi bi-check2 text-primary me-1" aria-hidden="true"></i>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-4 text-center">
              <img src="/profile.gif" alt="Md Omar Faruk" className="img-fluid rounded-circle shadow" style={{ maxWidth: 200 }} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" id="timeline" aria-labelledby="timeline-heading">
        <div className="container">
          <div className="section-header mb-5">
            <SectionHeading id="timeline-heading" tag="Timeline" title="Experience & education" />
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="border-start ps-4 ms-2 d-flex flex-column gap-4">
                {timeline.map((t) => (
                  <div key={t.title + (t.year || '')}>
                    <div className="d-flex flex-wrap align-items-center gap-2">
                      <span className={`badge ${typeLabels[t.type].cls}`}>{typeLabels[t.type].label}</span>
                      {t.year && <span className="text-secondary small fw-semibold">{t.year}</span>}
                      <h3 className="h5 fw-bold mb-0">{t.title}</h3>
                    </div>
                    {t.organization && <div className="text-primary small fw-medium">{t.organization}</div>}
                    <p className="text-secondary small mt-2 mb-0" style={{ whiteSpace: 'pre-line' }}>
                      {t.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-body-tertiary" id="skills" aria-labelledby="skills-heading">
        <div className="container">
          <div className="section-header mb-5">
            <SectionHeading
              id="skills-heading"
              tag="Skills"
              title="Skills & expertise"
              subtitle="Backend engineering, web security, recon automation, and reverse engineering."
            />
          </div>
          <div className="row g-4">
            {skillCategories.map((cat) => (
              <div className="col-md-6 col-lg-4" key={cat.category}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h3 className="h6 fw-bold text-primary mb-3">{cat.category}</h3>
                    <div className="d-flex flex-wrap gap-1">
                      {cat.skills.map((s) => (
                        <span key={s} className="badge text-bg-light border small">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-body-secondary border-top border-bottom" id="certifications" aria-labelledby="certifications-heading">
        <div className="container mb-4">
          <SectionHeading
            id="certifications-heading"
            tag="Certifications"
            title="Certifications & courses"
            subtitle="Hover to pause — click any certificate to view the credential."
          />
        </div>
        <Marquee speed={40}>
          {certifications.map((c) => (
            <a key={c.name} className="marquee-chip" href={c.credentialUrl} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-patch-check-fill text-primary" aria-hidden="true"></i>
              {c.name}
              <span className="text-secondary">{c.issuer}</span>
            </a>
          ))}
        </Marquee>
      </section>

      <section className="py-5 bg-body-tertiary" id="apps" aria-labelledby="apps-heading">
        <div className="container">
          <div className="section-header mb-5">
            <SectionHeading
              id="apps-heading"
              tag="Android Apps"
              title="Apps on Google Play"
              subtitle="Kotlin Android applications — published and maintained on the Play Store."
            />
          </div>
          <div className="row g-4">
            {apps.map((a) => (
              <div className="col-6 col-md-4 col-lg-3" key={a.name}>
                <div className="card h-100 border-0 shadow-sm overflow-hidden">
                  <div className="card-img-zoom">
                    <div className="ratio ratio-1x1 bg-body-secondary">
                      <img src={`/${a.preview}`} alt={`${a.name} preview`} className="object-fit-cover" loading="lazy" />
                    </div>
                  </div>
                  <div className="card-body p-3 d-flex flex-column">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <img src={`/${a.icon}`} alt={`${a.name} icon`} width="32" height="32" className="rounded" />
                      <h3 className="h6 fw-bold mb-0">{a.name}</h3>
                    </div>
                    <a className="btn btn-sm btn-outline-secondary mt-auto" href={a.playUrl} target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-play-circle me-1" aria-hidden="true"></i>
                      View on Play Store
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5" id="projects" aria-labelledby="projects-heading">
        <div className="container">
          <div className="section-header mb-5">
            <SectionHeading id="projects-heading" tag="Projects" title="Project highlights" />
          </div>
          <div className="row g-4">
            {portfolioProjects.map((p) => (
              <div className="col-md-6 col-lg-4" key={p.title}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
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

      <section className="py-5 bg-body-tertiary" id="writeups" aria-labelledby="writeups-heading">
        <div className="container">
          <div className="section-header mb-5">
            <SectionHeading id="writeups-heading" tag="Writeups" title="Security research & articles" />
          </div>
          <div className="row g-4">
            {writeups.map((w) => (
              <div className="col-md-6 col-lg-4" key={w.title}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="badge bg-primary-subtle text-primary border border-primary-subtle">{w.category}</span>
                      <span className="text-secondary small">
                        <i className="bi bi-clock me-1" aria-hidden="true"></i>
                        {w.readingTime}
                      </span>
                    </div>
                    <h3 className="h6 fw-bold mb-2">{w.title}</h3>
                    <p className="text-secondary small flex-grow-1">{w.excerpt}</p>
                    <a className="small" href={w.url} target="_blank" rel="noopener noreferrer">
                      Read on Medium <i className="bi bi-arrow-right ms-1" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5" id="testimonials" aria-labelledby="testimonials-heading">
        <div className="container">
          <div className="section-header mb-5">
            <SectionHeading id="testimonials-heading" tag="Testimonials" title="What clients say" />
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
    </>
  )
}
