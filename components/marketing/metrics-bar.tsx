'use client'

import { cn } from '@/lib/utils'
import { Stagger, StaggerItem } from './motion'

const metrics = [
  {
    before: '20 min',
    after: '0',
    label: 'Monday morning reconstruction',
    description: 'No more Slack DMs to find out who\'s blocked. Design Radar shows team status in under 10 seconds.',
  },
  {
    before: '40%',
    after: '0%',
    label: 'Ops overhead for design leads',
    description: 'AI runs the daily ops cycle. Leads spend time leading design, not chasing status updates.',
  },
  {
    before: '0',
    after: '100%',
    label: 'Impact accountability',
    description: 'PMs predict impact at intake, log actuals after shipping. Every request closes the loop.',
  },
]

export function MetricsBar() {
  return (
    <section className="py-16 lg:py-24 px-4 lg:px-9">
      <Stagger className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
        {metrics.map((m) => (
          <StaggerItem key={m.label}>
            <div
              className={cn(
                'flex flex-col px-6 py-8 lg:px-8 lg:py-10 h-full',
                'rounded-sm border border-line bg-surface',
                'transition-colors duration-200 hover:border-line-strong'
              )}
            >
              {/* Before → After */}
              <div className="flex items-baseline gap-4">
                <span className="text-3xl lg:text-4xl font-normal leading-none text-ink-subtle line-through decoration-2 decoration-ink-faint">
                  {m.before}
                </span>
                <span className="text-ink-faint text-lg font-light">→</span>
                <span className="text-5xl lg:text-6xl font-normal leading-none text-accent">
                  {m.after}
                </span>
              </div>

              {/* Label */}
              <p className="mt-4 font-mono text-base uppercase leading-none text-ink">
                {m.label}
              </p>

              {/* Description */}
              <p className="mt-3 font-mono text-xs leading-normal text-ink-subtle">
                {m.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
