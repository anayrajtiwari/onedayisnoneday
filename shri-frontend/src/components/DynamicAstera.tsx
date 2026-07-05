"use client";

import React from "react";
import { useReducedMotion } from "framer-motion";

/**
 * DynamicAstera — lightweight CSS-only ambient glow.
 * Reduced to 2 blobs + 1 streak. Blur radii kept small (50-60px).
 */
export default function DynamicAstera() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className="absolute inset-0 overflow-hidden bg-shri-black"></div>;
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50">
      <div
        className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-shri-gold/12 blur-[50px] rounded-full astera-blob-1"
      />
      <div
        className="absolute -bottom-[20%] -right-[15%] w-[70%] h-[70%] bg-shri-gold/8 blur-[60px] rounded-full astera-blob-2"
      />
      <div
        className="absolute top-0 left-1/4 w-[2px] h-[300px] bg-gradient-to-b from-transparent via-shri-gold/30 to-transparent blur-sm astera-streak-1"
      />
      {/* Vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.4)_100%)]"></div>
    </div>
  );
}
