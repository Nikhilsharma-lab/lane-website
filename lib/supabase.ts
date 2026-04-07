import { createClient, type SupabaseClient } from '@supabase/supabase-js'

/**
 * Browser-side Supabase client (singleton).
 * Uses the public anon key — RLS on `waitlist` must restrict to INSERT-only
 * for the anon role. No reads, no updates, no deletes from the client.
 */
let client: SupabaseClient | null = null

export function getSupabaseClient(): SupabaseClient {
  if (client) return client

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !anonKey) {
    throw new Error(
      'Missing Supabase env vars. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local'
    )
  }

  client = createClient(url, anonKey, {
    auth: { persistSession: false },
  })
  return client
}
