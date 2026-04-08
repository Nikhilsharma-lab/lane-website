import type { Metadata } from 'next'
import { Header } from '@/components/marketing/header'
import { Footer, FooterBar } from '@/components/marketing/footer'

export const metadata: Metadata = {
  title: 'About — Lane',
  description:
    'Lane is the operating system for design teams. Built around how design actually happens — non-linear, exploratory, problem-first.',
}

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-b border-dashed border-rail">
      <div className="flex">
        <div className="w-2 lg:w-rail shrink-0 border-r border-dashed border-rail" />
        <div className="flex-1 min-w-0">{children}</div>
        <div className="w-2 lg:w-rail shrink-0 border-l border-dashed border-rail" />
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageShell>
          <article className="max-w-3xl mx-auto px-6 py-16 lg:py-24">
            <span className="inline-flex items-center gap-3 mb-6 font-mono text-xs uppercase leading-none text-ink-muted">
              <span className="size-2 rounded-full bg-accent [animation:blink_1.4s_ease-in-out_infinite]" />
              About
            </span>

            <h1 className="text-4xl lg:text-5xl font-normal text-ink leading-none mb-8">
              About Lane<span className="text-accent">.</span>
            </h1>

            <p className="text-md text-ink-muted leading-relaxed mb-12">
              Lane is the operating system for design teams. One workflow from
              the PM&apos;s first problem to the user&apos;s measured outcome —
              intake, context, handoff, and impact — built the way design
              actually happens. Design Streams replace tickets. Five
              scientific stages replace sprints. The whole tool is shaped to
              thinking work, not ship-it work, and runs on top of Figma so
              nobody has to migrate off the canvas they already use.
            </p>

            <section className="mb-12">
              <h2 className="font-mono uppercase text-xs text-ink mb-4">
                Why it exists
              </h2>
              <p className="text-md text-ink-muted leading-relaxed mb-4">
                Design teams run on tools borrowed from engineering. Jira and
                Linear are ticket systems shaped for linear, deadline-driven
                execution. Design work is none of those things. It is
                non-linear, exploratory, and starts with a problem that is
                usually framed wrong. Tickets flatten that into a to-do list
                and reward the wrong behavior.
              </p>
              <p className="text-md text-ink-muted leading-relaxed">
                The second failure mode is worse. Most &ldquo;productivity&rdquo;
                tooling aimed at design teams is surveillance in disguise —
                utilization dashboards, last-active timestamps, individual
                velocity scores, hours logged against tasks nobody scoped
                correctly. The trade is always the same: leaders get a
                number that feels like control, designers get slower and
                quieter, and the work that mattered — the framing, the
                exploration, the rewrite of a bad brief — never shows up
                on the chart at all. Lane exists because the ticket model
                and the surveillance model are both wrong, and nobody was
                building the alternative for the people actually doing the
                work.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-mono uppercase text-xs text-ink mb-4">
                Support, not surveillance
              </h2>
              <p className="text-md text-ink-muted leading-relaxed">
                No utilization percentages. No last-active timestamps. No
                individual velocity scores. No forced status updates. Leads
                see team health signals — Available, Stretched, Overloaded
                — never individual tracking. Reflections are the designer&apos;s
                own words, in their own time. AI nudges go to the designer
                first, never escalated automatically. This is not a policy
                statement tacked onto a feature list. It is the constraint
                the product is built under, and the reason Lane looks
                different from everything else in the category.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-mono uppercase text-xs text-ink mb-4">
                How it&apos;s being built
              </h2>
              <p className="text-md text-ink-muted leading-relaxed">
                Lane is a two-person company, AI-assisted end to end, built
                in public. <span className="text-ink">Nikhil</span>, Founder.{' '}
                <span className="text-ink">Nischal</span>, Co-Founder. A small
                team means fast iteration, direct contact with every early
                user, and no layers between the people using the product and
                the people making it. It also means the product ships before
                the deck — what you see on this site is the real thing, not
                a mockup of one.
              </p>
            </section>

            <section>
              <h2 className="font-mono uppercase text-xs text-ink mb-4">
                Get in touch
              </h2>
              <p className="text-md text-ink-muted leading-relaxed">
                Lane is in closed beta.{' '}
                <a
                  href="/#early-access"
                  className="text-accent underline underline-offset-4 hover:text-ink"
                >
                  Request early access
                </a>
                .
              </p>
            </section>
          </article>
        </PageShell>
        <PageShell>
          <Footer />
        </PageShell>
      </main>
      <FooterBar />
    </>
  )
}
