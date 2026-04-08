'use client'

import { cn } from '@/lib/utils'
import { FadeIn } from './motion'

const columns = [
  {
    title: 'Resources',
    links: [
      { label: 'How it works', href: '#how-it-works' },
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Compare',
    links: [
      { label: 'Lane vs Jira', href: '/vs/jira' },
      { label: 'Lane vs Linear', href: '/vs/linear' },
      { label: 'Lane vs Notion', href: '/vs/notion' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/#early-access' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-surface px-6 py-8 lg:px-10 lg:py-10">
      <FadeIn>
        <div className="flex flex-col min-h-footer lg:min-h-footer-lg">
          {/* Top row: badge left, links right */}
          <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
            {/* Badge */}
            <span
              className={cn(
                'inline-flex items-center gap-3 self-start',
                'font-mono text-base uppercase leading-none text-ink-muted'
              )}
            >
              <span className="size-2 rounded-full bg-accent [animation:blink_1.4s_ease-in-out_infinite]" />
              Own your lane.
            </span>

            {/* Link columns */}
            <div className="flex flex-wrap gap-x-16 gap-y-8">
              {columns.map((col) => (
                <div key={col.title}>
                  <h4 className="font-mono text-base text-ink mb-4">
                    {col.title}
                  </h4>
                  <ul className="space-y-3">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className={cn(
                            'font-mono text-base leading-none text-ink-muted',
                            'transition-colors duration-200 hover:text-ink'
                          )}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="flex-1" />
        </div>
      </FadeIn>
    </footer>
  )
}

/** Bottom bar — mirrors the header navbar in shape/size */
export function FooterBar() {
  return (
    <div>
      <div className="flex">
        <div className="w-2 lg:w-rail shrink-0 border-r border-dashed border-rail" />
        <div className="flex-1 min-w-0 flex items-center justify-between px-4 py-5 lg:px-9">
          {/* Logo — same size as header */}
          <a href="/" className="inline-flex items-center text-ink" aria-label="Lane home">
            <svg
              viewBox="0 0 492 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-logo w-auto"
              aria-hidden="true"
            >
              <path d="M0 100V0H93.2753L0 100Z" fill="currentColor" />
              <path d="M0 100H100V6.7247L0 100Z" fill="currentColor" />
              <path d="M123 100.231V0H137.823V94.5839L128.788 86.2549H185.679V100.231H123Z" fill="currentColor" />
              <path d="M197.2 100.231L226.564 0H245.763L275.126 100.231H259.739L236.163 15.3875L212.588 100.231H197.2ZM213.576 74.1142L218.093 60.4208H254.233L258.75 74.1142H213.576Z" fill="currentColor" />
              <path d="M288.059 100.231V0H306.128L339.021 79.1964V0H353.561V100.231H335.492L302.599 21.0343V100.231H288.059Z" fill="currentColor" />
              <path d="M375.529 100.231V0H437.079V13.9758H390.352V43.198H435.385V56.7503H390.352V86.2549H438.208V100.231H375.529Z" fill="currentColor" />
              <rect x="462" y="70" width="30" height="30" fill="var(--color-accent)" className="[animation:blink_1.4s_ease-in-out_infinite]" />
            </svg>
          </a>

          {/* Right: socials + copyright */}
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-2">
              <a
                href="https://twitter.com"
                className={cn(
                  'font-mono text-xs uppercase text-ink-muted',
                  'transition-colors duration-200 hover:text-ink'
                )}
              >
                X (Twitter)
              </a>
              <span className="text-ink-subtle">,</span>
              <a
                href="https://linkedin.com"
                className={cn(
                  'font-mono text-xs uppercase text-ink-muted',
                  'transition-colors duration-200 hover:text-ink'
                )}
              >
                LinkedIn
              </a>
            </div>
            <p className="font-mono text-xs uppercase text-ink-subtle">
              &copy; Lane 2026
            </p>
          </div>
        </div>
        <div className="w-2 lg:w-rail shrink-0 border-l border-dashed border-rail" />
      </div>
    </div>
  )
}
