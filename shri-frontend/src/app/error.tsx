"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-shri-black flex items-center justify-center p-8 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-950/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-12">
            <svg viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="0.5" className="w-16 h-16 mx-auto opacity-40">
              <path d="M12 9V14M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <h2 className="text-4xl md:text-5xl font-thin tracking-[0.3em] text-white uppercase mb-6">
            System <span className="italic metallic-text">Fracture</span>
          </h2>
          
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-shri-gold to-transparent mx-auto mb-12"></div>
          
          <p className="text-gray-400 tracking-[0.4em] text-[10px] md:text-xs uppercase max-w-md mx-auto leading-loose font-light mb-16">
            An anomaly has occurred in the digital architecture. 
            We are realigning the structural intelligence.
          </p>
          
          <button
            onClick={() => reset()}
            className="group relative"
          >
            <span className="relative z-10 text-shri-gold text-[10px] uppercase tracking-[0.5em] font-light transition-colors duration-500 group-hover:text-white">
              Initiate Re-Alignment
            </span>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-shri-gold/30 transition-all duration-500 group-hover:w-full group-hover:bg-shri-gold"></div>
          </button>
        </motion.div>
      </div>
    </main>
  );
}
