# Feature: Marketing landing page

> The public website that introduces SendMyMail and converts visitors into
> early-access signups. Separate React + Vite app from the product frontend,
> but shares the warm editorial theme so the site and product read as one
> brand. Lives in its own repo: `sendmymail-landing_page`.

## Stack
React 19 + TypeScript 6 + Vite 8 + Tailwind v4 (`@theme` tokens, no config
file). Mirrors the frontend's stack and design tokens. Build gate:
`tsc -b && vite build`.

---

## Milestones

### 1. Initial build — scaffold + sections
React/Vite/Tailwind app in the warm theme (terracotta `#C56A33` on cream
`#FAF6EF`, Bricolage Grotesque + General Sans). Sections: Nav, Hero,
TrustStrip, Features, Showcase, HowItWorks, Audience, Stats, Pricing, CTA,
Footer. Real product screenshots in `public/assets/`.

### 2. Premium redesign — warm gradient + glassmorphism
Reworked from "template-y" to premium: fixed gradient-blob backdrop, frosted
glass surfaces, gradient accent text, layered shadows, smooth scroll-reveal.
Dropped the hand-drawn/Caveat experiment in favour of refined type + motion.

### 3. Zapper-style nav + centered hero
Floating pill navbar (centered links, active-section scroll-spy, dark CTA,
mobile hamburger). Centered hero with italic gradient accent, faint grid
backdrop, a collaboration cursor pointing at the accent, and a parallax
product shot.

### 4. Interactive proof
- Features bento includes a **live brand-kit re-skin demo** — picking a
  client swatch recolours the editor preview (hue blend), card accents and
  background glow.
- **"Take it for a test drive"** embeds the real product mockups
  (`public/mockups/`, copied from `frontend/doc/mockups`) in a browser
  window. They're already on the warm theme and cross-linked via
  `_shell.js`, so the sidebar navigates every screen — a real prototype.
  Click-to-interact overlay so the iframe never traps page scroll.

### 5. Responsive + scroll fixes
- Large monitors: container widens + stepped `zoom` (≥1700/2100/2560px) so
  the px-based design scales up instead of floating small.
- Scroll bug 1: `body { overflow-x: hidden }` had turned `<body>` into a
  scroll container (forces `overflow-y: auto`) → switched to
  `overflow-x: clip`.
- Scroll bug 2: the embedded iframe trapped the mouse wheel → click-to-
  interact overlay lets the wheel pass through to the page.
- Floating nav: pinned at `top: 0` with `padding-top` gap (consistent at
  rest + scrolled, no jump) + a top fade so content scrolls away cleanly.

---

## Done — 2026-06-16 · Conversion essentials (SEO + lead capture + FAQ)

Pushed the page from "looks great" toward "converts and ranks". All three
chosen by the user from a prioritised list.

### SEO + social share
- `index.html`: Open Graph + Twitter Card meta, `description`, `keywords`,
  `canonical`, `theme-color`.
- `public/favicon.svg` — the terracotta envelope mark.
- `public/og-image.png` — branded 1200×630 share card (rendered from an HTML
  template via headless Chrome; warm gradient, headline, Nepal trust chips).

### Lead capture (the biggest gap — CTAs previously went to `#`)
- `CTA.tsx` is now an early-access **email form**: validation, sending +
  success states ("You're on the list!"). `FORM_ENDPOINT` const wires it to
  a real collector (Formspree / backend / Resend); until set, it stores to
  `localStorage` so the flow works end-to-end.
- Every "Start free" CTA now scrolls to `#waitlist` — nav (desktop +
  mobile), hero, and all three pricing tiers.

### FAQ
- New `FAQ.tsx` — glass accordion (smooth `grid-template-rows` height
  animation) answering the 6 objections that block signups: deliverability
  in Nepal, migrating from Mailchimp, NPR/eSewa/Khalti billing,
  brand-vs-agency, data isolation, free start. Ends with a "Join the list"
  nudge. Added between Pricing and the CTA.

### Verified
tsc clean · `vite build` clean · screenshot-checked FAQ accordion, waitlist
form, and its success state at desktop.

### Deferred / follow-ups
- **Wire `FORM_ENDPOINT`** to a real signup collector (currently localStorage).
- **Update the domain** — OG/canonical use `https://sendmymail.np` as a
  placeholder; change to the real deploy URL.
- Footer links still point to `#` (dead).
- Possible next: integrations logo grid + eSewa/Khalti badges; comparison
  vs Mailchimp/MailerLite; analytics.
