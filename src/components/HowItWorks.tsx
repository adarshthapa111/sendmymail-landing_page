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

      <div className="steps-wrap" style={{ marginTop: 50 }}>
        <div className="steps-line" />
        <div className="auto-grid">
          {STEPS.map((s, i) => (
            <div key={s.n} className="glass lift reveal" data-reveal style={{ position: 'relative', zIndex: 1, padding: 32, transitionDelay: `${i * 80}ms` }}>
              <span
                className="grid place-items-center"
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: '50%',
                  background: 'linear-gradient(150deg, var(--color-primary-glow), var(--color-primary))',
                  color: '#fff',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 19,
                  boxShadow: '0 12px 24px -10px var(--color-primary)',
                  border: '3px solid var(--color-card)',
                }}
              >
                {s.n}
              </span>
              <h3 style={{ fontSize: 21, marginTop: 18 }}>{s.title}</h3>
              <p style={{ fontSize: 15.5, color: 'var(--color-muted)', marginTop: 10 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
