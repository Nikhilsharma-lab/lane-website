import { type ReactNode } from 'react'

/**
 * WireframeCell — full-width horizontal dashed borders with vertical rail insets.
 *
 * `filled` = bg-lines sections where the surface fills edge-to-edge between borders.
 * Used by `app/page.tsx` and the `/vs/*` and `/about|privacy|terms` static pages
 * to keep the same rail-and-cell rhythm across the site.
 */
export function WireframeCell({
  children,
  filled,
}: {
  children: ReactNode
  filled?: boolean
}) {
  return (
    <div className="border-b border-dashed border-rail">
      <div className="flex">
        {/* Left rail */}
        <div className="w-2 lg:w-rail shrink-0 border-r border-dashed border-rail" />
        {/* Content */}
        <div className={`flex-1 min-w-0 ${filled ? 'bg-surface bg-lines' : ''}`}>
          {children}
        </div>
        {/* Right rail */}
        <div className="w-2 lg:w-rail shrink-0 border-l border-dashed border-rail" />
      </div>
    </div>
  )
}
