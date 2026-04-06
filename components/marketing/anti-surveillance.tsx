import { cn } from '@/lib/utils'
import { EyeOff, Clock, Gauge, MessageSquareOff } from 'lucide-react'

const pledges = [
  {
    icon: Gauge,
    never: 'No utilization percentages',
    instead: 'Designers set their own capacity. Leads see team health signals, never individual tracking.',
  },
  {
    icon: Clock,
    never: 'No "last seen" timestamps',
    instead: 'Privacy is the default. Activity data belongs to the individual, not their manager.',
  },
  {
    icon: EyeOff,
    never: 'No speed rankings',
    instead: 'Impact, not velocity. We measure what changed for users, not how fast you moved.',
  },
  {
    icon: MessageSquareOff,
    never: 'No forced status updates',
    instead: "Reflections are the designer's own words, shared when they're ready. No rush.",
  },
]

export function AntiSurveillance() {
  return (
    <section className="px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1920px]">
        <div className="flex justify-center mb-6">
          <span
            className={cn(
              'inline-flex items-center gap-2 rounded-full px-3 py-1',
              'border border-[var(--border)] bg-[var(--bg-surface)]',
              'font-mono text-[12px] uppercase tracking-[-0.015rem] text-[var(--text-tertiary)]'
            )}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            Our pledge
          </span>
        </div>

        <h2
          className={cn(
            'text-center',
            'text-[30px] leading-[100%] tracking-[-0.05625rem]',
            'lg:text-[48px] lg:tracking-[-0.09rem]',
            'font-semibold text-[var(--text-primary)]'
          )}
        >
          Support, not surveillance.
        </h2>

        <p className="mt-4 text-center text-[15px] text-[var(--text-secondary)] max-w-xl mx-auto">
          These aren&apos;t toggles you can turn off. They&apos;re hard constraints baked into
          Lane&apos;s architecture. No exceptions, no admin overrides.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
          {pledges.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.never}
                className={cn(
                  'rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] p-6',
                  'transition-colors hover:border-[var(--border-strong)]'
                )}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon size={18} className="text-[var(--accent)]" />
                  <h3 className="text-[15px] font-semibold text-[var(--text-primary)]">
                    {p.never}
                  </h3>
                </div>
                <p className="text-[13px] leading-relaxed text-[var(--text-secondary)]">
                  {p.instead}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
