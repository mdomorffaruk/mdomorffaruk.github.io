import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="py-5 bg-body-tertiary border-bottom min-vh-100 d-flex align-items-center">
      <div className="container text-center py-5">
        <div className="display-1 fw-bold text-primary mb-3">404</div>
        <h1 className="fw-bold mb-3">Page not found</h1>
        <p className="text-secondary mb-4">The page you're looking for doesn't exist or has moved.</p>
        <Link className="btn btn-primary" to="/">
          <i className="bi bi-house me-1" aria-hidden="true"></i>
          Back to Home
        </Link>
      </div>
    </section>
  )
}
