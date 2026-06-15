/* Near-hero integrations logo-wall — a premium "works with your stack" signal
   under the hero. Two rows drift in opposite directions; cards match the
   Integrations hub's brand-node styling. */
type Logo = { name: string; color: string; fg: string }

const ROW_A: Logo[] = [
  { name: 'Mailchimp', color: '#FFE01B', fg: '#241C15' },
  { name: 'Klaviyo', color: '#1A1A1A', fg: '#ffffff' },
  { name: 'HubSpot', color: '#FF7A59', fg: '#ffffff' },
  { name: 'OneSignal', color: '#E54B4D', fg: '#ffffff' },
  { name: 'Parcel', color: '#5B5BD6', fg: '#ffffff' },
]
const ROW_B: Logo[] = [
  { name: 'Zapier', color: '#FF4F00', fg: '#ffffff' },
  { name: 'Make', color: '#6D00CC', fg: '#ffffff' },
  { name: 'Webhooks', color: '#1FA39B', fg: '#ffffff' },
  { name: 'HTML / MJML', color: '#2B2620', fg: '#ffffff' },
  { name: 'Mailchimp', color: '#FFE01B', fg: '#241C15' },
]

function Card({ name, color, fg }: Logo) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 12,
        padding: '12px 20px 12px 12px',
        marginInline: 8,
        borderRadius: 15,
        background: 'rgba(255,255,255,0.82)',
        border: '1px solid var(--color-line)',
        boxShadow: 'var(--shadow-soft)',
        whiteSpace: 'nowrap',
      }}
    >
      <span
        className="grid place-items-center"
        style={{ width: 34, height: 34, borderRadius: 9, background: color, color: fg, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, flexShrink: 0, boxShadow: `0 6px 14px -8px ${color}` }}
      >
        {name[0]}
      </span>
      <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--color-ink)' }}>{name}</span>
    </span>
  )
}

const fade = {
  position: 'relative' as const,
  maskImage: 'linear-gradient(90deg, transparent, #000 9%, #000 91%, transparent)',
  WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 9%, #000 91%, transparent)',
}

export function TrustStrip() {
  return (
    <section style={{ paddingBlock: 38, overflow: 'hidden' }}>
      <p
        className="text-center reveal"
        data-reveal
        style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-soft)', marginBottom: 26 }}
      >
        Build here · send through the tools you already use
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={fade}>
          <div className="marquee">
            {[...ROW_A, ...ROW_A, ...ROW_A].map((l, i) => (
              <Card key={`a${i}`} {...l} />
            ))}
          </div>
        </div>
        <div style={fade}>
          <div className="marquee reverse">
            {[...ROW_B, ...ROW_B, ...ROW_B].map((l, i) => (
              <Card key={`b${i}`} {...l} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
