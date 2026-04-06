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
                'rounded-[0.375rem] border border-[var(--border)] bg-[var(--bg-surface)]',
                'transition-colors duration-200 hover:border-[var(--border-strong)]'
              )}
            >
              {/* Before → After */}
              <div className="flex items-baseline gap-4">
                <span className="text-[28px] lg:text-[36px] font-normal tracking-tight leading-none text-[var(--text-tertiary)] line-through decoration-[1.5px] decoration-[var(--text-quaternary)]">
                  {m.before}
                </span>
                <span className="text-[var(--text-quaternary)] text-[16px] font-light">→</span>
                <span className="text-[42px] lg:text-[56px] font-normal tracking-tight leading-none text-[var(--accent)]">
                  {m.after}
                </span>
              </div>

              {/* Label */}
              <p className="mt-4 font-mono text-[14px] uppercase leading-none tracking-[-0.0175rem] text-[var(--text-primary)]">
                {m.label}
              </p>

              {/* Description */}
              <p className="mt-3 font-mono text-[12px] leading-[150%] tracking-[-0.015rem] text-[var(--text-tertiary)]">
                {m.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
