"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-shri-black flex items-center justify-center p-8 overflow-hidden relative">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-shri-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-[12rem] md:text-[16rem] font-thin text-white/5 leading-none tracking-tighter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
            404
          </h1>
          
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-thin tracking-[0.3em] text-white uppercase mb-6">
              Path <span className="italic metallic-text">Lost</span>
            </h2>
            
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-shri-gold to-transparent mx-auto mb-12"></div>
            
            <p className="text-gray-400 tracking-[0.4em] text-[10px] md:text-xs uppercase max-w-md mx-auto leading-loose font-light mb-16">
              The coordinates you seek reside in a dimension yet to be manifested. 
              Let us return to the source.
            </p>
            
            <Link 
              href="/"
              className="inline-block group relative"
            >
              <span className="relative z-10 text-shri-gold text-[10px] uppercase tracking-[0.5em] font-light transition-colors duration-500 group-hover:text-white">
                Return to Core
              </span>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-shri-gold/30 transition-all duration-500 group-hover:w-full group-hover:bg-shri-gold"></div>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
