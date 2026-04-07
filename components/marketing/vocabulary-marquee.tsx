import { cn } from '@/lib/utils'

const pairs = [
  { from: 'Status update', to: 'Reflection' },
  { from: 'Sprint', to: 'Cycle' },
  { from: 'Velocity', to: 'Throughput' },
  { from: 'Utilization', to: 'Capacity' },
  { from: 'Ticket', to: 'Request' },
  { from: 'Due date', to: 'Appetite' },
] as const

export function VocabularyMarquee() {
  // Render the list twice so the -50% translate loop is seamless.
  const loop = [...pairs, ...pairs]

  return (
    <div className="w-full overflow-hidden bg-canvas py-6">
      <div
        className={cn(
          'flex w-max shrink-0 flex-nowrap whitespace-nowrap',
          '[animation:marquee_36s_linear_infinite]',
          'hover:[animation-play-state:paused]'
        )}
      >
        {loop.map((p, i) => (
          <div
            key={`${p.from}-${i}`}
            className="mx-12 flex items-baseline gap-3 font-mono text-xs uppercase tracking-wider"
          >
            <span className="text-ink-faint line-through decoration-1">
              {p.from}
            </span>
            <span className="mx-2 text-accent">&rarr;</span>
            <span className="text-ink">{p.to}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
