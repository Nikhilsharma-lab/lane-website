import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/marketing/motion'
import { WireframeCell } from '@/components/marketing/wireframe-cell'
import type { CellState, VsContent } from '@/lib/vs-content'

/* ─────────────────────────── Cell indicator ─────────────────────────── */

function CellIndicator({ state }: { state: CellState }) {
  if (state === 'full') {
    return (
      <span className="inline-flex items-center gap-2 font-mono text-2xs uppercase tracking-wider text-accent">
        <span className="size-2 bg-accent" aria-hidden />
        Full
      </span>
    )
  }
  if (state === 'partial') {
    return (
      <span className="inline-flex items-center gap-2 font-mono text-2xs uppercase tracking-wider text-ink-muted">
        <span
          className="size-2 border border-ink-muted"
          style={{
            backgroundImage:
              'linear-gradient(135deg, var(--color-ink-muted) 0 50%, transparent 50% 100%)',
          }}
          aria-hidden
        />
        Partial
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-2 font-mono text-2xs uppercase tracking-wider text-ink-faint">
      <span className="size-2 border border-ink-faint" aria-hidden />
      None
    </span>
  )
}

/* ───────────────────────────── Hero block ───────────────────────────── */

function VsHero({ content }: { content: VsContent }) {
  return (
    <section className="py-14 lg:py-18 px-4 lg:px-9">
      <FadeIn className="mb-6">
        <span className="inline-flex items-center gap-3 font-mono text-base uppercase leading-none text-ink-muted">
          <span className="size-2 rounded-full bg-accent [animation:blink_1.4s_ease-in-out_infinite]" />
          {content.eyebrow}
        </span>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h1
          className={cn(
            'text-4xl tracking-display-sm leading-none',
            'md:text-5xl md:tracking-display-md',
            'lg:text-6xl lg:tracking-display-lg',
            'xl:text-7xl xl:tracking-display-xl',
            'font-normal text-ink max-w-5xl'
          )}
        >
          {content.headline.line1}
          <br />
          {content.headline.line2}
          <span className="text-accent">.</span>
        </h1>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="mt-6 font-mono text-base lg:text-md leading-normal text-ink-muted max-w-2xl">
          {content.subhead}
        </p>
      </FadeIn>
    </section>
  )
}

/* ──────────────────────────── Verdict card ──────────────────────────── */

function VsVerdict({ content }: { content: VsContent }) {
  return (
    <section className="py-14 lg:py-18 px-4 lg:px-9">
      <FadeIn className="mb-8">
        <span className="font-mono text-2xs uppercase tracking-wider text-ink-subtle">
          The honest verdict
        </span>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-rail border border-dashed border-rail">
        <FadeIn className="bg-canvas p-6 lg:p-8">
          <div className="font-mono text-2xs uppercase tracking-wider text-ink-faint mb-3">
            Pick {content.competitor}
          </div>
          <p className="font-mono text-base leading-relaxed text-ink">
            {content.verdict.pickCompetitor}
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="bg-canvas p-6 lg:p-8 relative">
          <div className="font-mono text-2xs uppercase tracking-wider text-accent mb-3 inline-flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-accent" />
            Pick Lane
          </div>
          <p className="font-mono text-base leading-relaxed text-ink">
            {content.verdict.pickLane}
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────────────── Narrative split ────────────────────────── */

function VsNarrative({ content }: { content: VsContent }) {
  return (
    <section className="py-14 lg:py-18 px-4 lg:px-9">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <FadeIn>
          <div className="font-mono text-2xs uppercase tracking-wider text-ink-faint mb-4">
            When {content.competitor} is the right call
          </div>
          <h2 className="text-2xl md:text-3xl font-normal tracking-tight leading-tight text-ink mb-6">
            We&apos;re not pretending {content.competitor} is bad
            <span className="text-accent">.</span>
          </h2>
          <div className="space-y-4">
            {content.competitorRightWhen.map((p, i) => (
              <p key={i} className="font-mono text-sm leading-relaxed text-ink-muted">
                {p}
              </p>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="font-mono text-2xs uppercase tracking-wider text-accent mb-4 inline-flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-accent" />
            When Lane is the right call
          </div>
          <h2 className="text-2xl md:text-3xl font-normal tracking-tight leading-tight text-ink mb-6">
            The line we draw, drawn honestly
            <span className="text-accent">.</span>
          </h2>
          <div className="space-y-4">
            {content.laneRightWhen.map((p, i) => (
              <p key={i} className="font-mono text-sm leading-relaxed text-ink-muted">
                {p}
              </p>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ──────────────────────────── Feature matrix ────────────────────────── */

function VsMatrix({ content }: { content: VsContent }) {
  return (
    <section className="py-14 lg:py-18 px-4 lg:px-9">
      <FadeIn className="mb-8">
        <span className="font-mono text-2xs uppercase tracking-wider text-ink-subtle">
          Feature matrix
        </span>
        <h2 className="mt-3 text-2xl md:text-3xl font-normal tracking-tight leading-tight text-ink">
          Twelve capabilities, three honest states
          <span className="text-accent">.</span>
        </h2>
        <p className="mt-3 font-mono text-sm leading-relaxed text-ink-muted max-w-2xl">
          No green checkmark soup. Each cell is annotated, including the rows where Lane is
          intentionally absent — design throughput isn&apos;t velocity, and we won&apos;t pretend it is.
        </p>
      </FadeIn>

      {/* Desktop: real table */}
      <div className="hidden md:block border border-dashed border-rail">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-dashed border-rail bg-surface/50">
              <th className="text-left px-5 py-4 font-mono text-2xs uppercase tracking-wider text-ink-subtle w-2/5">
                Capability
              </th>
              <th className="text-left px-5 py-4 font-mono text-2xs uppercase tracking-wider text-ink-subtle border-l border-dashed border-rail">
                {content.competitor}
              </th>
              <th className="text-left px-5 py-4 font-mono text-2xs uppercase tracking-wider text-accent border-l border-dashed border-rail">
                Lane
              </th>
            </tr>
          </thead>
          <tbody>
            {content.matrix.map((row, i) => (
              <tr
                key={row.capability}
                className={cn(
                  'border-b border-dashed border-rail last:border-b-0 align-top',
                  i % 2 === 1 && 'bg-surface/30'
                )}
              >
                <td className="px-5 py-4 font-mono text-sm text-ink">{row.capability}</td>
                <td className="px-5 py-4 border-l border-dashed border-rail">
                  <CellIndicator state={row.competitor.state} />
                  <p className="mt-2 font-mono text-2xs leading-snug text-ink-muted max-w-xs">
                    {row.competitor.note}
                  </p>
                </td>
                <td className="px-5 py-4 border-l border-dashed border-rail">
                  <CellIndicator state={row.lane.state} />
                  <p className="mt-2 font-mono text-2xs leading-snug text-ink-muted max-w-xs">
                    {row.lane.note}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: stacked cards */}
      <div className="md:hidden space-y-4">
        {content.matrix.map((row) => (
          <div key={row.capability} className="border border-dashed border-rail p-4">
            <div className="font-mono text-sm text-ink mb-3">{row.capability}</div>
            <div className="grid grid-cols-2 gap-3">
              <div className="border-r border-dashed border-rail pr-3">
                <div className="font-mono text-2xs uppercase tracking-wider text-ink-faint mb-1.5">
                  {content.competitor}
                </div>
                <CellIndicator state={row.competitor.state} />
                <p className="mt-2 font-mono text-2xs leading-snug text-ink-muted">
                  {row.competitor.note}
                </p>
              </div>
              <div>
                <div className="font-mono text-2xs uppercase tracking-wider text-accent mb-1.5">
                  Lane
                </div>
                <CellIndicator state={row.lane.state} />
                <p className="mt-2 font-mono text-2xs leading-snug text-ink-muted">
                  {row.lane.note}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ────────────────────────────── CTA block ───────────────────────────── */

function VsCta({ content }: { content: VsContent }) {
  return (
    <section className="py-14 lg:py-18 px-4 lg:px-9">
      <FadeIn>
        <span className="inline-flex items-center gap-3 font-mono text-base uppercase leading-none text-ink-muted mb-6">
          <span className="size-2 rounded-full bg-accent [animation:blink_1.4s_ease-in-out_infinite]" />
          Ready to look at Lane?
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight leading-tight text-ink max-w-3xl">
          Beta opens Summer 2026. Capped at 100 design teams
          <span className="text-accent">.</span>
        </h2>
        <p className="mt-5 font-mono text-base text-ink-muted max-w-xl">
          We prioritize design leads at teams of eight or more. If {content.competitor} is still
          the right answer for you after reading this — that&apos;s a fine outcome. We&apos;d rather
          you know than guess.
        </p>
        <div className="mt-8">
          <a
            href="/#early-access"
            className={cn(
              'group relative inline-flex items-center justify-center gap-2',
              'h-btn-md rounded-xs border border-transparent px-3.5',
              'bg-btn transition-colors duration-150 hover:bg-btn-hover',
              'font-mono text-base uppercase leading-none',
              'text-btn-ink hover:text-btn-ink-hover'
            )}
          >
            Request Early Access
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </FadeIn>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════ */
/*                              Page wrapper                               */
/* ═══════════════════════════════════════════════════════════════════════ */

export function ComparisonPage({ content }: { content: VsContent }) {
  return (
    <main>
      <WireframeCell>
        <VsHero content={content} />
      </WireframeCell>
      <WireframeCell filled>
        <VsVerdict content={content} />
      </WireframeCell>
      <WireframeCell>
        <VsNarrative content={content} />
      </WireframeCell>
      <WireframeCell filled>
        <VsMatrix content={content} />
      </WireframeCell>
      <WireframeCell>
        <VsCta content={content} />
      </WireframeCell>
    </main>
  )
}
