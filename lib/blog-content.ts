/**
 * Blog metadata + index registry.
 *
 * The article body itself lives in the route file as a React component
 * (so we can use JSX, FadeIn wrappers, Tailwind classes, etc.). This file
 * is the typed source of truth for everything that surrounds the body:
 * the index card, sitemap entry, OG image, meta tags, and reading-time.
 */

export interface BlogPost {
  slug: string
  title: string
  /** One-line description used for meta + social. */
  description: string
  /** Dek shown under the title on the article page. ~25 words. */
  dek: string
  /** ISO date (YYYY-MM-DD). */
  publishDate: string
  /** "X min read" — author-curated, not auto-calculated. */
  readingTime: string
  /** Eyebrow tag shown above the title. */
  tag: string
  /** Headline used inside the OG image (can be a 2-line override). */
  ogHeadline: string
}

export const posts: BlogPost[] = [
  {
    slug: 'designops-maturity-model',
    title: 'The DesignOps Maturity Model: from chaos to calibration',
    description:
      'Five honest stages every design team passes through, what breaks at each one, and the move that unlocks the next. A field guide, not a framework.',
    dek: 'Most design teams aren\u2019t broken. They\u2019re just stuck at a stage they\u2019ve outgrown, with the tools they had when they were one stage smaller.',
    publishDate: '2026-04-08',
    readingTime: '9 min read',
    tag: 'Field guide',
    ogHeadline: 'The DesignOps\nMaturity Model.',
  },
]

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}
