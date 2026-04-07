'use client'

import { cn } from '@/lib/utils'
import { ScaleIn } from './motion'

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

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:yash@lane.so?subject=Early%20Access%20Request"
            className={cn(
              'group relative inline-flex items-center justify-center',
              'h-btn-md rounded-xs border border-transparent px-3.5',
              'bg-inverted-ink transition-colors duration-150',
              'hover:bg-inverted-line',
              'font-mono text-base uppercase leading-none',
              'text-inverted hover:text-inverted-ink'
            )}
            style={{ '--lines-color': 'var(--color-inverted-subtle)' } as React.CSSProperties}
          >
            <span className="relative z-10">Request Early Access</span>
            <span
              className={cn(
                'pointer-events-none absolute inset-0 rounded-xs opacity-0',
                'group-hover:[animation:delayedFadeIn_100ms_ease-out_forwards]'
              )}
            >
              <span
                className={cn(
                  'absolute inset-0 bg-stripe',
                  '[animation:slidePattern_2000ms_linear_infinite]'
                )}
              />
            </span>
          </a>

          <a
            href="mailto:yash@lane.so?subject=Book%20a%20Demo"
            className={cn(
              'relative inline-flex items-center',
              'font-mono text-base uppercase leading-none',
              'text-inverted-muted transition-colors duration-200',
              'hover:text-inverted-ink',
              'after:absolute after:-bottom-px after:left-0 after:h-px after:w-0',
              'after:bg-current after:transition-all after:duration-300 after:ease-in-out',
              'hover:after:w-full'
            )}
          >
            Book a Demo
          </a>
        </div>
      </ScaleIn>
    </section>
  )
}
