import { Logo } from './Logo'

const COLS = [
  {
    title: 'Product',
    links: ['Features', 'How it works', 'Pricing', 'For agencies', 'For brands'],
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Help center', 'Deliverability guide', 'Status', 'Privacy'],
  },
]

export function Footer() {
  return (
    <footer style={{ background: 'var(--color-card)', borderTop: '1px solid var(--color-line)' }}>
      <div
        className="wrap grid"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 40, paddingBlock: 56 }}
      >
        <div style={{ minWidth: 220 }}>
          <Logo />
          <p style={{ fontSize: 14.5, color: 'var(--color-muted)', marginTop: 16, maxWidth: 280 }}>
            Email marketing built for Nepal — for the agencies juggling many
            client brands, and for the brands themselves.
          </p>
          <p style={{ fontSize: 13, color: 'var(--color-soft)', marginTop: 16 }}>Made in Kathmandu 🇳🇵</p>
        </div>

        {COLS.map((col) => (
          <div key={col.title}>
            <h4
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-soft)',
              }}
            >
              {col.title}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0', display: 'flex', flexDirection: 'column', gap: 11 }}>
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" style={{ fontSize: 14.5, color: 'var(--color-muted)' }}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ borderTop: '1px solid var(--color-line-soft)' }}>
        <div
          className="wrap flex items-center justify-between flex-wrap"
          style={{ paddingBlock: 22, gap: 12 }}
        >
          <span style={{ fontSize: 13.5, color: 'var(--color-soft)' }}>
            © 2026 SendMyMail. All rights reserved.
          </span>
          <div className="flex items-center" style={{ gap: 22 }}>
            <a href="#" style={{ fontSize: 13.5, color: 'var(--color-soft)' }}>
              Terms
            </a>
            <a href="#" style={{ fontSize: 13.5, color: 'var(--color-soft)' }}>
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
