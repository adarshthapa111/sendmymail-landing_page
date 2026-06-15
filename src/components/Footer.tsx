import { Logo } from './Logo'

/* All links resolve to real in-page anchors or a mailto — no dead `#`. */
const COLS = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'How it works', href: '#how' },
      { label: 'Integrations', href: '#integrations' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Who it’s for',
    links: [
      { label: 'For agencies', href: '#audience' },
      { label: 'For brands', href: '#audience' },
      { label: 'Take a tour', href: '#how' },
      { label: 'Early access', href: '#waitlist' },
    ],
  },
  {
    title: 'Get in touch',
    links: [
      { label: 'hello@sendmymail.np', href: 'mailto:hello@sendmymail.np' },
      { label: 'Start free', href: '#waitlist' },
      { label: 'Help & FAQ', href: '#faq' },
    ],
  },
]

const SOCIALS = [
  { label: 'X', href: '#', path: 'M4 4l6.5 8.5L4.3 20H6l5.4-6.4L16 20h4l-7-9 6.3-7H17.6l-4.7 5.6L8.7 4z' },
  { label: 'LinkedIn', href: '#', path: 'M4.5 4.5h15v15h-15zM8 10.5v6M8 7.5v.01M12 16.5v-3.2a1.8 1.8 0 0 1 3.6 0v3.2' },
  { label: 'Instagram', href: '#', path: 'M7 3.5h10A3.5 3.5 0 0 1 20.5 7v10a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 17V7A3.5 3.5 0 0 1 7 3.5z M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z M17 6.8v.01' },
]

export function Footer() {
  return (
    <footer style={{ background: 'var(--color-card)', borderTop: '1px solid var(--color-line)' }}>
      <div className="wrap footer-grid" style={{ paddingBlock: 60 }}>
        <div>
          <Logo />
          <p style={{ fontSize: 14.5, color: 'var(--color-muted)', marginTop: 16, maxWidth: 290 }}>
            Email marketing built for Nepal — for the agencies juggling many
            client brands, and for the brands themselves.
          </p>
          <div className="flex items-center" style={{ gap: 9, marginTop: 20 }}>
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} className="foot-soc" aria-label={s.label}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
          <p style={{ fontSize: 13, color: 'var(--color-soft)', marginTop: 20 }}>Made in Kathmandu 🇳🇵</p>
        </div>

        {COLS.map((col) => (
          <div key={col.title}>
            <h4
              style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-soft)' }}
            >
              {col.title}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="foot-link">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ borderTop: '1px solid var(--color-line-soft)' }}>
        <div className="wrap flex items-center justify-between flex-wrap" style={{ paddingBlock: 22, gap: 12 }}>
          <span style={{ fontSize: 13.5, color: 'var(--color-soft)' }}>© 2026 SendMyMail. All rights reserved.</span>
          <div className="flex items-center" style={{ gap: 22 }}>
            <a href="#" className="foot-link" style={{ fontSize: 13.5 }}>Terms</a>
            <a href="#" className="foot-link" style={{ fontSize: 13.5 }}>Privacy</a>
            <span style={{ fontSize: 13.5, color: 'var(--color-soft)', display: 'inline-flex', alignItems: 'center', gap: 7 }}>
              <span style={{ width: 7, height: 7, borderRadius: 999, background: 'var(--color-green)' }} />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
