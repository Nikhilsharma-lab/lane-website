import { Header } from '@/components/marketing/header'
import { Hero } from '@/components/marketing/hero'
import { MetricsBar } from '@/components/marketing/metrics-bar'
import { BeforeAfter } from '@/components/marketing/before-after'
import { HowItWorks } from '@/components/marketing/how-it-works'
import { Testimonial } from '@/components/marketing/testimonials'
import { Features } from '@/components/marketing/features'
import { AntiSurveillance } from '@/components/marketing/anti-surveillance'
import { Pricing } from '@/components/marketing/pricing'
import { CtaSection } from '@/components/marketing/cta-section'
import { Footer, FooterBar } from '@/components/marketing/footer'

const testimonials = {
  wedge: {
    quote:
      "Every tool I tried treated my designers like engineers with deadlines. They aren't. The work doesn't fit on a Gantt chart, and pretending it does is why design teams burn out.",
    author: 'Nischal',
    role: 'Co-Founder',
  },
  manifesto: {
    quote:
      "Surveillance produces performance. Support produces truth. We built Lane on that line, because every dashboard I've ever shown a designer made them slower, not better.",
    author: 'Nikhil',
    role: 'Founder',
  },
}

/**
 * WireframeCell — full-width horizontal dashed borders with vertical rail insets.
 * `filled` = bg-lines sections where background fills edge-to-edge between borders.
 */
function WireframeCell({ children, filled }: { children: React.ReactNode; filled?: boolean }) {
  return (
    <div className="border-b border-dashed border-rail">
      <div className="flex">
        {/* Left rail */}
        <div className="w-2 lg:w-rail shrink-0 border-r border-dashed border-rail" />
        {/* Content */}
        <div className={`flex-1 min-w-0 ${filled ? 'bg-surface bg-lines' : ''}`}>
          {children}
        </div>
        {/* Right rail */}
        <div className="w-2 lg:w-rail shrink-0 border-l border-dashed border-rail" />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <WireframeCell>
          <Hero />
        </WireframeCell>
        <WireframeCell>
          <MetricsBar />
        </WireframeCell>
        <WireframeCell filled>
          <BeforeAfter />
        </WireframeCell>
        <WireframeCell filled>
          <HowItWorks />
        </WireframeCell>
        <WireframeCell>
          <Testimonial {...testimonials.wedge} />
        </WireframeCell>
        <WireframeCell filled>
          <Features />
        </WireframeCell>
        <WireframeCell>
          <Testimonial {...testimonials.manifesto} />
        </WireframeCell>
        <WireframeCell filled>
          <AntiSurveillance />
        </WireframeCell>
        <WireframeCell>
          <Pricing />
        </WireframeCell>
        <WireframeCell>
          <CtaSection />
        </WireframeCell>
      </main>
      <WireframeCell>
        <Footer />
      </WireframeCell>
      <FooterBar />
    </>
  )
}
