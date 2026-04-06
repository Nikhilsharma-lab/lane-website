import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

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
      'Figma integration',
      '3-sign-off quality gate',
      'Designer reflections',
      'Dev kanban with Design QA',
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
      'Weekly AI digest',
      'PM calibration scores',
      'Idea Board with voting',
      'Private AI nudges',
      'Morning briefings',
      'Capacity dashboard',
      'Smart assignment',
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
      'Custom integrations',
      'Dedicated support',
      'SSO & advanced security',
      'Custom onboarding',
      'SLA guarantee',
    ],
    cta: 'Contact Us',
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="px-6 py-16 lg:px-8 lg:py-24">
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
            Pricing
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
          Simple pricing.
          <br />
          <span className="text-[var(--text-secondary)]">No per-seat games.</span>
        </h2>

        <p className="mt-4 text-center text-[15px] text-[var(--text-secondary)]">
          Flat-rate plans. Save 8% with annual billing.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                'rounded-xl border p-6 lg:p-8 flex flex-col',
                tier.highlighted
                  ? 'border-[var(--accent)] bg-[var(--bg-surface)]'
                  : 'border-[var(--border)] bg-[var(--bg-surface)]'
              )}
            >
              <div>
                <h3 className="font-mono text-[12px] uppercase tracking-wider text-[var(--text-tertiary)]">
                  {tier.name}
                </h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-[36px] font-semibold tracking-tight text-[var(--text-primary)]">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-[14px] text-[var(--text-tertiary)]">
                      {tier.period}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-[13px] text-[var(--text-secondary)]">
                  {tier.description}
                </p>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check size={14} className="mt-0.5 shrink-0 text-[var(--accent)]" />
                    <span className="text-[13px] text-[var(--text-secondary)]">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#early-access"
                className={cn(
                  'mt-8 inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium transition-colors',
                  tier.highlighted
                    ? 'bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] relative overflow-hidden before:absolute before:inset-0 before:opacity-0 before:transition-opacity hover:before:opacity-100 before:bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(255,255,255,0.1)_4px,rgba(255,255,255,0.1)_8px)] before:[animation:slidePattern_1s_linear_infinite]'
                    : 'border border-[var(--border)] bg-[var(--bg-base)]/50 backdrop-blur-md text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]'
                )}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
