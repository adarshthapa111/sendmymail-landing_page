import { useEffect, useRef, useState } from 'react'
import { SectionHeader } from './SectionHeader'

/* The real product prototype — every screen, navigable — embedded in a
   browser window. It's the actual SendMyMail design prototype (recoloured to
   the warm theme), rendered at a fixed desktop size and scaled to fit. */

const BASE_W = 1280
const BASE_H = 880

export function Gallery() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0.78)
  const [interactive, setInteractive] = useState(false)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const ro = new ResizeObserver(() => setScale(el.clientWidth / BASE_W))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <section className="wrap" style={{ paddingBlock: 92 }}>
      <SectionHeader
        eyebrow="A real, working product"
        title={<>Take it for a <span className="grad-text">test drive</span></>}
        sub="This window is the actual product prototype — every screen, fully clickable. Use the sidebar to roam the dashboard, contacts, campaigns, reports and more."
      />

      <div className="reveal" data-reveal style={{ display: 'flex', justifyContent: 'center', marginTop: 26 }}>
        <span className="glass-strong inline-flex items-center gap-2" style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--color-primary-ink)', padding: '7px 15px', borderRadius: 999 }}>
          <span className="proto-pulse" style={{ width: 8, height: 8, borderRadius: 999, background: 'var(--color-primary)' }} />
          Live prototype — click around inside the window
        </span>
      </div>

      <div className="reveal" data-reveal style={{ maxWidth: 1100, marginInline: 'auto', marginTop: 24 }}>
        <div className="frame">
          <div className="frame__bar">
            <span className="frame__dot" />
            <span className="frame__dot" />
            <span className="frame__dot" />
            <span className="ml-3 hidden sm:flex" style={{ alignItems: 'center', flex: 1, maxWidth: 280, height: 22, padding: '0 10px', borderRadius: 7, background: 'var(--color-card)', border: '1px solid var(--color-line)', fontSize: 11.5, color: 'var(--color-soft)' }}>
              app.sendmymail.com
            </span>
          </div>

          {/* scaled iframe of the real prototype.
              By default the iframe is pointer-events:none so the mouse wheel
              passes through to the page (an iframe would otherwise trap the
              scroll). A click activates it for navigation; moving the cursor
              out releases it so scrolling never gets stuck. */}
          <div
            ref={wrapRef}
            onMouseLeave={() => setInteractive(false)}
            style={{ position: 'relative', width: '100%', height: BASE_H * scale, overflow: 'hidden', background: 'var(--color-bg)' }}
          >
            <iframe
              src="/mockups/agency_dashboard.html"
              title="SendMyMail product prototype"
              loading="lazy"
              scrolling="no"
              style={{
                width: BASE_W,
                height: BASE_H,
                border: 0,
                transform: `scale(${scale})`,
                transformOrigin: 'top left',
                display: 'block',
                pointerEvents: interactive ? 'auto' : 'none',
              }}
            />
            {!interactive && (
              <button
                type="button"
                onClick={() => setInteractive(true)}
                aria-label="Click to interact with the prototype"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  border: 0,
                  background: 'transparent',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  paddingBottom: 18,
                }}
              >
                <span className="glass-strong" style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-primary-ink)', padding: '9px 17px', borderRadius: 999, boxShadow: 'var(--shadow-lift)' }}>
                  Click to explore the app →
                </span>
              </button>
            )}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
          <a
            href="/mockups/agency_dashboard.html"
            target="_blank"
            rel="noopener"
            className="btn btn-ghost"
            style={{ fontSize: 15, padding: '12px 22px' }}
          >
            Open the full prototype
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </a>
        </div>
        <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--color-soft)', marginTop: 12 }}>
          The window above is a scaled-down live preview — open it full-screen for the real thing.
        </p>
      </div>
    </section>
  )
}
