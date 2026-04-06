import { Header } from '@/components/marketing/header'
import { Hero } from '@/components/marketing/hero'
import { MetricsBar } from '@/components/marketing/metrics-bar'
import { TrustedBy } from '@/components/marketing/trusted-by'
import { HowItWorks } from '@/components/marketing/how-it-works'
import { Testimonial } from '@/components/marketing/testimonials'
import { Features } from '@/components/marketing/features'
import { AntiSurveillance } from '@/components/marketing/anti-surveillance'
import { Pricing } from '@/components/marketing/pricing'
import { CtaSection } from '@/components/marketing/cta-section'
import { Footer } from '@/components/marketing/footer'

const testimonials = {
  intake: {
    quote:
      'We spent more time arguing about what to build than actually building it. The intake gate changed that overnight.',
    author: 'Design Lead',
    role: 'Series B Fintech',
  },
  autonomy: {
    quote:
      "For the first time, our design tool doesn't feel like it was built to spy on us. It actually helps.",
    author: 'Senior Designer',
    role: 'Growth Startup',
  },
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <MetricsBar />
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
