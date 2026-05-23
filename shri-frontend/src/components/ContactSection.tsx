"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageSquare, Share2, Camera } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    icon: <Camera size={24} />,
    href: "https://www.instagram.com/shri.corp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    external: true
  },
  {
    name: "X",
    icon: <MessageSquare size={24} />,
    href: "#",
    external: false
  },
  {
    name: "Facebook",
    icon: <Share2 size={24} />,
    href: "#",
    external: false
  },
  {
    name: "E-mail",
    icon: <Mail size={24} />,
    href: "#",
    external: false
  }
];

const socialContainerVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (idx: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: idx * 0.1 }
  }),
  hover: { y: -10 },
  tap: { y: -5, scale: 0.95 }
};

const socialBorderVariants = {
  initial: { rotate: 0, borderColor: "rgba(212, 175, 55, 0.1)" },
  hover: { rotate: 45, borderColor: "rgba(212, 175, 55, 0.4)" },
  tap: { rotate: 22.5, borderColor: "rgba(212, 175, 55, 0.5)" }
};

const socialBgVariants = {
  initial: { backgroundColor: "rgba(212, 175, 55, 0)" },
  hover: { backgroundColor: "rgba(212, 175, 55, 0.05)" },
  tap: { backgroundColor: "rgba(212, 175, 55, 0.1)" }
};

const socialIconVariants = {
  initial: { color: "#6b7280" },
  hover: { color: "#D4AF37" },
  tap: { color: "#D4AF37" }
};

const socialLabelVariants = {
  initial: { color: "#6b7280" },
  hover: { color: "#F9F6EE" },
  tap: { color: "#F9F6EE" }
};

export default function ContactSection() {
  const [showToast, setShowToast] = useState(false);

  const handleClick = (e: React.MouseEvent, link: typeof socialLinks[0]) => {
    if (!link.external) {
      e.preventDefault();
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
    <section className="py-40 relative overflow-hidden bg-shri-black">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mb-12 flex items-center gap-4"
          >
            <div className="h-[1px] w-12 bg-shri-gold/20"></div>
            <h3 className="text-shri-gold text-[10px] uppercase tracking-[0.8em] whitespace-nowrap">
              Join the Movement
            </h3>
            <div className="h-[1px] w-12 bg-shri-gold/20"></div>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-12 md:gap-24">
            {socialLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                rel={link.external ? "noopener noreferrer" : ""}
                onClick={(e) => handleClick(e, link)}
                variants={socialContainerVariants}
                custom={idx}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-50px" }}
                whileHover="hover"
                whileTap="tap"
                className="flex flex-col items-center cursor-pointer select-none"
              >
                <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
                  <motion.div 
                    variants={socialBorderVariants}
                    className="absolute inset-0 border rounded-[2rem] transition-all"
                  ></motion.div>
                  <motion.div 
                    variants={socialBgVariants}
                    className="absolute inset-0 rounded-[2rem] transition-all"
                  ></motion.div>
                  <motion.div 
                    variants={socialIconVariants}
                    className="relative z-10 transition-colors"
                  >
                    {link.icon}
                  </motion.div>
                </div>
                <motion.span 
                  variants={socialLabelVariants}
                  className="text-[10px] uppercase tracking-[0.4em] transition-colors"
                >
                  {link.name}
                </motion.span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[200]"
          >
            <div className="glass px-10 py-5 rounded-2xl border border-shri-gold/30 shadow-[0_0_50px_rgba(212,175,55,0.15)]">
              <p className="text-shri-gold text-[11px] uppercase tracking-[0.5em] font-light whitespace-nowrap italic">
                Manifesting Structural Intelligence...
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Luxury Background Detail */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-shri-gold/10 to-transparent"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 border border-shri-gold/5 rounded-full"></div>
      <div className="absolute top-1/4 -right-20 w-60 h-60 border border-shri-gold/5 rounded-full"></div>
    </section>
  );
}
