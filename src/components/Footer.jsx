import { Link } from 'react-router-dom'
import { contact } from '../data/home'

export default function Footer() {
  return (
    <footer className="bg-body-tertiary border-top py-5">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="d-flex align-items-center gap-2 mb-2">
              <img src="/profile.gif" alt="Md Omar Faruk" width="32" height="32" className="rounded-circle" />
              <span className="fw-semibold">Md Omar Faruk</span>
            </div>
            <p className="text-secondary mb-3">
              Backend engineer &amp; security researcher. I build production systems, find what breaks, and automate the rest.
            </p>
            <div className="d-flex gap-2">
              <a className="btn btn-sm btn-outline-secondary" href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="bi bi-github" aria-hidden="true"></i>
              </a>
              <a className="btn btn-sm btn-outline-secondary" href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="bi bi-linkedin" aria-hidden="true"></i>
              </a>
              <a className="btn btn-sm btn-outline-secondary" href={contact.fiverr} target="_blank" rel="noopener noreferrer" aria-label="Fiverr">
                <i className="bi bi-briefcase" aria-hidden="true"></i>
              </a>
              <a className="btn btn-sm btn-outline-secondary" href={contact.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="bi bi-whatsapp" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="col-6 col-lg-2">
            <h6 className="fw-semibold mb-3">Explore</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
              <li>
                <Link className="footer-link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/security">
                  Security Consulting
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/security/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-3">
            <h6 className="fw-semibold mb-3">Security</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
              <li>
                <Link className="footer-link" to="/security/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/security/methodology">
                  Methodology
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/security/sample-report">
                  Sample Report
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/security/faq">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h6 className="fw-semibold mb-3">Get in touch</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
              <li>
                <a className="footer-link" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </li>
              <li>
                <a className="footer-link" href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <a className="footer-link" href={contact.fiverr} target="_blank" rel="noopener noreferrer">
                  Fiverr
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-4" />
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 text-secondary small">
          <span>&copy; {new Date().getFullYear()} Md Omar Faruk. All rights reserved.</span>
          <span>Built with React &amp; Bootstrap</span>
        </div>
      </div>
    </footer>
  )
}
