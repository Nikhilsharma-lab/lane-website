"use client";
import { useEffect, useRef, type ReactNode } from "react";

const Doc = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7z" /><path d="M14 3v4h4" /><path d="M9 13h6M9 16.5h4" /></svg>
);
const ChartUp = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 18 9 12l4 3 7-8" /><path d="M15 7h5v5" /></svg>
);
const Clock = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><circle cx="12" cy="12" r="8" /><path d="M12 8v4l2.5 1.5" /></svg>
);
const Pulse = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h4l2.5-7 4.5 14 2.5-7H21" /></svg>
);
const Eye = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12Z" /><circle cx="12" cy="12" r="2.6" /></svg>
);

type Row = { icon?: ReactNode; av?: string; k: string; v?: string; tag?: string; dot?: boolean };
type Card = { head: string; ctrl: string; ctrlIcon?: "chev" | "eye"; rows: Row[]; title: string; desc: string };

const CARDS: Card[] = [
  {
    head: "Requests",
    ctrl: "Inbox",
    rows: [
      { icon: Doc, k: "Add a filter dropdown", tag: "build it" },
      { icon: Doc, k: "Build a settings page", tag: "decided" },
      { icon: Doc, k: "Add an export button", tag: "no ask" },
    ],
    title: "Orders, not questions",
    desc: "Requests land as solutions — the call was made upstream, and your designers execute it instead of asking whether it is the right problem.",
  },
  {
    head: "Activity",
    ctrl: "This week",
    ctrlIcon: "chev",
    rows: [
      { icon: ChartUp, k: "Throughput", v: "14 / week" },
      { icon: Clock, k: "Idle time", v: "0s · always on" },
      { icon: Pulse, k: "Events logged", v: "312 today" },
    ],
    title: "Motion, not meaning",
    desc: "It tallies status, throughput, and who moved what — then quietly mistakes all of that activity for progress that mattered to a user.",
  },
  {
    head: "Designers",
    ctrl: "Live",
    ctrlIcon: "eye",
    rows: [
      { av: "M", k: "Maya · designer", v: "active now", dot: true },
      { av: "S", k: "Sam · designer", v: "idle 6m" },
      { av: "A", k: "Ava · designer", v: "last seen 2m" },
    ],
    title: "Watching, not support",
    desc: "It points its reporting at your designers instead of their work — so watched people perform for the chart instead of telling you the truth.",
  },
];

export function Turn() {
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
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section turn" id="turn" ref={ref}>
      <div className="turn-inner">
        <h2 className="turn-head fx" style={{ animationDelay: "0s" }}>Your design tool is quietly working against you.</h2>
        <p className="turn-sub fx" style={{ animationDelay: ".08s" }}>Run design on a tool built to ship code, and three things quietly break.</p>
      </div>

      <div className="turn-stage fx" style={{ animationDelay: ".18s" }}>
        <div className="turn-cards">
          {CARDS.map((c) => (
            <article className="tcard" key={c.title}>
              <div className="tpv">
                <div className="tpv-head">
                  <span className="tpv-h-label">{c.head}</span>
                  <span className="tpv-h-ctrl">
                    {c.ctrlIcon === "eye" && <span aria-hidden="true">{Eye}</span>}
                    {c.ctrl}
                    {c.ctrlIcon === "chev" && <span className="tpv-chev" aria-hidden="true">▾</span>}
                  </span>
                </div>
                <div className="tpv-list">
                  {c.rows.map((r, i) => (
                    <div className="tpv-row" key={i}>
                      {r.av ? <span className="tpv-av">{r.av}</span> : <span className="tpv-ico" aria-hidden="true">{r.icon}</span>}
                      <span className="tpv-k">{r.k}</span>
                      {r.tag
                        ? <span className="tpv-tag">{r.tag}</span>
                        : <span className="tpv-v">{r.dot && <span className="tpv-dot" aria-hidden="true" />}{r.v}</span>}
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="tcard-title">{c.title}</h3>
              <p className="tcard-desc">{c.desc}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="turn-inner">
        <p className="turn-statement fx" style={{ animationDelay: ".3s" }}>
          <span className="ts-recede">Surveillance produces performance.</span>
          <span className="ts-claim">Support produces <span className="truth">truth</span>.</span>
        </p>
        <p className="turn-support fx" style={{ animationDelay: ".4s" }}>Lane is built for the second one &mdash; and refuses most of what the first sells.</p>
      </div>
    </section>
  );
}
