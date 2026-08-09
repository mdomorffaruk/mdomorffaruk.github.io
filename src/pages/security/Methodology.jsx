import { Link } from 'react-router-dom'
import { securityProcess } from '../../data/security'
import SecurityNav from '../../components/SecurityNav'
import SectionHeading from '../../components/SectionHeading'

export default function Methodology() {
  return (
    <>
      <SecurityNav />
      <section className="py-5 bg-body-tertiary border-bottom">
        <div className="container">
          <SectionHeading
            as="h1"
            id="methodology-heading"
            tag="Methodology"
            title="How a review runs"
            subtitle="A transparent, six-phase process. You know exactly what happens at every step — and nothing starts until you're comfortable."
          />
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="d-flex flex-column gap-4">
                {securityProcess.map((p) => (
                  <div className="card border-0 shadow-sm" key={p.number}>
                    <div className="card-body p-4">
                      <div className="row g-3">
                        <div className="col-md-3">
                          <span className="display-5 fw-bold text-primary-subtle">{p.number}</span>
                          <h3 className="h5 fw-bold mt-1 mb-1">{p.title}</h3>
                          <div className="text-secondary small">
                            <i className="bi bi-calendar3 me-1" aria-hidden="true"></i>
                            {p.time}
                          </div>
                        </div>
                        <div className="col-md-9">
                          <p className="text-secondary small">{p.description}</p>
                          <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                            {p.activities.map((a) => (
                              <li key={a} className="small">
                                <i className="bi bi-check2-circle text-primary me-2" aria-hidden="true"></i>
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 bg-body-tertiary border-top">
        <div className="container">
          <div className="card border-0 text-bg-primary">
            <div className="card-body p-5 text-center">
              <h2 className="h3 fw-bold mb-2">Ready to see the process in action?</h2>
              <p className="mb-4 opacity-75">Every engagement follows this structure — tailored to your scope.</p>
              <Link className="btn btn-light btn-lg" to="/security/contact">
                Start a Review
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
