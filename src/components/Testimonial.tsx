/* A founder quote — the strongest "a real person relies on this" signal.
   Illustrative persona from the pitch narrative (Sabitra, Nirvana Agency);
   swap for a real design-partner quote before launch. */

function Star() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.5l2.9 5.9 6.5.95-4.7 4.6 1.1 6.45L12 17.9l-5.8 3.05 1.1-6.45L2.6 9.35l6.5-.95L12 2.5Z" />
    </svg>
  )
}

export function Testimonial() {
  return (
    <section className="wrap" style={{ paddingBlock: 48 }}>
      <figure
        className="glass-strong reveal relative"
        data-reveal
        style={{ margin: 0, maxWidth: 900, marginInline: 'auto', padding: 'clamp(36px, 5vw, 60px)', textAlign: 'center', overflow: 'hidden' }}
      >
        {/* soft warm glow inside the glass */}
        <span
          aria-hidden
          style={{
            position: 'absolute',
            top: -120,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 480,
            height: 280,
            background: 'radial-gradient(circle, var(--color-primary-light), transparent 70%)',
            opacity: 0.7,
            pointerEvents: 'none',
          }}
        />

        <span className="inline-flex items-center" style={{ position: 'relative', gap: 4, color: 'var(--color-primary)' }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} />
          ))}
        </span>

        <blockquote
          style={{
            position: 'relative',
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(22px, 3vw, 31px)',
            fontWeight: 500,
            lineHeight: 1.32,
            letterSpacing: '-0.018em',
            color: 'var(--color-ink)',
            margin: '20px auto 0',
            maxWidth: 660,
          }}
        >
          I used to keep five Mailchimp tabs open and stitch reports by hand
          every month-end. Now Khukri, Sherpa Tours and Bose all live on{' '}
          <span className="grad-text">one desk</span> — and the brand kit means
          nothing ever goes out off-brand again.
        </blockquote>

        <figcaption className="flex items-center justify-center" style={{ gap: 13, marginTop: 30 }}>
          <span
            className="grid place-items-center"
            style={{ width: 48, height: 48, borderRadius: 999, background: 'linear-gradient(150deg, #5b53c0, var(--color-indigo))', color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, boxShadow: 'var(--shadow-soft)' }}
          >
            SM
          </span>
          <span style={{ textAlign: 'left' }}>
            <span style={{ display: 'block', fontWeight: 600, fontSize: 15 }}>Sabitra Maharjan</span>
            <span style={{ display: 'block', fontSize: 13.5, color: 'var(--color-muted)' }}>Founder, Nirvana Agency · Kathmandu</span>
          </span>
        </figcaption>
      </figure>
    </section>
  )
}
