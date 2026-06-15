import type { ReactNode } from 'react'

export function SectionHeader({
  eyebrow,
  title,
  sub,
  align = 'center',
}: {
  eyebrow: string
  title: ReactNode
  sub?: string
  align?: 'center' | 'left'
}) {
  const centered = align === 'center'
  return (
    <div
      className="reveal"
      data-reveal
      style={{ textAlign: align, maxWidth: centered ? 680 : undefined, marginInline: centered ? 'auto' : undefined }}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 style={{ fontSize: 'clamp(29px, 4vw, 44px)', marginTop: 13 }}>{title}</h2>
      {sub && (
        <p style={{ fontSize: 17, color: 'var(--color-muted)', marginTop: 15 }}>{sub}</p>
      )}
    </div>
  )
}
