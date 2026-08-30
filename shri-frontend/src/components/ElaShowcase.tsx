"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Zap, Layers } from "lucide-react";

export default function ElaShowcase() {
  return (
    <section id="ela" className="py-40 px-8 relative overflow-hidden bg-shri-black border-t border-shri-gold/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="block text-shri-gold text-[10px] uppercase tracking-[0.8em] mb-6"
            >
              Hardware Innovation
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-light text-white tracking-tight leading-[1.1]"
            >
              SHRI ELA <br />
              <span className="italic metallic-text">-(BETA)</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-6 text-gray-500 text-sm font-light leading-relaxed max-w-lg tracking-wide"
            >
              Building electronic gadgets and physical computing devices from first principles, progressing from foundational basics to intermediate prototypes.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-shri-gold/30 bg-shri-gold/5"
          >
            <span className="w-2 h-2 rounded-full bg-shri-gold animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-shri-gold">
              Hardware Lab in Progress
            </span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="relative glass p-10 rounded-[2.5rem] border border-shri-gold/10 overflow-hidden group hover:border-shri-gold/30 transition-all duration-500">
            <div className="w-14 h-14 border border-shri-gold/20 rounded-2xl flex items-center justify-center mb-6 bg-shri-black/40 text-shri-gold group-hover:scale-110 transition-transform">
              <Cpu size={24} />
            </div>
            <div className="h-[1px] w-12 bg-shri-gold/40 mb-6" />
            <h3 className="text-2xl font-light text-white mb-4 tracking-wide group-hover:text-shri-gold transition-colors">
              Gadget Prototyping
            </h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Crafting tangible electronic gadgets and interactive devices, experimenting with hands-on hardware builds from the basics to intermediate complexities.
            </p>
          </div>

          <div className="relative glass p-10 rounded-[2.5rem] border border-shri-gold/10 overflow-hidden group hover:border-shri-gold/30 transition-all duration-500">
            <div className="w-14 h-14 border border-shri-gold/20 rounded-2xl flex items-center justify-center mb-6 bg-shri-black/40 text-shri-gold group-hover:scale-110 transition-transform">
              <Zap size={24} />
            </div>
            <div className="h-[1px] w-12 bg-shri-gold/40 mb-6" />
            <h3 className="text-2xl font-light text-white mb-4 tracking-wide group-hover:text-shri-gold transition-colors">
              Embedded Microcontrollers
            </h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Programming microcontrollers, interfacing sensors, and creating responsive embedded systems with clean, zero-bloat firmware.
            </p>
          </div>

          <div className="relative glass p-10 rounded-[2.5rem] border border-shri-gold/10 overflow-hidden group hover:border-shri-gold/30 transition-all duration-500">
            <div className="w-14 h-14 border border-shri-gold/20 rounded-2xl flex items-center justify-center mb-6 bg-shri-black/40 text-shri-gold group-hover:scale-110 transition-transform">
              <Layers size={24} />
            </div>
            <div className="h-[1px] w-12 bg-shri-gold/40 mb-6" />
            <h3 className="text-2xl font-light text-white mb-4 tracking-wide group-hover:text-shri-gold transition-colors">
              Physical-Digital Synergy
            </h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Seamlessly integrating tangible hardware gadgets with Astera OS and local software environments for unified user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
