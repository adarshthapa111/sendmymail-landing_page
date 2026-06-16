/* A browser-chrome frame around a product screenshot.
   `eager` is for the above-the-fold hero shot (the LCP image); everything
   else lazy-loads + decodes async so it never blocks first paint. */
export function Frame({ src, alt, eager = false }: { src: string; alt: string; eager?: boolean }) {
  return (
    <div className="frame">
      <div className="frame__bar">
        <span className="frame__dot" />
        <span className="frame__dot" />
        <span className="frame__dot" />
        <span
          className="ml-3 hidden sm:block"
          style={{
            flex: 1,
            maxWidth: 280,
            height: 18,
            borderRadius: 6,
            background: 'var(--color-card)',
            border: '1px solid var(--color-line)',
          }}
        />
      </div>
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        {...(eager ? { fetchPriority: 'high' as const } : {})}
      />
    </div>
  )
}
