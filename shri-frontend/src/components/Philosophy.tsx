"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section id="vision" className="py-40 relative px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-shri-gold text-[10px] uppercase tracking-[0.8em] mb-8">Founding Vision</h2>
            <h3 className="text-4xl md:text-6xl font-light leading-[1.1] text-white mb-10">
              Architecture of <br />
              <span className="metallic-text italic">Intentional Harmony</span>
            </h3>

            <div className="space-y-6 text-gray-400 font-light leading-relaxed tracking-wide text-sm md:text-base">
              <p>
                SHRI was born from a singular realization: that the structures we inhabit - whether physical or digital - dictate the quality of our collective consciousness. In an era of fragmented noise, we saw the need for a sanctuary of order.
              </p>
              <p>
                Our vision is to bridge the gap between ancient wisdom and futuristic engineering. By applying the principles of sacred geometry to modern human ecosystems, we create environments that don&apos;t just function, but breathe.
              </p>
              <p>
                We believe that design is not a luxury, but a biological necessity. Every line we draw and every system we build is an act of intention, aimed at restoring the resonance between humanity and the technology it creates.
              </p>
            </div>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              transition={{ duration: 1.5, delay: 1 }}
              className="h-[1px] bg-shri-gold/40 mt-12"
            ></motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            className="relative aspect-square flex flex-col items-center justify-center"
          >
            <div className="absolute inset-0 bg-shri-gold/5 blur-[120px] rounded-full"></div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="relative w-full h-full border border-shri-gold/10 rounded-full flex items-center justify-center"
            >
              <div className="w-3/4 h-3/4 border border-shri-gold/5 rounded-full flex items-center justify-center">
                 <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-shri-gold opacity-40">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="0.2" />
                </svg>
              </div>
            </motion.div>

            <div className="mt-12 text-center max-w-xs mx-auto">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-xl italic font-extralight text-shri-gold/80 leading-relaxed"
              >
                &ldquo;The future is not just built; it is composed.&rdquo;
              </motion.p>
            </div>
          </motion.div>
        </div>

        <div className="mt-60 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="text-2xl md:text-4xl font-extralight text-white leading-relaxed tracking-tight italic"
          >
            &ldquo;We do not build software. We craft <span className="metallic-text font-normal">digital habitats</span> where the human mind can find its natural resonance.&rdquo;
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20 pt-12 border-t border-shri-gold/10 flex flex-col md:flex-row justify-center gap-12 md:gap-24"
          >
            <div className="flex flex-col items-center max-w-xs">
              <span className="text-shri-gold text-[10px] uppercase tracking-[0.5em] mb-4">Privacy First</span>
              <p className="text-gray-500 text-xs font-light leading-relaxed tracking-wide">
                Privacy is our foundation; your data remains a private sanctuary, never a commodity.
              </p>
            </div>
            <div className="flex flex-col items-center max-w-xs">
              <span className="text-shri-gold text-[10px] uppercase tracking-[0.5em] mb-4">Helpfulness</span>
              <p className="text-gray-500 text-xs font-light leading-relaxed tracking-wide">
                Our work is defined by its helpfulness, engineered to be a silent, powerful ally in your creative journey.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-16 text-gray-600 text-[10px] uppercase tracking-[0.5em]"
          >
            Founding Principles
          </motion.div>
        </div>
      </div>
    </section>
  );
}