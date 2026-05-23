"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Integrations from "@/components/Integrations";
import AuroraShowcase from "@/components/AuroraShowcase";
import FutureVision from "@/components/FutureVision";
import Philosophy from "@/components/Philosophy";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import AdvancedLotus from "@/components/AdvancedLotus";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-shri-black text-shri-offwhite selection:bg-shri-gold selection:text-shri-black overflow-x-hidden">
      <Navbar />
      <Hero />
      
      {/* Background animation for sections below hero */}
      <div className="relative">
        <AdvancedLotus />
        
        <div className="relative z-10">
          <Integrations />
          <AuroraShowcase />
          <FutureVision />
          <Philosophy />

          {/* Enhanced Coming Soon Section */}
          <section className="py-60 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center"
              >
                <div className="relative mb-16">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-0 bg-shri-gold/20 blur-3xl rounded-full"
                  ></motion.div>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="0.5" className="w-24 h-24 relative z-10">
                    <path d="M12 21C12 21 18 17 18 12C18 7 12 3 12 3C12 3 6 7 6 12C6 17 12 21 12 21Z" />
                    <path d="M12 21C12 21 21 15 21 10C21 5 16 3 12 3" />
                    <path d="M12 21C12 21 3 15 3 10C3 5 8 3 12 3" />
                  </svg>
                </div>
                
                <h2 className="text-6xl md:text-8xl font-thin tracking-[0.4em] text-white uppercase mb-8">
                  Coming <span className="metallic-text italic font-light">Soon</span>
                </h2>
                
                <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-shri-gold to-transparent mb-12"></div>
                
                <p className="text-gray-400 tracking-[0.4em] text-[10px] md:text-xs uppercase max-w-2xl mx-auto leading-loose font-light">
                  The next evolution of digital harmony and structural intelligence is unfolding. 
                  <br />
                  We are currently in a state of intentional growth.
                </p>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 2 }}
                  className="mt-20 flex items-center gap-6"
                >
                  <div className="h-[1px] w-8 bg-shri-gold/20"></div>
                  <span className="text-shri-gold/40 text-[9px] uppercase tracking-[0.8em]">Est. 2026</span>
                  <div className="h-[1px] w-8 bg-shri-gold/20"></div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          <ContactSection />
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
