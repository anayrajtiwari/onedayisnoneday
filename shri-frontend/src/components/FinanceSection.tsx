"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Clock } from "lucide-react";

export default function FinanceSection() {
  return (
    <section id="finance" className="py-28 px-8 relative overflow-hidden border-t border-shri-gold/5">
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-10 rounded-3xl border border-shri-gold/10 bg-shri-black/50 backdrop-blur-md relative overflow-hidden"
        >
          <div className="w-12 h-12 mx-auto mb-6 rounded-2xl border border-shri-gold/20 bg-shri-black/80 flex items-center justify-center text-shri-gold">
            <TrendingUp size={22} />
          </div>

          <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-shri-gold block mb-3">
            Division 04 • Quantitative & Capital Systems
          </span>

          <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight mb-4">
            Quantitative Finance
          </h3>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-shri-gold/30 bg-shri-gold/5 my-4">
            <Clock size={12} className="text-shri-gold animate-spin" />
            <span className="font-mono text-xs uppercase tracking-widest text-shri-gold font-medium">
              Planning Phase
            </span>
          </div>

          <p className="text-gray-500 text-xs sm:text-sm font-light max-w-lg mx-auto leading-relaxed mt-2">
            Research and architectural formulation of future capital allocation models and value distribution mechanisms. Full details will be revealed in subsequent phases.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
