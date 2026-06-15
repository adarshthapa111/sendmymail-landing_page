/* The SendMyMail brand mark — a warm terracotta tile with an envelope
   glyph, paired with the wordmark. Used in the nav and footer. */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5 select-none">
      <span
        className="grid place-items-center"
        style={{
          width: 32,
          height: 32,
          borderRadius: 9,
          background: 'var(--color-primary)',
          boxShadow: '0 1px 0 var(--color-primary-dark)',
        }}
      >
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5v-11Z"
            stroke="#fff"
            strokeWidth="1.8"
          />
          <path d="m4 7 8 6 8-6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span
        className="font-semibold tracking-tight"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 19,
          color: light ? '#fff' : 'var(--color-ink)',
        }}
      >
        SendMyMail
      </span>
    </span>
  )
}
