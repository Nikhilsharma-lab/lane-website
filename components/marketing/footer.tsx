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
      { label: 'Docs', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'SLA', href: '#' },
      { label: 'DPA', href: '#' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="px-4 lg:px-9 pb-4 lg:pb-10">
      <FadeIn>
        <div
          className={cn(
            'rounded-[0.375rem] bg-[var(--bg-surface)]',
            'px-6 py-8 lg:px-10 lg:py-10',
            'flex flex-col min-h-[420px] lg:min-h-[460px]'
          )}
        >
          {/* Top row: badge left, links right */}
          <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
            {/* Badge */}
            <span
              className={cn(
                'inline-flex items-center gap-3 self-start',
                'font-mono text-[14px] uppercase leading-none tracking-[-0.0175rem] text-[var(--text-secondary)]'
              )}
            >
              <span className="size-2 rounded-full bg-[var(--accent)] [animation:blink_1.4s_ease-in-out_infinite]" />
              Own your lane.
            </span>

            {/* Link columns */}
            <div className="flex flex-wrap gap-x-16 gap-y-8">
              {columns.map((col) => (
                <div key={col.title}>
                  <h4 className="font-mono text-[14px] tracking-[-0.0175rem] text-[var(--text-primary)] mb-4">
                    {col.title}
                  </h4>
                  <ul className="space-y-3">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className={cn(
                            'font-mono text-[14px] leading-none tracking-[-0.0175rem] text-[var(--text-secondary)]',
                            'transition-colors duration-200 hover:text-[var(--text-primary)]'
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

          {/* Bottom row: logo left, socials + copyright right */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mt-10">
            {/* Logo */}
            <div className="inline-flex items-center text-[var(--text-primary)]">
              <svg
                viewBox="0 0 492 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-[28px] w-auto"
                aria-hidden="true"
              >
                <path d="M0 100V0H93.2753L0 100Z" fill="currentColor" />
                <path d="M0 100H100V6.7247L0 100Z" fill="currentColor" />
                <path d="M123 100.231V0H137.823V94.5839L128.788 86.2549H185.679V100.231H123Z" fill="currentColor" />
                <path d="M197.2 100.231L226.564 0H245.763L275.126 100.231H259.739L236.163 15.3875L212.588 100.231H197.2ZM213.576 74.1142L218.093 60.4208H254.233L258.75 74.1142H213.576Z" fill="currentColor" />
                <path d="M288.059 100.231V0H306.128L339.021 79.1964V0H353.561V100.231H335.492L302.599 21.0343V100.231H288.059Z" fill="currentColor" />
                <path d="M375.529 100.231V0H437.079V13.9758H390.352V43.198H435.385V56.7503H390.352V86.2549H438.208V100.231H375.529Z" fill="currentColor" />
                <rect x="462" y="70" width="30" height="30" fill="var(--accent)" className="[animation:blink_1.4s_ease-in-out_infinite]" />
              </svg>
            </div>

            {/* Right: socials + copyright */}
            <div className="flex flex-col items-start lg:items-end gap-4">
              {/* Social links */}
              <div className="flex items-center gap-2">
                <a
                  href="https://twitter.com"
                  className={cn(
                    'font-mono text-[13px] tracking-[-0.015rem] text-[var(--text-secondary)]',
                    'transition-colors duration-200 hover:text-[var(--text-primary)]'
                  )}
                >
                  X (Twitter)
                </a>
                <span className="text-[var(--text-tertiary)]">,</span>
                <a
                  href="https://linkedin.com"
                  className={cn(
                    'font-mono text-[13px] tracking-[-0.015rem] text-[var(--text-secondary)]',
                    'transition-colors duration-200 hover:text-[var(--text-primary)]'
                  )}
                >
                  LinkedIn
                </a>
              </div>
              <p className="font-mono text-[13px] tracking-[-0.015rem] text-[var(--text-tertiary)]">
                &copy; Lane 2026. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </footer>
  )
}
