"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Code2, Globe, TrendingUp, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const divisions = [
  {
    id: "01",
    title: "Software & Systems",
    subtitle: "Digital Habitats & Infrastructure",
    description:
      "Engineering zero-dependency compilers, privacy-first operating systems, and intentional developer tools designed from first principles.",
    icon: Code2,
    status: "Active Ecosystem",
    tags: ["Astera OS", "Glyph-CLI", "Static Compilers", "Local Architecture"],
    link: "#ecosystem",
    color: "from-blue-500/10 to-transparent",
  },
  {
    id: "02",
    title: "Hardware & Electronics",
    subtitle: "Physical Computing & Instruments",
    description:
      "Bridging the physical-digital divide with custom embedded electronics, micro-architectures, and hardware labs centered on the SHRI ELA-(BETA) project.",
    icon: Cpu,
    status: "SHRI ELA-(BETA)",
    tags: ["Embedded Systems", "Circuit Prototyping", "Hardware Labs", "ELA-(BETA)"],
    link: "#ela",
    color: "from-amber-500/10 to-transparent",
  },
  {
    id: "03",
    title: "Agency & Digital Presence",
    subtitle: "Social Media, SEO & Brand Authority",
    description:
      "Crafting unmistakable online identities. Managing social media ecosystems, search engine optimization (SEO), content syndication, and high-impact digital presence for visionaries.",
    icon: Globe,
    status: "Client Engagements Open",
    tags: ["Social Media Management", "SEO Optimization", "Digital Authority", "Brand Strategy"],
    link: "#inquire",
    color: "from-purple-500/10 to-transparent",
  },
  {
    id: "04",
    title: "Quantitative Finance",
    subtitle: "Capital & Algorithmic Systems",
    description:
      "Developing foundational models for value distribution, risk management, and capital allocation frameworks.",
    icon: TrendingUp,
    status: "Planning Phase",
    tags: ["Planning Phase", "Capital Models", "Value Architecture"],
    link: "#finance",
    color: "from-emerald-500/10 to-transparent",
  },
];

export default function DivisionsSection() {
  return (
    <section id="divisions" className="py-32 px-8 relative overflow-hidden bg-shri-black">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {divisions.map((div, idx) => {
            const Icon = div.icon;
            return (
              <motion.div
                key={div.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="group relative rounded-3xl border border-shri-gold/10 bg-shri-black/60 backdrop-blur-md p-8 sm:p-10 flex flex-col justify-between overflow-hidden hover:border-shri-gold/30 transition-all duration-500"
              >
                {/* Subtle Ambient Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${div.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl border border-shri-gold/20 bg-shri-black/80 flex items-center justify-center text-shri-gold group-hover:scale-110 transition-transform duration-500">
                      <Icon size={22} />
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono tracking-widest px-3 py-1 rounded-full border border-shri-gold/30 text-shri-gold bg-shri-gold/5 uppercase">
                        {div.status}
                      </span>
                      <span className="text-gray-600 text-sm font-mono">{div.id}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight mb-1 group-hover:text-shri-gold transition-colors">
                    {div.title}
                  </h3>
                  <p className="text-xs uppercase font-mono tracking-[0.25em] text-shri-gold/60 mb-4">
                    {div.subtitle}
                  </p>
                  <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                    {div.description}
                  </p>
                </div>

                <div className="relative z-10 pt-6 border-t border-shri-gold/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {div.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] uppercase tracking-wider font-mono text-gray-500 bg-white/[0.02] border border-white/5 px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {div.link.startsWith("#") ? (
                    <a
                      href={div.link}
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.2em] text-shri-gold/80 hover:text-shri-gold transition-colors"
                    >
                      <span>Explore</span>
                      <ArrowUpRight size={14} />
                    </a>
                  ) : (
                    <Link
                      href={div.link}
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.2em] text-shri-gold/80 hover:text-shri-gold transition-colors"
                    >
                      <span>Explore</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
