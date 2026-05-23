"use client";

import React from "react";
import { motion } from "framer-motion";
import DynamicAurora from "./DynamicAurora";

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

const plusVariants = {
  initial: { rotate: 0, scale: 1, borderColor: "rgba(212, 175, 55, 0.2)" },
  hover: { rotate: 90, scale: 1.1, borderColor: "rgba(212, 175, 55, 1)" },
  tap: { rotate: 90, scale: 1.05, borderColor: "rgba(212, 175, 55, 1)" }
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

const Card = ({ title, desc, delay, isPlaceholder = false }: { title: string; desc: string; delay: number; isPlaceholder?: boolean }) => (
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
    {/* Animated border gradient */}
    <motion.div 
      variants={borderGradientVariants}
      className="absolute -inset-[1px] bg-gradient-to-br from-shri-gold/20 via-transparent to-shri-gold/5 rounded-[2.5rem] transition-opacity duration-700"
    ></motion.div>   

    <motion.div 
      variants={glassVariants}
      className={"relative h-full glass p-10 rounded-[2.5rem] overflow-hidden transition-all duration-700 " + (isPlaceholder ? 'flex flex-col items-center justify-center min-h-[400px]' : 'min-h-[400px]')}
    >
      {/* Internal glow */}
      <motion.div 
        variants={innerGlowVariants}
        className="absolute top-0 right-0 w-32 h-32 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 transition-colors duration-700"
      ></motion.div>

      {isPlaceholder ? (
        <div className="text-center relative z-10">
          <motion.div
            variants={plusVariants}
            className="w-20 h-20 border rounded-full flex items-center justify-center mb-8 mx-auto transition-colors duration-700"
          >
             <span className="text-shri-gold text-3xl font-extralight">+</span>
          </motion.div>
          <h3 className="text-2xl font-light text-white mb-4 tracking-wide uppercase italic metallic-text">{title}</h3>
          <p className="text-gray-500 text-sm font-light leading-relaxed tracking-wider">{desc}</p>
        </div>
      ) : (
        <div className="relative z-10 h-full flex flex-col">
          <div className="mb-6">
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
              className="w-full h-40 bg-shri-black/40 rounded-2xl border overflow-hidden relative transition-all duration-700"
            >
              <motion.div 
                variants={bottomOverlayVariants}
                className="absolute inset-0 bg-gradient-to-br from-shri-gold/10 via-transparent to-transparent transition-opacity duration-700"
              ></motion.div>

              {/* Abstract decorative elements */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="space-y-3">
                  <motion.div
                    initial={{ width: "30%" }}
                    whileInView={{ width: "60%" }}
                    transition={{ duration: 2, delay: delay + 0.5 }}
                    className="h-[1px] bg-shri-gold/30"
                  ></motion.div>
                  <motion.div
                    initial={{ width: "20%" }}
                    whileInView={{ width: "40%" }}
                    transition={{ duration: 2, delay: delay + 0.7 }}
                    className="h-[1px] bg-shri-gold/20"
                  ></motion.div>
                </div>
              </div>

              {/* Circular motif */}
              <motion.div 
                variants={circleMotifVariants}
                className="absolute -bottom-10 -right-10 w-32 h-32 border border-shri-gold/10 rounded-full transition-transform duration-1000"
              ></motion.div>
            </motion.div>
          </div>
        </div>
      )}
    </motion.div>
  </motion.div>
);

export default function AuroraShowcase() {
  return (
    <section id="aurora" className="py-40 px-8 relative overflow-hidden bg-shri-black">
      {/* New Dynamic Aurora Background */}
      <DynamicAurora />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-shri-gold text-[10px] uppercase tracking-[0.8em] mb-6"
            >
              Excellence Redefined
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-light text-white tracking-tight leading-[1.1]"
            >
              The Aurora <br />
              <span className="italic metallic-text">Ecosystem</span>
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="hidden md:block"
          >
            <span className="text-[9px] uppercase tracking-[0.6em] text-gray-600 border-l border-shri-gold/20 pl-6 py-2">System v1.2.4</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <Card
            title="Work In Progress"
            desc="Developing a core engine for cognitive alignment and structural intelligence."
            delay={0.1}
            isPlaceholder={true}
          />
          <Card
            title="Work In Progress"
            desc="Crafting a new dimension of temporal harmony and intentional scheduling."
            delay={0.3}
            isPlaceholder={true}
          />
          <Card
            title="Expansion"
            desc="We are crafting new tools to harmonize your digital life. More announcements coming soon."
            delay={0.5}
            isPlaceholder={true}
          />
        </div>
      </div>
    </section>
  );
}