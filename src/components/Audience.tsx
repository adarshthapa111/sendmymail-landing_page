import { SectionHeader } from './SectionHeader'

const CARDS = [
  {
    tag: 'For agencies',
    title: 'Run every client from one login',
    body: 'Stop paying for a dozen Mailchimp accounts and stitching reports by hand. One workspace holds every client brand — switch between them in a click, each with its own contacts, branding and proof.',
    points: ['Multi-client dashboard', 'Per-client brand kits & reports', 'One bill, in rupees'],
    accent: 'var(--color-primary)',
    tint: 'var(--color-primary-light)',
    ink: 'var(--color-primary-ink)',
  },
  {
    tag: 'For brands',
    title: 'Market your own brand, simply',
    body: 'The global tools are overkill, priced in dollars and built for marketers who already know MJML. Brand accounts give you the same editor and deliverability with the multi-client machinery hidden away.',
    points: ['A clean single-brand workspace', 'The full editor & brand kit', 'NPR billing, local support'],
    accent: 'var(--color-indigo)',
    tint: 'var(--color-indigo-soft)',
    ink: 'var(--color-indigo)',
  },
]

export function Audience() {
  return (
    <section id="audience" style={{ paddingBlock: 92 }}>
      <div className="wrap">
        <SectionHeader
          eyebrow="Who it’s for"
          title={<>One platform, <span className="grad-text">two front doors</span></>}
          sub="The same product serves the agency juggling ten brands and the single business emailing its own customers — you just walk in through the door that fits."
        />

        <div
          className="grid"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 22, marginTop: 50 }}
        >
          {CARDS.map((c, i) => (
            <div key={c.tag} className="glass lift reveal" data-reveal style={{ padding: 34, transitionDelay: `${i * 80}ms` }}>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: 12.5,
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  color: c.ink,
                  background: c.tint,
                  padding: '6px 13px',
                  borderRadius: 999,
                }}
              >
                {c.tag}
              </span>
              <h3 style={{ fontSize: 24, marginTop: 18 }}>{c.title}</h3>
              <p style={{ fontSize: 16, color: 'var(--color-muted)', marginTop: 12 }}>{c.body}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {c.points.map((p) => (
                  <li key={p} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15 }}>
                    <span style={{ width: 7, height: 7, borderRadius: 999, background: c.accent, flexShrink: 0 }} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
