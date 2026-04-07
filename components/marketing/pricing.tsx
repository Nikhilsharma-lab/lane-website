'use client'

import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'
import { FadeIn, Stagger, StaggerItem } from './motion'

const tiers = [
  {
    name: 'Starter',
    price: '$99',
    period: '/month',
    description: '1–3 person design team',
    highlighted: false,
    features: [
      'AI intake gate',
      '4-phase workflow',
      'Figma OAuth + version locking',
      '3-sign-off quality gate',
      'Designer reflections',
      'Dev kanban with Design QA',
      'Weekly AI digest',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    price: '$299',
    period: '/month',
    description: '4–10 person team',
    highlighted: true,
    features: [
      'Everything in Starter',
      'Design Radar',
      'AI Context Brief',
      'Handoff Intelligence',
      'Dev Board',
      'Projects (multi-product)',
      'PM calibration scores',
      'Idea Board with voting',
      'Private AI nudges',
      'Morning briefings',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: '10+ seats, SLA',
    highlighted: false,
    features: [
      'Everything in Professional',
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
  return (
    <section id="pricing" className="py-16 lg:py-24 px-4 lg:px-9">
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
            Pricing
          </span>
          <h2
            className={cn(
              'text-3xl leading-none',
              'lg:text-5xl',
              'font-normal text-ink'
            )}
          >
            Flat-rate. No per-seat confusion.
          </h2>
        </div>
      </FadeIn>

      {/* 3 tier cards */}
      <Stagger className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
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
              {/* Numbered badge — factory.ai pricing pattern */}
              <span className="font-mono text-xs leading-none text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 font-mono text-base uppercase leading-none text-ink-muted">
                {tier.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-normal text-ink">
                  {tier.price}
                </span>
                {tier.period && (
                  <span className="font-mono text-base text-ink-subtle">
                    {tier.period}
                  </span>
                )}
              </div>
              <p className="mt-2 font-mono text-base leading-tight text-ink-muted">
                {tier.description}
              </p>
            </div>

            <ul className="mt-6 flex-1 space-y-3">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check size={14} className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-base leading-tight text-ink-muted">{f}</span>
                </li>
              ))}
            </ul>

            {/* Button — factory.ai charcoal style */}
            <a
              href="#early-access"
              className={cn(
                'group relative mt-8 inline-flex items-center justify-center',
                'h-btn-md rounded-xs border border-transparent px-3.5',
                'bg-btn transition-colors duration-150',
                'hover:bg-btn-hover',
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
