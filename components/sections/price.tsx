"use client";
import { useEffect, useRef, useState } from "react";
import { joinWaitlist } from "@/app/actions";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "error" | "loading" | "success" | "failed";

// Pricing tiers removed for now — the waitlist remains the primary CTA.
// Tier markup + .tiers/.tier CSS are preserved so pricing can drop back in.
export function Price() {
  const ref = useRef<HTMLElement>(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); }
        });
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;
    if (!EMAIL.test(email.trim())) { setStatus("error"); return; }
    setStatus("loading");
    try {
      const res = await joinWaitlist(email.trim());
      setStatus(res.ok ? "success" : res.error === "invalid" ? "error" : "failed");
    } catch {
      setStatus("failed");
    }
  };

  return (
    <section className="section price" id="pricing" ref={ref}>
      <div className="price-inner">
        <h2 className="section-h price-h fx" style={{ animationDelay: "0s" }}>Lane is invite-only.</h2>

        <div className="wl-wrap fx" id="waitlist" style={{ animationDelay: ".12s" }}>
          {status === "success" ? (
            <p className="wl-success" role="status">You&rsquo;re on the list &mdash; we&rsquo;ll be in touch.</p>
          ) : (
            <form className="waitlist" onSubmit={onSubmit} noValidate>
              <input
                className={`wl-input${status === "error" ? " invalid" : ""}`}
                type="email"
                inputMode="email"
                placeholder="you@company.com"
                aria-label="Email address"
                aria-invalid={status === "error"}
                disabled={status === "loading"}
                value={email}
                onChange={(e) => { setEmail(e.target.value); if (status === "error" || status === "failed") setStatus("idle"); }}
              />
              <button className="btn btn-primary" type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Joining…" : "Join the waitlist"}
              </button>
              {status === "error" && <span className="wl-msg" role="alert">Enter a valid email address.</span>}
              {status === "failed" && <span className="wl-msg" role="alert">Something went wrong &mdash; please try again.</span>}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
