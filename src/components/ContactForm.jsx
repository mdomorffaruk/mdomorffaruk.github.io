import { useState, useRef } from 'react'

const generalTypes = [
  { value: 'backend', label: 'Backend Development' },
  { value: 'security', label: 'Security Assessment' },
  { value: 'automation', label: 'Automation & Tooling' },
  { value: 'website', label: 'Website Recovery & Hardening' },
  { value: 'android', label: 'Android Development' },
  { value: 'consulting', label: 'Technical Consulting' },
  { value: 'other', label: 'Other' },
]

const budgets = [
  { value: '', label: 'Select a budget range' },
  { value: '$100 - $500', label: '$100 - $500' },
  { value: '$500 - $1,500', label: '$500 - $1,500' },
  { value: '$1,500 - $5,000', label: '$1,500 - $5,000' },
  { value: '$5,000+', label: '$5,000+' },
  { value: 'Not sure yet', label: 'Not sure yet' },
]

const securityServices = [
  { value: 'web-app', label: 'Web Application Security Review' },
  { value: 'portal', label: 'Client Portal Assessment' },
  { value: 'api', label: 'API Security Assessment' },
  { value: 'attack-surface', label: 'External Attack Surface Review' },
  { value: 'retest', label: 'Security Retesting' },
  { value: 'snapshot', label: 'Security Snapshot' },
  { value: 'other', label: "Not sure — let's discuss" },
]

const inputClass = 'form-control'
const selectClass = 'form-select'

export default function ContactForm({ variant = 'general', subject }) {
  const formRef = useRef(null)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleGeneral = (e) => {
    e.preventDefault()
    const form = formRef.current.elements
    const name = form.name.value.trim()
    const email = form.email.value.trim()
    const type = form.type.value
    const budget = form.budget.value
    const message = form.message.value.trim()

    const typeLabels = Object.fromEntries(generalTypes.map((t) => [t.value, t.label]))
    const subjectLine = encodeURIComponent(subject || `Project Inquiry — ${typeLabels[type] || 'General'}`)
    const body = encodeURIComponent(
      `Hi Mohammad,\n\nName: ${name}\nEmail: ${email}\nProject Type: ${typeLabels[type] || 'Not specified'}\nBudget Range: ${budget || 'Not specified'}\n\nProject Details:\n${message}\n\nLooking forward to hearing from you.`
    )
    window.location.href = `mailto:mdomorffaruk@gmail.com?subject=${subjectLine}&body=${body}`
  }

  const handleSecurity = async (e) => {
    e.preventDefault()
    setSending(true)
    const form = formRef.current.elements
    const data = {
      name: form.name.value,
      email: form.email.value,
      firm: form.firm.value,
      service: form.service.value,
      message: form.message.value,
      _subject: 'New security consultation enquiry',
      _captcha: 'false',
    }
    try {
      await fetch('https://formsubmit.co/ajax/mdomorffaruk@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      setSent(true)
    } catch {
      window.alert('Something went wrong. Please email me directly at mdomorffaruk@gmail.com')
    } finally {
      setSending(false)
    }
  }

  if (sent) {
    return (
      <div className="text-center py-5">
        <div className="mx-auto mb-3 d-flex align-items-center justify-content-center bg-success-subtle rounded-circle" style={{ width: 64, height: 64 }}>
          <i className="bi bi-check-lg fs-2 text-success" aria-hidden="true"></i>
        </div>
        <h3 className="fw-bold mb-2">Message sent</h3>
        <p className="text-secondary mb-0">
          Thank you. I will respond within 24 hours. Need a faster reply?{' '}
          <a href="mailto:mdomorffaruk@gmail.com">mdomorffaruk@gmail.com</a>
        </p>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={variant === 'security' ? handleSecurity : handleGeneral} className="needs-validation" noValidate={false}>
      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="cf-name" className="form-label">
            Name
          </label>
          <input type="text" className={inputClass} id="cf-name" name="name" placeholder="Your name" required autoComplete="name" />
        </div>
        <div className="col-md-6">
          <label htmlFor="cf-email" className="form-label">
            Email
          </label>
          <input type="email" className={inputClass} id="cf-email" name="email" placeholder="you@company.com" required autoComplete="email" />
        </div>
        {variant === 'security' ? (
          <div className="col-12">
            <label htmlFor="cf-firm" className="form-label">
              Organisation
            </label>
            <input type="text" className={inputClass} id="cf-firm" name="firm" placeholder="Your firm name" autoComplete="organization" />
          </div>
        ) : (
          <div className="col-md-6">
            <label htmlFor="cf-type" className="form-label">
              Service needed
            </label>
            <select className={selectClass} id="cf-type" name="type">
              {generalTypes.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>
        )}
        {variant === 'security' ? (
          <div className="col-12">
            <label htmlFor="cf-service" className="form-label">
              Service interested in
            </label>
            <select className={selectClass} id="cf-service" name="service">
              {securityServices.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <div className="col-md-6">
            <label htmlFor="cf-budget" className="form-label">
              Budget range
            </label>
            <select className={selectClass} id="cf-budget" name="budget">
              {budgets.map((b) => (
                <option key={b.value} value={b.value}>
                  {b.label}
                </option>
              ))}
            </select>
          </div>
        )}
        <div className="col-12">
          <label htmlFor="cf-message" className="form-label">
            Message
          </label>
          <textarea
            className={inputClass}
            id="cf-message"
            name="message"
            rows={5}
            required
            placeholder={variant === 'security' ? 'Tell me about your systems, timeline, and any specific concerns...' : 'Tell me about your project, timeline, and goals...'}
          ></textarea>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary btn-lg w-100" disabled={sending}>
            {sending ? 'Sending...' : variant === 'security' ? 'Request My Free Consultation' : 'Send Message'}
          </button>
        </div>
        {variant === 'security' && (
          <p className="col-12 text-secondary text-center small mb-0">Your details are used only to respond to your enquiry — never shared or sold.</p>
        )}
      </div>
    </form>
  )
}
