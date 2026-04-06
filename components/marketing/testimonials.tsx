import { cn } from '@/lib/utils'

interface TestimonialProps {
  quote: string
  author: string
  role: string
}

export function Testimonial({ quote, author, role }: TestimonialProps) {
  return (
    <section className="px-6 py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <blockquote className="text-[18px] leading-relaxed text-[var(--text-primary)] lg:text-[20px]">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <p className="mt-4 font-mono text-[13px] text-[var(--text-tertiary)]">
          └ {author}, {role}
        </p>
      </div>
    </section>
  )
}

export const testimonials = {
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
