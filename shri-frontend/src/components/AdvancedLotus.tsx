"use client";

import React, { useMemo } from "react";

/**
 * AdvancedLotus — Pure CSS version. Removed:
 * - useScroll + useTransform + useSpring (scroll-driven spring physics ran
 *   computations on every single scroll frame)
 * - willChange: transform, opacity (was permanently promoting a 110vmax
 *   element to GPU — massive memory usage)
 * 
 * Replaced with a simple CSS rotate animation on the compositor thread.
 * The visual is identical (subtle slow rotation) but costs zero main-thread time.
 */
export default function AdvancedLotus() {
  const petals = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, i) => (
        <path
          key={i}
          d="M12 21C12 21 18 17 18 12C18 7 12 3 12 3C12 3 6 7 6 12C6 17 12 21 12 21Z"
          stroke="url(#advancedLotusGoldGrad)"
          strokeWidth="0.05"
          style={{
            transformOrigin: "12px 12px",
            transform: `rotate(${i * 20}deg)`,
          }}
        />
      )),
    []
  );

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.22] lotus-rotate">
        <svg
          viewBox="0 0 24 24"
          className="w-[90vmin] h-[90vmin] text-shri-gold"
          fill="none"
        >
          <defs>
            <linearGradient id="advancedLotusGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F9F6EE" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#D4AF37" stopOpacity="1" />
              <stop offset="100%" stopColor="#AA7C11" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          {petals}
        </svg>
      </div>

      {/* Premium radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(10,10,10,0.5)_60%,rgba(10,10,10,0.85)_100%)]"></div>
    </div>
  );
}
