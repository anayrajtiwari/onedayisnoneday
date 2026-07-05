"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function GoldenCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring follow — updates skip React state entirely
  const x = useSpring(mouseX, { damping: 30, stiffness: 500 });
  const y = useSpring(mouseY, { damping: 30, stiffness: 500 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 8);
      mouseY.set(e.clientY - 8);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
      style={{
        x: x,
        y: y,
      }}
    >
      <div className="w-4 h-4 rounded-full border border-shri-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
    </motion.div>
  );
}
