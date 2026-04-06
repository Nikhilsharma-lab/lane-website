import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative px-6 pt-24 pb-16 lg:px-8 lg:pt-32 lg:pb-24">
      <div className="mx-auto max-w-[1920px]">
        <div className="flex justify-center mb-8">
          <span
            className={cn(
              'inline-flex items-center gap-2 rounded-full px-3 py-1',
              'border border-[var(--border)] bg-[var(--bg-surface)]',
              'font-mono text-[12px] uppercase tracking-[-0.015rem] text-[var(--text-tertiary)]'
            )}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            Launching Summer 2026
          </span>
        </div>

        <h1
          className={cn(
            'mx-auto max-w-4xl text-center',
            'text-[40px] leading-[100%] tracking-[-0.16rem]',
            'lg:text-6xl 2xl:text-7xl',
            'font-semibold text-[var(--text-primary)]'
          )}
        >
          From 45% coordination waste{' '}
          <span className="text-[var(--accent)]">to zero.</span>
        </h1>

        <p
          className={cn(
            'mx-auto mt-6 max-w-2xl text-center',
            'font-mono text-[16px] leading-[140%] tracking-[-0.02rem]',
            'lg:text-[18px]',
            'text-[var(--text-secondary)]'
          )}
        >
          The AI operating system for design teams.
          <br className="hidden sm:block" />
          Set up in an hour. Run your design org forever.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#early-access"
            className={cn(
              'inline-flex items-center gap-2 rounded-md px-6 py-3',
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

          <a
            href="#how-it-works"
            className={cn(
              'group inline-flex items-center gap-2 rounded-md px-6 py-3',
              'border border-[var(--border)] bg-[var(--bg-base)]/50 backdrop-blur-md',
              'text-sm font-medium text-[var(--text-secondary)]',
              'transition-colors hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]'
            )}
          >
            See how it works
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-16 lg:mt-20 mx-auto max-w-5xl">
          <div
            className={cn(
              'aspect-[16/10] w-full rounded-xl lg:rounded-2xl',
              'border border-[var(--border)] bg-[var(--bg-surface)]',
              'flex items-center justify-center'
            )}
          >
            {/* SCREENSHOT PLACEHOLDER — replace with <Image src="/marketing/hero-screenshot.png" /> */}
            <div className="text-center px-8">
              <p className="font-mono text-[12px] uppercase tracking-wider text-[var(--text-tertiary)]">
                Product Screenshot
              </p>
              <p className="mt-2 text-sm text-[var(--text-tertiary)]">
                hero-screenshot.png — 1920×1200
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
