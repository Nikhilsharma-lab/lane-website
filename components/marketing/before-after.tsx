'use client'

import { cn } from '@/lib/utils'
import { FadeIn, Stagger, StaggerItem } from './motion'

const rows = [
  {
    before: '20 min reconstructing status every Monday',
    after: 'Friday digest lands in inbox automatically',
  },
  {
    before: 'Slack DMs to find out who\'s blocked',
    after: 'Design Radar shows it in under 10 seconds',
  },
  {
    before: 'Figma link dropped in a comment at handoff',
    after: 'AI-generated handoff brief with decisions, edge cases, build sequence',
  },
  {
    before: '"What happened to that request?"',
    after: 'Full audit trail on every transition',
  },
  {
    before: 'PM submits a solution, not a problem',
    after: 'AI intake gate blocks it before it enters design',
  },
  {
    before: 'No idea if design is moving a metric',
    after: 'PM calibration score tracks prediction vs. actual',
  },
]

export function BeforeAfter() {
  return (
    <section className="px-4 pt-8 pb-16 lg:px-9 lg:pt-12 lg:pb-24">
      <FadeIn>
        <div className="pt-6 mb-12">
          <span
            className={cn(
              'inline-flex items-center gap-3 mb-6',
              'font-mono text-[14px] uppercase leading-none tracking-[-0.0175rem] text-[var(--text-secondary)]'
            )}
          >
            <span className="size-2 rounded-full bg-[var(--accent)] [animation:blink_1.4s_ease-in-out_infinite]" />
            Before &amp; after
          </span>
          <h2
            className={cn(
              'text-[30px] leading-[100%] tracking-[-0.05625rem]',
              'lg:text-[48px] lg:tracking-[-0.09rem]',
              'font-normal text-[var(--text-primary)]'
            )}
          >
            What changes when you
            <br />
            stop borrowing tools.
          </h2>
        </div>
      </FadeIn>

      {/* Column headers */}
      <FadeIn delay={0.1}>
        <div className="grid grid-cols-2 gap-4 lg:gap-6 mb-3 px-1">
          <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-tertiary)]">
            Without Lane
          </span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--accent)]">
            With Lane
          </span>
        </div>
      </FadeIn>

      {/* Rows */}
      <Stagger className="flex flex-col divide-y divide-[var(--border)]">
        {rows.map((row, i) => (
          <StaggerItem key={i}>
            <div className="grid grid-cols-2 gap-4 lg:gap-6 py-4 lg:py-5">
              <p className="font-mono text-[13px] leading-[140%] tracking-[-0.015rem] text-[var(--text-tertiary)]">
                {row.before}
              </p>
              <p className="font-mono text-[13px] leading-[140%] tracking-[-0.015rem] text-[var(--text-primary)]">
                {row.after}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
