import { Link } from 'react-router-dom'
import { securityServices, securityCapabilities } from '../../data/security'
import SecurityNav from '../../components/SecurityNav'
import SectionHeading from '../../components/SectionHeading'

export default function Services() {
  return (
    <>
      <SecurityNav />
      <section className="py-5 bg-body-tertiary border-bottom">
        <div className="container">
          <SectionHeading
            as="h1"
            id="services-heading"
            tag="Services"
            title="Security review services"
            subtitle="Fixed-scope, fixed-price engagements tailored to your systems. Every engagement is independent, confidential, and NDA-friendly."
          />
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {securityServices.map((s) => (
              <div className="col-lg-6" key={s.title}>
                <div className="card h-100 border-0 shadow-sm hover-lift">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start gap-3 mb-3">
                      <span className="d-flex align-items-center justify-content-center bg-primary-subtle text-primary rounded-3 flex-shrink-0" style={{ width: 48, height: 48 }}>
                        <i className={`bi ${s.icon} fs-4`} aria-hidden="true"></i>
                      </span>
                      <h3 className="h5 fw-bold mb-0 pt-1">{s.title}</h3>
                    </div>
                    <p className="text-secondary small">{s.description}</p>
                    <ul className="list-unstyled d-flex flex-column gap-2 mb-3">
                      {s.features.map((f) => (
                        <li key={f} className="small">
                          <i className="bi bi-check2-circle text-primary me-2" aria-hidden="true"></i>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="d-flex flex-column flex-sm-row gap-2 small text-secondary border-top pt-3">
                      {s.scope && (
                        <span>
                          <i className="bi bi-bullseye me-1" aria-hidden="true"></i>
                          {s.scope}
                        </span>
                      )}
                      {s.delivery && (
                        <span>
                          <i className="bi bi-clock me-1" aria-hidden="true"></i>
                          {s.delivery}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-5 bg-body-tertiary border-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <SectionHeading tag="What I test" title="Coverage across the attack surface" center />
              <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
                {securityCapabilities.map((c) => (
                  <span key={c} className="badge text-bg-light border px-3 py-2 text-body">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 border-top">
        <div className="container">
          <div className="card border-0 text-bg-primary">
            <div className="card-body p-5 text-center">
              <h2 className="h3 fw-bold mb-2">Not sure which service fits?</h2>
              <p className="mb-4 opacity-75">Tell me about your systems and I'll recommend the right scope.</p>
              <Link className="btn btn-light btn-lg" to="/security/contact">
                Get a Recommendation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
