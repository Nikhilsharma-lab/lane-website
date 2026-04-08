import { NextResponse } from 'next/server'

// Server-only — secrets stay on the server, never reach the client.
// Reads RESEND_API_KEY and NOTIFY_EMAIL from env. Both must be set in
// .env.local for local dev and in Vercel project env vars for production.

export const runtime = 'nodejs'

type Payload = {
  email?: string
  role?: string
  teamSize?: string
  currentTool?: string
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  const notifyEmail = process.env.NOTIFY_EMAIL

  if (!apiKey || !notifyEmail) {
    console.error('[waitlist-notify] missing RESEND_API_KEY or NOTIFY_EMAIL')
    // Return 200 so the client form never shows an error to the user
    // for a notification-side failure. The Supabase row is the source of truth.
    return NextResponse.json({ ok: false, reason: 'not-configured' }, { status: 200 })
  }

  let payload: Payload
  try {
    payload = (await request.json()) as Payload
  } catch {
    return NextResponse.json({ ok: false, reason: 'bad-json' }, { status: 400 })
  }

  const { email, role, teamSize, currentTool } = payload
  if (!email || !role || !teamSize || !currentTool) {
    return NextResponse.json({ ok: false, reason: 'missing-fields' }, { status: 400 })
  }

  const subject = `New waitlist signup: ${email}`
  const text = [
    `New Lane waitlist signup`,
    ``,
    `Email:        ${email}`,
    `Role:         ${role}`,
    `Team size:    ${teamSize}`,
    `Current tool: ${currentTool}`,
    ``,
    `--`,
    `Sent automatically from lane-website /api/waitlist-notify`,
  ].join('\n')

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Lane Waitlist <onboarding@resend.dev>',
        to: [notifyEmail],
        subject,
        text,
      }),
    })

    if (!res.ok) {
      const body = await res.text()
      console.error('[waitlist-notify] resend failed', res.status, body)
      return NextResponse.json(
        { ok: false, reason: 'resend-error', status: res.status },
        { status: 200 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[waitlist-notify] unexpected error', err)
    return NextResponse.json({ ok: false, reason: 'unexpected' }, { status: 200 })
  }
}
