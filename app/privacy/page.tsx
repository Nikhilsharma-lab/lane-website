import type { Metadata } from 'next'
import { Header } from '@/components/marketing/header'
import { Footer, FooterBar } from '@/components/marketing/footer'

export const metadata: Metadata = {
  title: 'Privacy Policy — Lane',
  description:
    'How Lane handles waitlist data during closed beta. No tracking, no third-party analytics, no surveillance.',
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

export default function PrivacyPage() {
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
              Privacy Policy<span className="text-accent">.</span>
            </h1>
            <p className="font-mono text-xs uppercase text-ink-subtle mb-10">
              Last updated: 2026-04-07
            </p>

            <p className="text-md text-ink-muted leading-relaxed mb-12">
              This is a minimum viable privacy policy for Lane while the
              product is in closed beta. It will be expanded with full legal
              review before general availability. We&apos;d rather ship a short,
              honest page than a long, copy-pasted one.
            </p>

            <section className="mb-10">
              <h2 className="font-mono uppercase text-xs text-ink mb-3">
                1. What we collect
              </h2>
              <p className="text-md text-ink-muted leading-relaxed">
                Email, role, team size, and current tool — all voluntarily
                submitted via the waitlist form. Server logs for standard web
                operations: IP address, user agent, request timestamps. Nothing
                else. No tracking pixels, no third-party analytics, no
                fingerprinting.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-mono uppercase text-xs text-ink mb-3">
                2. What we don&apos;t collect
              </h2>
              <p className="text-md text-ink-muted leading-relaxed">
                No behavioral tracking. No designer activity logs. No
                surveillance data. This is a product commitment, not just a
                policy statement — it&apos;s the core of what Lane is.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-mono uppercase text-xs text-ink mb-3">
                3. How we use it
              </h2>
              <p className="text-md text-ink-muted leading-relaxed">
                To contact waitlist members about beta access. That&apos;s the
                entire use case today. No marketing emails beyond beta
                notification.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-mono uppercase text-xs text-ink mb-3">
                4. Where it lives
              </h2>
              <p className="text-md text-ink-muted leading-relaxed">
                Waitlist data lives in Supabase. Hosting and server logs run on
                Vercel. Both are US-based.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-mono uppercase text-xs text-ink mb-3">
                5. Your rights
              </h2>
              <p className="text-md text-ink-muted leading-relaxed">
                Email{' '}
                <a
                  href="mailto:privacy@lane.so"
                  className="text-accent underline underline-offset-4 hover:text-ink"
                >
                  privacy@lane.so
                </a>{' '}
                to request export or deletion of your data. We respond within
                30 days. Full GDPR and CCPA compliance review is pending.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-mono uppercase text-xs text-ink mb-3">
                6. Changes
              </h2>
              <p className="text-md text-ink-muted leading-relaxed">
                We&apos;ll update this page and the &ldquo;last updated&rdquo;
                date when things change. Material changes will be emailed to
                active waitlist members.
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
