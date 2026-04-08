'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky inset-x-0 top-0 z-50 w-full bg-canvas">
      <div className="border-b border-dashed border-rail">
        <div className="flex">
          {/* Left rail — continuous vertical dashed line */}
          <div className="w-2 lg:w-rail shrink-0 border-r border-dashed border-rail" />

          {/* Nav content */}
          <div className="flex-1 min-w-0 flex items-center justify-between px-4 py-5 lg:px-9">
            {/* Logo */}
            <a
              href="/"
              className="inline-flex items-center text-ink rounded-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              aria-label="Lane home"
            >
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

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative font-mono text-xs uppercase leading-none',
                    'text-nav transition-colors duration-200 hover:text-accent',
                    'rounded-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas',
                    'after:absolute after:-bottom-px after:left-0 after:h-px after:w-0',
                    'after:bg-current after:transition-all after:duration-300 after:ease-in-out',
                    'hover:after:w-full'
                  )}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <a
              href="#early-access"
              className={cn(
                'group relative hidden md:inline-flex items-center justify-center',
                'h-btn-sm rounded-xs border border-transparent px-3',
                'bg-btn transition-colors duration-150',
                'hover:bg-btn-hover',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas',
                'font-mono text-xs uppercase leading-none',
                'text-btn-ink hover:text-btn-ink-hover'
              )}
              style={{ '--lines-color': 'var(--color-btn-lines)' } as React.CSSProperties}
            >
              <span className="relative z-10">Request Early Access</span>
              <span
                className={cn(
                  'pointer-events-none absolute inset-0 rounded-xs opacity-0',
                  'group-hover:[animation:delayedFadeIn_100ms_ease-out_forwards]'
                )}
              >
                <span
                  className={cn(
                    'absolute inset-0 bg-stripe',
                    '[animation:slidePattern_2000ms_linear_infinite]'
                  )}
                />
              </span>
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-nav rounded-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Right rail — continuous vertical dashed line */}
          <div className="w-2 lg:w-rail shrink-0 border-l border-dashed border-rail" />
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-b border-line bg-canvas">
          <nav className="flex flex-col gap-4 px-4 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-mono text-xs uppercase text-nav hover:text-accent rounded-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#early-access"
              onClick={() => setMobileOpen(false)}
              className={cn(
                'mt-2 inline-flex items-center justify-center',
                'h-btn-md rounded-xs px-3.5',
                'bg-btn font-mono text-base uppercase',
                'text-btn-ink',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas'
              )}
            >
              Request Early Access
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
