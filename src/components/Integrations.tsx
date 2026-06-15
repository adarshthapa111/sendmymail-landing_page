import { SectionHeader } from './SectionHeader'

/* V1 integrations (flagged `v1: true` in the product registry), shown as a
   "build once → push anywhere" hub: SendMyMail at the centre, brand nodes
   around it, connected by glowing lines with flowing pulses. */
type Node = { name: string; color: string; fg: string; x: number; y: number }

const NODES: Node[] = [
  { name: 'Mailchimp', color: '#FFE01B', fg: '#241C15', x: 15, y: 20 },
  { name: 'Klaviyo', color: '#1A1A1A', fg: '#fff', x: 9, y: 50 },
  { name: 'HubSpot', color: '#FF7A59', fg: '#fff', x: 15, y: 80 },
  { name: 'OneSignal', color: '#E54B4D', fg: '#fff', x: 85, y: 20 },
  { name: 'Parcel', color: '#5B5BD6', fg: '#fff', x: 91, y: 50 },
  { name: 'Zapier', color: '#FF4F00', fg: '#fff', x: 85, y: 80 },
]

const PAYMENTS = [
  { name: 'eSewa', color: '#60BB46', fg: '#fff', sub: 'Nepal’s #1 digital wallet' },
  { name: 'Khalti', color: '#5C2D91', fg: '#fff', sub: 'Wallet, banks & cards' },
  { name: 'IME Pay', color: '#C8202F', fg: '#fff', sub: 'Mobile wallet & remittance' },
]

function Tile({ n, size = 38 }: { n: Node; size?: number }) {
  return (
    <span
      className="grid place-items-center"
      style={{ width: size, height: size, borderRadius: size * 0.27, background: n.color, color: n.fg, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: size * 0.42, flexShrink: 0, boxShadow: `0 6px 14px -8px ${n.color}` }}
    >
      {n.name[0]}
    </span>
  )
}

export function Integrations() {
  return (
    <section id="integrations" className="wrap" style={{ paddingBlock: 92 }}>
      <SectionHeader
        eyebrow="Connects to your stack"
        title={<>Build once — <span className="grad-text">push it anywhere</span></>}
        sub="Design the email here, then push it fully compiled — with each platform’s merge tags and attributes baked in — to the tools you already use. Or copy the HTML/MJML and POST to any webhook."
      />

      {/* ── Desktop: the hub ── */}
      <div className="hub-stage" aria-hidden>
        {/* warm glow behind the core */}
        <span style={{ position: 'absolute', left: '50%', top: '50%', width: 360, height: 360, transform: 'translate(-50%,-50%)', background: 'radial-gradient(circle, var(--color-primary-light), transparent 68%)', opacity: 0.7, pointerEvents: 'none' }} />

        {/* connecting lines */}
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1 }}>
          <defs>
            <linearGradient id="hubline" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="var(--color-primary)" stopOpacity="0.55" />
              <stop offset="1" stopColor="var(--color-primary)" stopOpacity="0.12" />
            </linearGradient>
          </defs>
          {NODES.map((n) => (
            <g key={n.name}>
              <line x1="50" y1="50" x2={n.x} y2={n.y} stroke="url(#hubline)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
              <line className="hub-flow" x1="50" y1="50" x2={n.x} y2={n.y} stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" opacity="0.85" />
            </g>
          ))}
        </svg>

        {/* pulsing rings + core */}
        <span className="hub-ring" />
        <span className="hub-ring d2" />
        <div className="hub-core">
          <div
            className="grid place-items-center"
            style={{ width: 116, height: 116, borderRadius: '50%', background: 'linear-gradient(160deg, #fff, #fbf6ee)', border: '1px solid var(--color-line)', boxShadow: 'var(--shadow-lift)' }}
          >
            <div className="grid place-items-center" style={{ width: 60, height: 60, borderRadius: 18, background: 'var(--color-primary)', boxShadow: '0 8px 20px -8px var(--color-primary)' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5z" stroke="#fff" strokeWidth="1.8" />
                <path d="m4 7 8 6 8-6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 12, fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600, color: 'var(--color-ink)' }}>One email</div>
        </div>

        {/* nodes */}
        {NODES.map((n) => (
          <div key={n.name} className="hub-node" style={{ left: `${n.x}%`, top: `${n.y}%`, ['--g' as string]: n.color }}>
            <Tile n={n} />
            <span style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--color-ink)' }}>{n.name}</span>
          </div>
        ))}
      </div>

      {/* ── Mobile: clean grid fallback ── */}
      <div className="hub-mobile">
        {NODES.map((n) => (
          <div key={n.name} className="glass" style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '13px 14px' }}>
            <Tile n={n} size={34} />
            <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-ink)' }}>{n.name}</span>
          </div>
        ))}
      </div>

      <p style={{ textAlign: 'center', fontSize: 14, color: 'var(--color-soft)', marginTop: 18 }}>
        …plus webhooks, HTML/MJML export and more rolling out.
      </p>

      {/* Built for Nepal — local payments as premium branded cards */}
      <div style={{ marginTop: 30 }}>
        <div className="reveal" data-reveal style={{ textAlign: 'center', marginBottom: 22 }}>
          <span
            className="inline-flex items-center gap-2"
            style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-primary-ink)', background: 'var(--color-primary-light)', padding: '6px 14px', borderRadius: 999 }}
          >
            🇳🇵 Built for Nepal
          </span>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 600, color: 'var(--color-ink)', marginTop: 14, letterSpacing: '-0.015em' }}>
            Pay the local way — billed in <span className="grad-text">rupees</span>
          </h3>
          <p style={{ fontSize: 15, color: 'var(--color-muted)', marginTop: 10, maxWidth: 520, marginInline: 'auto' }}>
            No USD cards, no currency conversion. Pay with the wallets you
            already use and get PAN-backed VAT invoices for your books.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 }}>
          {PAYMENTS.map((p, i) => (
            <div
              key={p.name}
              className="glass intg-card reveal"
              data-reveal
              style={{ ['--g' as string]: p.color, padding: 22, display: 'flex', alignItems: 'center', gap: 15, transitionDelay: `${i * 70}ms` }}
            >
              <span
                className="grid place-items-center"
                style={{ width: 50, height: 50, borderRadius: 14, background: p.color, color: p.fg, flexShrink: 0, boxShadow: `0 10px 22px -10px ${p.color}` }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={p.fg} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect x="2.5" y="6" width="19" height="13" rx="2.5" />
                  <path d="M2.5 10h19" />
                  <circle cx="17.5" cy="14.5" r="1.4" fill={p.fg} stroke="none" />
                </svg>
              </span>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 600, color: 'var(--color-ink)', letterSpacing: '-0.01em' }}>{p.name}</div>
                <div style={{ fontSize: 13, color: 'var(--color-muted)', marginTop: 2 }}>{p.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
