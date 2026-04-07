'use client'

import { cn } from '@/lib/utils'
import { ScaleIn } from './motion'
import { WaitlistForm } from './waitlist-form'

export function CtaSection() {
  return (
    <section
      id="early-access"
      className={cn(
        'px-8 py-16 lg:px-16 lg:py-20',
        'bg-inverted text-inverted-ink',
        'text-center'
      )}
    >
      <ScaleIn>
        <p className="font-mono text-base uppercase leading-none text-inverted-subtle">
          We run our own design team on Lane.
        </p>

        <h2 className="mt-6 text-3xl leading-none font-normal lg:text-5xl">
          We think yours will love it too.
        </h2>

        <p className="mt-4 font-mono text-base leading-tight text-inverted-muted max-w-lg mx-auto">
          Surveillance produces performance. Support produces truth.
          <br />
          Lane optimizes for truth.
        </p>

        <WaitlistForm />
      </ScaleIn>
    </section>
  )
}
