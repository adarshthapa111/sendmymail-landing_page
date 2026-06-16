import { Frame } from './Frame'

type Row = {
  eyebrow: string
  title: string
  body: string
  bullets: string[]
  img: string
  alt: string
}

const ROWS: Row[] = [
  {
    eyebrow: 'The editor',
    title: 'Build emails that render everywhere',
    body: 'Drag sections onto a paper-card canvas with hover toolbars and live inline editing. Behind the scenes it compiles to real MJML → HTML, so your email stays responsive in Gmail, Outlook and Apple Mail.',
    bullets: ['26 ready-made sections', 'Inline text + image editing', 'Server-compiled, pixel-true output'],
    img: '/assets/editor.webp',
    alt: 'The drag-and-drop MJML editor',
  },
  {
    eyebrow: 'Brand kit',
    title: 'Every client, perfectly on brand',
    body: 'Store each client’s palette, typeface and logo once. Drop any section and it arrives already styled to that brand. Switch the active client and the entire canvas rebrands in a single gesture.',
    bullets: ['Colors, font & logo per client', 'Sections inherit the brand automatically', 'One click to switch brands'],
    img: '/assets/brandkit.webp',
    alt: 'Per-client brand kit settings',
  },
  {
    eyebrow: 'Reports',
    title: 'Proof your clients can read',
    body: 'Turn raw opens and clicks into a clean, per-client report you can send straight to the brand — the polished proof that keeps the retainer renewing month after month.',
    bullets: ['One-click per-client reports', 'Opens, clicks & deliverability', 'Branded, client-ready output'],
    img: '/assets/reports.webp',
    alt: 'Per-client engagement reports',
  },
]

export function Showcase() {
  return (
    <section style={{ paddingBlock: 92 }}>
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 84 }}>
        {ROWS.map((row, i) => {
          const flip = i % 2 === 1
          return (
            <div key={row.title} className="reveal sc-grid" data-reveal data-flip={flip}>
              <div className="sc-text">
                <span className="eyebrow">{row.eyebrow}</span>
                <h2 style={{ fontSize: 'clamp(27px, 3.6vw, 38px)', marginTop: 12 }}>{row.title}</h2>
                <p style={{ fontSize: 16.5, color: 'var(--color-muted)', marginTop: 16 }}>{row.body}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '22px 0 0', display: 'flex', flexDirection: 'column', gap: 11 }}>
                  {row.bullets.map((b) => (
                    <li key={b} style={{ display: 'flex', alignItems: 'center', gap: 11, fontSize: 15.5 }}>
                      <span
                        className="grid place-items-center"
                        style={{ width: 22, height: 22, borderRadius: 999, background: 'var(--color-primary-light)', color: 'var(--color-primary-ink)', flexShrink: 0 }}
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <path d="m5 12 5 5 9-11" />
                        </svg>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sc-img">
                <Frame src={row.img} alt={row.alt} />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
