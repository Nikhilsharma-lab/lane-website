import type { Metadata } from 'next'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import { Header } from '@/components/marketing/header'
import { Footer, FooterBar } from '@/components/marketing/footer'
import { WireframeCell } from '@/components/marketing/wireframe-cell'
import { FadeIn } from '@/components/marketing/motion'
import { posts } from '@/lib/blog-content'

export const metadata: Metadata = {
  title: 'Writing | Lane',
  description:
    'Field guides, models, and notes on running design teams. Honest takes on DesignOps, intake, calibration, and the operating model gap.',
  alternates: { canonical: 'https://lane.so/blog' },
  openGraph: {
    type: 'website',
    url: 'https://lane.so/blog',
    title: 'Writing | Lane',
    description:
      'Field guides, models, and notes on running design teams. Honest takes on DesignOps, intake, calibration, and the operating model gap.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Writing | Lane',
  },
}

export default function BlogIndex() {
  return (
    <>
      <Header />
      <main>
        <WireframeCell>
          <section className="py-14 lg:py-18 px-4 lg:px-9">
            <FadeIn className="mb-6">
              <span className="inline-flex items-center gap-3 font-mono text-base uppercase leading-none text-ink-muted">
                <span className="size-2 rounded-full bg-accent [animation:blink_1.4s_ease-in-out_infinite]" />
                Writing
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1
                className={cn(
                  'text-4xl tracking-display-sm leading-none',
                  'md:text-5xl md:tracking-display-md',
                  'lg:text-6xl lg:tracking-display-lg',
                  'font-normal text-ink max-w-4xl'
                )}
              >
                Field guides for running design teams
                <span className="text-accent">.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 font-mono text-base lg:text-md leading-normal text-ink-muted max-w-2xl">
                No listicles, no thought-leadership. Models, field guides, and notes from the
                gap between how design teams work and how the tools assume they work.
              </p>
            </FadeIn>
          </section>
        </WireframeCell>

        <WireframeCell filled>
          <section className="py-14 lg:py-18 px-4 lg:px-9">
            <FadeIn className="mb-8">
              <span className="font-mono text-2xs uppercase tracking-wider text-ink-subtle">
                Latest
              </span>
            </FadeIn>

            <div className="space-y-px bg-rail border border-dashed border-rail">
              {posts.map((post) => (
                <FadeIn key={post.slug} className="bg-canvas">
                  <a
                    href={`/blog/${post.slug}`}
                    className="group block p-6 lg:p-8 transition-colors hover:bg-surface"
                  >
                    <div className="flex items-center gap-4 font-mono text-2xs uppercase tracking-wider text-ink-faint mb-3">
                      <span>{post.tag}</span>
                      <span className="size-1 rounded-full bg-ink-faint" aria-hidden />
                      <time dateTime={post.publishDate}>
                        {new Date(post.publishDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                      <span className="size-1 rounded-full bg-ink-faint" aria-hidden />
                      <span>{post.readingTime}</span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-normal tracking-tight leading-tight text-ink max-w-3xl">
                      {post.title}
                      <span className="text-accent">.</span>
                    </h2>

                    <p className="mt-4 font-mono text-base leading-relaxed text-ink-muted max-w-2xl">
                      {post.dek}
                    </p>

                    <div className="mt-5 inline-flex items-center gap-2 font-mono text-2xs uppercase tracking-wider text-ink-muted group-hover:text-accent transition-colors">
                      Read the field guide
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </a>
                </FadeIn>
              ))}
            </div>
          </section>
        </WireframeCell>
      </main>
      <WireframeCell>
        <Footer />
      </WireframeCell>
      <FooterBar />
    </>
  )
}
