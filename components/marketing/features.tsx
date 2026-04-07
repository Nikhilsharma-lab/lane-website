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
      'Blocks solution-specific requests before they reach design. Extracts the real problem from hybrid submissions. AI-generated priority, complexity, and assignment — with reasoning, not dropdowns.',
  },
  {
    icon: Palette,
    title: 'Design Radar',
    description:
      'The Design Head\'s Monday morning view. Who\'s in flow, who\'s stuck, what shipped, what\'s at risk — in under 10 seconds. Replaces the standing standup.',
  },
  {
    icon: FileText,
    title: 'AI Context Brief',
    description:
      'When a designer opens a request, an AI-generated brief appears instantly: plain-language rewrite, related past work, key constraints, questions to ask, and exploration directions.',
  },
  {
    icon: CheckCheck,
    title: 'Handoff Intelligence',
    description:
      'AI-generated handoff brief for devs at the moment of handoff. Design files locked at handoff — post-handoff Figma changes trigger automatic dev alerts.',
  },
  {
    icon: Target,
    title: 'PM Calibration',
    description:
      'PMs predict impact at intake. After shipping, they log actuals. AI compares the two, builds a rolling accuracy score, and generates a "What We Learned" brief. Framed as calibration, not blame.',
  },
  {
    icon: BellRing,
    title: 'Idea Board',
    description:
      'Anyone in the org submits ideas. The org votes anonymously. Top-voted ideas are validated by AI and the Design Head — approved ones auto-create a problem-framed request. Democratises problem sourcing beyond PMs.',
  },
]

export function Features() {
  return (
    <section id="features" className="px-4 pt-8 pb-16 lg:px-9 lg:pt-12 lg:pb-24">
      {/* Section header */}
      <FadeIn>
        <div className="pt-6 mb-12">
          <span
            className={cn(
              'inline-flex items-center gap-3 mb-6',
              'font-mono text-base uppercase leading-none text-ink-muted'
            )}
          >
            <span className="size-2 rounded-full bg-accent [animation:blink_1.4s_ease-in-out_infinite]" />
            Features
          </span>
          <h2
            className={cn(
              'text-3xl leading-none',
              'lg:text-5xl',
              'font-normal text-ink'
            )}
          >
            AI runs the ops.
            <br />
            You lead the design.
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
                  'h-full rounded-sm border border-dashed border-rail bg-canvas p-6',
                  'transition-colors duration-200 hover:border-line-strong'
                )}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon size={18} className="text-accent" />
                  <h3 className="text-md font-normal text-ink">
                    {f.title}
                  </h3>
                </div>
                <p className="font-mono text-base leading-tight text-ink-muted">
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
