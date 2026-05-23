"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function GoldenCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
      style={{
        translateX: position.x - 8,
        translateY: position.y - 8,
      }}
    >
      <div className="w-4 h-4 rounded-full border border-shri-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
    </motion.div>
  );
}
