'use client'

import { FadeIn } from './motion'

export interface TestimonialProps {
  quote: string
  author: string
  role: string
}

export function Testimonial({ quote, author, role }: TestimonialProps) {
  return (
    <section className="py-16 lg:py-24 px-4 lg:px-9">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <blockquote className="text-[18px] leading-[120%] font-normal text-[var(--text-primary)] lg:text-[20px]">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <p className="mt-4 font-mono text-[14px] leading-none tracking-[-0.0175rem] text-[var(--text-tertiary)]">
          └ {author}, {role}
        </p>
      </FadeIn>
    </section>
  )
}
