export function CTA() {
  return (
    <section className="wrap" style={{ paddingBottom: 96 }}>
      <div
        className="reveal"
        data-reveal
        style={{
          borderRadius: 32,
          padding: 'clamp(48px, 6vw, 84px) 32px',
          textAlign: 'center',
          background:
            'radial-gradient(720px 340px at 50% -10%, #3a322b 0%, transparent 72%), linear-gradient(135deg, #2b2620 0%, #191510 100%)',
          color: '#fff',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-lift)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {/* warm glow rising from the base */}
        <span
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(520px 280px at 50% 118%, rgba(224,138,78,0.5) 0%, transparent 70%)',
          }}
        />
        {/* faint top sheen */}
        <span
          aria-hidden
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)',
          }}
        />

        <div style={{ position: 'relative', maxWidth: 660, marginInline: 'auto' }}>
          <span
            className="inline-flex items-center gap-2"
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--color-primary-glow)',
              background: 'rgba(224,138,78,0.12)',
              border: '1px solid rgba(224,138,78,0.28)',
              padding: '6px 14px',
              borderRadius: 999,
            }}
          >
            Start free today
          </span>

          <h2 style={{ fontSize: 'clamp(32px, 4.8vw, 52px)', color: '#fff', marginTop: 20 }}>
            Bring all your email home.
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.76)', marginTop: 18 }}>
            One warm desk for every brand you send for. No card to start, set up
            in an afternoon, billed in rupees when you’re ready — and we’ll help
            you migrate your first client over.
          </p>

          <div className="flex items-center justify-center flex-wrap" style={{ gap: 12, marginTop: 32 }}>
            <a href="#" className="btn btn-primary" style={{ fontSize: 16, padding: '15px 30px' }}>
              Start free
            </a>
            <a
              href="#features"
              className="btn"
              style={{
                fontSize: 16,
                padding: '15px 28px',
                color: '#fff',
                background: 'rgba(255,255,255,0.06)',
                borderColor: 'rgba(255,255,255,0.22)',
              }}
            >
              Explore features
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
