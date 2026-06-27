"use client";
import { useEffect, useRef, type CSSProperties } from "react";

export function Loop() {
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
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section loop" id="loop" ref={ref}>
      <div className="loop-inner">
        <h2 className="section-h loop-h fx" style={{ animationDelay: "0s" }}>A request isn&rsquo;t done when it ships.</h2>
        <p className="loop-sub fx" style={{ animationDelay: ".08s" }}>It&rsquo;s done when the requester proves the impact &mdash; and only they can close it.</p>

        <div className="how-beat loop-card fx" style={{ animationDelay: ".18s" }}>
          <div className="imp-head">
            <span className="imp-tag">Outcome</span>
            <span className="imp-req">REQ-128</span>
          </div>

          <div className="imp-metric">
            <span className="imp-metric-v">Task resumption rate</span>
            <span className="imp-metric-note">How fast people get back to recent work &mdash; the metric Sachin asked us to lift.</span>
          </div>

          <div className="imp-rows">
            <div className="imp-row">
              <div className="imp-row-top"><span className="imp-k">Sachin predicted</span><span className="imp-v">+12%</span></div>
              <div className="imp-bar"><span className="imp-fill imp-fill-pred" style={{ "--w": "80%" } as CSSProperties} /></div>
            </div>
            <div className="imp-row">
              <div className="imp-row-top"><span className="imp-k">Measured 2 weeks after ship</span><span className="imp-v">+9%</span></div>
              <div className="imp-bar"><span className="imp-fill imp-fill-act" style={{ "--w": "60%" } as CSSProperties} /></div>
            </div>
          </div>

          <div className="imp-delta">
            <span className="imp-delta-k">Delta</span>
            <span className="imp-delta-v">&minus;3 pts</span>
            <span className="imp-delta-note">actual came in just under</span>
          </div>

          <div className="closed-by">
            <span className="cb-badge">&#10003; Closed by Sachin &middot; PM</span>
            <span className="cb-note">He requested it, so only he can close it.</span>
          </div>
        </div>

        <p className="loop-quiet fx" style={{ animationDelay: ".3s" }}>The delta is how both sides learn &mdash; never a score.</p>
      </div>
    </section>
  );
}
