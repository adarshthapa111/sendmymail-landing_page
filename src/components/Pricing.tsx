import { SectionHeader } from './SectionHeader'

const TIERS = [
  {
    name: 'Brand',
    who: 'For a single business',
    price: 'रू 1,500',
    per: '/mo',
    points: ['1 brand workspace', 'Full editor & brand kit', 'Forms, tracking & reports', 'NPR billing'],
    cta: 'Start free',
    featured: false,
  },
  {
    name: 'Agency Growth',
    who: 'For agencies, 4–10 clients',
    price: 'रू 12,000',
    per: '/mo',
    points: ['Up to 10 client brands', 'Per-client brand kits & reports', 'Multi-client dashboard', 'Priority local support'],
    cta: 'Start free',
    featured: true,
  },
  {
    name: 'Scale',
    who: 'For 10+ clients',
    price: 'Custom',
    per: '',
    points: ['Unlimited clients', 'White-label options', 'Dedicated onboarding', 'Volume sending'],
    cta: 'Talk to us',
    featured: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="wrap" style={{ paddingBlock: 92 }}>
      <SectionHeader
        eyebrow="Pricing"
        title={<>Priced for Nepal, <span className="grad-text">not New York</span></>}
        sub="A fraction of the stacked USD subscriptions agencies pay today — and billed in rupees. Indicative tiers; final pricing at launch."
      />

      <div
        className="grid"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 22, marginTop: 48, alignItems: 'start' }}
      >
        {TIERS.map((t, i) => (
          <div
            key={t.name}
            className={`${t.featured ? 'glass-strong' : 'glass'} lift reveal`}
            data-reveal
            style={{
              padding: 32,
              position: 'relative',
              transitionDelay: `${i * 80}ms`,
              border: t.featured ? '1.5px solid var(--color-primary)' : undefined,
              boxShadow: t.featured
                ? 'inset 0 1px 0 rgba(255,255,255,0.9), var(--shadow-glow)'
                : undefined,
            }}
          >
            {t.featured && (
              <span
                style={{
                  position: 'absolute',
                  top: -12,
                  left: 30,
                  fontSize: 11.5,
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#fff',
                  background: 'linear-gradient(180deg, var(--color-primary-glow), var(--color-primary))',
                  padding: '5px 12px',
                  borderRadius: 999,
                  boxShadow: 'var(--shadow-glow)',
                }}
              >
                Most popular
              </span>
            )}
            <h3 style={{ fontSize: 20 }}>{t.name}</h3>
            <p style={{ fontSize: 14, color: 'var(--color-soft)', marginTop: 4 }}>{t.who}</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 18 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 600, color: 'var(--color-ink)' }}>
                {t.price}
              </span>
              <span style={{ fontSize: 15, color: 'var(--color-muted)' }}>{t.per}</span>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '22px 0 26px', display: 'flex', flexDirection: 'column', gap: 11 }}>
              {t.points.map((p) => (
                <li key={p} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15, color: 'var(--color-muted)' }}>
                  <span
                    className="grid place-items-center"
                    style={{ width: 20, height: 20, borderRadius: 999, background: 'var(--color-primary-light)', color: 'var(--color-primary-ink)', flexShrink: 0 }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="m5 12 5 5 9-11" />
                    </svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className={t.featured ? 'btn btn-primary' : 'btn btn-ghost'}
              style={{ width: '100%' }}
            >
              {t.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
