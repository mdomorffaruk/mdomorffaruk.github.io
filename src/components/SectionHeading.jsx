export default function SectionHeading({ tag, title, subtitle, center, id, as: Heading = 'h2' }) {
  return (
    <div className={center ? 'text-center mx-auto' : ''}>
      {tag && (
        <p className={`text-uppercase text-primary fw-semibold mb-2 ${center ? '' : ''}`} style={{ fontSize: '0.75rem', letterSpacing: '0.12em' }}>
          {tag}
        </p>
      )}
      <Heading id={id} className={`fw-bold mb-0 ${center ? '' : ''}`} style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
        {title}
      </Heading>
      {subtitle && <p className={`text-secondary mt-2 mb-0 ${center ? 'mx-auto' : ''}`} style={{ maxWidth: '40rem' }}>{subtitle}</p>}
    </div>
  )
}
