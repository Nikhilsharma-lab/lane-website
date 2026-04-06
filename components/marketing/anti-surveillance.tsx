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
              'font-mono text-[14px] uppercase leading-none tracking-[-0.0175rem] text-[var(--text-secondary)]'
            )}
          >
            <span className="size-2 rounded-full bg-[var(--accent)] [animation:blink_1.4s_ease-in-out_infinite]" />
            Our pledge
          </span>
          <h2
            className={cn(
              'text-[30px] leading-[100%] tracking-[-0.05625rem]',
              'lg:text-[48px] lg:tracking-[-0.09rem]',
              'font-normal text-[var(--text-primary)]'
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
                  'h-full rounded-[0.375rem] border border-dashed border-white/50 bg-[var(--bg-base)] p-6',
                  'transition-colors duration-200 hover:border-[var(--border-strong)]'
                )}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon size={18} className="text-[var(--accent)]" />
                  <h3 className="text-[15px] font-normal text-[var(--text-primary)]">
                    {p.never}
                  </h3>
                </div>
                <p className="font-mono text-[14px] leading-[120%] tracking-[-0.0175rem] text-[var(--text-secondary)]">
                  {p.instead}
                </p>
              </div>
            </StaggerItem>
          )
        })}
      </Stagger>

      {/* Vocabulary strip */}
      <FadeIn delay={0.2}>
        <div className="mt-16 pt-10 border-t border-[var(--border)]">
          <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-tertiary)] mb-6">
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
                <span className="font-mono text-[13px] text-[var(--text-tertiary)] line-through decoration-[1px]">
                  {v.instead}
                </span>
                <span className="font-mono text-[11px] text-[var(--text-tertiary)]">→</span>
                <span className="font-mono text-[13px] text-[var(--text-primary)]">
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
