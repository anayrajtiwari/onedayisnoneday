"use client";

import React from "react";
import { motion } from "framer-motion";

export default function DynamicAurora() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50">
      {/* Golden Aurora Blobs */}
      <motion.div
        animate={{
          x: [0, 200, -150, 0],
          y: [0, -100, 150, 0],
          scale: [1, 1.5, 0.7, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-[20%] -left-[10%] w-[80%] h-[80%] bg-shri-gold/15 blur-[120px] rounded-full"
      />
      
      <motion.div
        animate={{
          x: [0, -250, 200, 0],
          y: [0, 150, -100, 0],
          scale: [1, 1.2, 1.4, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-[30%] -right-[20%] w-[90%] h-[90%] bg-shri-gold/10 blur-[160px] rounded-full"
      />

      <motion.div
        animate={{
          x: [0, 120, -180, 0],
          y: [0, 200, -150, 0],
          rotate: [0, 90, 180, 0],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[10%] left-[20%] w-[60%] h-[60%] bg-white/5 blur-[100px] rounded-full"
      />

      {/* Floating Light Streaks */}
      <motion.div
        animate={{
          y: [-500, 500],
          opacity: [0, 0.2, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/4 w-[2px] h-[400px] bg-gradient-to-b from-transparent via-shri-gold/40 to-transparent blur-sm"
      />

      <motion.div
        animate={{
          y: [500, -500],
          opacity: [0, 0.1, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
        className="absolute top-0 right-1/3 w-[1px] h-[600px] bg-gradient-to-b from-transparent via-shri-gold/20 to-transparent blur-sm"
      />

      {/* Vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.4)_100%)]"></div>
    </div>
  );
}
