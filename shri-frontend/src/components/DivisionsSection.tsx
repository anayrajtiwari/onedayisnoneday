"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Cpu, Globe, TrendingUp, ArrowUpRight, Check, ChevronDown } from "lucide-react";

interface SlabData {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  status: string;
  points: string[];
  link: string;
  isExternal?: boolean;
  accent: string;
}

const slabs: SlabData[] = [
  {
    id: "software",
    num: "01",
    title: "Software & Systems",
    subtitle: "Digital Habitats & Infrastructure",
    description:
      "Engineering zero-dependency compilers, local-first architectures, and intentional developer tools designed from first principles without cloud bloat.",
    icon: Code2,
    status: "BETA Testing",
    points: [
      "Zero-dependency V8 compiler",
      "Local-first architecture",
      "Sub-50ms static builds",
      "Native fuzzy client search",
    ],
    link: "#glyph",
    accent: "from-blue-500/20 via-blue-500/5 to-transparent",
  },
  {
    id: "hardware",
    num: "02",
    title: "Hardware & Electronics",
    subtitle: "Physical Computing & Gadgets",
    description:
      "Bridging the physical-digital divide by crafting electronic gadgets and physical computing devices from basic to intermediate levels under the SHRI ELA-(BETA) initiative.",
    icon: Cpu,
    status: "Under Development",
    points: [
      "Tangible gadget prototyping",
      "Embedded microcontroller firmware",
      "Custom sensory interfaces",
      "Physical-digital software bridge",
    ],
    link: "#ela",
    accent: "from-amber-500/20 via-amber-500/5 to-transparent",
  },
  {
    id: "agency",
    num: "03",
    title: "Agency & Digital Presence",
    subtitle: "Social Media, SEO & Brand Authority",
    description:
      "Crafting unmistakable online identities. Managing social media ecosystems, technical SEO search authority, content syndication, and high-impact digital presence for category architects.",
    icon: Globe,
    status: "Live Now",
    points: [
      "End-to-end social management",
      "Technical IndexNow SEO syndication",
      "High-voltage Next.js web craft",
      "Exclusive 10-partner seasonal cohorts",
    ],
    link: "https://agencies.shri.org.in",
    isExternal: true,
    accent: "from-purple-500/20 via-purple-500/5 to-transparent",
  },
  {
    id: "finance",
    num: "04",
    title: "Quantitative Finance",
    subtitle: "Capital & Algorithmic Systems",
    description:
      "Developing foundational mathematical models for value distribution, risk management, and capital allocation frameworks in decentralized economic environments.",
    icon: TrendingUp,
    status: "Under Development",
    points: [
      "Algorithmic capital allocation",
      "Risk hedging models",
      "Value distribution topology",
      "Subsequent release phase",
    ],
    link: "#finance",
    accent: "from-emerald-500/20 via-emerald-500/5 to-transparent",
  },
];

export default function DivisionsSection() {
  // Desktop: activeIdx is null when cursor is outside the slabs container (all slabs sitting in balanced resting harmony)
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  // Mobile: accordion index for tap-to-toggle
  const [mobileOpenIdx, setMobileOpenIdx] = useState<number | null>(0);

  return (
    <section id="divisions" className="py-32 px-4 sm:px-8 relative overflow-hidden border-t border-shri-gold/10">
      {/* Ambient background glow to eliminate abrupt cutoffs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-80 bg-gradient-to-b from-shri-gold/[0.05] via-purple-500/[0.02] to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading & Subtitle */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="block text-shri-gold text-[10px] uppercase tracking-[0.8em] mb-4"
          >
            The Four Pillars
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-light text-white tracking-tight leading-[1.1]"
          >
            Interdisciplinary <br />
            <span className="italic metallic-text">Conglomerate Structure</span>
          </motion.h2>
        </div>

        {/* ─────────────────────────────────────────────────────────── */}
        {/* ── DESKTOP VIEW (Cursor responsive with auto-contract) ── */}
        {/* ─────────────────────────────────────────────────────────── */}
        <div
          onMouseLeave={() => setActiveIdx(null)}
          className="hidden lg:flex gap-4 min-h-[580px] w-full"
        >
          {slabs.map((slab, idx) => {
            const isHovered = activeIdx === idx;
            const isAnyHovered = activeIdx !== null;
            const isCollapsed = isAnyHovered && !isHovered;
            const isResting = !isAnyHovered;
            const Icon = slab.icon;

            return (
              <motion.div
                key={slab.id}
                layout
                transition={{ type: "spring", stiffness: 350, damping: 32 }}
                onMouseEnter={() => setActiveIdx(idx)}
                className={`relative rounded-3xl border cursor-pointer overflow-hidden transition-all duration-500 flex flex-col justify-between ${
                  isHovered
                    ? "flex-[3.5] border-shri-gold/50 bg-[#0d0d0d] shadow-[0_16px_48px_rgba(0,0,0,0.85)] p-9"
                    : isCollapsed
                    ? "flex-[0.8] border-white/10 bg-[#070707]/90 hover:border-shri-gold/25 p-5"
                    : "flex-1 border-shri-gold/20 bg-[#090909]/90 hover:border-shri-gold/40 p-7 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
                }`}
              >
                {/* Ambient Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${slab.accent} pointer-events-none transition-opacity duration-700 ${
                    isHovered ? "opacity-100" : isResting ? "opacity-30" : "opacity-0"
                  }`}
                />

                {/* ── STATE 1: CONTRACTED / COLLAPSED (When a neighbor is hovered) ── */}
                {isCollapsed && (
                  <div className="flex flex-col justify-between items-center h-full relative z-10 py-3 select-none">
                    <span className="font-mono text-xs text-shri-gold/60">{slab.num}</span>

                    <div className="flex items-center justify-center -rotate-90 my-auto whitespace-nowrap">
                      <span className="font-serif tracking-[0.25em] text-xs uppercase text-gray-400 group-hover:text-white">
                        {slab.title}
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-xl border border-white/10 bg-shri-black/80 flex items-center justify-center text-shri-gold/70">
                      <Icon size={18} />
                    </div>
                  </div>
                )}

                {/* ── STATE 2: BALANCED RESTING STATE (When cursor is outside container) ── */}
                {isResting && (
                  <div className="flex flex-col justify-between h-full relative z-10 select-none">
                    <div>
                      <div className="flex items-center justify-between mb-8">
                        <div className="w-12 h-12 rounded-2xl border border-shri-gold/25 bg-shri-black flex items-center justify-center text-shri-gold shadow-sm">
                          <Icon size={22} />
                        </div>
                        <span className="text-[10px] font-mono tracking-widest px-2.5 py-1 rounded-full border border-shri-gold/20 text-shri-gold/80 bg-shri-gold/5 uppercase">
                          {slab.status}
                        </span>
                      </div>

                      <span className="font-mono text-xs text-shri-gold/60 uppercase tracking-[0.25em] block mb-2">
                        Division {slab.num}
                      </span>
                      <h3 className="text-2xl font-light text-white tracking-tight mb-2">
                        {slab.title}
                      </h3>
                      <p className="text-xs uppercase font-mono tracking-[0.2em] text-shri-gold/70 mb-4 line-clamp-1">
                        {slab.subtitle}
                      </p>
                      <p className="text-gray-400 text-xs font-light leading-relaxed line-clamp-3">
                        {slab.description}
                      </p>
                    </div>

                    <div className="pt-5 border-t border-white/5 flex items-center justify-between text-shri-gold/60 text-[10px] font-mono uppercase tracking-widest">
                      <span>Hover to Expand</span>
                      <ArrowUpRight size={13} className="text-shri-gold" />
                    </div>
                  </div>
                )}

                {/* ── STATE 3: FULL EXPANDED (Hovered slab) ── */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 h-full flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-2xl border border-shri-gold/30 bg-shri-black flex items-center justify-center text-shri-gold shadow-lg">
                            <Icon size={26} />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-shri-gold block font-semibold">
                              Division {slab.num}
                            </span>
                            <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">{slab.status}</span>
                          </div>
                        </div>

                        <span className="text-4xl font-serif font-light text-shri-gold/30">
                          {slab.num}
                        </span>
                      </div>

                      <h3 className="text-3xl sm:text-4xl font-light text-white tracking-tight mb-2">
                        {slab.title}
                      </h3>
                      <p className="text-xs uppercase font-mono tracking-[0.25em] text-shri-gold/80 mb-4">
                        {slab.subtitle}
                      </p>
                      <p className="text-gray-300 text-sm font-light leading-relaxed mb-6 max-w-xl">
                        {slab.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        {slab.points.map((pt) => (
                          <div key={pt} className="flex items-center gap-2.5 text-xs text-gray-300 font-light">
                            <div className="w-4 h-4 rounded-full bg-shri-gold/15 flex items-center justify-center text-shri-gold shrink-0">
                              <Check size={10} />
                            </div>
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">
                        Interdisciplinary Pillar
                      </span>
                      {slab.isExternal ? (
                        <a
                          href={slab.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-shri-gold text-shri-black font-mono text-xs uppercase tracking-wider hover:bg-white transition-colors"
                        >
                          <span>Launch Platform</span>
                          <ArrowUpRight size={14} />
                        </a>
                      ) : (
                        <a
                          href={slab.link}
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-shri-gold/40 text-shri-gold font-mono text-xs uppercase tracking-wider hover:bg-shri-gold/10 hover:text-white transition-colors"
                        >
                          <span>Explore Pillar</span>
                          <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* ─────────────────────────────────────────────────────────── */}
        {/* ── MOBILE TOUCH ACCORDION (Optimized for mobile phones) ── */}
        {/* ─────────────────────────────────────────────────────────── */}
        <div className="lg:hidden flex flex-col space-y-3.5 w-full">
          {slabs.map((slab, idx) => {
            const isOpen = mobileOpenIdx === idx;
            const Icon = slab.icon;

            return (
              <div
                key={slab.id}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-shri-gold/40 bg-[#0d0d0d] shadow-[0_8px_24px_rgba(0,0,0,0.6)]"
                    : "border-white/10 bg-[#080808]/80"
                }`}
              >
                {/* Mobile Card Header / Touch Trigger */}
                <button
                  type="button"
                  onClick={() => setMobileOpenIdx(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-3 focus:outline-none"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${
                      isOpen ? "border-shri-gold/40 bg-shri-black text-shri-gold" : "border-white/10 bg-white/5 text-gray-400"
                    }`}>
                      <Icon size={18} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-mono text-[10px] text-shri-gold/80 uppercase tracking-widest">
                          {slab.num}
                        </span>
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded-full border border-shri-gold/20 text-shri-gold/70 bg-shri-gold/5 uppercase">
                          {slab.status}
                        </span>
                      </div>
                      <h4 className="text-base sm:text-lg font-light text-white tracking-tight truncate">
                        {slab.title}
                      </h4>
                    </div>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-gray-400 shrink-0 ml-2"
                  >
                    <ChevronDown size={14} />
                  </motion.div>
                </button>

                {/* Mobile Card Body with Smooth Height Animation */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 border-t border-white/5 space-y-4">
                        <div>
                          <span className="text-[10px] uppercase font-mono tracking-wider text-shri-gold/70 block mb-1">
                            {slab.subtitle}
                          </span>
                          <p className="text-gray-300 text-xs font-light leading-relaxed">
                            {slab.description}
                          </p>
                        </div>

                        <div className="space-y-2 py-2">
                          {slab.points.map((pt) => (
                            <div key={pt} className="flex items-center gap-2 text-xs text-gray-400 font-light">
                              <div className="w-3.5 h-3.5 rounded-full bg-shri-gold/15 flex items-center justify-center text-shri-gold shrink-0">
                                <Check size={9} />
                              </div>
                              <span>{pt}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-3">
                          {slab.isExternal ? (
                            <a
                              href={slab.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-shri-gold text-shri-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-white transition-colors"
                            >
                              <span>Launch Platform</span>
                              <ArrowUpRight size={14} />
                            </a>
                          ) : (
                            <a
                              href={slab.link}
                              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-shri-gold/40 text-shri-gold font-mono text-xs uppercase tracking-wider hover:bg-shri-gold/10 transition-colors"
                            >
                              <span>Explore Pillar</span>
                              <ArrowUpRight size={14} />
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
