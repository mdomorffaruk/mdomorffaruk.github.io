import { Link } from 'react-router-dom'
import {
  securityHero,
  securityStats,
  securityServices,
  securityStakes,
  securityProcess,
  securityDeliverables,
  securityTrustPoints,
  securityConsultant,
} from '../../data/security'
import SecurityNav from '../../components/SecurityNav'
import SectionHeading from '../../components/SectionHeading'

export default function SecurityHome() {
  return (
    <>
      <SecurityNav />
      <section className="py-5 bg-body-tertiary border-bottom">
        <div className="container py-lg-4">
          <div className="row justify-content-center text-center gy-4">
            <div className="col-lg-9">
              <span className="badge bg-success-subtle text-success border border-success-subtle rounded-pill px-3 py-2 mb-3">{securityHero.badge}</span>
              <h1 className="display-5 fw-bold lh-sm mb-3 hero-title">{securityHero.title}</h1>
              <p className="lead text-secondary mb-4" style={{ maxWidth: '42rem', margin: '0 auto' }}>
                {securityHero.subtitle}
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
                {securityHero.ctas.map((cta) => (
                  <Link key={cta.href} className={`btn btn-lg ${cta.href.includes('contact') ? 'btn-primary' : 'btn-outline-primary'}`} to={cta.href}>
                    {cta.label}
                  </Link>
                ))}
              </div>
              <div className="d-flex flex-wrap justify-content-center gap-2">
                {securityHero.highlights.map((h) => (
                  <span key={h} className="badge text-bg-light border text-body px-3 py-2">
                    <i className="bi bi-check-circle text-primary me-1" aria-hidden="true"></i>
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 bg-body-tertiary border-bottom" aria-label="Credentials">
        <div className="container">
          <div className="row text-center g-4">
            {securityStats.map((s) => (
              <div className="col-6 col-lg-3" key={s.label}>
                <div className="fw-bold text-body">{s.value}</div>
                <div className="text-secondary small">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5" id="why-it-matters" aria-labelledby="why-heading">
        <div className="container">
          <div className="section-header mb-5">
            <SectionHeading
              id="why-heading"
              tag="Why it matters"
              title="Small and medium firms are a target"
              subtitle="Without a dedicated security team, weaknesses go unnoticed — until someone finds them for you."
            />
          </div>
          <div className="row g-4">
            {securityStakes.map((s) => (
              <div className="col-md-6 col-lg-3" key={s.title}>
                <div className="card h-100 border-0 shadow-sm hover-lift">
                  <div className="card-body p-4">
                    <h3 className="h6 fw-bold mb-2">{s.title}</h3>
                    <p className="text-secondary small mb-0">{s.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-body-tertiary" id="services" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-header mb-5">
            <SectionHeading
              id="services-heading"
              tag="Services"
              title="How I can help"
              subtitle="Focused, independent security reviews for websites, portals, and APIs."
            />
          </div>
          <div className="row g-4">
            {securityServices.map((s) => (
              <div className="col-md-6 col-lg-4" key={s.title}>
                <div className="card h-100 border-0 shadow-sm hover-lift">
                  <div className="card-body p-4 d-flex flex-column">
                    <div className="d-flex align-items-center justify-content-center bg-primary-subtle text-primary rounded-3 mb-3" style={{ width: 52, height: 52 }}>
                      <i className={`bi ${s.icon} fs-4`} aria-hidden="true"></i>
                    </div>
                    <h3 className="h5 fw-bold mb-2">{s.title}</h3>
                    <p className="text-secondary small flex-grow-1">{s.homeDescription}</p>
                    <div className="text-secondary small mb-2">
                      <i className="bi bi-clock me-1" aria-hidden="true"></i>
                      {s.delivery}
                    </div>
                    <Link className="small text-decoration-none" to="/security/services">
                      Learn more <i className="bi bi-arrow-right ms-1" aria-hidden="true"></i>
                    </Link>
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
              title="A clear process"
              subtitle="From kickoff to sign-off — you always know where things stand."
            />
          </div>
          <div className="row g-4">
            {securityProcess.map((p) => (
              <div className="col-md-6 col-lg-4" key={p.number}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="badge text-bg-primary rounded-pill">{p.number}</span>
                      <h3 className="h6 fw-bold mb-0">{p.title}</h3>
                    </div>
                    <div className="text-secondary small mb-2">
                      <i className="bi bi-calendar3 me-1" aria-hidden="true"></i>
                      {p.time}
                    </div>
                    <p className="text-secondary small mb-0">{p.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link className="btn btn-outline-primary" to="/security/methodology">
              View the full methodology <i className="bi bi-arrow-right ms-1" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-5 bg-body-tertiary" id="deliverables" aria-labelledby="deliverables-heading">
        <div className="container">
          <div className="section-header mb-5">
            <SectionHeading
              id="deliverables-heading"
              tag="Deliverables"
              title="What you receive"
              subtitle="A report built for partners and developers alike."
            />
          </div>
          <div className="row g-4">
            {securityDeliverables.map((d) => (
              <div className="col-md-6 col-lg-4" key={d.title}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h3 className="h6 fw-bold mb-2">{d.title}</h3>
                    <p className="text-secondary small mb-0">{d.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5" id="trust" aria-labelledby="trust-heading">
        <div className="container">
          <div className="section-header mb-5">
            <SectionHeading id="trust-heading" tag="Why work with me" title="Independent and confidential by default" />
          </div>
          <div className="row g-4">
            {securityTrustPoints.map((t) => (
              <div className="col-md-6 col-lg-3" key={t.title}>
                <div className="card h-100 border-0 shadow-sm hover-lift">
                  <div className="card-body p-4 text-center">
                    <i className="bi bi-shield-check text-primary fs-3 mb-2 d-inline-block" aria-hidden="true"></i>
                    <h3 className="h6 fw-bold mb-2">{t.title}</h3>
                    <p className="text-secondary small mb-0">{t.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-body-tertiary" id="about" aria-labelledby="about-heading">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-8">
              <SectionHeading id="about-heading" tag="About" title={securityConsultant.name} subtitle={securityConsultant.role} />
              <p className="text-secondary mt-3">{securityConsultant.bio}</p>
              <p className="text-secondary">{securityConsultant.bio2}</p>
              <div className="d-flex flex-wrap gap-2">
                {securityConsultant.links.map((l) => (
                  <a key={l.label} className="btn btn-sm btn-outline-secondary" href={l.url} target="_blank" rel="noopener noreferrer">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                    {securityConsultant.facts.map((f) => (
                      <li key={f.label}>
                        <div className="text-secondary small">{f.label}</div>
                        <div className="fw-semibold small">{f.value}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 border-top" id="cta">
        <div className="container">
          <div className="card border-0 text-bg-primary">
            <div className="card-body p-5 text-center">
              <h2 className="h3 fw-bold mb-2">Worried about your firm's security?</h2>
              <p className="mb-4 opacity-75">A short, no-obligation conversation is all it takes to get started.</p>
              <Link className="btn btn-light btn-lg" to="/security/contact">
                Schedule a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
