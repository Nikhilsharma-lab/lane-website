"use client";
import { useEffect, useRef, useState } from "react";

const SOLUTION = "Add a filter dropdown to the dashboard";
const PROBLEM =
  "Users can’t find recent work fast enough — re-entry costs them time on every visit.";

export function Gate() {
  const ref = useRef<HTMLElement>(null);
  // Default state is the FINAL state, so SSR / no-JS / reduced-motion show the resolved reframe.
  const [struck, setStruck] = useState(true);
  const [gateOn, setGateOn] = useState(true);
  const [problem, setProblem] = useState(PROBLEM);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; // keep final state

    // Arm to the start state (section is below the fold here, so this isn't seen).
    setStruck(false);
    setGateOn(false);
    setProblem("");

    let t1: ReturnType<typeof setTimeout> | undefined;
    let t2: ReturnType<typeof setTimeout> | undefined;
    let t3: ReturnType<typeof setTimeout> | undefined;
    let iv: ReturnType<typeof setInterval> | undefined;

    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        t1 = setTimeout(() => setStruck(true), 420);
        t2 = setTimeout(() => setGateOn(true), 820);
        t3 = setTimeout(() => {
          setTyping(true);
          let i = 0;
          iv = setInterval(() => {
            i += 1;
            setProblem(PROBLEM.slice(0, i));
            if (i >= PROBLEM.length) {
              clearInterval(iv);
              setTyping(false);
            }
          }, 16);
        }, 1120);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearInterval(iv);
    };
  }, []);

  return (
    <section className="section gate" id="how-it-works" ref={ref}>
      <div className="gate-inner">
        <div className="gate-copy">
          <h2 className="section-h gate-h">Most requests arrive as solutions.</h2>
          <p className="gate-sub">The intake gate turns them back into problems &mdash; before a designer sees them.</p>
        </div>

        <div className="gate-demo">
          <div className="rf-doc">
            <div className="rf-doc-head">
              <span className="rf-chip"><span className="rf-dot" aria-hidden="true" />Intake</span>
              <span className="rf-meta">REQ-128</span>
            </div>
            <p className={`rf-doc-text${struck ? " struck" : ""}`}>{SOLUTION}</p>
            <div className="rf-doc-foot">
              <span className="rf-who"><span className="rf-av" aria-hidden="true">S</span>Sachin &middot; PM</span>
              <span className="rf-flag">reads as a solution</span>
            </div>
          </div>

          <div className={`rf-suggest${gateOn ? " on" : ""}`}>
            <div className="rf-suggest-head">
              <span className="rf-badge" aria-hidden="true"><span className="rf-glyph">&#8634;</span></span>
              <span className="rf-suggest-label">Reframed at intake</span>
            </div>
            <div className="rf-divide" />
            <span className="rf-meta">Becomes a problem</span>
            {/* Ghost reserves the final text's height so the card never grows while typing. */}
            <p className="rf-prob">
              <span className="rf-prob-ghost" aria-hidden="true">{PROBLEM}</span>
              <span className="rf-prob-live">{problem}{typing && <span className="caret" aria-hidden="true" />}</span>
            </p>
            <p className="rf-why">Hand a designer the problem, not the fix &mdash; so it gets solved, not just shipped.</p>
            <div className="rf-suggest-foot">
              <span className="rf-go">Ready for a designer <span className="rf-arrow" aria-hidden="true">&rarr;</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
