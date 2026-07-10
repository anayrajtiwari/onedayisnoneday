"use client";

import React from "react";
import { motion } from "framer-motion";
import DynamicGlyph from "./DynamicGlyph";
import Link from "next/link";

const cardContainerVariants = {
  initial: { opacity: 0, y: 40 },
  animate: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
  })
};

const borderGradientVariants = {
  initial: { opacity: 0.5 },
  hover: { opacity: 1 },
  tap: { opacity: 1 }
};

const glassVariants = {
  initial: { backgroundColor: "rgba(20, 20, 20, 0.3)" },
  hover: { backgroundColor: "rgba(34, 34, 34, 0.8)", scale: 1.01 },
  tap: { backgroundColor: "rgba(34, 34, 34, 0.85)", scale: 0.99 }
};

const innerGlowVariants = {
  initial: { backgroundColor: "rgba(212, 175, 55, 0.05)" },
  hover: { backgroundColor: "rgba(212, 175, 55, 0.15)" },
  tap: { backgroundColor: "rgba(212, 175, 55, 0.2)" }
};

const lineVariants = {
  initial: { width: 48 },
  hover: { width: 80 },
  tap: { width: 64 }
};

const titleVariants = {
  initial: { color: "#FFFFFF" },
  hover: { color: "#D4AF37" },
  tap: { color: "#D4AF37" }
};

const bottomContainerVariants = {
  initial: { borderColor: "rgba(212, 175, 55, 0.05)" },
  hover: { borderColor: "rgba(212, 175, 55, 0.2)" },
  tap: { borderColor: "rgba(212, 175, 55, 0.3)" }
};

const bottomOverlayVariants = {
  initial: { opacity: 0 },
  hover: { opacity: 1 },
  tap: { opacity: 1 }
};

const Card = ({ title, desc, icon, delay, linkText, linkHref }: { title: string; desc: string; icon: React.ReactNode; delay: number; linkText?: string; linkHref?: string }) => (
  <motion.div 
    variants={cardContainerVariants}
    custom={delay}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, margin: "-50px" }}
    whileHover="hover"
    whileTap="tap"
    className="relative cursor-pointer select-none"
  >
    <motion.div 
      variants={borderGradientVariants}
      className="absolute -inset-[1px] bg-gradient-to-br from-shri-gold/20 via-transparent to-shri-gold/5 rounded-[2.5rem] transition-opacity duration-700"
    ></motion.div>   

    <motion.div 
      variants={glassVariants}
      className="relative h-full glass p-10 rounded-[2.5rem] overflow-hidden transition-all duration-700 min-h-[400px]"
    >
      <motion.div 
        variants={innerGlowVariants}
        className="absolute top-0 right-0 w-32 h-32 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 transition-colors duration-700"
      ></motion.div>

      <div className="relative z-10 h-full flex flex-col">
        <div className="mb-8">
          <div className="w-14 h-14 border border-shri-gold/20 rounded-2xl flex items-center justify-center mb-6 bg-shri-black/40">
            {icon}
          </div>
          <motion.div 
            variants={lineVariants}
            className="h-[1px] bg-shri-gold/40 mb-6 transition-all duration-700"
          ></motion.div>
          <motion.h3 
            variants={titleVariants}
            className="text-2xl font-light mb-4 tracking-wide transition-colors duration-700"
          >
            {title}
          </motion.h3>
          <p className="text-gray-400 text-sm font-light leading-relaxed tracking-wide">{desc}</p>
        </div>

        <div className="mt-auto pt-8">
          {linkHref ? (
            <Link
              href={linkHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-12 border border-shri-gold/20 rounded-full flex items-center justify-center text-[9px] uppercase tracking-[0.4em] text-shri-gold hover:bg-shri-gold/10 hover:text-white transition-all duration-500"
            >
              {linkText || "View Project"}
            </Link>
          ) : (
            <motion.div 
              variants={bottomContainerVariants}
              className="w-full h-12 bg-shri-black/40 rounded-full border overflow-hidden relative transition-all duration-700 flex items-center justify-center"
            >
              <motion.div 
                variants={bottomOverlayVariants}
                className="absolute inset-0 bg-gradient-to-br from-shri-gold/10 via-transparent to-transparent transition-opacity duration-700"
              ></motion.div>
              <span className="relative z-10 text-[9px] uppercase tracking-[0.4em] text-gray-600">
                Coming Soon
              </span>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  </motion.div>
);

export default function GlyphShowcase() {
  return (
    <section id="glyph" className="py-40 px-8 relative overflow-hidden bg-shri-black border-t border-shri-gold/5">
      <DynamicGlyph />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="block text-shri-gold text-[10px] uppercase tracking-[0.8em] mb-6"
            >
              Developer Ecosystem
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-light text-white tracking-tight leading-[1.1]"
            >
              Glyph <br />
              <span className="italic metallic-text">Documentation Engine</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-6 text-gray-500 text-sm font-light leading-relaxed max-w-lg tracking-wide"
            >
              A minimal, zero-dependency command-line compiler and hot-reloading dev server that compiles raw Markdown and MDX directories into elegant, premium static documentation hubs.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <Link
              href="https://anay.shri.org.in/blog/introducing-glyph"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] uppercase tracking-[0.4em] text-shri-gold hover:text-white transition-colors duration-300 border border-shri-gold/20 px-6 py-3 rounded-full hover:bg-shri-gold/10"
            >
              Read the User Manual
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <Card
            title="Instant Compiles"
            desc="Built in vanilla V8 JS with zero-dependency bloat. Compiles documents in under 10ms and entire wikis in under 50ms."
            delay={0.1}
            linkText="GitHub Docs Repo"
            linkHref="https://github.com/anayrajtiwari/glyph-docs"
            icon={
              <svg className="w-6 h-6 text-shri-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            }
          />
          <Card
            title="Fuzzy Local Search"
            desc="Automatically indexes your pages into a client-side search index on build. Delivers instant results on-the-fly without database APIs."
            delay={0.3}
            linkText="View User Guide"
            linkHref="https://anay.shri.org.in/blog/introducing-glyph"
            icon={
              <svg className="w-6 h-6 text-shri-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.637 10.637z" />
              </svg>
            }
          />
          <Card
            title="Glow & Alert Cards"
            desc="Clean, premium dark layout optimized for Vercel/GitHub pages. Natively supports GitHub-style blockquote alerts and rich syntax styling."
            delay={0.5}
            linkText="View Code Example"
            linkHref="https://anay.shri.org.in/blog/introducing-glyph#code-blocks--formatting"
            icon={
              <svg className="w-6 h-6 text-shri-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}
