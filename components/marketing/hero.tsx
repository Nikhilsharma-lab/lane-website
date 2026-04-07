'use client'

import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import { FadeIn, ScaleIn, motion } from './motion'

/* ── Main Hero ── */
export function Hero() {
  return (
    <section className="py-14 lg:py-18 px-4 lg:px-9">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

        {/* ═══ Left: Copy ═══ */}
        <div className="flex flex-col">
          {/* Badge */}
          <FadeIn className="mb-6">
            <span
              className={cn(
                'inline-flex items-center gap-3',
                'font-mono text-base uppercase leading-none text-ink-muted'
              )}
            >
              <span className="size-2 rounded-full bg-accent [animation:blink_1.4s_ease-in-out_infinite]" />
              Launching Summer 2026
            </span>
          </FadeIn>

          {/* Headline */}
          <FadeIn delay={0.1}>
            <h1
              className={cn(
                'text-4xl tracking-display-sm leading-none',
                'md:text-5xl md:tracking-display-md',
                'lg:text-6xl lg:tracking-display-lg',
                'xl:text-7xl xl:tracking-display-xl',
                'font-normal text-ink'
              )}
            >
              The AI chief of staff
              <br />
              your design team
              <br />
              never had
              <span className="text-accent">.</span>
            </h1>
          </FadeIn>

          {/* Descriptions */}
          <FadeIn delay={0.2}>
            <p
              className={cn(
                'mt-6 font-mono text-base leading-normal',
                'lg:text-md',
                'text-ink-muted max-w-md'
              )}
            >
              Built for design teams, not adapted for them.
              From the moment a PM has a problem to the moment
              you measure whether it actually worked — one system.
              AI runs the ops. You lead the design.
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p
              className={cn(
                'mt-4 font-mono text-base leading-normal',
                'text-ink-subtle max-w-md'
              )}
            >
              No surveillance. No forced status updates.
              No tools built for developers that designers have to borrow.
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn className="mt-8 flex flex-col sm:flex-row items-start gap-4" delay={0.3}>
            <a
              href="#early-access"
              className={cn(
                'group relative inline-flex items-center justify-center',
                'h-btn-md rounded-xs border border-transparent px-3.5',
                'bg-btn transition-colors duration-150',
                'hover:bg-btn-hover',
                'font-mono text-base uppercase leading-none',
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

            <a
              href="#how-it-works"
              className={cn(
                'group inline-flex items-center gap-2 h-btn-md',
                'font-mono text-xs uppercase leading-none',
                'text-ink-muted transition-colors duration-200',
                'hover:text-accent'
              )}
            >
              See how it works
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </FadeIn>

        </div>

        {/* ═══ Right: AI Workflow Visual ═══ */}
        <ScaleIn delay={0.2} className="relative hidden lg:flex h-full">
          <div className="relative w-full flex flex-col rounded-sm border border-dashed border-rail bg-surface/80 overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 opacity-5 bg-grid-lg" />

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
                    stroke="var(--color-ink-subtle)"
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
                stroke="var(--color-ink-subtle)"
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
                stroke="var(--color-accent)"
                strokeWidth="0.5"
                strokeDasharray="2 6"
                fill="none"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 0.2, scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
                style={{ transformOrigin: '250px 250px' }}
              />

              {/* Pixel-font "LANE" — terminal typewriter style */}
              {(() => {
                const S = 10   // block size
                const G = 12   // grid step (size + gap)
                const baseX = 132
                const baseY = 222
                // Letters defined column-by-column, left to right for typewriter order
                const letters: { letter: string; xOff: number; cols: [number, number[]][] }[] = [
                  { letter: 'L', xOff: 0, cols: [
                    [0, [0,1,2,3,4]], [1, [4]], [2, [4]], [3, [4]],
                  ]},
                  { letter: 'A', xOff: 54, cols: [
                    [0, [1,2,3,4]], [1, [0,2]], [2, [0,2]], [3, [1,2,3,4]],
                  ]},
                  { letter: 'N', xOff: 108, cols: [
                    [0, [0,1,2,3,4]], [1, [1]], [2, [2]], [3, [0,1,2,3,4]],
                  ]},
                  { letter: 'E', xOff: 162, cols: [
                    [0, [0,1,2,3,4]], [1, [0,2,4]], [2, [0,2,4]], [3, [0,4]],
                  ]},
                ]
                // Flatten all blocks in typewriter order (column by column, top to bottom within column)
                const allBlocks: { x: number; y: number; letter: string; seq: number }[] = []
                let seq = 0
                for (const l of letters) {
                  for (const [c, rows] of l.cols) {
                    for (const r of rows) {
                      allBlocks.push({ x: baseX + l.xOff + c * G, y: baseY + r * G, letter: l.letter, seq })
                      seq++
                    }
                  }
                }
                const totalBlocks = allBlocks.length
                const typeDelay = 0.04  // seconds between each block
                const startDelay = 0.6
                const totalTypeTime = startDelay + totalBlocks * typeDelay
                // Cursor position: after the last block of E, bottom-right
                const lastBlock = allBlocks[allBlocks.length - 1]
                const cursorX = lastBlock.x + G + 4
                const cursorY = baseY

                return (
                  <g>
                    {allBlocks.map((b, i) => (
                      <motion.rect
                        key={`px-${i}`}
                        x={b.x} y={b.y}
                        width={S} height={S} rx="1"
                        fill="var(--color-ink)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.85 }}
                        transition={{ duration: 0.05, delay: startDelay + i * typeDelay }}
                      />
                    ))}
                    {/* Blinking cursor — appears after typing, blinks forever */}
                    <motion.rect
                      x={cursorX} y={cursorY}
                      width="3" height={S * 5 + 2 * 4}
                      fill="var(--color-accent)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0, 1, 1, 0] }}
                      transition={{
                        duration: 1,
                        delay: totalTypeTime + 0.1,
                        repeat: Infinity,
                        times: [0, 0.49, 0.5, 0.99, 1],
                      }}
                    />
                    {/* Accent dot after E — types in last */}
                    <motion.rect
                      x={baseX + 162 + 4 * G} y={baseY + 4 * G}
                      width={S} height={S} rx="1"
                      fill="var(--color-accent)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.05, delay: totalTypeTime }}
                    />
                  </g>
                )
              })()}

              {/* Orbiting dots */}
              {[0, 120, 240].map((offset, i) => (
                <motion.circle
                  key={offset}
                  cx={250 + Math.cos(((offset + 90) * Math.PI) / 180) * 120}
                  cy={250 + Math.sin(((offset + 90) * Math.PI) / 180) * 120}
                  r="3"
                  fill="var(--color-accent)"
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
                  fill="var(--color-ink-muted)"
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
                className="max-w-card-sm rounded-sm border border-dashed border-rail bg-canvas/90 backdrop-blur-sm px-3.5 py-3"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-50" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
                  </span>
                  <span className="font-mono text-2xs uppercase tracking-wider text-ink-subtle">Incoming</span>
                </div>
                <p className="font-mono text-2xs leading-snug text-ink-muted">
                  &quot;Make the button bigger&quot;
                </p>
                <div className="mt-1.5">
                  <span className="rounded-xs bg-accent-soft px-1.5 py-0.5 text-2xs text-accent uppercase tracking-wider font-semibold">
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
                  className="rounded-sm border border-accent/30 bg-canvas/90 backdrop-blur-sm px-3 py-2.5"
                >
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="flex size-3.5 items-center justify-center rounded-xs bg-accent-soft">
                      <span className="text-2xs text-accent font-bold">AI</span>
                    </span>
                    <span className="font-mono text-2xs uppercase tracking-wider text-accent">Reframing</span>
                  </div>
                  <p className="font-mono text-2xs leading-snug text-ink max-w-card-xs">
                    &quot;Conversion dropped 12%.
                    <br />
                    What&apos;s causing friction?&quot;
                  </p>
                  <div className="mt-1.5 flex gap-1.5">
                    <span className="rounded-xs bg-success-soft px-1 py-0.5 text-2xs text-success uppercase tracking-wider font-semibold">
                      Problem-framed
                    </span>
                    <span className="rounded-xs bg-surface px-1 py-0.5 text-2xs text-ink-subtle uppercase tracking-wider">
                      P1
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.5 }}
                  className="rounded-sm border border-dashed border-rail bg-canvas/90 backdrop-blur-sm px-3 py-2.5"
                >
                  <span className="font-mono text-2xs uppercase tracking-wider text-ink-subtle block mb-1.5">Pipeline</span>
                  <div className="flex flex-col gap-1">
                    {['Sense', 'Frame', 'Diverge'].map((s, i) => (
                      <div key={s} className="flex items-center gap-1.5">
                        <span className={cn(
                          'size-1 rounded-full',
                          i < 2 ? 'bg-success' : 'bg-accent'
                        )} />
                        <span className={cn(
                          'font-mono text-2xs uppercase tracking-wider',
                          i === 2 ? 'text-accent' : 'text-ink-subtle'
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
                className="self-end max-w-card-md rounded-sm border border-dashed border-rail bg-canvas/90 backdrop-blur-sm px-3.5 py-2.5"
              >
                <span className="font-mono text-2xs uppercase tracking-wider text-ink-subtle block mb-2">Weekly Digest</span>
                <div className="flex items-center gap-4">
                  <div>
                    <span className="font-mono text-lg leading-none text-ink">3</span>
                    <span className="font-mono text-2xs text-ink-subtle uppercase tracking-wider ml-1">shipped</span>
                  </div>
                  <div className="w-px h-4 bg-line" />
                  <div>
                    <span className="font-mono text-lg leading-none text-success">0</span>
                    <span className="font-mono text-2xs text-ink-subtle uppercase tracking-wider ml-1">escalations</span>
                  </div>
                  <div className="w-px h-4 bg-line" />
                  <div>
                    <span className="font-mono text-lg leading-none text-accent">94%</span>
                    <span className="font-mono text-2xs text-ink-subtle uppercase tracking-wider ml-1">health</span>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Corner accents */}
            <div className="absolute top-3 right-3 flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-ink-subtle opacity-40" />
              <span className="size-1.5 rounded-full bg-ink-subtle opacity-40" />
              <span className="size-1.5 rounded-full bg-accent opacity-60" />
            </div>
            <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-accent opacity-60" />
              <span className="size-1.5 rounded-full bg-ink-subtle opacity-40" />
            </div>
          </div>
        </ScaleIn>

        {/* Mobile: simplified visual */}
        <ScaleIn delay={0.3} className="lg:hidden">
          <div
            className={cn(
              'rounded-sm border border-dashed border-rail bg-surface p-5 overflow-hidden relative'
            )}
          >
            {/* Subtle grid bg */}
            <div className="absolute inset-0 opacity-5 bg-grid-sm" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-50" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
                </span>
                <span className="font-mono text-2xs uppercase tracking-wider text-ink-subtle">
                  Live Workflow
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between rounded-sm border border-dashed border-rail bg-canvas px-3 py-2">
                  <span className="font-mono text-xs text-ink-muted">Intake gate</span>
                  <span className="rounded-xs bg-accent-soft px-1.5 py-0.5 text-2xs text-accent uppercase tracking-wider font-semibold">
                    Reframing
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-sm border border-dashed border-rail bg-canvas px-3 py-2">
                  <span className="font-mono text-xs text-ink-muted">Design phase</span>
                  <span className="rounded-xs bg-success-soft px-1.5 py-0.5 text-2xs text-success uppercase tracking-wider font-semibold">
                    Diverge
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-sm border border-dashed border-rail bg-canvas px-3 py-2">
                  <span className="font-mono text-xs text-ink-muted">Weekly digest</span>
                  <span className="font-mono text-xs text-ink">3 shipped &middot; 94% health</span>
                </div>
              </div>
            </div>
          </div>
        </ScaleIn>

      </div>
    </section>
  )
}
