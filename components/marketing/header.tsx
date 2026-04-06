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
    <header className="sticky top-0 z-50 w-full">
      <div className="border-b border-[var(--border)] bg-[var(--bg-base)]/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1920px] items-center justify-between px-6 lg:px-8">
          <a href="/" className="text-lg font-semibold tracking-tight text-[var(--text-primary)]">
            Lane
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'relative font-mono text-[12px] uppercase leading-none tracking-[-0.015rem]',
                  'text-[var(--text-tertiary)] transition-colors hover:text-[var(--accent)]',
                  'after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-full',
                  'after:origin-left after:scale-x-0 after:bg-[var(--accent)] after:transition-transform after:duration-200',
                  'hover:after:scale-x-100'
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#early-access"
            className={cn(
              'hidden md:inline-flex items-center gap-2 rounded-md px-4 py-2',
              'bg-[var(--accent)] text-sm font-medium text-white',
              'transition-colors hover:bg-[var(--accent-hover)]',
              'relative overflow-hidden',
              'before:absolute before:inset-0 before:opacity-0 before:transition-opacity hover:before:opacity-100',
              'before:bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(255,255,255,0.1)_4px,rgba(255,255,255,0.1)_8px)]',
              'before:[animation:slidePattern_1s_linear_infinite]'
            )}
          >
            Request Early Access
          </a>

          <button
            className="md:hidden p-2 text-[var(--text-secondary)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-b border-[var(--border)] bg-[var(--bg-base)]/95 backdrop-blur-md">
          <nav className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-mono text-[12px] uppercase tracking-[-0.015rem] text-[var(--text-tertiary)] hover:text-[var(--accent)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#early-access"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--accent-hover)]"
            >
              Request Early Access
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
