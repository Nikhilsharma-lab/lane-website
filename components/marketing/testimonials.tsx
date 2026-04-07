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
        <blockquote className="text-lg leading-tight font-normal text-ink lg:text-xl">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <p className="mt-4 font-mono text-base leading-none text-ink-subtle">
          └ {author}, {role}
        </p>
      </FadeIn>
    </section>
  )
}
