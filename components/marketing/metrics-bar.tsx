import { cn } from '@/lib/utils'

const metrics = [
  { before: '45%', after: '0%', label: 'coordination waste' },
  { before: '5+', after: '1', label: 'request channels' },
  { before: '0%', after: '100%', label: 'design ops visibility' },
]

export function MetricsBar() {
  return (
    <section className="px-6 py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-[1920px]">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
          {metrics.map((m) => (
            <div
              key={m.label}
              className={cn(
                'text-center px-6 py-6',
                'rounded-xl border border-[var(--border)] bg-[var(--bg-surface)]'
              )}
            >
              <div className="flex items-center justify-center gap-3">
                <span className="font-mono text-[14px] text-[var(--text-tertiary)] line-through">
                  {m.before}
                </span>
                <span className="text-[var(--text-tertiary)]">&rarr;</span>
                <span className="text-3xl font-semibold tracking-tight text-[var(--accent)]">
                  {m.after}
                </span>
              </div>
              <p className="mt-2 font-mono text-[12px] uppercase tracking-wider text-[var(--text-tertiary)]">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
