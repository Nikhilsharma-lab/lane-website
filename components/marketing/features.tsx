'use client'

import { cn } from '@/lib/utils'
import {
  ShieldCheck,
  BellRing,
  CheckCheck,
  FileText,
  Target,
  Palette,
} from 'lucide-react'
import { FadeIn, Stagger, StaggerItem } from './motion'

const features = [
  {
    icon: ShieldCheck,
    title: 'AI Intake Gate',
    description:
      'Blocks solution-specific requests automatically. Extracts the real problem from hybrid submissions. AI-generated priority, complexity, and type with reasoning.',
  },
  {
    icon: BellRing,
    title: 'Private AI Nudges',
    description:
      'Contextual nudges go to the designer first. Never escalated to leads automatically. Friendly tone, not surveillance language.',
  },
  {
    icon: CheckCheck,
    title: '3-Sign-Off Quality Gate',
    description:
      'Designer, PM, and Design Head must all approve. Structured feedback on rejection. Nothing ships without design QA.',
  },
  {
    icon: FileText,
    title: 'Weekly AI Digest',
    description:
      'Auto-generated narrative every Friday. Shipped work, team health, recommendations. Design Head gets the full picture in 30 seconds.',
  },
  {
    icon: Target,
    title: 'PM Calibration',
    description:
      'Predicted vs. actual impact comparison. Rolling accuracy score per PM. Framed as calibration, not blame.',
  },
  {
    icon: Palette,
    title: 'Figma Integration',
    description:
      'Design files locked at handoff. Post-handoff changes trigger dev alerts. Version history preserved automatically.',
  },
]

export function Features() {
  return (
    <section id="features" className="my-20 lg:my-30 bg-[var(--bg-surface)] bg-lines px-4 pt-8 pb-16 lg:px-9 lg:pt-12 lg:pb-24">
      {/* Section header */}
      <FadeIn>
        <div className="border-t border-[var(--border)] pt-6 mb-12">
          <span
            className={cn(
              'inline-flex items-center gap-3 mb-6',
              'font-mono text-[14px] uppercase leading-none tracking-[-0.0175rem] text-[var(--text-secondary)]'
            )}
          >
            <span className="size-2 rounded-full bg-[var(--accent)] [animation:blink_1.4s_ease-in-out_infinite]" />
            Features
          </span>
          <h2
            className={cn(
              'text-[30px] leading-[100%] tracking-[-0.05625rem]',
              'lg:text-[48px] lg:tracking-[-0.09rem]',
              'font-normal text-[var(--text-primary)]'
            )}
          >
            The AI runs operations.
          </h2>
        </div>
      </FadeIn>

      {/* 6-card grid */}
      <Stagger className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {features.map((f) => {
          const Icon = f.icon
          return (
            <StaggerItem key={f.title} className="h-full">
              <div
                className={cn(
                  'h-full rounded-[0.375rem] border border-dashed border-white/50 bg-[var(--bg-base)] p-6',
                  'transition-colors duration-200 hover:border-[var(--border-strong)]'
                )}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon size={18} className="text-[var(--accent)]" />
                  <h3 className="text-[15px] font-normal text-[var(--text-primary)]">
                    {f.title}
                  </h3>
                </div>
                <p className="font-mono text-[14px] leading-[120%] tracking-[-0.0175rem] text-[var(--text-secondary)]">
                  {f.description}
                </p>
              </div>
            </StaggerItem>
          )
        })}
      </Stagger>
    </section>
  )
}
