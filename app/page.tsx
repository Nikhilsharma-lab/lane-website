import { Header } from '@/components/marketing/header'
import { Hero } from '@/components/marketing/hero'
import { MetricsBar } from '@/components/marketing/metrics-bar'
import { TrustedBy } from '@/components/marketing/trusted-by'
import { HowItWorks } from '@/components/marketing/how-it-works'
import { Testimonial, testimonials } from '@/components/marketing/testimonials'
import { Features } from '@/components/marketing/features'
import { AntiSurveillance } from '@/components/marketing/anti-surveillance'
import { Pricing } from '@/components/marketing/pricing'
import { CtaSection } from '@/components/marketing/cta-section'
import { Footer } from '@/components/marketing/footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MetricsBar />
        <TrustedBy />
        <HowItWorks />
        <Testimonial {...testimonials.intake} />
        <Features />
        <Testimonial {...testimonials.autonomy} />
        <AntiSurveillance />
        <Pricing />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
