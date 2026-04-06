'use client'

import { cn } from '@/lib/utils'
import { Fade } from './motion'

const logos = [
  'Podium',
  'EY',
  'Eightfold.ai',
  'Chainguard',
  'Parafin',
  'Adobe',
  'Figma',
  'Lattice',
]

export function TrustedBy() {
  return (
    <Fade>
      <section className="mt-20 lg:mt-30 mb-0 px-4 lg:px-9">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left label */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="size-2 rounded-full bg-[var(--accent)] [animation:blink_1.4s_ease-in-out_infinite]" />
            <span className="font-mono text-[14px] uppercase leading-none tracking-[-0.0175rem] text-[var(--text-secondary)] whitespace-nowrap">
              Trusted by teams at
            </span>
          </div>

          {/* Logo marquee */}
          <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex items-center gap-12 animate-[marquee_30s_linear_infinite]">
              {[...logos, ...logos].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className={cn(
                    'font-mono text-[15px] tracking-tight whitespace-nowrap',
                    'text-[var(--text-tertiary)] opacity-60',
                    'transition-opacity duration-200 hover:opacity-100'
                  )}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Fade>
  )
}
