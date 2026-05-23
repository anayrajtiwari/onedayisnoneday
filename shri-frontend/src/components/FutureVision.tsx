"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const pillarContainerVariants = {
  initial: { opacity: 0, scale: 0.95, borderColor: "rgba(212, 175, 55, 0.1)" },
  animate: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 1, delay: index * 0.2 }
  }),
  hover: { borderColor: "rgba(212, 175, 55, 0.4)" },
  tap: { borderColor: "rgba(212, 175, 55, 0.5)", scale: 0.98 }
};

const borderLeftVariants = {
  initial: { height: 0 },
  hover: { height: "100%" },
  tap: { height: "100%" }
};

const pillarTitleVariants = {
  initial: { color: "#FFFFFF" },
  hover: { color: "#D4AF37" },
  tap: { color: "#D4AF37" }
};

const pillarDescVariants = {
  initial: { color: "#6b7280" },
  hover: { color: "#d1d5db" },
  tap: { color: "#d1d5db" }
};

const underlineVariants = {
  initial: { width: 0 },
  hover: { width: "100%" },
  tap: { width: "100%" }
};

const VisionPillar = ({ title, desc, index }: { title: string; desc: string; index: number }) => (
  <motion.div 
    variants={pillarContainerVariants}
    custom={index}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, margin: "-50px" }}
    whileHover="hover"
    whileTap="tap"
    className="relative p-12 border-l cursor-pointer select-none"
  >
    <motion.div 
      variants={borderLeftVariants}
      className="absolute top-0 left-0 w-[1px] bg-shri-gold transition-all duration-1000"
    ></motion.div>
    <span className="text-shri-gold/30 text-4xl font-light mb-8 block font-serif">0{index + 1}</span>
    <motion.h3 
      variants={pillarTitleVariants}
      className="text-3xl font-light mb-6 tracking-tight transition-colors duration-700"
    >
      {title}
    </motion.h3>
    <motion.p 
      variants={pillarDescVariants}
      className="font-light leading-relaxed tracking-wide transition-colors duration-700"
    >
      {desc}
    </motion.p>
    
    <div className="mt-10 overflow-hidden h-[1px] w-full">
      <motion.div 
        variants={underlineVariants}
        className="h-full bg-shri-gold/20"
      ></motion.div>
    </div>
  </motion.div>
);

export default function FutureVision() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0.4, 0.7], ["0%", "-20%"]);

  return (
    <section id="products" className="py-40 relative overflow-hidden bg-shri-black/20 backdrop-blur-3xl">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="mb-32">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-shri-gold text-[10px] uppercase tracking-[0.8em] mb-6"
          >
            The Horizon
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-6xl md:text-9xl font-light text-white tracking-tighter leading-none"
          >
            A Vision for <br />
            <span className="italic font-normal metallic-text">Intelligence.</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          <VisionPillar 
            title="Biometric Alignment" 
            desc="Systems that breathe with you, synchronizing your digital environment with your physiological state for effortless focus."
            index={0}
          />
          <VisionPillar 
            title="Structural Integrity" 
            desc="Building tools that are as beautiful internally as they are externally, ensuring longevity and trust in every interaction."
            index={1}
          />
          <VisionPillar 
            title="Cognitive Freedom" 
            desc="Offloading the mundane to allow the human spirit to flourish in realms of pure creativity and high-level strategy."
            index={2}
          />
        </div>
      </div>
      
      {/* Interactive Background Text */}
      <motion.div 
        style={{ x }}
        className="absolute bottom-0 left-0 whitespace-nowrap opacity-[0.02] pointer-events-none select-none"
      >
        <span className="text-[20vw] font-black uppercase tracking-tighter text-shri-gold">
          Intention Wisdom Harmony Integrity Evolution Future
        </span>
      </motion.div>
    </section>
  );
}

