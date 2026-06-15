import { useState } from 'react'
import { SectionHeader } from './SectionHeader'

const FAQS = [
  {
    q: 'Will my emails actually land in the inbox in Nepal?',
    a: 'That’s the whole point. We send over verified domains with proper SPF/DKIM/DMARC and tune deliverability for the inboxes Nepalis actually use — Gmail and Outlook. We target ~96% inbox placement and show you the rate per campaign so it’s never a guess.',
  },
  {
    q: 'Can I migrate from Mailchimp or MailerLite?',
    a: 'Yes — bring your contacts, lists and templates over in an afternoon, and we’ll help. You can keep your existing ESP connected too: SendMyMail can push the compiled email to ~40 platforms if you’d rather send from one you already use.',
  },
  {
    q: 'How does billing work — is it really in rupees?',
    a: 'Everything is priced and billed in NPR. Pay with eSewa, Khalti or IME Pay — no USD card needed — and get PAN-backed VAT invoices for your books. No more juggling a dozen dollar subscriptions across clients.',
  },
  {
    q: 'I run one brand, not an agency. Is this overkill?',
    a: 'No. Brand accounts give you the exact same editor, brand kit and deliverability with the multi-client machinery hidden away — a clean single-brand workspace. If you grow into managing other brands later, the agency features are one click away.',
  },
  {
    q: 'Is my clients’ data safe and separated?',
    a: 'Each client is its own isolated workspace — separate contacts, domains, branding and reports. Nothing leaks between clients, and you control exactly who on your team can see what.',
  },
  {
    q: 'Is there really a free start with no card?',
    a: 'Yes. Join the early-access list and start building with no credit card. You only pay in NPR once you’re ready to send to your real audience.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="wrap" style={{ paddingBlock: 92 }}>
      <SectionHeader eyebrow="FAQ" title={<>Questions, <span className="grad-text">answered</span></>} />

      <div style={{ maxWidth: 760, marginInline: 'auto', marginTop: 44, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {FAQS.map((f, i) => {
          const isOpen = open === i
          return (
            <div key={f.q} className="glass reveal" data-reveal style={{ overflow: 'hidden' }}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 16,
                  textAlign: 'left',
                  padding: '20px 24px',
                  background: 'transparent',
                  border: 0,
                  cursor: 'pointer',
                  font: 'inherit',
                }}
              >
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 500, color: 'var(--color-ink)', letterSpacing: '-0.01em' }}>
                  {f.q}
                </span>
                <span
                  className="grid place-items-center"
                  style={{
                    flexShrink: 0,
                    width: 30,
                    height: 30,
                    borderRadius: 999,
                    background: isOpen ? 'var(--color-primary)' : 'var(--color-primary-light)',
                    color: isOpen ? '#fff' : 'var(--color-primary-ink)',
                    transition: 'background 0.2s ease, transform 0.25s ease',
                    transform: isOpen ? 'rotate(45deg)' : 'none',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>

              {/* smooth height animation via grid-template-rows */}
              <div style={{ display: 'grid', gridTemplateRows: isOpen ? '1fr' : '0fr', transition: 'grid-template-rows 0.3s ease' }}>
                <div style={{ overflow: 'hidden' }}>
                  <p style={{ padding: '0 24px 22px', fontSize: 15.5, color: 'var(--color-muted)', maxWidth: 640 }}>{f.a}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <p style={{ textAlign: 'center', fontSize: 15, color: 'var(--color-muted)', marginTop: 32 }}>
        Still have a question?{' '}
        <a href="#waitlist" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
          Join the list
        </a>{' '}
        and ask us anything.
      </p>
    </section>
  )
}
