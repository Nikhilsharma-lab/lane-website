import { cn } from '@/lib/utils'
import { FadeIn } from './motion'

const faqs = [
  {
    q: 'How is Lane different from Linear, Jira, or Notion?',
    a: 'Linear and Jira are ticket systems built for engineers \u2014 linear, deadline-driven, execution-first. Notion is a doc tool. Lane is a workflow built around how design actually happens \u2014 non-linear, exploratory, problem-first. Design Streams replace tickets. Five scientific stages replace sprints. The whole tool is shaped to thinking work, not ship-it work.',
  },
  {
    q: 'Do we need to migrate off Figma?',
    a: 'No. Lane runs on top of Figma via OAuth. Designers keep designing in Figma. Lane handles everything around the design work \u2014 intake, context, handoff, impact measurement.',
  },
  {
    q: 'Does Lane track individual designer activity?',
    a: 'No. No last-active timestamps. No time-per-task tracking. No individual velocity scores. No \u201cwho opened Figma at 11pm\u201d reporting. We measure team health and shipped impact \u2014 never individual surveillance.',
  },
  {
    q: 'What does the AI intake gate actually do?',
    a: 'When a PM files a request, our model classifies it as problem-framed, solution-specific, or hybrid. \u201cMake the button bigger\u201d gets blocked. \u201cConversion dropped 12% on the checkout step \u2014 what\u2019s causing the drop-off?\u201d passes through and auto-creates a Design Stream with priority and complexity already estimated.',
  },
  {
    q: 'Can PMs use Lane without designers learning a new tool?',
    a: 'Yes \u2014 PMs file through a single intake form and receive digests. Designers get a workspace built around their actual workflow. The tool shape-shifts by role.',
  },
  {
    q: 'Do you integrate with Slack?',
    a: 'Not in V1. We made this call deliberately \u2014 Slack-first workflows reproduce the chaos Lane is built to fix. Lane sends digests via email and surfaces escalations in-app. Slack notifications are on the roadmap for V2, opt-in, summary-only.',
  },
  {
    q: 'What happens to my data if I cancel?',
    a: 'Full export of every Design Stream, brief, and impact log as JSON + CSV. Thirty-day grace period before deletion. No dark patterns, no hostage data.',
  },
  {
    q: 'When does the beta open and how do I get in?',
    a: 'Beta cohort opens Summer 2026, capped at 100 design teams. Join the waitlist above \u2014 we prioritize design leads at teams of 8+ designers. We\u2019ll reach out personally before granting access.',
  },
]

export function Faq() {
  return (
    <section id="faq" className="py-16 lg:py-24 px-4 lg:px-9">
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
            FAQ
          </span>
          <h2
            className={cn(
              'text-3xl leading-none',
              'lg:text-5xl',
              'font-normal text-ink'
            )}
          >
            Questions we hear most<span className="text-accent">.</span>
          </h2>
        </div>
      </FadeIn>

      {/* Accordion list */}
      <FadeIn delay={0.1}>
        <ul className="border-t border-dashed border-rail">
          {faqs.map((item) => (
            <li key={item.q} className="border-b border-dashed border-rail">
              <details className="group">
                <summary
                  className={cn(
                    'flex items-start justify-between gap-6',
                    'cursor-pointer list-none py-6',
                    'text-md lg:text-lg font-normal text-ink',
                    'transition-colors duration-200 hover:text-accent',
                    'rounded-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas',
                    '[&::-webkit-details-marker]:hidden'
                  )}
                >
                  <span className="flex-1">{item.q}</span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      'indicator shrink-0 select-none',
                      'font-mono text-xl leading-none text-accent',
                      'transition-transform duration-200 ease-out',
                      'translate-y-0.5',
                      'group-open:rotate-45'
                    )}
                  >
                    +
                  </span>
                </summary>
                <p
                  className={cn(
                    'pb-6 pr-12 max-w-3xl',
                    'font-mono text-base leading-normal text-ink-muted'
                  )}
                >
                  {item.a}
                </p>
              </details>
            </li>
          ))}
        </ul>
      </FadeIn>
    </section>
  )
}
