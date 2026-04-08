'use client'

import { useState, type FormEvent } from 'react'
import { track } from '@vercel/analytics'
import { cn } from '@/lib/utils'
import { getSupabaseClient } from '@/lib/supabase'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const ROLES = ['Design Lead', 'Senior Designer', 'PM', 'Founder'] as const
const TEAM_SIZES = ['1–3', '4–10', '10+'] as const
const CURRENT_TOOLS = ['Jira', 'Linear', 'Notion', 'Asana', 'None', 'Other'] as const

type Role = (typeof ROLES)[number]
type TeamSize = (typeof TEAM_SIZES)[number]
type CurrentTool = (typeof CURRENT_TOOLS)[number]

// Pragmatic email regex — rejects obvious garbage like `test`, `a@b`, `foo@bar`
// without trying to be RFC 5322 perfect. Server (Supabase) is the real authority.
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [role, setRole] = useState<Role | ''>('')
  const [teamSize, setTeamSize] = useState<TeamSize | ''>('')
  const [currentTool, setCurrentTool] = useState<CurrentTool | ''>('')
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErrorMsg(null)

    if (!email || !role || !teamSize || !currentTool) {
      setErrorMsg('All fields are required.')
      setState('error')
      return
    }

    if (!EMAIL_REGEX.test(email.trim())) {
      setErrorMsg('Please enter a valid email address.')
      setState('error')
      return
    }

    setState('submitting')

    try {
      const supabase = getSupabaseClient()
      const { error } = await supabase.from('waitlist').insert({
        email,
        role,
        team_size: teamSize,
        current_tool: currentTool,
      })

      if (error) {
        // Surface a friendly message; log full error for debugging
        console.error('[waitlist] insert failed', error)
        setErrorMsg(
          error.code === '23505'
            ? "You're already on the list. We'll be in touch."
            : 'Something went wrong. Please try again.'
        )
        setState('error')
        return
      }

      // Fire-and-forget notification. Notification failures must never block
      // the user-facing success state — Supabase row is the source of truth.
      void fetch('/api/waitlist-notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, role, teamSize, currentTool }),
      }).catch((notifyErr) => {
        console.error('[waitlist] notify failed (non-blocking)', notifyErr)
      })

      // North star metric (P0.4). Fire to both Vercel Analytics and Microsoft
      // Clarity for cross-verification. Clarity call is a no-op if the script
      // isn't loaded yet.
      try {
        track('waitlist_submitted', { role, teamSize, currentTool })
        ;(window as unknown as { clarity?: (...args: unknown[]) => void }).clarity?.(
          'event',
          'waitlist_submitted'
        )
      } catch (analyticsErr) {
        console.error('[waitlist] analytics event failed (non-blocking)', analyticsErr)
      }

      setState('success')
    } catch (err) {
      console.error('[waitlist] unexpected error', err)
      setErrorMsg('Something went wrong. Please try again.')
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div
        role="status"
        aria-live="polite"
        className={cn(
          'mt-10 mx-auto max-w-md',
          'border border-inverted-line rounded-xs px-6 py-8',
          'text-center'
        )}
      >
        <p className="font-mono text-base uppercase leading-none text-accent">
          ✓ You&apos;re on the list
        </p>
        <p className="mt-4 font-mono text-sm leading-tight text-inverted-muted">
          We&apos;ll reach out when your cohort opens.
          <br />
          No spam. No drip sequences. One email when it&apos;s your turn.
        </p>
      </div>
    )
  }

  const inputClass = cn(
    'w-full h-btn-md px-3.5 rounded-xs',
    'bg-transparent border border-inverted-line',
    'font-mono text-base leading-none',
    'text-inverted-ink placeholder:text-inverted-subtle',
    'focus:outline-none focus:border-accent',
    'transition-colors duration-150'
  )

  const selectClass = cn(inputClass, 'uppercase appearance-none cursor-pointer')

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 mx-auto max-w-md text-left"
      noValidate
    >
      <div className="grid grid-cols-1 gap-3">
        <label className="block">
          <span className="sr-only">Work email</span>
          <input
            type="email"
            required
            placeholder="work@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            disabled={state === 'submitting'}
          />
        </label>

        <label className="block">
          <span className="sr-only">Role</span>
          <select
            required
            value={role}
            onChange={(e) => setRole(e.target.value as Role)}
            className={selectClass}
            disabled={state === 'submitting'}
          >
            <option value="" disabled>
              Role
            </option>
            {ROLES.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="sr-only">Team size</span>
          <select
            required
            value={teamSize}
            onChange={(e) => setTeamSize(e.target.value as TeamSize)}
            className={selectClass}
            disabled={state === 'submitting'}
          >
            <option value="" disabled>
              Team size
            </option>
            {TEAM_SIZES.map((t) => (
              <option key={t} value={t}>
                {t} designers
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="sr-only">Current tool</span>
          <select
            required
            value={currentTool}
            onChange={(e) => setCurrentTool(e.target.value as CurrentTool)}
            className={selectClass}
            disabled={state === 'submitting'}
          >
            <option value="" disabled>
              Current tool
            </option>
            {CURRENT_TOOLS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
      </div>

      <button
        type="submit"
        disabled={state === 'submitting'}
        className={cn(
          'group relative mt-4 inline-flex w-full items-center justify-center',
          'h-btn-md rounded-xs border border-transparent px-3.5',
          'bg-inverted-ink transition-colors duration-150',
          'hover:bg-inverted-line',
          'font-mono text-base uppercase leading-none',
          'text-inverted hover:text-inverted-ink',
          'disabled:opacity-60 disabled:cursor-not-allowed'
        )}
        style={{ '--lines-color': 'var(--color-inverted-subtle)' } as React.CSSProperties}
      >
        <span className="relative z-10">
          {state === 'submitting' ? 'Submitting…' : 'Request Early Access'}
        </span>
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
      </button>

      {state === 'error' && errorMsg && (
        <p
          role="alert"
          className="mt-3 font-mono text-sm leading-tight text-accent text-center"
        >
          {errorMsg}
        </p>
      )}
    </form>
  )
}
