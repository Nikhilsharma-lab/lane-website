import type { Metadata } from 'next'
import { Header } from '@/components/marketing/header'
import { Footer, FooterBar } from '@/components/marketing/footer'

export const metadata: Metadata = {
  title: 'Terms of Service — Lane',
  description:
    'The beta relationship between Lane and its closed-beta members. Full legal terms ship before general availability.',
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

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <PageShell>
          <article className="max-w-3xl mx-auto px-6 py-16 lg:py-24">
            <span className="inline-flex items-center gap-3 mb-6 font-mono text-xs uppercase leading-none text-ink-muted">
              <span className="size-2 rounded-full bg-accent [animation:blink_1.4s_ease-in-out_infinite]" />
              Legal
            </span>

            <h1 className="text-4xl lg:text-5xl font-normal text-ink leading-none mb-4">
              Terms of Service<span className="text-accent">.</span>
            </h1>
            <p className="font-mono text-xs uppercase text-ink-subtle mb-10">
              Last updated: 2026-04-07
            </p>

            <p className="text-md text-ink-muted leading-relaxed mb-12">
              Lane is a closed-beta product. Full Terms of Service will ship
              before general availability. This page describes what the beta
              relationship is, in plain language.
            </p>

            <section className="mb-10">
              <h2 className="font-mono uppercase text-xs text-ink mb-3">
                1. Beta status
              </h2>
              <p className="text-md text-ink-muted leading-relaxed">
                Lane is in closed beta. Access is by invitation only. We
                reserve the right to grant, delay, or decline access at our
                discretion.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-mono uppercase text-xs text-ink mb-3">
                2. Acceptable use
              </h2>
              <p className="text-md text-ink-muted leading-relaxed">
                Don&apos;t use Lane to build surveillance tools — we&apos;d be
                hypocrites otherwise. Don&apos;t attempt to reverse-engineer
                the AI models. Don&apos;t abuse the waitlist form with spam or
                automation.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-mono uppercase text-xs text-ink mb-3">
                3. Data ownership
              </h2>
              <p className="text-md text-ink-muted leading-relaxed">
                You own your Design Streams, briefs, and reflections. Lane
                processes them to make the product work. Full export is
                available at any time.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-mono uppercase text-xs text-ink mb-3">
                4. Availability
              </h2>
              <p className="text-md text-ink-muted leading-relaxed">
                The beta is provided as-is, with no SLA. General availability
                will carry a real SLA for the paid tiers. Full warranty and
                liability terms pending legal review.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-mono uppercase text-xs text-ink mb-3">
                5. Changes
              </h2>
              <p className="text-md text-ink-muted leading-relaxed">
                We&apos;ll update this page and the &ldquo;last updated&rdquo;
                date when things change. Full terms pending legal review before
                general availability.
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
