"use client";

import React from "react";
import { motion } from "framer-motion";
import { useCursorFollower } from "@/hooks/useCursorFollower";

export default function CursorFollower() {
  const { cursorXSpring, cursorYSpring } = useCursorFollower();

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    >
      <div className="w-8 h-8 border border-shri-gold/50 rounded-full flex items-center justify-center">
        <div className="w-1 h-1 bg-shri-gold rounded-full"></div>
      </div>
    </motion.div>
  );
}
