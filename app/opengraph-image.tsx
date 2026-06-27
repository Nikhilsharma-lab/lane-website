import { ImageResponse } from "next/og";

export const alt = "Lane — design-ops without the surveillance";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Adaline "botanical journal" palette, mirrored from globals.css
// (ImageResponse renders in isolation and can't load the site's CSS).
const CREAM = "#fbfdf6";
const INK = "#0a1d08";
const MUTED = "#46523a";
const BORDER = "#dfe6d2";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: CREAM,
          color: INK,
          fontFamily: "sans-serif",
          padding: 80,
          position: "relative",
        }}
      >
        {/* botanical-journal frame */}
        <div style={{ position: "absolute", inset: 28, border: `1px solid ${BORDER}` }} />

        {/* wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="46" height="46" viewBox="0 0 100 100" fill="none">
            <path d="M0 100V0H93.2753L0 100Z" fill={INK} />
            <path d="M0 100H100V6.7247L0 100Z" fill={INK} />
          </svg>
          <span style={{ fontSize: 42, fontWeight: 700, letterSpacing: -1 }}>Lane</span>
        </div>

        {/* headline + supporting line */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 80,
              fontWeight: 600,
              lineHeight: 1.04,
              letterSpacing: -2.5,
              maxWidth: 940,
            }}
          >
            Design-ops without the surveillance.
          </span>
          <span style={{ fontSize: 30, color: MUTED, lineHeight: 1.4, maxWidth: 880, marginTop: 28 }}>
            Turn requests into the real problem, prove the impact with the person who asked, and
            refuse to track the people doing the work.
          </span>
        </div>
      </div>
    ),
    size,
  );
}
