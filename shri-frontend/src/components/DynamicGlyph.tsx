"use client";

import React from "react";
import { useReducedMotion } from "framer-motion";

export default function DynamicGlyph() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className="absolute inset-0 overflow-hidden bg-shri-black"></div>;
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50">
      <div
        className="absolute -top-[10%] -right-[10%] w-[60%] h-[60%] bg-shri-gold/10 blur-[50px] rounded-full"
        style={{ animation: "pulse 12s infinite alternate" }}
      />
      <div
        className="absolute -bottom-[10%] -left-[10%] w-[60%] h-[60%] bg-shri-gold/6 blur-[60px] rounded-full"
        style={{ animation: "pulse 16s infinite alternate-reverse" }}
      />
      <div
        className="absolute top-0 right-1/4 w-[2px] h-[300px] bg-gradient-to-b from-transparent via-shri-gold/25 to-transparent blur-sm"
      />
      {/* Vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.4)_100%)]"></div>
    </div>
  );
}
