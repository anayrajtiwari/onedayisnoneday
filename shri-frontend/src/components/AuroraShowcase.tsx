"use client";

import React from "react";
import { motion } from "framer-motion";
import DynamicAurora from "./DynamicAurora";
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

const circleMotifVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.1 },
  tap: { scale: 1.05 }
};

const Card = ({ title, desc, icon, delay }: { title: string; desc: string; icon: React.ReactNode; delay: number }) => (
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
          <motion.div 
            variants={bottomContainerVariants}
            className="w-full h-32 bg-shri-black/40 rounded-2xl border overflow-hidden relative transition-all duration-700 flex items-center justify-center"
          >
            <motion.div 
              variants={bottomOverlayVariants}
              className="absolute inset-0 bg-gradient-to-br from-shri-gold/10 via-transparent to-transparent transition-opacity duration-700"
            ></motion.div>
            <span className="relative z-10 text-[9px] uppercase tracking-[0.4em] text-gray-600">
              Coming Soon
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

export default function AuroraShowcase() {
  return (
    <section id="aurora" className="py-40 px-8 relative overflow-hidden bg-shri-black">
      <DynamicAurora />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-shri-gold text-[10px] uppercase tracking-[0.8em] mb-6"
            >
              Flagship Product
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-light text-white tracking-tight leading-[1.1]"
            >
              Aurora <br />
              <span className="italic metallic-text">Operating System</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-6 text-gray-500 text-sm font-light leading-relaxed max-w-lg tracking-wide"
            >
              A privacy-first, human-centered OS built on the belief that technology should adapt to people — not the other way around.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <Link
              href="/aurora"
              className="text-[9px] uppercase tracking-[0.4em] text-shri-gold hover:text-white transition-colors duration-300 border border-shri-gold/20 px-6 py-3 rounded-full hover:bg-shri-gold/10"
            >
              Read the Manifesto
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <Card
            title="Privacy by Default"
            desc="Every layer of Aurora is architected so privacy is never optional — it is the foundation. Your data belongs to you, always."
            delay={0.1}
            icon={
              <svg className="w-6 h-6 text-shri-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            }
          />
          <Card
            title="Simplicity Meets Power"
            desc="An elegant interface that never gets in your way, yet puts full control at your fingertips. No compromises between beauty and flexibility."
            delay={0.3}
            icon={
              <svg className="w-6 h-6 text-shri-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            }
          />
          <Card
            title="Human-Centered Design"
            desc="Technology that fades into the background. Aurora is built to earn trust, not demand attention — helping you create without friction."
            delay={0.5}
            icon={
              <svg className="w-6 h-6 text-shri-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}
