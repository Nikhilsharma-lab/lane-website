import { NextResponse, type NextRequest } from 'next/server'

/**
 * noindex all non-production Vercel deployments so `lane-website-*.vercel.app`
 * preview URLs don't split link equity with `lane.so`.
 *
 * Production (`VERCEL_ENV=production`) and local dev (`VERCEL_ENV` undefined)
 * serve normally.
 */
export function proxy(_request: NextRequest) {
  const response = NextResponse.next()

  if (process.env.VERCEL_ENV === 'preview') {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow')
  }

  return response
}

export const config = {
  // Run on every route except static assets + Next internals
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|webp|gif|ico)).*)'],
}
