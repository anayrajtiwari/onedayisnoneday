"use client";

import React, { useMemo } from "react";

/**
 * LotusBackground — Pure CSS version. Removed:
 * - useMousePosition hook (was driving springs on every pointer move)
 * - useSpring x2 (continuous spring physics calculations)
 * - useTransform x2 (transform pipeline on mouse coords)
 * - motion.svg with infinite rotate (Framer Motion JS animation loop)
 * 
 * Replaced with a static SVG + CSS rotation animation.
 * The subtle mouse parallax wasn't visually noticeable at ±4° and
 * cost 2 springs + 2 transforms running every frame.
 */
export default function LotusBackground() {
  const petals = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, i) => (
        <g key={i} style={{ transformOrigin: "12px 12px", transform: `rotate(${i * 30}deg)` }}>
          <path
            d="M12 21C12 21 18 17 18 12C18 7 12 3 12 3C12 3 6 7 6 12C6 17 12 21 12 21Z"
            fill="none"
            stroke="url(#lotusGoldGrad)"
            strokeWidth="0.06"
          />
        </g>
      )),
    []
  );

  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
      <div className="relative w-full h-full flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          className="w-[85vh] h-[85vh] max-w-[95vw] opacity-[0.22] text-shri-gold lotus-hero-rotate"
        >
          <defs>
            <linearGradient id="lotusGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F9F6EE" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#D4AF37" stopOpacity="1" />
              <stop offset="100%" stopColor="#AA7C11" stopOpacity="0.7" />
            </linearGradient>
          </defs>
          {petals}
        </svg>
      </div>

      {/* Ambient gold glow — reduced blur from 120px to 60px */}
      <div className="absolute inset-0 bg-shri-gold/[0.06] blur-[60px] rounded-full"></div>
    </div>
  );
}
