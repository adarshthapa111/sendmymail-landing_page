import { useState } from 'react'
import { SectionHeader } from './SectionHeader'

/* Reuses the same Formspree endpoint as the waitlist, tagged source:'contact'
   so inquiries are distinguishable from signups in the dashboard. */
const FORM_ENDPOINT = 'https://formspree.io/f/xojzrpya'
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

const TOPICS: { label: string; starter: string }[] = [
  { label: 'Book a demo', starter: 'Hi! I’d love a quick demo of SendMyMail.' },
  { label: 'Migrate my account', starter: 'Hi! I’m currently on another tool and want to migrate to SendMyMail.' },
  { label: 'Pricing & plans', starter: 'Hi! Could you share pricing for my workspace?' },
  { label: 'Partnership', starter: 'Hi! I’d like to explore a partnership.' },
  { label: 'Something else', starter: '' },
]

const TEAM = [
  { ini: 'PG', grad: 'linear-gradient(150deg,#E08A5B,#C9613A)' },
  { ini: 'SM', grad: 'linear-gradient(150deg,#7A71D8,#4B43A8)' },
  { ini: 'AT', grad: 'linear-gradient(150deg,#34c0a8,#1FA39B)' },
]

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [topic, setTopic] = useState<string | null>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => {
    setForm((f) => ({ ...f, [k]: e.target.value }))
    if (status === 'error') setStatus('idle')
  }

  function pickTopic(t: { label: string; starter: string }) {
    setTopic(t.label)
    setForm((f) => ({ ...f, message: t.starter }))
    if (status === 'error') setStatus('idle')
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name.trim() || !EMAIL_RE.test(form.email) || form.message.trim().length < 4) {
      setStatus('error')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, topic: topic || 'General', source: 'contact' }),
      })
      if (!res.ok) throw new Error('failed')
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  const field = {
    width: '100%',
    height: 46,
    padding: '0 14px',
    borderRadius: 12,
    border: '1px solid var(--color-line-strong)',
    background: 'var(--color-card)',
    fontSize: 15,
    fontFamily: 'var(--font-body)',
    color: 'var(--color-ink)',
    outline: 'none',
  } as const

  return (
    <section id="contact" className="wrap relative" style={{ paddingBlock: 92 }}>
      <span aria-hidden style={{ position: 'absolute', left: '50%', top: 120, width: 600, height: 320, transform: 'translateX(-50%)', background: 'radial-gradient(circle, var(--color-primary-light), transparent 70%)', opacity: 0.6, pointerEvents: 'none', zIndex: -1 }} />

      <SectionHeader eyebrow="Talk to us" title={<>Got a question? <span className="grad-text">We’re listening</span></>} />

      <div
        className="reveal"
        data-reveal
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginTop: 46, maxWidth: 960, marginInline: 'auto', alignItems: 'stretch' }}
      >
        {/* left — real-person card */}
        <div className="glass" style={{ padding: 32, display: 'flex', flexDirection: 'column' }}>
          {/* team avatars */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {TEAM.map((t, i) => (
              <span
                key={t.ini}
                className="grid place-items-center"
                style={{ width: 44, height: 44, borderRadius: 999, background: t.grad, color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, border: '2.5px solid var(--color-card)', marginLeft: i ? -12 : 0, boxShadow: 'var(--shadow-soft)' }}
              >
                {t.ini}
              </span>
            ))}
            <span style={{ marginLeft: 12, fontSize: 13, color: 'var(--color-muted)' }}>
              <b style={{ color: 'var(--color-ink)', display: 'block', fontSize: 14 }}>The SendMyMail team</b>
              real humans, in Kathmandu
            </span>
          </div>

          <h3 style={{ fontSize: 22, marginTop: 24 }}>Talk to a person, not a ticket queue.</h3>
          <p style={{ fontSize: 15.5, color: 'var(--color-muted)', marginTop: 10 }}>
            Migrating from another tool, pricing for your agency, or a live demo —
            tell us what you need and we’ll come back fast.
          </p>

          <a
            href="mailto:hello@sendmymail.np"
            className="lift"
            style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 22, padding: '13px 16px', borderRadius: 14, background: 'var(--color-surface)', border: '1px solid var(--color-line)', textDecoration: 'none' }}
          >
            <span className="grid place-items-center" style={{ width: 38, height: 38, borderRadius: 10, background: 'var(--color-primary)', color: '#fff', flexShrink: 0 }}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
            </span>
            <span>
              <span style={{ display: 'block', fontSize: 11.5, color: 'var(--color-soft)' }}>Prefer email?</span>
              <span style={{ display: 'block', fontSize: 15, fontWeight: 600, color: 'var(--color-ink)' }}>hello@sendmymail.np</span>
            </span>
          </a>

          <div style={{ display: 'flex', gap: 10, marginTop: 'auto', paddingTop: 22, flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12.5, fontWeight: 600, color: 'var(--color-green-tx)', background: '#E5F0E7', padding: '6px 12px', borderRadius: 999 }}>
              <span style={{ width: 7, height: 7, borderRadius: 999, background: 'var(--color-green)' }} /> Replies in under a day
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12.5, fontWeight: 600, color: 'var(--color-muted)', background: 'var(--color-surface)', padding: '6px 12px', borderRadius: 999 }}>
              🇳🇵 Kathmandu · NPT
            </span>
          </div>
        </div>

        {/* right — message form */}
        <div className="glass-strong" style={{ padding: 32 }}>
          {status === 'done' ? (
            <div style={{ minHeight: 320, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              <span className="grid place-items-center" style={{ width: 52, height: 52, borderRadius: 999, background: 'var(--color-green)', color: '#fff', marginBottom: 16 }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="m5 12 5 5 9-11" /></svg>
              </span>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, color: 'var(--color-ink)' }}>Message sent!</div>
              <p style={{ fontSize: 15, color: 'var(--color-muted)', marginTop: 8, maxWidth: 320 }}>Thanks, {form.name || 'there'} — we’ll reply to {form.email} within a day.</p>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--color-soft)', marginBottom: 9 }}>What’s this about?</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {TOPICS.map((t) => (
                    <button key={t.label} type="button" className="topic-chip" data-on={topic === t.label} onClick={() => pickTopic(t)}>
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <input style={{ ...field, flex: '1 1 140px' }} placeholder="Your name" value={form.name} onChange={set('name')} aria-label="Your name" />
                <input style={{ ...field, flex: '1 1 140px' }} type="email" inputMode="email" placeholder="you@company.com" value={form.email} onChange={set('email')} aria-label="Email" />
              </div>
              <textarea
                placeholder="How can we help?"
                value={form.message}
                onChange={set('message')}
                aria-label="Message"
                rows={4}
                style={{ ...field, height: 'auto', padding: '12px 14px', resize: 'vertical', lineHeight: 1.5 }}
              />
              <button type="submit" className="btn btn-primary" disabled={status === 'sending'} style={{ height: 48, fontSize: 15.5, opacity: status === 'sending' ? 0.7 : 1 }}>
                {status === 'sending' ? 'Sending…' : 'Send message →'}
              </button>
              <p style={{ fontSize: 13, color: status === 'error' ? 'var(--color-primary)' : 'var(--color-soft)', minHeight: 18 }}>
                {status === 'error' ? 'Please add your name, a valid email and a short message.' : 'No bots — a real person reads every message.'}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
