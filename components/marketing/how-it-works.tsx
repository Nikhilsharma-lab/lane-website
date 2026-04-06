'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { FadeIn, Stagger, StaggerItem, TabContent } from './motion'

const steps = [
  'PM brings a problem. AI blocks solutions.',
  'Designer explores five stages. No deadlines. No surveillance.',
  'Dev builds. PM measures impact. AI reports weekly.',
]

const phases = [
  {
    id: 'predesign',
    label: '01 Predesign',
    heading: 'Block solutions. Demand problems.',
    description:
      'Requests enter through an AI gate that classifies them as problem-framed, solution-specific, or hybrid. Solution-specific requests are blocked until the PM articulates the actual user problem.',
    highlights: [
      { label: 'Classification', value: 'Problem / Solution / Hybrid' },
      { label: 'Auto-triage', value: 'Priority, complexity, type' },
      { label: 'Blocked until', value: 'Problem is articulated' },
    ],
    screenshot: {
      file: 'predesign.png',
      hint: 'Show the intake form with AI classification badge and reframe prompt',
    },
  },
  {
    id: 'design',
    label: '02 Design',
    heading: 'Five stages. No deadlines. No surveillance.',
    description:
      "Designers move freely between Sense, Frame, Diverge, Converge, and Prove. Progress is captured through reflections — the designer's own words — not forced status updates.",
    highlights: [
      { label: 'Stages', value: 'Sense → Frame → Diverge → Converge → Prove' },
      { label: 'Tracking', value: 'Reflections, not timers' },
      { label: 'AI nudges', value: 'Private to designer only' },
    ],
    screenshot: {
      file: 'design.png',
      hint: 'Show the 5-stage design flow with a reflection entry visible',
    },
  },
  {
    id: 'build',
    label: '03 Build',
    heading: 'Lock the design. Ship with confidence.',
    description:
      'Figma files are version-locked at handoff. Post-handoff changes trigger automatic alerts. Design QA is required — dev cannot ship without designer confirmation.',
    highlights: [
      { label: 'Handoff', value: 'Figma version-locked' },
      { label: 'Kanban', value: 'To Do → In Progress → Design QA → Done' },
      { label: 'Gate', value: 'Designer sign-off required' },
    ],
    screenshot: {
      file: 'build.png',
      hint: 'Show the dev kanban board with a Design QA column highlighted',
    },
  },
  {
    id: 'track',
    label: '04 Track',
    heading: 'Predicted vs. actual. No more guessing.',
    description:
      'PMs predict impact at intake. After shipping, they log actual results. AI compares the two and generates impact narratives.',
    highlights: [
      { label: 'Input', value: 'PM predicts impact at intake' },
      { label: 'Output', value: 'AI-generated accuracy score' },
      { label: 'Framing', value: 'Calibration, not blame' },
    ],
    screenshot: {
      file: 'track.png',
      hint: 'Show the impact comparison view with predicted vs actual metrics',
    },
  },
]

export function HowItWorks() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="how-it-works" className="px-4 pt-8 pb-16 lg:px-9 lg:pt-12 lg:pb-24">
      {/* Section header — factory.ai pattern: rule + badge + heading, left-aligned */}
      <FadeIn>
        <div className="pt-6 mb-12">
          <span
            className={cn(
              'inline-flex items-center gap-3 mb-6',
              'font-mono text-[14px] uppercase leading-none tracking-[-0.0175rem] text-[var(--text-secondary)]'
            )}
          >
            <span className="size-2 rounded-full bg-[var(--accent)] [animation:blink_1.4s_ease-in-out_infinite]" />
            How it works
          </span>
          <h2
            className={cn(
              'text-[30px] leading-[100%] tracking-[-0.05625rem]',
              'lg:text-[48px] lg:tracking-[-0.09rem]',
              'font-normal text-[var(--text-primary)]'
            )}
          >
            Four phases. One system.
          </h2>
        </div>
      </FadeIn>

      {/* 3-step TLDR */}
      <Stagger className="max-w-xl space-y-3">
        {steps.map((step, i) => (
          <StaggerItem key={i}>
            <div className="flex items-start gap-3">
              <span className="font-mono text-[14px] leading-[120%] tracking-[-0.0175rem] text-[var(--accent)]">
                {i + 1}.
              </span>
              <p className="font-mono text-[14px] leading-[120%] tracking-[-0.0175rem] text-[var(--text-secondary)]">
                {step}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      {/* Tab navigation */}
      <FadeIn className="mt-12 flex" delay={0.2}>
        <div className="inline-flex gap-2">
          {phases.map((phase, i) => (
            <button
              key={phase.id}
              onClick={() => setActiveTab(i)}
              className={cn(
                'rounded-[0.375rem] border px-4 py-2 font-mono text-[12px] uppercase tracking-[-0.015rem] transition-all duration-200',
                activeTab === i
                  ? 'border-[var(--accent)] text-[var(--accent)] bg-[var(--accent)]/5'
                  : 'border-[var(--border)] text-[var(--text-tertiary)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]'
              )}
            >
              {phase.label}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Active tab content */}
      <div className="mt-10">
        <TabContent id={activeTab} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Text */}
          <div className="flex flex-col">
            <h3
              className={cn(
                'text-[18px] leading-[100%] tracking-normal',
                'lg:text-[24px]',
                'font-normal text-[var(--text-primary)]'
              )}
            >
              {phases[activeTab].heading}
            </h3>
            <p className="mt-4 font-mono text-[14px] leading-[150%] tracking-[-0.0175rem] text-[var(--text-secondary)]">
              {phases[activeTab].description}
            </p>

            {/* Highlights */}
            <div className="mt-8 pt-6 space-y-4">
              {phases[activeTab].highlights.map((h) => (
                <div key={h.label} className="flex items-start gap-4">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-tertiary)] w-24 shrink-0 pt-px">
                    {h.label}
                  </span>
                  <span className="font-mono text-[13px] leading-[140%] tracking-[-0.015rem] text-[var(--text-primary)]">
                    {h.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Screenshot placeholder */}
          <div
            className={cn(
              'min-h-[280px] rounded-[0.375rem] border border-dashed border-white/50 bg-[var(--bg-base)]',
              'flex items-start justify-start p-6'
            )}
          >
            <div>
              <p className="font-mono text-[14px] uppercase leading-none tracking-[-0.0175rem] text-[var(--text-secondary)]">
                {phases[activeTab].screenshot.file}
              </p>
              <p className="mt-3 font-mono text-[12px] tracking-[-0.015rem] text-[var(--text-tertiary)]">
                {phases[activeTab].screenshot.hint}
              </p>
            </div>
          </div>
        </TabContent>
      </div>
    </section>
  )
}
