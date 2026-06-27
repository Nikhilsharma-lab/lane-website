"use server";

// Waitlist Server Action. Reachable via direct POST, so it validates input
// itself and never trusts the client (per Next.js guidance).
//
// Matches the project's existing backend: signups go into the `waitlist` table
// via the public anon key (the table's RLS allows INSERT only — no reads), and
// notifications go out through Resend from the verified uselane.app domain.
// These env vars are already set in the Vercel project.

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FROM = process.env.RESEND_FROM || "Lane <waitlist@uselane.app>";

export type JoinResult = { ok: boolean; already?: boolean; error?: "invalid" | "server" };

export async function joinWaitlist(rawEmail: string): Promise<JoinResult> {
  const email = (rawEmail || "").trim().toLowerCase();
  if (!EMAIL.test(email) || email.length > 254) {
    return { ok: false, error: "invalid" };
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anon) {
    console.error("[waitlist] Missing NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY");
    return { ok: false, error: "server" };
  }

  // 1) Store the signup. The anon key is gated by the table's INSERT-only RLS.
  try {
    const res = await fetch(`${url}/rest/v1/waitlist`, {
      method: "POST",
      headers: {
        apikey: anon,
        Authorization: `Bearer ${anon}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ email, source: "landing" }),
      cache: "no-store",
    });

    if (res.status === 409) {
      // Unique violation — already on the list. Treat as success.
      return { ok: true, already: true };
    }
    if (!res.ok) {
      console.error("[waitlist] Supabase insert failed", res.status, await res.text().catch(() => ""));
      return { ok: false, error: "server" };
    }
  } catch (err) {
    console.error("[waitlist] Supabase insert threw", err);
    return { ok: false, error: "server" };
  }

  // 2) Emails — best-effort. A failure here never fails the signup.
  await sendEmails(email);

  return { ok: true };
}

async function sendEmails(email: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  const send = (to: string, subject: string, text: string) =>
    fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: FROM, to: [to], subject, text }),
      cache: "no-store",
    });

  try {
    // Confirmation to the person who signed up.
    await send(
      email,
      "You're on the Lane waitlist",
      "You're on the Lane waitlist.\n\n" +
        "Lane turns design requests into the real problem, proves the impact with the person who asked, and refuses to track the people doing the work.\n\n" +
        "It's invite-only right now — we'll be in touch when there's a spot.\n\n— Lane",
    );

    // Founder notification (same as the old waitlist-notify route).
    const notify = process.env.NOTIFY_EMAIL;
    if (notify) {
      await send(
        notify,
        `New waitlist signup: ${email}`,
        `New signup: ${email}\nTime: ${new Date().toISOString()}`,
      );
    }
  } catch (err) {
    console.error("[waitlist] Resend send failed (signup still recorded)", err);
  }
}
