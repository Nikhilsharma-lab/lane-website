'use client'

import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import { FadeIn, ScaleIn, motion } from './motion'

/* ── Main Hero ── */
export function Hero() {
  return (
    <section className="mt-28 lg:mt-36 mb-20 lg:mb-30 px-4 lg:px-9">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

        {/* ═══ Left: Copy ═══ */}
        <div className="flex flex-col">
          {/* Badge */}
          <FadeIn className="mb-6">
            <span
              className={cn(
                'inline-flex items-center gap-3',
                'font-mono text-[14px] uppercase leading-none tracking-[-0.0175rem] text-[var(--text-secondary)]'
              )}
            >
              <span className="size-2 rounded-full bg-[var(--accent)] [animation:blink_1.4s_ease-in-out_infinite]" />
              Launching Summer 2026
            </span>
          </FadeIn>

          {/* Headline */}
          <FadeIn delay={0.1}>
            <h1
              className={cn(
                'text-[36px] leading-[100%] tracking-[-0.12rem]',
                'md:text-[48px] md:tracking-[-0.16rem]',
                'lg:text-[56px] lg:tracking-[-0.18rem]',
                'xl:text-[64px] xl:tracking-[-0.2rem]',
                'font-normal text-[var(--text-primary)]'
              )}
            >
              Agent-Native
              <br />
              Design Ops
              <span className="text-[var(--accent)]">.</span>
            </h1>
          </FadeIn>

          {/* Descriptions */}
          <FadeIn delay={0.2}>
            <p
              className={cn(
                'mt-6 font-mono text-[14px] leading-[150%] tracking-[-0.0175rem]',
                'lg:text-[15px]',
                'text-[var(--text-secondary)] max-w-md'
              )}
            >
              The only AI operating system built for design teams.
              From intake to impact — delegate coordination,
              protect creative autonomy, ship with confidence.
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p
              className={cn(
                'mt-4 font-mono text-[14px] leading-[150%] tracking-[-0.0175rem]',
                'text-[var(--text-tertiary)] max-w-md'
              )}
            >
              Set up in an hour. Run your design org forever.
              No surveillance. No forced status updates.
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn className="mt-8 flex flex-col sm:flex-row items-start gap-4" delay={0.3}>
            <a
              href="#early-access"
              className={cn(
                'group relative inline-flex items-center justify-center',
                'h-[31px] rounded-sm border border-transparent px-[14px]',
                'bg-[var(--btn-bg)] transition-colors duration-150',
                'hover:bg-[var(--btn-bg-hover)]',
                'font-mono text-[14px] uppercase leading-none tracking-[-0.0175rem]',
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

            <a
              href="#how-it-works"
              className={cn(
                'group inline-flex items-center gap-2 h-[31px]',
                'font-mono text-[12px] uppercase leading-none tracking-[-0.015rem]',
                'text-[var(--text-secondary)] transition-colors duration-200',
                'hover:text-[var(--accent)]'
              )}
            >
              See how it works
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </FadeIn>

        </div>

        {/* ═══ Right: AI Workflow Visual ═══ */}
        <ScaleIn delay={0.2} className="relative hidden lg:flex h-full">
          <div className="relative w-full flex flex-col rounded-[0.375rem] border border-dashed border-white/50 bg-[var(--bg-surface)]/80 overflow-hidden">
            {/* Background grid */}
            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  'linear-gradient(var(--text-secondary) 1px, transparent 1px), linear-gradient(90deg, var(--text-secondary) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />

            {/* SVG constellation + connection lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500" fill="none" preserveAspectRatio="xMidYMid slice">
              {/* Radial dashed lines from center diamond */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                const rad = (angle * Math.PI) / 180
                const x2 = 250 + Math.cos(rad) * 220
                const y2 = 250 + Math.sin(rad) * 220
                return (
                  <motion.line
                    key={angle}
                    x1="250" y1="250" x2={x2} y2={y2}
                    stroke="var(--text-tertiary)"
                    strokeWidth="0.5"
                    strokeDasharray="4 6"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ duration: 1.2, delay: 0.6 + i * 0.08, ease: 'easeOut' }}
                  />
                )
              })}

              {/* Orbital ring */}
              <motion.circle
                cx="250" cy="250" r="120"
                stroke="var(--text-tertiary)"
                strokeWidth="0.5"
                strokeDasharray="3 8"
                fill="none"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.25, scale: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                style={{ transformOrigin: '250px 250px' }}
              />
              <motion.circle
                cx="250" cy="250" r="80"
                stroke="var(--accent)"
                strokeWidth="0.5"
                strokeDasharray="2 6"
                fill="none"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 0.2, scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
                style={{ transformOrigin: '250px 250px' }}
              />

              {/* Central diamond */}
              <motion.g
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                style={{ transformOrigin: '250px 250px' }}
              >
                <rect x="232" y="232" width="36" height="36" rx="2" transform="rotate(45 250 250)" fill="var(--accent)" opacity="0.12" />
                <rect x="232" y="232" width="36" height="36" rx="2" transform="rotate(45 250 250)" stroke="var(--accent)" strokeWidth="1" fill="none" opacity="0.6" />
                <rect x="240" y="240" width="20" height="20" rx="1" transform="rotate(45 250 250)" fill="var(--accent)" opacity="0.25" />
              </motion.g>

              {/* Orbiting dots */}
              {[0, 120, 240].map((offset, i) => (
                <motion.circle
                  key={offset}
                  cx={250 + Math.cos(((offset + 90) * Math.PI) / 180) * 120}
                  cy={250 + Math.sin(((offset + 90) * Math.PI) / 180) * 120}
                  r="3"
                  fill="var(--accent)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.8, 0] }}
                  transition={{ duration: 3, delay: 1.2 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                />
              ))}

              {/* Small node dots at intersections */}
              {[
                [250, 130], [370, 250], [250, 370], [130, 250],
                [170, 170], [330, 170], [330, 330], [170, 330],
              ].map(([cx, cy], i) => (
                <motion.circle
                  key={i}
                  cx={cx} cy={cy} r="2"
                  fill="var(--text-secondary)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                  transition={{ duration: 0.5, delay: 1.0 + i * 0.06 }}
                />
              ))}
            </svg>

            {/* Floating UI micro-cards */}
            <div className="relative z-10 p-5 flex flex-col justify-between flex-1">

              {/* Top-left: incoming request card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="max-w-[220px] rounded-[0.375rem] border border-dashed border-white/50 bg-[var(--bg-base)]/90 backdrop-blur-sm px-3.5 py-3"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-[var(--accent)] opacity-50" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-[var(--accent)]" />
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--text-tertiary)]">Incoming</span>
                </div>
                <p className="font-mono text-[10px] leading-[140%] text-[var(--text-secondary)]">
                  &quot;Make the button bigger&quot;
                </p>
                <div className="mt-1.5">
                  <span className="rounded-sm bg-[var(--accent)]/15 px-1.5 py-0.5 text-[8px] text-[var(--accent)] uppercase tracking-wider font-semibold">
                    Solution-specific
                  </span>
                </div>
              </motion.div>

              {/* Middle row: AI processing + status */}
              <div className="flex items-center justify-between gap-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="rounded-[0.375rem] border border-[var(--accent)]/30 bg-[var(--bg-base)]/90 backdrop-blur-sm px-3 py-2.5"
                >
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="flex size-3.5 items-center justify-center rounded-sm bg-[var(--accent)]/15">
                      <span className="text-[7px] text-[var(--accent)] font-bold">AI</span>
                    </span>
                    <span className="font-mono text-[8px] uppercase tracking-wider text-[var(--accent)]">Reframing</span>
                  </div>
                  <p className="font-mono text-[10px] leading-[140%] text-[var(--text-primary)] max-w-[180px]">
                    &quot;Conversion dropped 12%.
                    <br />
                    What&apos;s causing friction?&quot;
                  </p>
                  <div className="mt-1.5 flex gap-1.5">
                    <span className="rounded-sm bg-emerald-500/15 px-1 py-0.5 text-[7px] text-emerald-400 uppercase tracking-wider font-semibold">
                      Problem-framed
                    </span>
                    <span className="rounded-sm bg-[var(--bg-surface)] px-1 py-0.5 text-[7px] text-[var(--text-tertiary)] uppercase tracking-wider">
                      P1
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.5 }}
                  className="rounded-[0.375rem] border border-dashed border-white/50 bg-[var(--bg-base)]/90 backdrop-blur-sm px-3 py-2.5"
                >
                  <span className="font-mono text-[8px] uppercase tracking-wider text-[var(--text-tertiary)] block mb-1.5">Pipeline</span>
                  <div className="flex flex-col gap-1">
                    {['Sense', 'Frame', 'Diverge'].map((s, i) => (
                      <div key={s} className="flex items-center gap-1.5">
                        <span className={cn(
                          'size-1 rounded-full',
                          i < 2 ? 'bg-emerald-400' : 'bg-[var(--accent)]'
                        )} />
                        <span className={cn(
                          'font-mono text-[8px] uppercase tracking-wider',
                          i === 2 ? 'text-[var(--accent)]' : 'text-[var(--text-tertiary)]'
                        )}>{s}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Bottom: metrics strip */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="self-end max-w-[260px] rounded-[0.375rem] border border-dashed border-white/50 bg-[var(--bg-base)]/90 backdrop-blur-sm px-3.5 py-2.5"
              >
                <span className="font-mono text-[8px] uppercase tracking-wider text-[var(--text-tertiary)] block mb-2">Weekly Digest</span>
                <div className="flex items-center gap-4">
                  <div>
                    <span className="font-mono text-[16px] leading-none text-[var(--text-primary)]">3</span>
                    <span className="font-mono text-[8px] text-[var(--text-tertiary)] uppercase tracking-wider ml-1">shipped</span>
                  </div>
                  <div className="w-px h-4 bg-[var(--border)]" />
                  <div>
                    <span className="font-mono text-[16px] leading-none text-emerald-400">0</span>
                    <span className="font-mono text-[8px] text-[var(--text-tertiary)] uppercase tracking-wider ml-1">escalations</span>
                  </div>
                  <div className="w-px h-4 bg-[var(--border)]" />
                  <div>
                    <span className="font-mono text-[16px] leading-none text-[var(--accent)]">94%</span>
                    <span className="font-mono text-[8px] text-[var(--text-tertiary)] uppercase tracking-wider ml-1">health</span>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Corner accents */}
            <div className="absolute top-3 right-3 flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-[var(--text-tertiary)] opacity-40" />
              <span className="size-1.5 rounded-full bg-[var(--text-tertiary)] opacity-40" />
              <span className="size-1.5 rounded-full bg-[var(--accent)] opacity-60" />
            </div>
            <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-[var(--accent)] opacity-60" />
              <span className="size-1.5 rounded-full bg-[var(--text-tertiary)] opacity-40" />
            </div>
          </div>
        </ScaleIn>

        {/* Mobile: simplified visual */}
        <ScaleIn delay={0.3} className="lg:hidden">
          <div
            className={cn(
              'rounded-[0.375rem] border border-dashed border-white/50 bg-[var(--bg-surface)] p-5 overflow-hidden relative'
            )}
          >
            {/* Subtle grid bg */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  'linear-gradient(var(--text-secondary) 1px, transparent 1px), linear-gradient(90deg, var(--text-secondary) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-[var(--accent)] opacity-50" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-[var(--accent)]" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-tertiary)]">
                  Live Workflow
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between rounded-[0.375rem] border border-dashed border-white/50 bg-[var(--bg-base)] px-3 py-2">
                  <span className="font-mono text-[11px] text-[var(--text-secondary)]">Intake gate</span>
                  <span className="rounded-sm bg-[var(--accent)]/15 px-1.5 py-0.5 text-[9px] text-[var(--accent)] uppercase tracking-wider font-semibold">
                    Reframing
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-[0.375rem] border border-dashed border-white/50 bg-[var(--bg-base)] px-3 py-2">
                  <span className="font-mono text-[11px] text-[var(--text-secondary)]">Design phase</span>
                  <span className="rounded-sm bg-emerald-500/10 px-1.5 py-0.5 text-[9px] text-emerald-400 uppercase tracking-wider font-semibold">
                    Diverge
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-[0.375rem] border border-dashed border-white/50 bg-[var(--bg-base)] px-3 py-2">
                  <span className="font-mono text-[11px] text-[var(--text-secondary)]">Weekly digest</span>
                  <span className="font-mono text-[11px] text-[var(--text-primary)]">3 shipped &middot; 94% health</span>
                </div>
              </div>
            </div>
          </div>
        </ScaleIn>

      </div>
    </section>
  )
}
