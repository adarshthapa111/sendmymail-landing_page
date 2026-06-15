/* A browser-chrome frame around a product screenshot. */
export function Frame({ src, alt }: { src: string; alt: string }) {
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
      <img src={src} alt={alt} />
    </div>
  )
}
