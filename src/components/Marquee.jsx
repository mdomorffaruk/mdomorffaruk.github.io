export default function Marquee({ children, speed = 35, className = '' }) {
  return (
    <div className={`marquee ${className}`} style={{ '--marquee-duration': `${speed}s` }}>
      <div className="marquee-track">
        <div className="marquee-content">{children}</div>
        <div className="marquee-content" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}
