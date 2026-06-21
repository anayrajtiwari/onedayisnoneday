"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Mail, Globe, Cloud } from "lucide-react";

const containerVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
  })
};

const glowVariants = {
  initial: { scale: 0.8, opacity: 0 },
  hover: { scale: 1.15, opacity: 1, backgroundColor: "rgba(212, 175, 55, 0.15)" },
  tap: { scale: 1.05, opacity: 1, backgroundColor: "rgba(212, 175, 55, 0.25)" }
};

const ringVariants = {
  initial: { rotate: 0, borderColor: "rgba(212, 175, 55, 0.1)" },
  hover: { rotate: 12, borderColor: "rgba(212, 175, 55, 0.45)" },
  tap: { rotate: 6, borderColor: "rgba(212, 175, 55, 0.6)" }
};

const iconContainerVariants = {
  initial: { y: 0, borderColor: "rgba(212, 175, 55, 0.2)", color: "#D4AF37", backgroundColor: "rgba(34, 34, 34, 0.4)" },
  hover: { y: -8, borderColor: "rgba(212, 175, 55, 0.5)", color: "#FFFFFF", backgroundColor: "rgba(34, 34, 34, 0.7)" },
  tap: { y: -4, borderColor: "rgba(212, 175, 55, 0.6)", color: "#FFFFFF", backgroundColor: "rgba(34, 34, 34, 0.8)" }
};

const dotVariants = {
  initial: { opacity: 0, scale: 0 },
  hover: { opacity: 1, scale: 1 },
  tap: { opacity: 1, scale: 1 }
};

const labelVariants = {
  initial: { color: "#6b7280" },
  hover: { color: "#D4AF37" },
  tap: { color: "#D4AF37" }
};

const Item = ({ icon: Icon, name, delay }: { icon: React.ComponentType<{ size?: number; strokeWidth?: number }>; name: string; delay: number }) => (
  <motion.div 
    variants={containerVariants}
    custom={delay}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, margin: "-50px" }}
    whileHover="hover"
    whileTap="tap"
    className="flex flex-col items-center cursor-pointer select-none"
  >
    <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
      {/* Background glow */}
      <motion.div 
        variants={glowVariants}
        className="absolute inset-0 rounded-3xl blur-xl"
      />
      
      {/* Decorative ring */}
      <motion.div 
        variants={ringVariants}
        className="absolute inset-0 border rounded-3xl"
      />
      
      {/* Icon container */}
      <motion.div 
        variants={iconContainerVariants}
        className="relative z-10 w-full h-full rounded-3xl border flex items-center justify-center"
      >
        <Icon size={32} strokeWidth={1} />
      </motion.div>
      
      {/* Floating dot */}
      <motion.div 
        variants={dotVariants}
        className="absolute -top-1 -right-1 w-2 h-2 bg-shri-gold rounded-full blur-[2px]"
      />
    </div>
    <motion.span 
      variants={labelVariants}
      className="text-[9px] uppercase tracking-[0.4em]"
    >
      {name}
    </motion.span>
  </motion.div>
);

export default function Integrations() {
  return (
    <section id="ecosystem" className="py-40 relative px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-shri-gold text-[10px] uppercase tracking-[0.8em] mb-4"
          >
            Universal Connection
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-light text-white tracking-tight"
          >
            Digital Harmony
          </motion.h3>
        </div>
        
        <div className="flex flex-wrap justify-center gap-16 md:gap-32">
          <Item icon={Calendar} name="Google" delay={0.1} />
          <Item icon={Mail} name="Zoho" delay={0.2} />
          <Item icon={Globe} name="Workspace" delay={0.3} />
          <Item icon={Cloud} name="iCloud" delay={0.4} />
        </div>
      </div>
      
      {/* Decorative lines */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-shri-gold/10 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-shri-gold/5 rounded-full"></div>
    </section>
  );
}
