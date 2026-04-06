import { cn } from '@/lib/utils'

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'How it works', href: '#how-it-works' },
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="px-6 pb-6 lg:px-8 lg:pb-8">
      <div className="mx-auto max-w-[1920px]">
        <div
          className={cn(
            'rounded-xl lg:rounded-2xl',
            'border border-[var(--border)] bg-[var(--bg-surface)]',
            'px-8 py-12 lg:px-12 lg:py-16'
          )}
        >
          <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
            <div>
              <span className="text-lg font-semibold tracking-tight text-[var(--text-primary)]">
                Lane
              </span>
              <p className="mt-2 text-[13px] text-[var(--text-tertiary)] max-w-xs">
                The AI operating system for design teams.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-tertiary)]">
                  Anti-surveillance by design
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 lg:gap-16">
              {columns.map((col) => (
                <div key={col.title}>
                  <h4 className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-tertiary)]">
                    {col.title}
                  </h4>
                  <ul className="mt-4 space-y-3">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-[13px] text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
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

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[var(--border)] pt-8">
            <p className="text-[12px] text-[var(--text-tertiary)]">
              &copy; 2026 Lane. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com"
                className="text-[var(--text-tertiary)] transition-colors hover:text-[var(--text-primary)]"
                aria-label="Twitter"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                className="text-[var(--text-tertiary)] transition-colors hover:text-[var(--text-primary)]"
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
