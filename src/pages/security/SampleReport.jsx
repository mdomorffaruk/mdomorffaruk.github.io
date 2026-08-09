import { Link } from 'react-router-dom'
import { securitySampleReport, securityReportStructure } from '../../data/security'
import SecurityNav from '../../components/SecurityNav'
import SectionHeading from '../../components/SectionHeading'

const severityBadge = {
  Critical: 'text-bg-danger',
  High: 'text-bg-warning',
  Medium: 'text-bg-secondary',
  Low: 'text-bg-success',
  Info: 'text-bg-primary',
}

function SectionBody({ section }) {
  if (section.paragraphs) {
    return section.paragraphs.map((p, i) => (
      <p key={i} className="text-secondary mb-3">
        {p}
      </p>
    ))
  }
  if (section.counts) {
    return (
      <div className="row g-3">
        {section.counts.map((c) => (
          <div className="col-6 col-md-2" key={c.label}>
            <div className="card border-0 bg-body-secondary text-center">
              <div className="card-body p-3">
                <div className="display-6 fw-bold">{c.count}</div>
                <span className={`badge ${severityBadge[c.label] || 'text-bg-secondary'}`}>{c.label}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
  if (section.findings) {
    return (
      <div className="d-flex flex-column gap-3">
        {section.findings.map((f) => (
          <div className="card border-0 bg-body-secondary" key={f.id}>
            <div className="card-body p-4">
              <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
                <span className={`badge ${severityBadge[f.severity] || 'text-bg-secondary'}`}>{f.severity}</span>
                <span className="badge text-bg-light border">CVSS {f.cvss}</span>
                <span className="text-secondary small fw-semibold">{f.id}</span>
              </div>
              <h3 className="h6 fw-bold mb-2">{f.title}</h3>
              <p className="text-secondary small mb-2">{f.description}</p>
              <p className="small mb-2">
                <span className="fw-semibold">Impact: </span>
                <span className="text-secondary">{f.impact}</span>
              </p>
              <p className="small mb-0">
                <span className="fw-semibold">Remediation: </span>
                <span className="text-secondary">{f.remediation}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    )
  }
  if (section.description) {
    return <p className="text-secondary mb-0">{section.description}</p>
  }
  return null
}

export default function SampleReport() {
  return (
    <>
      <SecurityNav />
      <section className="py-5 bg-body-tertiary border-bottom">
        <div className="container">
          <SectionHeading
            as="h1"
            id="report-heading"
            tag="Sample Report"
            title="What the report looks like"
            subtitle="A structured report you can act on — executive summary, risk matrix, verified findings, and step-by-step fixes."
          />
          <p className="text-secondary small mt-3">
            <i className="bi bi-info-circle me-1" aria-hidden="true"></i>
            {securitySampleReport.disclaimer}
          </p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="d-flex flex-column gap-5">
                {securitySampleReport.sections.map((section) => (
                  <div key={section.title}>
                    <h2 className="h4 fw-bold mb-3">{section.title}</h2>
                    <SectionBody section={section} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-body-tertiary border-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <SectionHeading tag="Structure" title="Every report follows this structure" center />
              <div className="d-flex flex-wrap justify-content-center gap-2 mt-4 mb-4">
                {securityReportStructure.map((item) => (
                  <span key={item} className="badge text-bg-light border px-3 py-2 text-body">
                    {item}
                  </span>
                ))}
              </div>
              <Link className="btn btn-primary btn-lg" to="/security/contact">
                Request a Sample Report
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
