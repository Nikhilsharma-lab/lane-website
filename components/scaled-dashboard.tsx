"use client";

import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";

// Measure before paint on the client (no flash of the unscaled content),
// falling back to useEffect during SSR.
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

// Renders children at a fixed design width, then scales them to fit the
// container (ResizeObserver-driven), setting the wrapper height to the scaled
// height. On narrow viewports it holds a legible minimum scale and lets the
// container clip the overflow — a "window peek" of the full app instead of an
// illegible thumbnail. Stays hidden until first measured so it never flashes.
export function ScaledDashboard({
  designWidth = 896,
  mobileMinScale,
  mobileBreakpoint = 640,
  children,
}: {
  designWidth?: number;
  mobileMinScale?: number;
  mobileBreakpoint?: number;
  children: ReactNode;
}) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState<number | undefined>(undefined);
  const [measured, setMeasured] = useState(false);

  useIsoLayoutEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;
    const update = () => {
      const fit = Math.min(outer.clientWidth / designWidth, 1);
      const isMobile = window.innerWidth < mobileBreakpoint;
      const s = isMobile && mobileMinScale ? Math.max(fit, mobileMinScale) : fit;
      setScale(s);
      setHeight(inner.offsetHeight * s);
      setMeasured(true);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(outer);
    ro.observe(inner);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [designWidth, mobileMinScale, mobileBreakpoint]);

  return (
    <div ref={outerRef} style={{ height, overflow: "hidden" }}>
      <div
        ref={innerRef}
        style={{
          width: designWidth,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          visibility: measured ? "visible" : "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
}
