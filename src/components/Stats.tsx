import { useEffect, useRef, useState } from 'react'

const icon = (d: string) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d={d} />
  </svg>
)

const STATS = [
  { value: '96.4%', label: 'Target inbox placement', icon: icon('M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8M3 7l9 6 9-6M16 18l2 2 4-4') },
  { value: '26', label: 'Ready-made sections', icon: icon('M4 4h7v7H4zM13 4h7v7h-7zM13 13h7v7h-7zM4 13h7v7H4z') },
  { value: 'रू', label: 'Billed in rupees — eSewa & Khalti', icon: icon('M6 4h12M6 8.5h12M10 4c4 0 4 8 0 8H6l8 8') },
  { value: '1', label: 'Desk for every client', icon: icon('M3 21V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v15M3 10h18M9 21v-7h6v7') },
]

function CountUp({ value, play }: { value: string; play: boolean }) {
  const m = value.match(/^([^\d]*)([\d.]+)([^\d]*)$/)
  const [disp, setDisp] = useState(m ? `${m[1]}0${m[3]}` : value)

  useEffect(() => {
    if (!m) {
      setDisp(value)
      return
    }
    if (!play) return
    const prefix = m[1]
    const target = parseFloat(m[2])
    const suffix = m[3]
    const decimals = (m[2].split('.')[1] || '').length
    const dur = 1300
    let startT = 0
    let raf = 0
    const tick = (t: number) => {
      if (!startT) startT = t
      const p = Math.min(1, (t - startT) / dur)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisp(`${prefix}${(target * eased).toFixed(decimals)}${suffix}`)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [play, value])

  return <>{disp}</>
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setSeen(true)
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { threshold: 0.35 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section className="wrap" style={{ paddingBlock: 76 }}>
      <div ref={ref} className="glass-strong reveal stats-grid" data-reveal style={{ padding: 0 }}>
        {STATS.map((s) => (
          <div key={s.label} className="stat">
            <span
              className="grid place-items-center"
              style={{ width: 42, height: 42, borderRadius: 12, background: 'var(--color-primary-light)', color: 'var(--color-primary-ink)', marginInline: 'auto', marginBottom: 16 }}
            >
              {s.icon}
            </span>
            <div
              className="grad-text"
              style={{ fontFamily: 'var(--font-display)', fontSize: 46, fontWeight: 600, lineHeight: 1, letterSpacing: '-0.02em', display: 'inline-block', fontVariantNumeric: 'tabular-nums' }}
            >
              <CountUp value={s.value} play={seen} />
            </div>
            <div style={{ fontSize: 14, color: 'var(--color-muted)', marginTop: 12 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
