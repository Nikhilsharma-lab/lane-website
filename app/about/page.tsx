import type { Metadata } from 'next'
import { Header } from '@/components/marketing/header'
import { Footer, FooterBar } from '@/components/marketing/footer'

export const metadata: Metadata = {
  title: 'About — Lane',
  description:
    'Lane is an AI-native DesignOps platform built around how design actually happens — non-linear, exploratory, problem-first.',
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
              Lane is an AI-native DesignOps platform built around how design
              actually happens — non-linear, exploratory, problem-first. The
              antidote to tools borrowed from engineering.
            </p>

            <section className="mb-12">
              <h2 className="font-mono uppercase text-xs text-ink mb-4">
                Built by
              </h2>
              <ul className="space-y-3 text-md text-ink-muted">
                <li>
                  <span className="text-ink">Nikhil</span>, Founder. Sets product direction and leads design.
                </li>
                <li>
                  <span className="text-ink">Nischal</span>, Co-Founder. Leads engineering and platform.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-mono uppercase text-xs text-ink mb-4">
                What we believe
              </h2>
              <p className="text-md text-ink-muted leading-relaxed">
                No surveillance. No tickets. No tools borrowed from engineering.
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
