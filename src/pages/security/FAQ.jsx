import { Link } from 'react-router-dom'
import { securityFaqs } from '../../data/security'
import SecurityNav from '../../components/SecurityNav'
import SectionHeading from '../../components/SectionHeading'

export default function FAQ() {
  return (
    <>
      <SecurityNav />
      <section className="py-5 bg-body-tertiary border-bottom">
        <div className="container">
          <SectionHeading
            as="h1"
            id="faq-heading"
            tag="FAQ"
            title="Frequently asked questions"
            subtitle="Everything you might want to know before booking a review."
          />
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="accordion" id="securityFaqAccordion">
                {securityFaqs.map((f, i) => (
                  <div className="accordion-item" key={f.question}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${i > 0 ? 'collapsed' : ''}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#sfq-${i}`}
                        aria-expanded={i === 0}
                        aria-controls={`sfq-${i}`}
                      >
                        {f.question}
                      </button>
                    </h2>
                    <div id={`sfq-${i}`} className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`} data-bs-parent="#securityFaqAccordion">
                      <div className="accordion-body text-secondary">{f.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-5">
                <p className="text-secondary mb-3">Still have a question?</p>
                <Link className="btn btn-primary" to="/security/contact">
                  Ask Me Directly
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
