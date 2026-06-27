"use client";
import { useEffect } from "react";
import { ProductWindow } from "@/components/product-window";

export function Hero() {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    const hdr = document.getElementById("hdr");
    const onScroll = () => hdr?.classList.toggle("scrolled", window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
    return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <>
      <header id="hdr">
        <div className="wrap nav">
          <a className="brandmark" href="#top" aria-label="Lane home">
            <svg className="logo" viewBox="0 0 492 101" fill="none" aria-hidden="true">
              <path d="M0 100V0H93.2753L0 100Z" fill="currentColor" />
              <path d="M0 100H100V6.7247L0 100Z" fill="currentColor" />
              <path d="M123 100.231V0H137.823V94.5839L128.788 86.2549H185.679V100.231H123Z" fill="currentColor" />
              <path d="M197.2 100.231L226.564 0H245.763L275.126 100.231H259.739L236.163 15.3875L212.588 100.231H197.2ZM213.576 74.1142L218.093 60.4208H254.233L258.75 74.1142H213.576Z" fill="currentColor" />
              <path d="M288.059 100.231V0H306.128L339.021 79.1964V0H353.561V100.231H335.492L302.599 21.0343V100.231H288.059Z" fill="currentColor" />
              <path d="M375.529 100.231V0H437.079V13.9758H390.352V43.198H435.385V56.7503H390.352V86.2549H438.208V100.231H375.529Z" fill="currentColor" />
              <rect x="462" y="70" width="30" height="30" fill="var(--brand)" />
            </svg>
          </a>
          <a className="btn btn-primary" href="#">Join the waitlist</a>
        </div>
      </header>

      <div className="hero-stage">
        <div className="fold-bg" aria-hidden="true" />

        <section className="hero" id="top">
          <div className="hero-copy">
            <h1>Turn chaotic design requests into focused design work.</h1>
            <p className="lede">Lane is the design-ops platform for PMs and designers. Requests come in, <b>an AI intake gate turns solutions back into real problems</b>, and designers take them through to shipped — with no time tracking, no dashboards, no surveillance.</p>
            <div className="hero-cta">
              <a className="btn btn-primary btn-lg" href="#">Join the waitlist <span className="arr">→</span></a>
              <a className="btn btn-ghost btn-lg" href="#">See how it works <span className="chev">›</span></a>
            </div>
          </div>
        </section>

        <div className="wrap pw-wrap">
          <ProductWindow />
        </div>
      </div>
    </>
  );
}
