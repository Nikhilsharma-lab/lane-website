import type { Metadata } from 'next'
import { Header } from '@/components/marketing/header'
import { Footer, FooterBar } from '@/components/marketing/footer'

export const metadata: Metadata = {
  title: 'Manifesto — Lane',
  description:
    'Design teams have been forced into tools built for engineers. The price is creativity, autonomy, and trust. Lane is the correction.',
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

const vocab = [
  {
    from: 'Status update',
    to: 'Reflection',
    why: 'A reflection is written by the designer, for the designer. A status update is written for a manager.',
  },
  {
    from: 'Sprint',
    to: 'Cycle',
    why: 'Design is not a sprint. It is a cycle of sensing, framing, diverging, converging, and shipping — and then doing it again.',
  },
  {
    from: 'Velocity',
    to: 'Throughput',
    why: 'Velocity measures how fast you move. Throughput measures what actually left the building and changed something for users.',
  },
  {
    from: 'Utilization',
    to: 'Capacity',
    why: 'Utilization is a factory metric. Capacity is an honest conversation about what a person can hold this week.',
  },
  {
    from: 'Ticket',
    to: 'Request',
    why: 'A ticket implies a queue and a worker. A request implies a person asking another person for help solving a problem.',
  },
  {
    from: 'Due date',
    to: 'Appetite',
    why: 'A due date pretends to know what the work will cost. An appetite says how much we are willing to spend before we re-check the problem.',
  },
] as const

const fiveNos = [
  {
    line: 'No surveillance.',
    why: 'No last-active timestamps, no time-per-task, no screen-activity logs. Privacy is the default, not a toggle.',
  },
  {
    line: 'No tickets.',
    why: 'Design work is not a queue of identical cards. It is a living stream of problems with context, appetite, and consequence.',
  },
  {
    line: 'No tools borrowed from engineering.',
    why: 'Linear conventions, sprint rituals, and velocity charts were built for execution work. They punish the thinking work designers do.',
  },
  {
    line: 'No individual velocity scores.',
    why: 'Ranking designers by speed produces faster slop, not better outcomes. We measure shipped impact at the team level.',
  },
  {
    line: 'No forced status theatre.',
    why: 'Standups, check-ins, and weekly screenshots of in-progress Figma frames are performance, not progress. Reflections go to the designer first.',
  },
] as const

export default function ManifestoPage() {
  return (
    <>
      <Header />
      <main>
        <PageShell>
          <article className="max-w-3xl mx-auto px-6 py-16 lg:py-24">
            <span className="inline-flex items-center gap-3 mb-6 font-mono text-xs uppercase leading-none text-ink-muted">
              <span className="size-2 rounded-full bg-accent [animation:blink_1.4s_ease-in-out_infinite]" />
              Manifesto
            </span>

            <h1 className="text-4xl lg:text-5xl font-normal text-ink leading-none mb-8">
              Design deserves its own tool
              <span className="text-accent">.</span>
            </h1>

            <p className="text-md text-ink-muted leading-relaxed mb-6">
              For fifteen years, design teams have been forced into tools
              built for engineers. The price has been creativity, autonomy,
              and trust. Lane is the correction.
            </p>
            <p className="text-md text-ink-muted leading-relaxed mb-12">
              This page is not a pitch. It is the line we drew before we
              wrote a single line of code, and the line we will keep drawing
              every time a feature request threatens to cross it. If you
              disagree with what follows, Lane is not the tool for you — and
              we would rather you know now.
            </p>

            {/* Surveillance */}
            <section className="mb-12">
              <h2 className="font-mono uppercase text-xs text-ink mb-4">
                1. The surveillance problem
              </h2>
              <p className="text-md text-ink-muted leading-relaxed mb-4">
                Somewhere along the way, &ldquo;visibility&rdquo; stopped
                meaning &ldquo;the team understands the work&rdquo; and started
                meaning &ldquo;the manager can watch the worker.&rdquo;
                Last-active timestamps. Time per card. Individual velocity
                scores. Heatmaps of who opened Figma on a Sunday. These are not
                project-management features. They are productivity-tracking
                features wearing a project-management costume.
              </p>
              <p className="text-md text-ink-muted leading-relaxed mb-4">
                Design work is the part of the product process that most needs
                quiet, slack, and permission to be wrong in public. It is the
                work that happens in the shower, in the margin of a notebook,
                in the forty-fifth iteration of a frame nobody will ever see.
                Surveillance tooling does not make that work faster. It makes
                it hide. It teaches designers to optimize for the chart, not
                the user. It turns leads into supervisors and teammates into
                data points.
              </p>
              <p className="text-md text-ink-muted leading-relaxed mb-4">
                The honest answer is that most of these metrics exist because
                they are easy to collect, not because they are useful. A
                timestamp is cheap. Understanding what a designer actually did
                this week is expensive. So the industry settled for cheap, and
                called it rigor. Designers, reasonably, stopped trusting the
                dashboard. Leads, reasonably, stopped believing the numbers.
                Everyone kept the tool anyway because the alternative felt
                like flying blind.
              </p>
              <p className="text-md text-ink-muted leading-relaxed">
                Support produces truth. Surveillance produces performance. We
                picked a side.
              </p>
            </section>

            {/* Vocabulary */}
            <section className="mb-12">
              <h2 className="font-mono uppercase text-xs text-ink mb-4">
                2. The words matter
              </h2>
              <p className="text-md text-ink-muted leading-relaxed mb-6">
                Every tool you use is a vocabulary. The vocabulary shapes the
                thinking. The thinking shapes the work. Ticket systems teach
                designers to call their craft a queue, their research a
                blocker, their exploration a delay. After a while, the team
                starts to believe it. Lane refuses that vocabulary and
                replaces it with one built around how design actually happens
                — the words below are not cosmetic, they change what the tool
                will let you do.
              </p>

              <dl className="border border-dashed border-rail rounded-sm divide-y divide-dashed divide-rail">
                {vocab.map((v) => (
                  <div
                    key={v.from}
                    className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-x-4 gap-y-2 px-5 py-4 items-baseline"
                  >
                    <dt className="font-mono text-xs uppercase tracking-wider text-ink-faint line-through decoration-1">
                      {v.from}
                    </dt>
                    <span className="hidden sm:block text-accent font-mono text-xs">
                      &rarr;
                    </span>
                    <dd className="font-mono text-xs uppercase tracking-wider text-ink">
                      {v.to}
                    </dd>
                    <p className="sm:col-span-3 text-sm text-ink-muted leading-snug font-mono">
                      {v.why}
                    </p>
                  </div>
                ))}
              </dl>
            </section>

            {/* The five no's */}
            <section className="mb-12">
              <h2 className="font-mono uppercase text-xs text-ink mb-4">
                3. The five no&rsquo;s
              </h2>
              <p className="text-md text-ink-muted leading-relaxed mb-6">
                Lane is defined as much by what it refuses as by what it
                ships. These are the lines we will not cross, even when a
                customer asks, even when a competitor does, even when it would
                close a deal.
              </p>

              <ol className="space-y-5">
                {fiveNos.map((n, i) => (
                  <li key={n.line} className="flex gap-4">
                    <span className="font-mono text-xs uppercase text-accent pt-1 tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="text-md text-ink font-normal leading-tight mb-1">
                        {n.line}
                      </p>
                      <p className="font-mono text-sm text-ink-muted leading-snug">
                        {n.why}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* Closing */}
            <section className="mb-12">
              <h2 className="font-mono uppercase text-xs text-ink mb-4">
                4. What Lane is for
              </h2>
              <p className="text-md text-ink-muted leading-relaxed mb-4">
                Lane is for the designer who wants to think before they ship,
                and the lead who wants to protect that thinking. It is for
                teams that measure what changed for users, not what moved on a
                board. It is a workflow shaped to exploration, reframing, and
                craft — a tool that treats design as a discipline with its own
                rhythm, not a cheaper version of engineering.
              </p>
              <p className="text-md text-ink-muted leading-relaxed mb-4">
                Lane is for the PM who wants better problems framed, not
                faster tickets closed. It is for the engineer who is tired of
                receiving a final Figma frame without the reasoning behind it.
                It is for the founder who noticed their design team getting
                quieter the more dashboards they added, and did not want to
                pretend that was progress.
              </p>
              <p className="text-md text-ink-muted leading-relaxed">
                If any of that sounds like your team,{' '}
                <a
                  href="/#early-access"
                  className="text-accent underline underline-offset-4 hover:text-ink"
                >
                  join the waitlist
                </a>
                . We are building Lane for you, and we would rather hear from
                you early than guess.
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
