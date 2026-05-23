"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import InquiryModal from "./InquiryModal";

const LotusLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M12 21C12 21 18 17 18 12C18 7 12 3 12 3C12 3 6 7 6 12C6 17 12 21 12 21Z" />
    <path d="M12 21C12 21 21 15 21 10C21 5 16 3 12 3" />
    <path d="M12 21C12 21 3 15 3 10C3 5 8 3 12 3" />
    <path d="M12 21C12 21 19 19 22 14C25 9 19 5 12 3" />
    <path d="M12 21C12 21 5 19 2 14C-1 9 5 5 12 3" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showProgress, setShowProgress] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAuroraClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowProgress(true);
    setTimeout(() => setShowProgress(false), 3000);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "py-4 bg-shri-black/80 backdrop-blur-md border-b border-shri-gold/10" : "py-8 bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center"
            >
              <LotusLogo />
            </motion.div>
            <span className="text-2xl font-bold tracking-[0.2em] text-white italic">SHRI</span>
          </Link>

          <div className="hidden md:flex items-center space-x-12">
            {["Ecosystem", "Products", "Aurora", "Vision"].map((item) => (
              <motion.div key={item} whileHover={{ y: -2 }} whileTap={{ y: 0.95 }}>
                {item === "Aurora" ? (
                  <button
                    onClick={handleAuroraClick}
                    className="text-xs uppercase tracking-[0.3em] text-gray-400 hover:text-shri-gold transition-colors duration-300 relative"
                  >
                    {item}
                    <AnimatePresence>
                      {showProgress && (
                        <motion.span
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-shri-gold text-shri-black px-2 py-1 text-[8px] whitespace-nowrap rounded"
                        >
                          In Progress
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                ) : (
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-xs uppercase tracking-[0.3em] text-gray-400 hover:text-shri-gold transition-colors duration-300"
                  >
                    {item}
                  </Link>
                )}
              </motion.div>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2 border border-shri-gold/50 text-shri-gold text-[10px] uppercase tracking-[0.3em] hover:bg-shri-gold hover:text-shri-black transition-all duration-500"
            >
              Inquire
            </motion.button>
          </div>

          <button className="md:hidden text-shri-gold" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-shri-black border-b border-shri-gold/10 p-8 flex flex-col space-y-6 md:hidden"
            >
              {["Ecosystem", "Products", "Aurora", "Vision"].map((item) => (
                item === "Aurora" ? (
                  <button key={item} onClick={handleAuroraClick} className="text-left text-sm uppercase tracking-[0.3em] text-gray-400 flex items-center gap-2">
                    {item} {showProgress && <span className="text-[10px] text-shri-gold">(In Progress)</span>}
                  </button>
                ) : (
                  <Link key={item} href={`#${item.toLowerCase()}`} className="text-sm uppercase tracking-[0.3em] text-gray-400" onClick={() => setIsOpen(false)}>{item}</Link>
                )
              ))}
              <button onClick={() => { setIsModalOpen(true); setIsOpen(false); }} className="text-left text-shri-gold text-sm uppercase tracking-[0.3em]">Inquire</button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}