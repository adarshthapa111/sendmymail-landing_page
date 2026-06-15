import { useEffect, useState } from 'react'
import { Logo } from './Logo'

const LINKS = [
  { label: 'Home', href: '#top', id: 'top' },
  { label: 'Features', href: '#features', id: 'features' },
  { label: 'How it works', href: '#how', id: 'how' },
  { label: 'Who it’s for', href: '#audience', id: 'audience' },
  { label: 'Pricing', href: '#pricing', id: 'pricing' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('top')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-spy: highlight the link whose section is crossing the upper band.
  useEffect(() => {
    const els = LINKS.map((l) => document.getElementById(l.id)).filter((e): e is HTMLElement => !!e)
    if (!els.length) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
    {/* top fade so content scrolls away cleanly behind the floating pill */}
    <div
      aria-hidden
      style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 20, background: 'linear-gradient(180deg, var(--color-bg) 35%, transparent)', zIndex: 40, pointerEvents: 'none' }}
    />
    <header className="sticky z-50" style={{ top: 0, paddingTop: 14 }}>
      <div className="wrap" style={{ paddingInline: 16 }}>
        <div className="nav-shell" data-scrolled={scrolled}>
          <a href="#top" aria-label="SendMyMail home" onClick={() => setOpen(false)}>
            <Logo />
          </a>

          <nav className="nav-links">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className={`nav-link${active === l.id ? ' active' : ''}`}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center" style={{ gap: 8 }}>
            <a href="#waitlist" className="btn btn-dark" style={{ padding: '10px 20px' }}>
              Start free
            </a>
            <button
              type="button"
              className="nav-burger"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div
            className="nav-panel glass-strong"
            style={{ marginTop: 10, padding: '8px 10px', borderRadius: 18 }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`nav-link${active === l.id ? ' active' : ''}`}
                  style={{ fontSize: 16, padding: '13px 14px', borderRadius: 12 }}
                >
                  {l.label}
                </a>
              ))}
              <a href="#waitlist" className="btn btn-dark" style={{ marginTop: 8, width: '100%' }} onClick={() => setOpen(false)}>
                Start free
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
    </>
  )
}
