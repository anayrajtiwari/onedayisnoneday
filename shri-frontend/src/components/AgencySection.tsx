"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Search, Share2, ArrowUpRight } from "lucide-react";

export default function AgencySection() {
  return (
    <section id="agency" className="py-40 px-8 relative overflow-hidden border-t border-shri-gold/5">
      {/* Background ambient light */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-shri-gold text-[10px] uppercase tracking-[0.8em]">
                Strategic Creative Studio
              </span>
              <span className="text-[9px] font-mono tracking-widest px-3 py-1 rounded-full border border-shri-gold/40 text-shri-gold bg-shri-gold/10 uppercase">
                Live Platform
              </span>
            </div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-light text-white tracking-tight leading-[1.1]"
            >
              Digital Presence <br />
              <span className="italic metallic-text">& Growth Agency</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-6 text-gray-500 text-sm font-light leading-relaxed max-w-lg tracking-wide"
            >
              Assisting brands, founders, and category architects in cultivating thoughtful digital presence through bespoke social media management, organic SEO authority, and high-voltage web craft.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <a
              href="https://agencies.shri.org.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-shri-gold hover:text-white transition-colors duration-300 border border-shri-gold/30 px-7 py-3.5 rounded-full hover:bg-shri-gold/10"
            >
              <span>Visit Agencies by SHRI</span>
              <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative glass p-8 rounded-3xl border border-shri-gold/10 overflow-hidden group hover:border-shri-gold/30 transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 border border-shri-gold/20 rounded-xl flex items-center justify-center mb-6 bg-shri-black/40 text-shri-gold group-hover:scale-110 transition-transform">
                <Share2 size={20} />
              </div>
              <h3 className="text-xl font-light text-white mb-2 tracking-wide group-hover:text-shri-gold transition-colors">
                Social Media Growth
              </h3>
              <p className="text-gray-400 text-xs font-light leading-relaxed">
                Strategic content direction, community management, and high-resonance narratives across Instagram, X (Twitter), and YouTube.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/5 text-[9px] font-mono uppercase tracking-widest text-shri-gold/70">
              End-to-End Management
            </div>
          </div>

          <div className="relative glass p-8 rounded-3xl border border-shri-gold/10 overflow-hidden group hover:border-shri-gold/30 transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 border border-shri-gold/20 rounded-xl flex items-center justify-center mb-6 bg-shri-black/40 text-shri-gold group-hover:scale-110 transition-transform">
                <Search size={20} />
              </div>
              <h3 className="text-xl font-light text-white mb-2 tracking-wide group-hover:text-shri-gold transition-colors">
                Deep Search SEO
              </h3>
              <p className="text-gray-400 text-xs font-light leading-relaxed">
                Technical SEO, IndexNow instant search syndication, structured Schema markup, LLM / AI retrieval indexing (llms.txt), and ranking authority.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/5 text-[9px] font-mono uppercase tracking-widest text-shri-gold/70">
              Search Authority
            </div>
          </div>

          <div className="relative glass p-8 rounded-3xl border border-shri-gold/10 overflow-hidden group hover:border-shri-gold/30 transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 border border-shri-gold/20 rounded-xl flex items-center justify-center mb-6 bg-shri-black/40 text-shri-gold group-hover:scale-110 transition-transform">
                <TrendingUp size={20} />
              </div>
              <h3 className="text-xl font-light text-white mb-2 tracking-wide group-hover:text-shri-gold transition-colors">
                Digital Presence
              </h3>
              <p className="text-gray-400 text-xs font-light leading-relaxed">
                Transforming obscure brands into authoritative industry leaders through cohesive aesthetic identity and cross-platform presence.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/5 text-[9px] font-mono uppercase tracking-widest text-shri-gold/70">
              Brand Positioning
            </div>
          </div>

          <div className="relative glass p-8 rounded-3xl border border-shri-gold/10 overflow-hidden group hover:border-shri-gold/30 transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 border border-shri-gold/20 rounded-xl flex items-center justify-center mb-6 bg-shri-black/40 text-shri-gold group-hover:scale-110 transition-transform">
                <Sparkles size={20} />
              </div>
              <h3 className="text-xl font-light text-white mb-2 tracking-wide group-hover:text-shri-gold transition-colors">
                Bespoke Web Craft
              </h3>
              <p className="text-gray-400 text-xs font-light leading-relaxed">
                High-performance Next.js web portals, interactive animations, zero-dependency tooling, and bespoke digital experiences.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/5 text-[9px] font-mono uppercase tracking-widest text-shri-gold/70">
              Web Engineering
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
