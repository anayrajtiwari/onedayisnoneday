"use client";

import React from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";

export default function AdvancedLotus() {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.16, 0.28, 0.28, 0.16]);

  const springRotate = useSpring(rotate, { stiffness: 10, damping: 30 });

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <motion.div
        style={{
          rotate: shouldReduceMotion ? 0 : springRotate,
          opacity: opacity,
          willChange: "transform, opacity",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-[110vmax] h-[110vmax] text-shri-gold"
          fill="none"
        >
          <defs>
            <linearGradient id="advancedLotusGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F9F6EE" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#D4AF37" stopOpacity="1" />
              <stop offset="100%" stopColor="#AA7C11" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          {Array.from({ length: 18 }).map((_, i) => (
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
          ))}
        </svg>
      </motion.div>

      {/* Premium radial vignette instead of a flat dark overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(10,10,10,0.5)_60%,rgba(10,10,10,0.85)_100%)]"></div>
    </div>
  );
}
