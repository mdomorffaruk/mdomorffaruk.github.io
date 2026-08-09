import { Link } from 'react-router-dom'
import { whyChooseMe, securityCapabilities, securityCredentialGroups, securityConsultant } from '../../data/security'
import SecurityNav from '../../components/SecurityNav'
import SectionHeading from '../../components/SectionHeading'

export default function WhyChooseMe() {
  return (
    <>
      <SecurityNav />
      <section className="py-5 bg-body-tertiary border-bottom">
        <div className="container">
          <SectionHeading
            as="h1"
            id="why-heading"
            tag="Why Choose Me"
            title="Independent testing from an engineer who builds"
            subtitle="Most security testers only know how to break things. I spent 6+ years building production systems first — which is why I find the weaknesses others miss."
          />
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {whyChooseMe.map((w) => (
              <div className="col-md-6" key={w.title}>
                <div className="card h-100 border-0 shadow-sm hover-lift">
                  <div className="card-body p-4">
                    <i className="bi bi-check2-circle text-primary fs-4 mb-2 d-inline-block" aria-hidden="true"></i>
                    <h3 className="h5 fw-bold mb-2">{w.title}</h3>
                    <p className="text-secondary small mb-0">{w.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-body-tertiary">
        <div className="container">
          <div className="section-header mb-5">
            <SectionHeading tag="Coverage" title="What I test" />
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="d-flex flex-wrap gap-2">
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

      <section className="py-5">
        <div className="container">
          <div className="section-header mb-5">
            <SectionHeading tag="Background" title="Education, awards & experience" />
          </div>
          <div className="row g-4">
            {securityCredentialGroups.map((g) => (
              <div className="col-md-6 col-lg-3" key={g.title}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h3 className="h6 fw-bold text-primary mb-3">{g.title}</h3>
                    <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                      {g.items.map((item) => (
                        <li key={item} className="small text-secondary">
                          <i className="bi bi-dot text-primary" aria-hidden="true"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
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
              <h2 className="h3 fw-bold mb-2">About {securityConsultant.name}</h2>
              <p className="text-secondary mb-4">{securityConsultant.bio}</p>
              <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
                {securityConsultant.links.map((l) => (
                  <a key={l.label} className="btn btn-sm btn-outline-secondary" href={l.url} target="_blank" rel="noopener noreferrer">
                    {l.label}
                  </a>
                ))}
              </div>
              <Link className="btn btn-primary btn-lg" to="/security/contact">
                Work With Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
