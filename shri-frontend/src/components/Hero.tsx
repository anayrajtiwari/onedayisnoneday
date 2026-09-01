"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-8">

      
      <div className="z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block text-shri-gold text-[10px] uppercase tracking-[0.6em] mb-6">A Thread</span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight leading-[1.05] text-white">
            Bringing Worlds <br />
            <span className="italic font-normal metallic-text">Together.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="mt-8 max-w-2xl mx-auto"
        >
          <span className="block text-shri-gold text-xs uppercase tracking-[0.35em] mb-3 font-normal">
            Shri Hari Redirect Initiative • Founded by <a href="https://anay.shri.org.in" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">Anay Raj Tiwari</a>
          </span>
          <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed tracking-wide">
            SHRI (Shri Hari Redirect Initiative) is an interdisciplinary organization that redirects disciplines toward human-centric paradigms — spanning software systems, physical hardware, digital presence agency, and strategic capital.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-4"
        >
          <span className="text-shri-gold/60 text-[9px] uppercase tracking-[0.8em]">Hardware • Software • Agency • Finance</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 flex flex-wrap justify-center gap-5"
        >
          <a
            href="#divisions"
            className="group relative px-8 py-4 overflow-hidden border border-shri-gold/30 rounded-full transition-all duration-700 hover:border-shri-gold"
          >
            <div className="absolute inset-0 bg-shri-gold opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
            <span className="relative text-xs uppercase tracking-[0.4em] text-shri-gold">Explore Divisions</span>
          </a>
          <a
            href="#ecosystem"
            className="group relative px-8 py-4 overflow-hidden border border-white/10 rounded-full transition-all duration-700 hover:border-white/30"
          >
            <span className="relative text-xs uppercase tracking-[0.4em] text-gray-400 group-hover:text-white transition-colors">Ecosystem</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 flex flex-col items-center space-y-4 scroll-pulse">
        <span className="text-[8px] uppercase tracking-[0.5em] text-gray-500">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-shri-gold/50 to-transparent"></div>
      </div>
    </section>
  );
}
