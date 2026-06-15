import { useReveal } from './useReveal'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { TrustStrip } from './components/TrustStrip'
import { Features } from './components/Features'
import { Showcase } from './components/Showcase'
import { Gallery } from './components/Gallery'
import { Testimonial } from './components/Testimonial'
import { HowItWorks } from './components/HowItWorks'
import { Audience } from './components/Audience'
import { Stats } from './components/Stats'
import { Pricing } from './components/Pricing'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

export function App() {
  useReveal()
  return (
    <>
      {/* warm gradient backdrop — fixed behind all content */}
      <div className="bg-stage" aria-hidden>
        <span />
      </div>

      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Features />
        <Showcase />
        <Gallery />
        <Testimonial />
        <HowItWorks />
        <Audience />
        <Stats />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
