import { cn } from '@/lib/utils'
import {
  ShieldCheck,
  BellRing,
  CheckCheck,
  FileText,
  Target,
  Palette,
} from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'AI Intake Gate',
    bullets: [
      'Blocks solution-specific requests automatically',
      'Extracts the real problem from hybrid submissions',
      'AI-generated priority, complexity, and type with reasoning',
    ],
  },
  {
    icon: BellRing,
    title: 'Private AI Nudges',
    bullets: [
      'Contextual nudges go to the designer first',
      'Never escalated to leads automatically',
      'Friendly tone, not surveillance language',
    ],
  },
  {
    icon: CheckCheck,
    title: '3-Sign-Off Quality Gate',
    bullets: [
      'Designer, PM, and Design Head must all approve',
      "Structured feedback on rejection — not just \"no\"",
      'Nothing ships without design QA',
    ],
  },
  {
    icon: FileText,
    title: 'Weekly AI Digest',
    bullets: [
      'Auto-generated narrative every Friday',
      'Shipped work, team health, recommendations',
      'Design Head gets the full picture in 30 seconds',
    ],
  },
  {
    icon: Target,
    title: 'PM Calibration',
    bullets: [
      'Predicted vs. actual impact comparison',
      'Rolling accuracy score per PM',
      'Framed as calibration, not blame',
    ],
  },
  {
    icon: Palette,
    title: 'Figma Integration',
    bullets: [
      'Design files locked at handoff',
      'Post-handoff changes trigger dev alerts',
      'Version history preserved automatically',
    ],
  },
]

export function Features() {
  return (
    <section id="features" className="px-6 py-16 lg:px-8 lg:py-24">
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
            Features
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
          The AI runs operations.
          <br />
          <span className="text-[var(--text-secondary)]">Humans steer.</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className={cn(
                  'rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] p-6',
                  'transition-colors hover:border-[var(--border-strong)]'
                )}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent-subtle)]">
                    <Icon size={18} className="text-[var(--accent)]" />
                  </div>
                  <h3 className="text-[15px] font-semibold text-[var(--text-primary)]">
                    {f.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {f.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-[13px] leading-relaxed text-[var(--text-secondary)]"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--text-tertiary)]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
