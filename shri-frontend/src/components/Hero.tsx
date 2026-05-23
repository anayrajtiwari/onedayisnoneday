"use client";

import React from "react";
import { motion } from "framer-motion";
import LotusBackground from "./LotusBackground";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-8">
      <LotusBackground />
      
      <div className="z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-shri-gold text-[10px] uppercase tracking-[0.6em] mb-6">Designed With Intention</h2>
          <h1 className="text-6xl md:text-8xl font-light tracking-tight leading-[1.1] text-white">
            The Future of <br />
            <span className="italic font-normal italic metallic-text">Human Ecosystems</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="mt-8 text-gray-400 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed tracking-wide"
        >
          Experience the intersection of sacred geometry and futuristic engineering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="mt-4"
        >
          <span className="text-shri-gold/60 text-[9px] uppercase tracking-[0.8em]">Towards a new era with intention</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="mt-12"
        >
          <button className="group relative px-10 py-4 overflow-hidden border border-shri-gold/30 rounded-full transition-all duration-700 hover:border-shri-gold">
            <div className="absolute inset-0 bg-shri-gold opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
            <span className="relative text-xs uppercase tracking-[0.4em] text-shri-gold">Explore the Vision</span>
          </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-10 flex flex-col items-center space-y-4"
      >
        <span className="text-[8px] uppercase tracking-[0.5em] text-gray-500">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-shri-gold/50 to-transparent"></div>
      </motion.div>
    </section>
  );
}

