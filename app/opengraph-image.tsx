import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Lane — The Operating System for Design Teams'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Design tokens mirrored from globals.css (ImageResponse doesn't load our CSS)
const CANVAS = '#020202'
const INK = '#eeeeee'
const INK_MUTED = '#8a8380'
const INK_FAINT = '#4d4947'
const ACCENT = '#84CC16'

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: CANVAS,
          color: INK,
          fontFamily: 'sans-serif',
          padding: 72,
          position: 'relative',
        }}
      >
        {/* Dashed border inset — the wireframe cell look */}
        <div
          style={{
            position: 'absolute',
            inset: 32,
            border: `1px dashed ${INK_FAINT}`,
          }}
        />

        {/* Top row: LANE wordmark + eyebrow */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              fontSize: 48,
              fontWeight: 700,
              letterSpacing: -2,
              color: INK,
            }}
          >
            LANE
            <span
              style={{
                width: 16,
                height: 16,
                background: ACCENT,
                display: 'block',
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              fontSize: 20,
              textTransform: 'uppercase',
              letterSpacing: 2,
              color: INK_MUTED,
              fontFamily: 'monospace',
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                background: ACCENT,
                display: 'block',
              }}
            />
            Beta opens Summer 2026
          </div>
        </div>

        {/* Headline block */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 32,
            position: 'relative',
          }}
        >
          <div
            style={{
              fontSize: 96,
              lineHeight: 1,
              fontWeight: 500,
              letterSpacing: -3,
              color: INK,
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            The operating system
            <br />
            for design teams
            <span style={{ color: ACCENT }}>.</span>
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              color: INK_MUTED,
              fontFamily: 'monospace',
              maxWidth: 900,
            }}
          >
            No surveillance. No tickets. No tools borrowed from engineering.
          </div>
        </div>

        {/* Bottom row: url */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 20,
            textTransform: 'uppercase',
            letterSpacing: 2,
            color: INK_MUTED,
            fontFamily: 'monospace',
            position: 'relative',
          }}
        >
          <span>lane.so</span>
          <span>AI runs the ops. You lead the design.</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
