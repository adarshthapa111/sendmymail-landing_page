const BRANDS = [
  'Khukri Spices',
  'Himalaya Trekking',
  'Pashmina Co.',
  'Newa Bites',
  'Yak Studios',
  'Sherpa Tours',
  'Everest Roasters',
  'Lalitpur Looms',
]

function Row() {
  return (
    <>
      {BRANDS.map((b) => (
        <span
          key={b}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            fontFamily: 'var(--font-display)',
            fontSize: 17,
            fontWeight: 500,
            color: 'var(--color-muted)',
            paddingInline: 28,
            whiteSpace: 'nowrap',
          }}
        >
          <span style={{ width: 5, height: 5, borderRadius: 999, background: 'var(--color-primary)' }} />
          {b}
        </span>
      ))}
    </>
  )
}

export function TrustStrip() {
  return (
    <section style={{ paddingBlock: 34, overflow: 'hidden' }}>
      <p
        className="text-center reveal"
        data-reveal
        style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-soft)', marginBottom: 24 }}
      >
        The brands behind the inboxes — all sent from one desk
      </p>

      <div
        style={{
          position: 'relative',
          maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
        }}
      >
        <div className="marquee">
          <Row />
          <Row />
        </div>
      </div>
    </section>
  )
}
