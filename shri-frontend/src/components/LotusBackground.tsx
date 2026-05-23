"use client";

import React from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";

export default function LotusBackground() {
  const { x, y } = useMousePosition();

  const mouseX = useSpring(x, { stiffness: 40, damping: 25 });
  const mouseY = useSpring(y, { stiffness: 40, damping: 25 });

  const rotateX = useTransform(mouseY, [0, 1000], [4, -4]);
  const rotateY = useTransform(mouseX, [0, 1500], [-4, 4]);

  return (
    <motion.div
      style={{ rotateX, rotateY, perspective: "1000px", willChange: "transform" }}
      className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <motion.svg
          viewBox="0 0 24 24"
          className="w-[85vh] h-[85vh] max-w-[95vw] opacity-[0.22] text-shri-gold"
          animate={{ rotate: 360 }}
          transition={{ duration: 300, repeat: Infinity, ease: "linear" }}
          style={{ willChange: "transform" }}
        >
          <defs>
            <linearGradient id="lotusGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F9F6EE" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#D4AF37" stopOpacity="1" />
              <stop offset="100%" stopColor="#AA7C11" stopOpacity="0.7" />
            </linearGradient>
          </defs>
          {Array.from({ length: 12 }).map((_, i) => (
            <g key={i} style={{ transformOrigin: "12px 12px", transform: `rotate(${i * 30}deg)` }}>
              <motion.path
                d="M12 21C12 21 18 17 18 12C18 7 12 3 12 3C12 3 6 7 6 12C6 17 12 21 12 21Z"
                fill="none"
                stroke="url(#lotusGoldGrad)"
                strokeWidth="0.06"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 15,
                  delay: i * 0.3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
            </g>
          ))}
        </motion.svg>
      </div>
      
      {/* Premium ambient gold glow */}
      <div className="absolute inset-0 bg-shri-gold/[0.08] blur-[120px] rounded-full"></div>
    </motion.div>
  );
}
