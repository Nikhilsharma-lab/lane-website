'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'
import { FadeIn, Stagger, StaggerItem } from './motion'

const PRICE_PER_SEAT_MONTHLY = 29
const PRICE_PER_SEAT_ANNUAL = 23
const MIN_SEATS = 3

const tiers = [
  {
    name: 'Team',
    pricing: 'per-seat' as const,
    highlighted: true,
    features: [
      'AI intake gate',
      '4-phase workflow',
      'Figma OAuth + version locking',
      '3-sign-off quality gate',
      'Designer reflections',
      'Dev kanban with Design QA',
      'Weekly AI digest',
      'Design Radar',
      'AI Context Brief',
      'Handoff Intelligence',
      'PM calibration scores',
      'Idea Board with voting',
    ],
    cta: 'Request Early Access',
  },
  {
    name: 'Enterprise',
    pricing: 'custom' as const,
    description: 'SSO, SLA, dedicated support',
    highlighted: false,
    features: [
      'Everything in Team',
      'Lane Agent',
      'Skills System',
      'Figma Agent',
      'Cross-tool integrations',
      'SSO & advanced security',
      'Dedicated support + SLA',
    ],
    cta: 'Contact Us',
  },
]

export function Pricing() {
  const [annual, setAnnual] = useState(false)
  const seatPrice = annual ? PRICE_PER_SEAT_ANNUAL : PRICE_PER_SEAT_MONTHLY
  const minTotal = seatPrice * MIN_SEATS

  return (
    <section id="pricing" className="py-16 lg:py-24 px-4 lg:px-9">
      {/* Section header */}
      <FadeIn>
        <div className="pt-6 mb-8">
          <span
            className={cn(
              'inline-flex items-center gap-3 mb-6',
              'font-mono text-base uppercase leading-none text-ink-muted'
            )}
          >
            <span className="size-2 rounded-full bg-accent [animation:blink_1.4s_ease-in-out_infinite]" />
            Pricing
          </span>
          <h2
            className={cn(
              'text-3xl leading-none',
              'lg:text-5xl',
              'font-normal text-ink'
            )}
          >
            $29 per designer<span className="text-accent">.</span>{' '}That&apos;s it.
          </h2>

          {/* Inline comparison links — for visitors arriving with an existing tool in mind */}
          <p className="mt-5 font-mono text-base text-ink-muted">
            Coming from{' '}
            <a
              href="/vs/jira"
              className="text-ink underline decoration-rail underline-offset-4 transition-colors hover:text-accent hover:decoration-accent rounded-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            >
              Jira
            </a>
            ,{' '}
            <a
              href="/vs/linear"
              className="text-ink underline decoration-rail underline-offset-4 transition-colors hover:text-accent hover:decoration-accent rounded-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            >
              Linear
            </a>
            , or{' '}
            <a
              href="/vs/notion"
              className="text-ink underline decoration-rail underline-offset-4 transition-colors hover:text-accent hover:decoration-accent rounded-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            >
              Notion
            </a>
            ? See the honest comparison.
          </p>
        </div>
      </FadeIn>

      {/* Billing toggle */}
      <FadeIn delay={0.1}>
        <div className="mb-12 inline-flex items-center gap-1 rounded-xs border border-line bg-surface p-1">
          <button
            type="button"
            onClick={() => setAnnual(false)}
            className={cn(
              'h-btn-sm px-4 rounded-xs',
              'font-mono text-2xs uppercase tracking-wider transition-colors',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface',
              !annual
                ? 'bg-canvas text-ink'
                : 'text-ink-subtle hover:text-ink-muted'
            )}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setAnnual(true)}
            className={cn(
              'h-btn-sm px-4 rounded-xs',
              'font-mono text-2xs uppercase tracking-wider transition-colors',
              'inline-flex items-center gap-2',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface',
              annual
                ? 'bg-canvas text-ink'
                : 'text-ink-subtle hover:text-ink-muted'
            )}
          >
            Annual
            <span className="text-accent">Save 20%</span>
          </button>
        </div>
      </FadeIn>

      {/* 2 tier cards */}
      <Stagger className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
        {tiers.map((tier, i) => (
          <StaggerItem
            key={tier.name}
            className={cn(
              'rounded-sm border p-6 lg:p-8 flex flex-col',
              tier.highlighted
                ? 'border-accent bg-surface'
                : 'border-line bg-surface'
            )}
          >
            <div>
              {/* Numbered badge */}
              <span className="font-mono text-xs leading-none text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 font-mono text-base uppercase leading-none text-ink-muted">
                {tier.name}
              </h3>
              {tier.pricing === 'per-seat' ? (
                <div className="mt-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-normal text-ink">
                      ${seatPrice}
                    </span>
                    <span className="font-mono text-base text-ink-subtle">
                      /seat/month
                    </span>
                  </div>
                  {annual && (
                    <p className="mt-1 font-mono text-2xs uppercase tracking-wider text-ink-faint">
                      billed annually
                    </p>
                  )}
                  <p className="mt-2 font-mono text-base leading-tight text-ink-muted">
                    From ${minTotal}/month ({MIN_SEATS}-seat minimum)
                  </p>
                </div>
              ) : (
                <div className="mt-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-normal text-ink">
                      Custom
                    </span>
                  </div>
                  <p className="mt-2 font-mono text-base leading-tight text-ink-muted">
                    {tier.description}
                  </p>
                </div>
              )}
            </div>

            <ul className="mt-6 flex-1 space-y-3">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check size={14} className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-base leading-tight text-ink-muted">{f}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <a
              href="#early-access"
              className={cn(
                'group relative mt-8 inline-flex items-center justify-center',
                'h-btn-md rounded-xs border border-transparent px-3.5',
                'bg-btn transition-colors duration-150',
                'hover:bg-btn-hover',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface',
                'font-mono text-base uppercase leading-none',
                'text-btn-ink hover:text-btn-ink-hover'
              )}
              style={{ '--lines-color': 'var(--color-btn-lines)' } as React.CSSProperties}
            >
              <span className="relative z-10">{tier.cta}</span>
              <span
                className={cn(
                  'pointer-events-none absolute inset-0 rounded-xs opacity-0',
                  'group-hover:[animation:delayedFadeIn_100ms_ease-out_forwards]'
                )}
              >
                <span
                  className={cn(
                    'absolute inset-0 bg-stripe',
                    '[animation:slidePattern_2000ms_linear_infinite]'
                  )}
                />
              </span>
            </a>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
