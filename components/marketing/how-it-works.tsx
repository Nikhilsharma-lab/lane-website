'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

const steps = [
  'PM brings a problem. AI blocks solutions.',
  'Designer explores five stages. No deadlines. No surveillance.',
  'Dev builds. PM measures impact. AI reports weekly.',
]

const phases = [
  {
    id: 'predesign',
    label: 'Predesign',
    heading: 'Block solutions. Demand problems.',
    description:
      'Requests enter through an AI gate that classifies them as problem-framed, solution-specific, or hybrid. Solution-specific requests are blocked until the PM articulates the actual user problem. AI auto-triages priority, complexity, and type — all with reasoning.',
    screenshot: {
      file: 'predesign.png',
      hint: 'Show the intake form with AI classification badge and reframe prompt',
    },
  },
  {
    id: 'design',
    label: 'Design',
    heading: 'Five stages. No deadlines. No surveillance.',
    description:
      "Designers move freely between Sense, Frame, Diverge, Converge, and Prove. No stage timers. No \"days in stage\" counters. Progress is captured through reflections — the designer's own words — not forced status updates. AI nudges go to the designer privately.",
    screenshot: {
      file: 'design.png',
      hint: 'Show the 5-stage design flow with a reflection entry visible',
    },
  },
  {
    id: 'build',
    label: 'Build',
    heading: 'Lock the design. Ship with confidence.',
    description:
      'Figma files are version-locked at handoff. Dev kanban opens: To Do, In Progress, In Review, Design QA, Done. Post-handoff Figma changes trigger automatic alerts. Design QA is required — dev cannot ship without designer confirmation.',
    screenshot: {
      file: 'build.png',
      hint: 'Show the dev kanban board with a Design QA column highlighted',
    },
  },
  {
    id: 'track',
    label: 'Track',
    heading: 'Predicted vs. actual. No more guessing.',
    description:
      'PMs predict impact at intake. After shipping, they log actual results. AI compares the two, calculates accuracy, and generates impact narratives. PM calibration scores build accountability over time — framed as calibration, not scoring.',
    screenshot: {
      file: 'track.png',
      hint: 'Show the impact comparison view with predicted vs actual metrics',
    },
  },
]

export function HowItWorks() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="how-it-works" className="px-6 py-16 lg:px-8 lg:py-24">
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
            How it works
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
          Four phases. One system.
          <br />
          <span className="text-[var(--text-secondary)]">Zero coordination overhead.</span>
        </h2>

        <div className="mt-12 mx-auto max-w-xl space-y-3">
          {steps.map((step, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="font-mono text-[14px] text-[var(--accent)] leading-relaxed">
                {i + 1}.
              </span>
              <p className="font-mono text-[14px] leading-relaxed text-[var(--text-secondary)]">
                {step}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="inline-flex rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] p-1">
            {phases.map((phase, i) => (
              <button
                key={phase.id}
                onClick={() => setActiveTab(i)}
                className={cn(
                  'rounded-md px-4 py-2 font-mono text-[12px] uppercase tracking-[-0.015rem] transition-colors',
                  activeTab === i
                    ? 'bg-[var(--accent)] text-white'
                    : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)]'
                )}
              >
                {phase.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3
                className={cn(
                  'text-[24px] leading-[110%] tracking-tight',
                  'lg:text-[30px]',
                  'font-semibold text-[var(--text-primary)]'
                )}
              >
                {phases[activeTab].heading}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[var(--text-secondary)]">
                {phases[activeTab].description}
              </p>
            </div>

            <div
              className={cn(
                'aspect-[4/3] rounded-xl border border-[var(--border)] bg-[var(--bg-surface)]',
                'flex items-center justify-center'
              )}
            >
              {/* SCREENSHOT PLACEHOLDER — replace with <Image src={`/marketing/phases/${phases[activeTab].screenshot.file}`} /> */}
              <div className="text-center px-6">
                <p className="font-mono text-[12px] uppercase tracking-wider text-[var(--text-tertiary)]">
                  {phases[activeTab].screenshot.file}
                </p>
                <p className="mt-2 text-[13px] text-[var(--text-tertiary)]">
                  {phases[activeTab].screenshot.hint}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
