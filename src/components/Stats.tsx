const STATS = [
  { value: '96.4%', label: 'Target inbox placement' },
  { value: '26', label: 'Ready-made sections' },
  { value: 'रू', label: 'Billed in rupees — eSewa & Khalti' },
  { value: '1', label: 'Desk for every client' },
]

export function Stats() {
  return (
    <section className="wrap" style={{ paddingBlock: 76 }}>
      <div className="glass-strong reveal stats-grid" data-reveal style={{ padding: 0 }}>
        {STATS.map((s) => (
          <div key={s.label} className="stat">
            <div
              className="grad-text"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 46,
                fontWeight: 600,
                lineHeight: 1,
                letterSpacing: '-0.02em',
                display: 'inline-block',
              }}
            >
              {s.value}
            </div>
            <div style={{ fontSize: 14, color: 'var(--color-muted)', marginTop: 12 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
