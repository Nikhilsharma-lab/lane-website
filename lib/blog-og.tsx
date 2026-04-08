import { ImageResponse } from 'next/og'
import { getPost } from './blog-content'

// Design tokens mirrored from globals.css (ImageResponse doesn't load CSS).
const CANVAS = '#020202'
const INK = '#eeeeee'
const INK_MUTED = '#8a8380'
const INK_FAINT = '#4d4947'
const ACCENT = '#84CC16'

export const ogSize = { width: 1200, height: 630 }
export const ogContentType = 'image/png'

export async function renderBlogOg(slug: string) {
  const post = getPost(slug)
  if (!post) {
    throw new Error(`No blog post for slug "${slug}"`)
  }
  const [line1, line2] = post.ogHeadline.split('\n')

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
            {post.tag}
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
              fontSize: 92,
              lineHeight: 1,
              fontWeight: 500,
              letterSpacing: -3,
              color: INK,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span>{line1}</span>
            {line2 ? (
              <span>
                {line2.replace(/\.$/, '')}
                <span style={{ color: ACCENT }}>.</span>
              </span>
            ) : null}
          </div>
          <div
            style={{
              fontSize: 24,
              lineHeight: 1.4,
              color: INK_MUTED,
              fontFamily: 'monospace',
              maxWidth: 920,
            }}
          >
            {post.dek}
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
          <span>lane.so/blog/{post.slug}</span>
          <span>{post.readingTime}</span>
        </div>
      </div>
    ),
    { ...ogSize }
  )
}
