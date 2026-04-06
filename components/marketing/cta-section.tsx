'use client'

import { cn } from '@/lib/utils'
import { ScaleIn } from './motion'

export function CtaSection() {
  return (
    <section id="early-access" className="py-16 lg:py-24 px-4 lg:px-9">
      <ScaleIn>
      <div
        className={cn(
          'px-8 py-16 lg:px-16 lg:py-20',
          'bg-[var(--inverted-bg)] text-[var(--inverted-text)]',
          'text-center'
        )}
      >
        <p className="font-mono text-[14px] uppercase leading-none tracking-[-0.0175rem] text-[var(--inverted-tertiary)]">
          We run our own design team on Lane.
        </p>

        <h2 className="mt-6 text-[30px] leading-[100%] tracking-[-0.05625rem] font-normal lg:text-[48px] lg:tracking-[-0.09rem]">
          We think yours will love it too.
        </h2>

        <p className="mt-4 font-mono text-[14px] leading-[120%] tracking-[-0.0175rem] text-[var(--inverted-secondary)] max-w-lg mx-auto">
          Surveillance produces performance. Support produces truth.
          <br />
          Lane optimizes for truth.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary — inverted dark button on light bg */}
          <a
            href="mailto:yash@lane.so?subject=Early%20Access%20Request"
            className={cn(
              'group relative inline-flex items-center justify-center',
              'h-[31px] rounded-sm border border-transparent px-[14px]',
              'bg-[var(--inverted-text)] transition-colors duration-150',
              'hover:bg-[var(--inverted-border)]',
              'font-mono text-[14px] uppercase leading-none tracking-[-0.0175rem]',
              'text-[var(--inverted-bg)] hover:text-[var(--inverted-text)]'
            )}
            style={{ '--lines-color': 'var(--inverted-tertiary)' } as React.CSSProperties}
          >
            <span className="relative z-10">Request Early Access</span>
            <span
              className={cn(
                'pointer-events-none absolute inset-0 rounded-sm opacity-0',
                'group-hover:[animation:delayedFadeIn_100ms_ease-out_forwards]'
              )}
            >
              <span
                className={cn(
                  'absolute inset-0',
                  '[background-image:repeating-linear-gradient(45deg,transparent_0px,transparent_2px,var(--lines-color)_2px,var(--lines-color)_3px,transparent_3px,transparent_5px)]',
                  '[background-size:7.07px_7.07px]',
                  '[animation:slidePattern_2000ms_linear_infinite]'
                )}
              />
            </span>
          </a>

          {/* Secondary — text link */}
          <a
            href="mailto:yash@lane.so?subject=Book%20a%20Demo"
            className={cn(
              'relative inline-flex items-center',
              'font-mono text-[14px] uppercase leading-none tracking-[-0.0175rem]',
              'text-[var(--inverted-secondary)] transition-colors duration-200',
              'hover:text-[var(--inverted-text)]',
              'after:absolute after:-bottom-px after:left-0 after:h-px after:w-0',
              'after:bg-current after:transition-all after:duration-300 after:ease-in-out',
              'hover:after:w-full'
            )}
          >
            Book a Demo
          </a>
        </div>
      </div>
      </ScaleIn>
    </section>
  )
}
