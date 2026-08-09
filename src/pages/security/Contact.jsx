import { securityContact } from '../../data/security'
import SecurityNav from '../../components/SecurityNav'
import SectionHeading from '../../components/SectionHeading'
import ContactForm from '../../components/ContactForm'

export default function Contact() {
  return (
    <>
      <SecurityNav />
      <section className="py-5 bg-body-tertiary border-bottom">
        <div className="container">
          <SectionHeading
            as="h1"
            id="contact-heading"
            tag="Contact"
            title="Schedule a free consultation"
            subtitle="No commitment. No sales pitch. A short conversation about your systems and security concerns — and what a review would involve."
          />
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4 p-lg-5">
                  <ContactForm variant="security" />
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-4">
                  <h3 className="h6 fw-bold mb-3">What happens next</h3>
                  <ol className="list-unstyled d-flex flex-column gap-3 mb-0">
                    {securityContact.nextSteps.map((step) => (
                      <li key={step.number} className="d-flex align-items-start gap-3">
                        <span className="d-flex align-items-center justify-content-center bg-primary-subtle text-primary rounded-circle fw-bold flex-shrink-0" style={{ width: 28, height: 28 }}>
                          {step.number}
                        </span>
                        <div>
                          <div className="fw-semibold small">{step.title}</div>
                          <div className="text-secondary small">{step.description}</div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="d-flex flex-column gap-3">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h3 className="h6 fw-bold mb-1">Email</h3>
                    <a className="text-primary text-decoration-none" href={`mailto:${securityContact.email}`}>
                      {securityContact.email}
                    </a>
                    <p className="text-secondary small mt-1 mb-0">{securityContact.responseTime}</p>
                  </div>
                </div>
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h3 className="h6 fw-bold mb-1">WhatsApp</h3>
                    <a className="text-primary text-decoration-none" href={securityContact.whatsappUrl} target="_blank" rel="noopener noreferrer">
                      {securityContact.whatsapp} <i className="bi bi-arrow-right ms-1" aria-hidden="true"></i>
                    </a>
                    <p className="text-secondary small mt-1 mb-0">Chat directly on WhatsApp</p>
                  </div>
                </div>
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h3 className="h6 fw-bold mb-1">Calendly</h3>
                    <a className="text-primary text-decoration-none" href={securityContact.calendlyUrl} target="_blank" rel="noopener noreferrer">
                      Book a 15-min call <i className="bi bi-arrow-right ms-1" aria-hidden="true"></i>
                    </a>
                    <p className="text-secondary small mt-1 mb-0">Free consultation, no commitment</p>
                  </div>
                </div>
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h3 className="h6 fw-bold mb-1">LinkedIn</h3>
                    <a className="text-primary text-decoration-none" href={securityContact.linkedinUrl} target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/mdomorffaruk <i className="bi bi-arrow-right ms-1" aria-hidden="true"></i>
                    </a>
                    <p className="text-secondary small mt-1 mb-0">See my professional background</p>
                  </div>
                </div>
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h3 className="h6 fw-bold mb-1">Confidential &amp; independent</h3>
                    <p className="text-secondary small mb-0">
                      All conversations are confidential and NDA-friendly. You&apos;ll work directly with me — no account managers, no hand-offs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
