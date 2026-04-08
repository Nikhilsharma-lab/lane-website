import Script from 'next/script'
import { cn } from '@/lib/utils'
import { FadeIn } from '@/components/marketing/motion'
import type { VsContent } from '@/lib/vs-content'

/**
 * Per-page comparison FAQ for /vs/* pages.
 *
 * Renders visible accordion markup that mirrors the homepage FAQ shape,
 * plus an inlined FAQPage JSON-LD schema keyed per slug. Schema `text`
 * fields must match the visible answer verbatim — em dashes and curly
 * quotes included — or Google will drop the rich result.
 */
export function VsFaq({ content }: { content: VsContent }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }

  return (
    <section
      id={`vs-faq-${content.slug}`}
      className="py-14 lg:py-18 px-4 lg:px-9"
    >
      <FadeIn>
        <div className="pt-6 mb-10">
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
            Lane vs {content.competitor}, asked honestly
            <span className="text-accent">.</span>
          </h2>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <ul className="border-t border-dashed border-rail">
          {content.faqs.map((item) => (
            <li key={item.q} className="border-b border-dashed border-rail">
              <details className="group">
                <summary
                  className={cn(
                    'flex items-start justify-between gap-6',
                    'cursor-pointer list-none py-6',
                    'text-md lg:text-lg font-normal text-ink',
                    'transition-colors duration-200 hover:text-accent',
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

      <Script
        id={`ld-vs-faq-${content.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  )
}
