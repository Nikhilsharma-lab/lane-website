"use client";
import { useEffect, useRef } from "react";

const REFUSED = ["Time tracking", "Last active", "Utilization", "Per-designer views"];

export function Refusal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); }
        });
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section refusal" id="refusal" ref={ref}>
      <div className="refusal-inner">
        <div className="refusal-copy">
          <h2 className="refusal-h fx" style={{ animationDelay: "0s" }}>What Lane will never build.</h2>
          <p className="refuse-kicker fx" style={{ animationDelay: ".1s" }}>Enforced in the database, not the UI &mdash; there&rsquo;s no column to turn on.</p>
        </div>
        <ul className="refuse-list">
          {REFUSED.map((r, i) => (
            <li key={r} className="refuse-item fx" style={{ animationDelay: `${0.2 + i * 0.08}s` }}>
              <span className="rx" aria-hidden="true">&#10005;</span>
              <s className="refuse-text">{r}</s>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
