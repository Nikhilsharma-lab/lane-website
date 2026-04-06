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
    <header className="sticky inset-x-0 top-0 z-50 w-full bg-[var(--bg-base)]">
      <div className="border-b border-dashed border-white/50">
        <div className="flex">
          {/* Left rail — continuous vertical dashed line */}
          <div className="w-2 lg:w-[66px] shrink-0 border-r border-dashed border-white/50" />

          {/* Nav content */}
          <div className="flex-1 min-w-0 flex items-center justify-between px-4 py-5 lg:px-9">
            {/* Logo */}
            <a href="/" className="inline-flex items-center text-[var(--text-primary)]" aria-label="Lane home">
              <svg
                viewBox="0 0 492 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-[16.8px] w-auto"
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
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative font-mono text-[12px] uppercase leading-none tracking-[-0.015rem]',
                    'text-[var(--nav-text)] transition-colors duration-200 hover:text-[var(--accent)]',
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
                'h-[25px] rounded-sm border border-transparent px-3',
                'bg-[var(--btn-bg)] transition-colors duration-150',
                'hover:bg-[var(--btn-bg-hover)]',
                'font-mono text-[12px] uppercase leading-none tracking-[-0.015rem]',
                'text-[var(--btn-text)] hover:text-[var(--btn-text-hover)]'
              )}
              style={{ '--lines-color': 'var(--btn-lines-color)' } as React.CSSProperties}
            >
              <span className="relative z-10">Request Early Access</span>
              <span
                className={cn(
                  'pointer-events-none absolute inset-0 rounded-sm opacity-0',
                  'group-hover:[animation:delayedFadeIn_100ms_ease-out_forwards]'
                )}
              >
                <span
                  className={cn(
                    'absolute inset-0',
                    '[background-image:repeating-linear-gradient(45deg,transparent_0px,transparent_2px,var(--lines-color)_2px,var(--lines-color)_3px,transparent_3px,transparent_5px)]',
                    '[background-size:7.07px_7.07px]',
                    '[animation:slidePattern_2000ms_linear_infinite]'
                  )}
                />
              </span>
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-[var(--nav-text)]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Right rail — continuous vertical dashed line */}
          <div className="w-2 lg:w-[66px] shrink-0 border-l border-dashed border-white/50" />
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-b border-[var(--border)] bg-[var(--bg-base)]">
          <nav className="flex flex-col gap-4 px-4 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-mono text-[12px] uppercase tracking-[-0.015rem] text-[var(--nav-text)] hover:text-[var(--accent)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#early-access"
              onClick={() => setMobileOpen(false)}
              className={cn(
                'mt-2 inline-flex items-center justify-center',
                'h-[31px] rounded-sm px-[14px]',
                'bg-[var(--btn-bg)] font-mono text-[14px] uppercase tracking-[-0.0175rem]',
                'text-[var(--btn-text)]'
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
