import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'The Lane Manifesto'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Design tokens mirrored from globals.css (ImageResponse doesn't load CSS).
const CANVAS = '#020202'
const INK = '#eeeeee'
const INK_MUTED = '#8a8380'
const INK_FAINT = '#4d4947'
const ACCENT = '#84CC16'

export default async function Image() {
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
        {/* Dashed inset border — matches site's wireframe-cell aesthetic */}
        <div
          style={{
            position: 'absolute',
            inset: 32,
            border: `1px dashed ${INK_FAINT}`,
          }}
        />

        {/* Top row */}
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
            <span style={{ width: 16, height: 16, background: ACCENT, display: 'block' }} />
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
            Manifesto
          </div>
        </div>

        {/* Headline block */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 28,
            position: 'relative',
          }}
        >
          <div
            style={{
              fontSize: 108,
              lineHeight: 1,
              fontWeight: 500,
              letterSpacing: -3,
              color: INK,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span>The</span>
            <span>
              Manifesto<span style={{ color: ACCENT }}>.</span>
            </span>
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              color: INK_MUTED,
              fontFamily: 'monospace',
              maxWidth: 920,
            }}
          >
            What design tools have forgotten.
          </div>
        </div>

        {/* Bottom row */}
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
          <span>lane.so/manifesto</span>
          <span>No surveillance. No tickets.</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
