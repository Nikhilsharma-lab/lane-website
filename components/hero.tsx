"use client";

import { useEffect } from "react";
import { ScaledDashboard } from "./scaled-dashboard";
import { ProductWindow } from "@/components/product-window";

// Image-background hero (sky + grass overlay) carrying the Lane navbar, copy,
// brown CTAs, and the ProductWindow artifact. Entrance via fade-up / hero-rise.

const BG_IMAGE = "/hero-bg-sky.webp";
const GRASS = "/hero-grass.png";

export function Hero() {
  useEffect(() => {
    const hdr = document.getElementById("hdr");
    const onScroll = () => hdr?.classList.toggle("scrolled", window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url('${BG_IMAGE}')` }}
    >
      <style>{`
        @keyframes hv-fade-up { from { opacity:0; transform:translateY(24px); filter:blur(6px); } to { opacity:1; transform:translateY(0); filter:blur(0); } }
        @keyframes hv-hero-rise { from { opacity:0; transform:translateY(64px) scale(0.97); } to { opacity:1; transform:translateY(0) scale(1); } }
        .animate-fade-up { animation: hv-fade-up 0.9s cubic-bezier(0.22,1,0.36,1) both; }
        .animate-hero-rise { animation: hv-hero-rise 1.1s cubic-bezier(0.22,1,0.36,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-up, .animate-hero-rise { animation: none !important; }
        }
      `}</style>

      {/* Original Lane navbar */}
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

      <div className="min-h-8 flex-1 shrink-0 sm:min-h-12 lg:min-h-16" />

      {/* Hero content — Lane copy, fonts, brown CTAs */}
      <div className="relative z-20 flex flex-col items-center px-5 text-center">
        <h1
          className="font-normal leading-[1.05] tracking-tight text-gray-900 text-[32px] min-[400px]:text-[38px] sm:text-5xl lg:text-[56px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="block animate-fade-up">Turn chaotic design requests</span>
          <span className="block animate-fade-up [animation-delay:100ms]">into focused design work.</span>
        </h1>

        <p className="animate-fade-up [animation-delay:340ms] mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:mt-5 sm:text-base lg:text-lg">
          Lane is the design-ops platform for PMs and designers. Requests come in, an AI intake gate
          turns solutions back into real problems, and designers take them through to shipped — with
          no time tracking, no dashboards, no surveillance.
        </p>

        <div className="hero-cta animate-fade-up [animation-delay:460ms]">
          <a className="btn btn-primary btn-lg" href="#">
            Join the waitlist <span className="arr">→</span>
          </a>
          <a className="btn btn-ghost btn-lg" href="#">
            See how it works <span className="chev">›</span>
          </a>
        </div>
      </div>

      <div className="min-h-10 flex-1 shrink-0 sm:min-h-12 lg:min-h-16" />

      {/* Lane artifact — scaled to fit on desktop, legible "peek" on mobile */}
      <div className="animate-hero-rise [animation-delay:620ms] relative z-0 mx-auto w-[92%] max-w-4xl shrink-0 sm:w-[84%] lg:w-[72%]">
        <ScaledDashboard designWidth={1080} mobileMinScale={0.7}>
          <ProductWindow />
        </ScaledDashboard>
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={GRASS}
        alt=""
        className="pointer-events-none absolute bottom-0 left-0 z-10 w-full select-none"
      />
    </section>
  );
}
