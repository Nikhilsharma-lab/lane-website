'use client'

import { cn } from '@/lib/utils'
import { EyeOff, Clock, Gauge, MessageSquareOff } from 'lucide-react'
import { FadeIn, Stagger, StaggerItem } from './motion'

const pledges = [
  {
    icon: Gauge,
    never: 'No utilization percentages',
    instead: 'Designers set their own capacity preferences. Leads see team health signals — Available, Stretched, Overloaded — never individual tracking.',
  },
  {
    icon: Clock,
    never: 'No "last active" timestamps',
    instead: 'Privacy is the default. Lane never tracks time per task, screen activity, or Figma frequency.',
  },
  {
    icon: EyeOff,
    never: 'No individual speed rankings',
    instead: 'We measure impact, not velocity. What changed for users — not how fast the designer moved.',
  },
  {
    icon: MessageSquareOff,
    never: 'No forced status updates',
    instead: "Reflections are the designer's own words, in their own time. AI nudges go to the designer first — never escalated to their manager automatically.",
  },
]

export function AntiSurveillance() {
  return (
    <section className="px-4 pt-8 pb-16 lg:px-9 lg:pt-12 lg:pb-24">
      {/* Section header */}
      <FadeIn>
        <div className="pt-6 mb-12">
          <span
            className={cn(
              'inline-flex items-center gap-3 mb-6',
              'font-mono text-base uppercase leading-none text-ink-muted'
            )}
          >
            <span className="size-2 rounded-full bg-accent [animation:blink_1.4s_ease-in-out_infinite]" />
            Our pledge
          </span>
          <h2
            className={cn(
              'text-3xl leading-none',
              'lg:text-5xl',
              'font-normal text-ink'
            )}
          >
            Support, not surveillance.
          </h2>
        </div>
      </FadeIn>

      {/* 4-card grid */}
      <Stagger className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
        {pledges.map((p) => {
          const Icon = p.icon
          return (
            <StaggerItem key={p.never} className="h-full">
              <div
                className={cn(
                  'h-full rounded-sm border border-dashed border-rail bg-canvas p-6',
                  'transition-colors duration-200 hover:border-line-strong'
                )}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon size={18} className="text-accent" />
                  <h3 className="text-md font-normal text-ink">
                    {p.never}
                  </h3>
                </div>
                <p className="font-mono text-base leading-tight text-ink-muted">
                  {p.instead}
                </p>
              </div>
            </StaggerItem>
          )
        })}
      </Stagger>

      {/* Vocabulary strip */}
      <FadeIn delay={0.2}>
        <div className="mt-16 pt-10 border-t border-line">
          <p className="font-mono text-xs uppercase tracking-wider text-ink-subtle mb-6">
            We even think differently about words
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4">
            {[
              { instead: 'Status update', we: 'Reflection' },
              { instead: 'Due date', we: 'Appetite' },
              { instead: 'Sprint', we: 'Cycle' },
              { instead: 'Velocity', we: 'Throughput' },
              { instead: 'Utilization', we: 'Capacity' },
              { instead: 'Ticket', we: 'Request' },
            ].map((v) => (
              <div key={v.instead} className="flex items-baseline gap-3">
                <span className="font-mono text-sm text-ink-subtle line-through decoration-1">
                  {v.instead}
                </span>
                <span className="font-mono text-xs text-ink-subtle">→</span>
                <span className="font-mono text-sm text-ink">
                  {v.we}
                </span>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
