import { useState } from 'react'

/* Lead capture. Set FORM_ENDPOINT to a real collector (Formspree, a backend
   route, Resend audience, etc.) to receive signups. Until then it falls back
   to storing locally + a success state so the flow works end-to-end. */
const FORM_ENDPOINT = 'https://formspree.io/f/xojzrpya'

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

export function CTA() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!EMAIL_RE.test(email)) {
      setStatus('error')
      return
    }
    setStatus('sending')
    try {
      if (FORM_ENDPOINT) {
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ email, source: 'landing-waitlist' }),
        })
        if (!res.ok) throw new Error('submission failed')
      } else {
        const key = 'smm_waitlist'
        const list = JSON.parse(localStorage.getItem(key) || '[]')
        list.push({ email, at: new Date().toISOString() })
        localStorage.setItem(key, JSON.stringify(list))
        await new Promise((r) => setTimeout(r, 450))
      }
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="waitlist" className="wrap" style={{ paddingBottom: 96, scrollMarginTop: 100 }}>
      <div
        className="reveal"
        data-reveal
        style={{
          borderRadius: 32,
          padding: 'clamp(48px, 6vw, 84px) 32px',
          textAlign: 'center',
          background:
            'radial-gradient(720px 340px at 50% -10%, #3a322b 0%, transparent 72%), linear-gradient(135deg, #2b2620 0%, #191510 100%)',
          color: '#fff',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-lift)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <span aria-hidden style={{ position: 'absolute', inset: 0, background: 'radial-gradient(520px 280px at 50% 118%, rgba(224,138,78,0.5) 0%, transparent 70%)' }} />
        <span aria-hidden style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)' }} />

        <div style={{ position: 'relative', maxWidth: 600, marginInline: 'auto' }}>
          <span
            className="inline-flex items-center gap-2"
            style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-primary-glow)', background: 'rgba(224,138,78,0.12)', border: '1px solid rgba(224,138,78,0.28)', padding: '6px 14px', borderRadius: 999 }}
          >
            Early access
          </span>

          <h2 style={{ fontSize: 'clamp(32px, 4.8vw, 52px)', color: '#fff', marginTop: 20 }}>Bring all your email home.</h2>

          {status === 'done' ? (
            <div style={{ marginTop: 22 }}>
              <p style={{ fontSize: 19, color: '#fff', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                <span style={{ width: 28, height: 28, borderRadius: 999, background: 'var(--color-green)', display: 'inline-grid', placeItems: 'center' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="m5 12 5 5 9-11" /></svg>
                </span>
                You’re on the list!
              </p>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.76)', marginTop: 10 }}>
                We’ll email <b style={{ color: '#fff' }}>{email}</b> the moment your workspace is ready.
              </p>
            </div>
          ) : (
            <>
              <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.76)', marginTop: 18 }}>
                One warm desk for every brand you send for. Join the early-access
                list — NPR billing, set up in an afternoon, we’ll help you migrate.
              </p>

              <form onSubmit={submit} style={{ marginTop: 30, display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
                <input
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="you@agency.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (status === 'error') setStatus('idle')
                  }}
                  aria-label="Email address"
                  aria-invalid={status === 'error'}
                  style={{
                    flex: '1 1 280px',
                    maxWidth: 340,
                    height: 50,
                    padding: '0 16px',
                    borderRadius: 13,
                    border: `1px solid ${status === 'error' ? '#E0894F' : 'rgba(255,255,255,0.2)'}`,
                    background: 'rgba(255,255,255,0.08)',
                    color: '#fff',
                    fontSize: 16,
                    outline: 'none',
                    fontFamily: 'var(--font-body)',
                  }}
                />
                <button type="submit" className="btn btn-primary" disabled={status === 'sending'} style={{ height: 50, fontSize: 16, padding: '0 26px', opacity: status === 'sending' ? 0.7 : 1 }}>
                  {status === 'sending' ? 'Joining…' : 'Get early access'}
                </button>
              </form>

              <p style={{ fontSize: 13, color: status === 'error' ? '#F0A877' : 'rgba(255,255,255,0.5)', marginTop: 12, minHeight: 18 }}>
                {status === 'error' ? 'Please enter a valid email address.' : 'No spam, no card. Unsubscribe anytime.'}
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
