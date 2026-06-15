import { SectionHeader } from './SectionHeader'

const STEPS = [
  {
    n: '01',
    title: 'Pick agency or brand',
    body: 'Sign up and choose your fit. Running email for many clients? Get the full multi-client workspace. Just your own brand? Get the same power with the agency machinery tucked away.',
  },
  {
    n: '02',
    title: 'Build & brand',
    body: 'Set your brand kit, then drag sections onto the canvas. Every block lands on-brand. Preview the server-compiled email across desktop and mobile.',
  },
  {
    n: '03',
    title: 'Send & prove',
    body: 'Launch the campaign, watch engagement land live, and send each client a clean one-click report. The proof writes itself.',
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="wrap" style={{ paddingBlock: 88 }}>
      <SectionHeader
        eyebrow="How it works"
        title={<>From signup to sent in <span className="grad-text">three steps</span></>}
      />

      <div className="auto-grid" style={{ marginTop: 50 }}>
        {STEPS.map((s, i) => (
          <div key={s.n} className="glass lift reveal" data-reveal style={{ padding: 32, transitionDelay: `${i * 80}ms` }}>
            <span
              className="grad-text"
              style={{ fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 600, lineHeight: 1, display: 'inline-block' }}
            >
              {s.n}
            </span>
            <h3 style={{ fontSize: 21, marginTop: 18 }}>{s.title}</h3>
            <p style={{ fontSize: 15.5, color: 'var(--color-muted)', marginTop: 10 }}>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
