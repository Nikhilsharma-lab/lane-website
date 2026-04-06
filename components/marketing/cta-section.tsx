import { cn } from '@/lib/utils'

export function CtaSection() {
  return (
    <section id="early-access" className="px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1920px]">
        <div
          className={cn(
            'rounded-xl lg:rounded-2xl px-8 py-16 lg:px-16 lg:py-20',
            'bg-[var(--inverted-bg)] text-[var(--inverted-text)]',
            'text-center'
          )}
        >
          <p className="font-mono text-[13px] uppercase tracking-wider text-[var(--inverted-tertiary)]">
            We run our own design team on Lane.
          </p>

          <h2 className="mt-4 text-[30px] leading-[110%] tracking-tight font-semibold lg:text-[48px] lg:tracking-[-0.09rem]">
            We think yours will love it too.
          </h2>

          <p className="mt-4 text-[15px] text-[var(--inverted-secondary)] max-w-lg mx-auto">
            Surveillance produces performance. Support produces truth.
            <br />
            Lane optimizes for truth.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:yash@lane.so?subject=Early%20Access%20Request"
              className={cn(
                'inline-flex items-center gap-2 rounded-md px-6 py-3',
                'bg-[var(--inverted-text)] text-sm font-medium text-[var(--inverted-bg)]',
                'transition-colors hover:bg-[#27272A]',
                'relative overflow-hidden',
                'before:absolute before:inset-0 before:opacity-0 before:transition-opacity hover:before:opacity-100',
                'before:bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(255,255,255,0.1)_4px,rgba(255,255,255,0.1)_8px)]',
                'before:[animation:slidePattern_1s_linear_infinite]'
              )}
            >
              Request Early Access
            </a>

            <a
              href="mailto:yash@lane.so?subject=Book%20a%20Demo"
              className={cn(
                'inline-flex items-center gap-2 rounded-md px-6 py-3',
                'border border-[var(--inverted-border)] bg-white text-sm font-medium text-[var(--inverted-secondary)]',
                'transition-colors hover:bg-[#F4F4F5] hover:text-[var(--inverted-text)]'
              )}
            >
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
