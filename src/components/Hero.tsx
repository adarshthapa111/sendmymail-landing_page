import { useEffect, useRef, useState } from 'react'
import { Frame } from './Frame'

/* A small multiplayer-style cursor + name tag. */
function CursorTag({ label, color, style }: { label: string; color: string; style: React.CSSProperties }) {
  return (
    <span className="cursor-chip" style={{ background: color, ...style }}>
      <svg width="13" height="13" viewBox="0 0 24 24" fill="#fff" aria-hidden style={{ marginLeft: -2 }}>
        <path d="M5 3l15 8-6 1.6L11 19 5 3z" />
      </svg>
      {label}
    </span>
  )
}

export function Hero() {
  // Subtle parallax: the product drifts up a touch slower than the page.
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const y = window.scrollY
        if (y < 800) setOffset(y * 0.05)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section id="top" className="relative hero-grid" style={{ overflow: 'visible' }}>
      <div className="wrap relative" style={{ paddingTop: 64, paddingBottom: 56, textAlign: 'center' }}>
        {/* ── Centered pitch ── */}
        <div style={{ maxWidth: 820, marginInline: 'auto', position: 'relative' }}>
          <span
            className="glass-strong reveal inline-flex items-center gap-2"
            data-reveal
            style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--color-primary-ink)', padding: '7px 15px', borderRadius: 999 }}
          >
            <span style={{ width: 7, height: 7, borderRadius: 999, background: 'var(--color-primary)' }} />
            Email marketing, built for Nepal
          </span>

          <h1 className="reveal" data-reveal style={{ fontSize: 'clamp(44px, 6.6vw, 82px)', marginTop: 22 }}>
            Run every brand’s email
            <br />
            from one{' '}
            <span className="grad-text" style={{ fontStyle: 'italic', position: 'relative', display: 'inline-block' }}>
              warm desk
              {/* collaboration cursor pointing at the accent, like the reference */}
              <CursorTag label="Sabitra" color="var(--color-indigo)" style={{ top: -18, right: -58 }} />
            </span>
            .
          </h1>

          <p
            className="reveal"
            data-reveal
            style={{ fontSize: 18.5, color: 'var(--color-muted)', marginTop: 24, maxWidth: 580, marginInline: 'auto' }}
          >
            A dozen client logins, a dozen bills, a dozen report formats — gone.
            Build the email, brand it per client, prove it worked, all on one
            desk that speaks rupees.
          </p>

          <div className="reveal flex items-center justify-center flex-wrap" data-reveal style={{ gap: 12, marginTop: 30 }}>
            <a href="#waitlist" className="btn btn-primary" style={{ fontSize: 16, padding: '15px 30px' }}>
              Start free — no card
            </a>
            <a href="#how" className="btn btn-ghost" style={{ fontSize: 16, padding: '15px 26px' }}>
              Take the tour
            </a>
          </div>

          <p className="reveal" data-reveal style={{ fontSize: 13, color: 'var(--color-soft)', marginTop: 18 }}>
            Set up in an afternoon · eSewa &amp; Khalti ready
          </p>
        </div>

        {/* ── Centered product ── */}
        <div className="reveal relative" data-reveal ref={ref} style={{ maxWidth: 1000, marginTop: 56, marginInline: 'auto' }}>
          <div style={{ transform: `translateY(${-offset}px)` }}>
            <Frame src="/assets/dashboard.webp" alt="SendMyMail multi-client dashboard" eager />
          </div>

          <span className="float-chip" style={{ top: -16, left: -14, animationDelay: '0s' }}>
            <span style={{ width: 8, height: 8, borderRadius: 999, background: 'var(--color-green)' }} />
            4 clients, one login
          </span>
          <span className="float-chip" style={{ bottom: 24, right: -16, animationDelay: '1.6s' }}>
            <span style={{ width: 8, height: 8, borderRadius: 999, background: 'var(--color-primary)' }} />
            96.4% landed in inbox
          </span>
        </div>
      </div>
    </section>
  )
}
