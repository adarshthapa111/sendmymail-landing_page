import { useState } from 'react'

const Icon = (d: string) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d={d} />
  </svg>
)

/* The selectable brand kits — picking one re-skins the editor preview, the
   card accents and the section glow, exactly like switching the active client
   in the product. */
const BRANDS = [
  { name: 'Khukri Spices', color: '#C56A33' },
  { name: 'Nirvana Agency', color: '#4B43A8' },
  { name: 'Himalaya Trekking', color: '#1FA39B' },
  { name: 'Newa Bites', color: '#2E8B5E' },
]

function SmallTile({ title, body, icon, delay }: { title: string; body: string; icon: React.ReactNode; delay: number }) {
  return (
    <div className="glass lift reveal" data-reveal style={{ padding: 26, transitionDelay: `${delay}ms` }}>
      <span
        className="grid place-items-center"
        style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--color-primary-light)', color: 'var(--color-primary-ink)' }}
      >
        {icon}
      </span>
      <h3 style={{ fontSize: 19, marginTop: 16 }}>{title}</h3>
      <p style={{ fontSize: 14.5, color: 'var(--color-muted)', marginTop: 9 }}>{body}</p>
    </div>
  )
}

export function Features() {
  const [bi, setBi] = useState(0)
  const brand = BRANDS[bi].color

  return (
    <section id="features" className="wrap relative" style={{ paddingBlock: 92 }}>
      {/* left-aligned editorial header */}
      <div className="reveal" data-reveal style={{ maxWidth: 640 }}>
        <span className="eyebrow">The whole workflow</span>
        <h2 style={{ fontSize: 'clamp(30px, 4.2vw, 46px)', marginTop: 14 }}>
          One desk does the lot — <br className="hidden sm:block" />
          build, brand, and the <span className="grad-text">receipts</span>.
        </h2>
        <p style={{ fontSize: 17, color: 'var(--color-muted)', marginTop: 16 }}>
          No more a dozen logins, a dozen bills and a dozen report formats.
          Everything that turns an email into a result lives in one workspace.
        </p>
      </div>

      {/* Spotlight row: editor (wide) + brand-kit (dark) */}
      <div className="relative" style={{ marginTop: 46 }}>
        {/* brand-tinted glow behind the row — shifts with the active brand */}
        <span
          aria-hidden
          style={{
            position: 'absolute',
            inset: '-60px -40px',
            zIndex: -1,
            background: `radial-gradient(60% 70% at 80% 40%, ${brand}38, transparent 70%)`,
            transition: 'background 0.45s ease',
            pointerEvents: 'none',
          }}
        />

        <div className="bento-spot">
          <div className="glass-strong lift reveal" data-reveal style={{ padding: 32, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
            <span className="grid place-items-center" style={{ width: 46, height: 46, borderRadius: 13, background: brand, color: '#fff', transition: 'background 0.45s ease' }}>
              {Icon('M4 7h16M4 12h10M4 17h7 M16 14l4 4-4 4')}
            </span>
            <h3 style={{ fontSize: 24, marginTop: 18 }}>Drag, drop, done.</h3>
            <p style={{ fontSize: 15.5, color: 'var(--color-muted)', marginTop: 10, maxWidth: 440 }}>
              26 pre-built sections snap onto the canvas. No MJML to learn, no
              code to fight — assemble a polished, responsive email in the time
              it takes to write the subject line.
            </p>
            <div style={{ marginTop: 'auto', paddingTop: 22 }}>
              {/* isolate so the hue overlay blends only with the screenshot */}
              <div
                style={{
                  position: 'relative',
                  isolation: 'isolate',
                  borderRadius: 13,
                  overflow: 'hidden',
                  border: `1px solid ${brand}55`,
                  boxShadow: 'var(--shadow-soft)',
                  transition: 'border-color 0.45s ease',
                }}
              >
                <img src="/assets/editor.webp" alt="The email editor canvas" loading="lazy" decoding="async" style={{ width: '100%', display: 'block' }} />
                {/* hue blend recolours the email's accents to the active brand,
                    leaving greys untouched — the live "re-skin" */}
                <span
                  aria-hidden
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: brand,
                    mixBlendMode: 'hue',
                    transition: 'background 0.45s ease',
                    pointerEvents: 'none',
                  }}
                />
              </div>
            </div>
          </div>

          <div className="glass-dark lift reveal relative" data-reveal style={{ padding: 32, display: 'flex', flexDirection: 'column', transitionDelay: '80ms', overflow: 'hidden' }}>
            {/* brand glow inside the dark card */}
            <span
              aria-hidden
              style={{
                position: 'absolute',
                top: -80,
                right: -60,
                width: 320,
                height: 320,
                background: `radial-gradient(circle, ${brand}55, transparent 70%)`,
                transition: 'background 0.45s ease',
                pointerEvents: 'none',
              }}
            />
            <span
              style={{
                position: 'relative',
                alignSelf: 'flex-start',
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#fff',
                background: `${brand}33`,
                border: `1px solid ${brand}`,
                padding: '5px 11px',
                borderRadius: 999,
                transition: 'background 0.45s ease, border-color 0.45s ease',
              }}
            >
              The moat
            </span>
            <h3 style={{ position: 'relative', fontSize: 24, color: '#fff', marginTop: 18 }}>One brand kit per client.</h3>
            <p style={{ position: 'relative', fontSize: 15.5, color: 'rgba(255,255,255,0.74)', marginTop: 12 }}>
              Save a client’s colors, font and logo once. Every section you drop
              lands already on-brand. Switch the active client and the whole
              canvas re-skins in a click — the trick no SMB tool can do.
            </p>

            <div style={{ position: 'relative', marginTop: 'auto', paddingTop: 24 }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 11 }}>
                Try it — pick a client’s kit:
              </div>
              <div style={{ display: 'flex', gap: 11, alignItems: 'center' }}>
                {BRANDS.map((b, i) => {
                  const active = i === bi
                  return (
                    <button
                      key={b.name}
                      type="button"
                      onClick={() => setBi(i)}
                      title={b.name}
                      aria-label={`Switch to ${b.name}`}
                      aria-pressed={active}
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 10,
                        background: b.color,
                        border: 'none',
                        cursor: 'pointer',
                        transform: active ? 'scale(1.12)' : 'scale(1)',
                        boxShadow: active
                          ? `0 0 0 2px #1f1b16, 0 0 0 4px ${b.color}, 0 6px 16px -6px ${b.color}`
                          : '0 4px 12px -6px rgba(0,0,0,0.6)',
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                      }}
                    />
                  )
                })}
                <span style={{ marginLeft: 4, fontSize: 13, fontWeight: 600, color: '#fff' }}>{BRANDS[bi].name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Small-tile row */}
      <div className="bento-small">
        <SmallTile delay={0} icon={Icon('M7 7h10v10H7z M3 3h6v6H3z M15 15h6v6h-6z')} title="Multi-client by design" body="One workspace, every brand. Each keeps its own contacts, domain and reports." />
        <SmallTile delay={60} icon={Icon('M3 12h4l2 5 4-12 2 7h6')} title="Live tracking" body="Opens, clicks and deliverability — the numbers that renew the retainer." />
        <SmallTile delay={120} icon={Icon('M4 5h16v14H4z M4 9h16 M8 13h6')} title="Forms that grow lists" body="Hosted signup forms drop new subscribers into the right client’s list." />
        <SmallTile delay={180} icon={Icon('M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z M2 12h20 M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z')} title="Built for Nepal" body="NPR billing via eSewa, Khalti & IME Pay. PAN-backed VAT invoices." />
      </div>
    </section>
  )
}
