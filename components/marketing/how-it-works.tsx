'use client'

import { cn } from '@/lib/utils'
import { FadeIn, Stagger, StaggerItem } from './motion'

const steps = [
  'PM brings a problem. AI blocks it if it\'s a solution.',
  'Designer moves through five scientific stages. No deadlines. No timers. No surveillance.',
  'Dev builds from a locked spec. PM logs actual impact. AI closes the loop.',
]

type Phase = {
  id: string
  label: string
  heading: string
  description: string
  highlights: { label: string; value: string }[]
  visual: 'predesign' | 'design' | 'build' | 'impact'
}

const phases: Phase[] = [
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
    visual: 'predesign',
  },
  {
    id: 'design',
    label: '02 Design',
    heading: 'Five stages. No deadlines. No surveillance.',
    description:
      "Designers open a Design Stream, not a ticket. The AI Context Brief lands with the problem already framed. Work happens in Figma with version locking and a three sign-off quality gate. Reflections replace status updates. The point is thinking work, not ship-it work.",
    highlights: [
      { label: 'Surface', value: 'Design Stream + AI Context Brief' },
      { label: 'Quality gate', value: 'Three sign-offs before handoff' },
      { label: 'Progress', value: 'Reflections, never status updates' },
    ],
    visual: 'design',
  },
  {
    id: 'build',
    label: '03 Build',
    heading: 'Handoff Intelligence. Design QA gate.',
    description:
      'Handoff Intelligence packages the frame, redlines, edge cases, and acceptance criteria into a single dev-ready spec. The dev kanban routes every ticket through a Design QA gate, so nothing ships without designer confirmation.',
    highlights: [
      { label: 'Handoff', value: 'Frame, redlines, edge cases, criteria' },
      { label: 'Kanban', value: 'To Do → In Progress → Design QA → Done' },
      { label: 'Gate', value: 'Designer sign-off required to ship' },
    ],
    visual: 'build',
  },
  {
    id: 'impact',
    label: '04 Impact',
    heading: 'Measure the outcome. Close the loop.',
    description:
      'After ship, Lane measures the outcome the PM asked for in stage 01. Did the metric move. Did user behavior change. Designer reflections log what worked. PM calibration scores update — PMs who frame problems well earn more design attention.',
    highlights: [
      { label: 'Measure', value: 'Predicted vs. actual outcome' },
      { label: 'Reflection', value: 'Designer logs what worked' },
      { label: 'Calibration', value: 'Per-PM rolling accuracy score' },
    ],
    visual: 'impact',
  },
]

/* ── Stage visuals — minimal schematics in the wireframe aesthetic ── */

function StageVisual({ kind }: { kind: Phase['visual'] }) {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <div
      className={cn(
        'relative min-h-screenshot rounded-sm border border-dashed border-rail bg-canvas',
        'overflow-hidden p-6'
      )}
    >
      <div className="absolute inset-0 opacity-[0.04] bg-grid-sm" />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  )

  if (kind === 'predesign') {
    return (
      <Wrapper>
        <span className="font-mono text-2xs uppercase tracking-wider text-ink-subtle">
          Intake gate
        </span>
        <div className="mt-4 space-y-3">
          <div className="rounded-sm border border-dashed border-rail bg-canvas/80 px-3 py-2.5">
            <p className="font-mono text-2xs leading-snug text-ink-muted">
              &quot;Make the button bigger&quot;
            </p>
            <span className="mt-1.5 inline-block rounded-xs bg-accent-soft px-1.5 py-0.5 font-mono text-2xs uppercase tracking-wider text-accent">
              Solution-specific · blocked
            </span>
          </div>
          <div className="rounded-sm border border-accent/30 bg-canvas/80 px-3 py-2.5">
            <div className="mb-1.5 flex items-center gap-1.5">
              <span className="flex size-3.5 items-center justify-center rounded-xs bg-accent-soft">
                <span className="font-mono text-2xs font-bold text-accent">AI</span>
              </span>
              <span className="font-mono text-2xs uppercase tracking-wider text-accent">
                Reframed
              </span>
            </div>
            <p className="font-mono text-2xs leading-snug text-ink">
              &quot;Conversion dropped 12%. What&apos;s causing friction?&quot;
            </p>
            <span className="mt-1.5 inline-block rounded-xs bg-success-soft px-1.5 py-0.5 font-mono text-2xs uppercase tracking-wider text-success">
              Problem-framed · queued
            </span>
          </div>
        </div>
      </Wrapper>
    )
  }

  if (kind === 'design') {
    const stages = ['Sense', 'Frame', 'Diverge', 'Converge', 'Prove']
    return (
      <Wrapper>
        <span className="font-mono text-2xs uppercase tracking-wider text-ink-subtle">
          Design stream
        </span>
        <div className="mt-4 flex flex-col gap-2.5">
          {stages.map((s, i) => (
            <div
              key={s}
              className="flex items-center gap-3 rounded-sm border border-dashed border-rail bg-canvas/80 px-3 py-2"
            >
              <span className="font-mono text-2xs text-ink-faint">0{i + 1}</span>
              <span
                className={cn(
                  'size-1 rounded-full',
                  i < 2 ? 'bg-success' : i === 2 ? 'bg-accent' : 'bg-ink-subtle'
                )}
              />
              <span
                className={cn(
                  'font-mono text-2xs uppercase tracking-wider',
                  i === 2 ? 'text-accent' : i < 2 ? 'text-ink' : 'text-ink-subtle'
                )}
              >
                {s}
              </span>
              {i === 2 && (
                <span className="ml-auto font-mono text-2xs text-ink-faint">
                  Reflection logged
                </span>
              )}
            </div>
          ))}
        </div>
      </Wrapper>
    )
  }

  if (kind === 'build') {
    const cols: { title: string; items: string[]; tone: 'idle' | 'active' }[] = [
      { title: 'To Do', items: ['Spec ready'], tone: 'idle' },
      { title: 'In Progress', items: ['Cart flow'], tone: 'idle' },
      { title: 'Design QA', items: ['Checkout'], tone: 'active' },
      { title: 'Done', items: ['Header'], tone: 'idle' },
    ]
    return (
      <Wrapper>
        <span className="font-mono text-2xs uppercase tracking-wider text-ink-subtle">
          Dev kanban
        </span>
        <div className="mt-4 grid grid-cols-4 gap-2">
          {cols.map((c) => (
            <div
              key={c.title}
              className={cn(
                'rounded-sm border border-dashed bg-canvas/80 px-2 py-2',
                c.tone === 'active' ? 'border-accent/40' : 'border-rail'
              )}
            >
              <span
                className={cn(
                  'block font-mono text-2xs uppercase tracking-wider',
                  c.tone === 'active' ? 'text-accent' : 'text-ink-subtle'
                )}
              >
                {c.title}
              </span>
              {c.items.map((it) => (
                <div
                  key={it}
                  className="mt-2 rounded-xs border border-line-subtle bg-canvas px-1.5 py-1 font-mono text-2xs text-ink-muted"
                >
                  {it}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2 rounded-sm border border-dashed border-rail bg-canvas/80 px-3 py-2">
          <span className="size-1.5 rounded-full bg-accent" />
          <span className="font-mono text-2xs uppercase tracking-wider text-ink-muted">
            Gate
          </span>
          <span className="font-mono text-2xs text-ink">
            Awaiting designer sign-off
          </span>
        </div>
      </Wrapper>
    )
  }

  // impact
  return (
    <Wrapper>
      <span className="font-mono text-2xs uppercase tracking-wider text-ink-subtle">
        Outcome ledger
      </span>
      <div className="mt-4 space-y-3">
        <div className="rounded-sm border border-dashed border-rail bg-canvas/80 px-3 py-2.5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-2xs uppercase tracking-wider text-ink-subtle">
              Predicted
            </span>
            <span className="font-mono text-sm text-ink-muted">+8% conv</span>
          </div>
          <div className="mt-1 flex items-center justify-between">
            <span className="font-mono text-2xs uppercase tracking-wider text-ink-subtle">
              Actual
            </span>
            <span className="font-mono text-sm text-accent">+11% conv</span>
          </div>
        </div>
        <div className="rounded-sm border border-dashed border-rail bg-canvas/80 px-3 py-2.5">
          <span className="font-mono text-2xs uppercase tracking-wider text-ink-subtle">
            PM calibration
          </span>
          <div className="mt-2 flex items-center gap-2">
            <div className="h-1 flex-1 overflow-hidden rounded-xs bg-line-subtle">
              <div className="h-full w-[72%] bg-accent" />
            </div>
            <span className="font-mono text-2xs text-ink">72%</span>
          </div>
        </div>
        <div className="rounded-sm border border-dashed border-rail bg-canvas/80 px-3 py-2.5">
          <span className="font-mono text-2xs uppercase tracking-wider text-ink-subtle">
            Reflection
          </span>
          <p className="mt-1 font-mono text-2xs leading-snug text-ink-muted">
            &quot;Friction was at the address step, not the button.&quot;
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-4 pt-8 pb-16 lg:px-9 lg:pt-12 lg:pb-24">
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
            How it works
          </span>
          <h2
            className={cn(
              'text-3xl leading-none',
              'lg:text-5xl',
              'font-normal text-ink'
            )}
          >
            From idea to impact.
            <br />
            One system.
          </h2>
        </div>
      </FadeIn>

      {/* 3-step TLDR */}
      <Stagger className="max-w-xl space-y-3">
        {steps.map((step, i) => (
          <StaggerItem key={i}>
            <div className="flex items-start gap-3">
              <span className="font-mono text-base leading-tight text-accent">
                {i + 1}.
              </span>
              <p className="font-mono text-base leading-tight text-ink-muted">
                {step}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      {/* Stacked vertical stages — equal depth */}
      <div className="mt-20 space-y-20 lg:mt-24 lg:space-y-28">
        {phases.map((phase, i) => (
          <FadeIn key={phase.id} delay={0.05}>
            <div className="border-t border-line pt-10 lg:pt-12">
              {/* Stage label */}
              <div className="mb-8 flex items-baseline gap-4">
                <span className="font-mono text-base uppercase leading-none text-accent">
                  {phase.label.split(' ')[0]}
                </span>
                <span className="font-mono text-base uppercase leading-none text-ink-subtle">
                  {phase.label.split(' ').slice(1).join(' ')}
                </span>
                <span className="ml-auto font-mono text-2xs uppercase tracking-wider text-ink-faint">
                  Stage {i + 1} of {phases.length}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                {/* Text */}
                <div className="flex flex-col">
                  <h3
                    className={cn(
                      'text-lg leading-tight',
                      'lg:text-2xl',
                      'font-normal text-ink'
                    )}
                  >
                    {phase.heading}
                  </h3>
                  <p className="mt-4 font-mono text-base leading-normal text-ink-muted max-w-md">
                    {phase.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-8 border-t border-line pt-6 space-y-4">
                    {phase.highlights.map((h) => (
                      <div key={h.label} className="flex items-start gap-4">
                        <span className="font-mono text-xs uppercase tracking-wider text-ink-subtle w-28 shrink-0 pt-px">
                          {h.label}
                        </span>
                        <span className="font-mono text-sm leading-snug text-ink">
                          {h.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <StageVisual kind={phase.visual} />
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
