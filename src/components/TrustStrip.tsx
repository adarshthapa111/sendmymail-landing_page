/* Near-hero logo wall — a static, greyscale real-logo bar (the enterprise
   "works with your stack" pattern). Logos warm to full brand colour on hover.
   The richer interactive treatment lives in the Integrations hub below. */
const LOGOS = [
  { slug: 'mailchimp', name: 'Mailchimp' },
  { slug: 'hubspot', name: 'HubSpot' },
  { slug: 'brevo', name: 'Brevo' },
  { slug: 'shopify', name: 'Shopify' },
  { slug: 'zapier', name: 'Zapier' },
  { slug: 'make', name: 'Make' },
  { slug: 'intercom', name: 'Intercom' },
]

export function TrustStrip() {
  return (
    <section style={{ paddingBlock: 44, overflow: 'hidden' }}>
      <p
        className="text-center reveal"
        data-reveal
        style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-soft)', marginBottom: 30 }}
      >
        Build here · push to 10+ platforms you already use
      </p>

      <div className="wrap logo-wall reveal" data-reveal>
        {LOGOS.map((l) => (
          <span key={l.slug} className="logo-lockup">
            <img src={`/logos/${l.slug}.svg`} alt={l.name} loading="lazy" />
            <span>{l.name}</span>
          </span>
        ))}
      </div>
    </section>
  )
}
