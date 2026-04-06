import { cn } from '@/lib/utils'

const placeholders = [
  'Series B Fintech',
  'Growth Startup',
  'Enterprise SaaS',
  'Design Agency',
  'AI Company',
  'Consumer App',
]

export function TrustedBy() {
  return (
    <section className="px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-[1920px]">
        <p className="text-center font-mono text-[12px] uppercase tracking-wider text-[var(--text-tertiary)]">
          Built for teams who refuse to be managed by Jira
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {placeholders.map((name) => (
            <span
              key={name}
              className={cn(
                'font-mono text-[13px] tracking-tight text-[var(--text-tertiary)]',
                'opacity-40 transition-opacity hover:opacity-100'
              )}
            >
              {/* LOGO PLACEHOLDER — replace with <Image src={`/marketing/logos/${slug}.svg`} /> */}
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
