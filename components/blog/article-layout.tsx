import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/marketing/motion'
import { WireframeCell } from '@/components/marketing/wireframe-cell'
import type { BlogPost } from '@/lib/blog-content'

/* ── Article header ── */

function ArticleHeader({ post }: { post: BlogPost }) {
  return (
    <section className="py-14 lg:py-18 px-4 lg:px-9">
      <FadeIn className="mb-6">
        <a
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-2xs uppercase tracking-wider text-ink-muted transition-colors hover:text-accent"
        >
          <ArrowLeft size={14} />
          All writing
        </a>
      </FadeIn>

      <FadeIn className="mb-6" delay={0.05}>
        <span className="inline-flex items-center gap-3 font-mono text-base uppercase leading-none text-ink-muted">
          <span className="size-2 rounded-full bg-accent [animation:blink_1.4s_ease-in-out_infinite]" />
          {post.tag}
        </span>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h1
          className={cn(
            'text-3xl tracking-display-sm leading-[1.05]',
            'md:text-4xl md:tracking-display-md',
            'lg:text-5xl lg:tracking-display-lg',
            'font-normal text-ink max-w-4xl'
          )}
        >
          {post.title}
          <span className="text-accent">.</span>
        </h1>
      </FadeIn>

      <FadeIn delay={0.18}>
        <p className="mt-6 font-mono text-base lg:text-md leading-relaxed text-ink-muted max-w-2xl">
          {post.dek}
        </p>
      </FadeIn>

      <FadeIn delay={0.22}>
        <div className="mt-8 flex items-center gap-4 font-mono text-2xs uppercase tracking-wider text-ink-faint">
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
      </FadeIn>
    </section>
  )
}

/* ── Article body wrapper ── */

function ArticleBody({ children }: { children: ReactNode }) {
  return (
    <section className="py-14 lg:py-18 px-4 lg:px-9">
      <FadeIn>
        <article
          className={cn(
            'max-w-2xl',
            'font-mono text-base leading-relaxed text-ink-muted',
            // Vertical rhythm
            '[&>p]:mt-5 [&>p:first-child]:mt-0',
            '[&>h2]:mt-14 [&>h2]:mb-5',
            '[&>h2]:text-2xl md:[&>h2]:text-3xl [&>h2]:leading-tight',
            '[&>h2]:font-normal [&>h2]:text-ink [&>h2]:tracking-tight',
            '[&>h3]:mt-10 [&>h3]:mb-3',
            '[&>h3]:text-lg [&>h3]:font-normal [&>h3]:text-ink',
            '[&>ul]:mt-5 [&>ul]:space-y-2 [&>ul]:pl-5',
            '[&>ul>li]:list-disc [&>ul>li]:marker:text-ink-faint',
            '[&>blockquote]:mt-8 [&>blockquote]:border-l-2 [&>blockquote]:border-accent',
            '[&>blockquote]:pl-5 [&>blockquote]:py-1',
            '[&>blockquote]:text-ink [&>blockquote]:text-lg [&>blockquote]:leading-snug',
            '[&_strong]:text-ink [&_strong]:font-normal',
            '[&_em]:text-ink [&_em]:not-italic [&_em]:underline [&_em]:decoration-rail [&_em]:underline-offset-4',
            '[&_a]:text-ink [&_a]:underline [&_a]:decoration-rail [&_a]:underline-offset-4',
            '[&_a]:transition-colors [&_a:hover]:text-accent [&_a:hover]:decoration-accent'
          )}
        >
          {children}
        </article>
      </FadeIn>
    </section>
  )
}

/* ── End-of-article CTA ── */

function ArticleCta() {
  return (
    <section className="py-14 lg:py-18 px-4 lg:px-9">
      <FadeIn>
        <span className="inline-flex items-center gap-3 font-mono text-base uppercase leading-none text-ink-muted mb-6">
          <span className="size-2 rounded-full bg-accent [animation:blink_1.4s_ease-in-out_infinite]" />
          Building the operating system for design teams
        </span>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight leading-tight text-ink max-w-3xl">
          If this maps to your team, Lane is built for the next stage
          <span className="text-accent">.</span>
        </h2>
        <p className="mt-5 font-mono text-base text-ink-muted max-w-xl">
          Beta opens Summer 2026. Capped at 100 design teams. We prioritize design leads at
          teams of eight or more.
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

/* ── Page wrapper ── */

export function ArticleLayout({
  post,
  children,
}: {
  post: BlogPost
  children: ReactNode
}) {
  return (
    <main>
      <WireframeCell>
        <ArticleHeader post={post} />
      </WireframeCell>
      <WireframeCell filled>
        <ArticleBody>{children}</ArticleBody>
      </WireframeCell>
      <WireframeCell>
        <ArticleCta />
      </WireframeCell>
    </main>
  )
}
