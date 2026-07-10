"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User, LogOut } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useSupabase } from "./Providers";
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
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { user, supabase } = useSupabase();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = () => setShowUserMenu(false);
    if (showUserMenu) {
      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);
    }
  }, [showUserMenu]);

  const navItems = [
    { label: "Ecosystem", href: "/#ecosystem" },
    { label: "Astera", href: "/astera" },
    { label: "Glyph", href: "/glyph" },
    { label: "Vision", href: "/#vision" },
  ];
  const communityHref = user ? "/community" : "/auth/signin?callbackUrl=/community";

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
            {navItems.map((item) => (
              <motion.div key={item.label} whileHover={{ y: -2 }} whileTap={{ y: 0.95 }}>
                <Link
                  href={item.href}
                  className="text-xs uppercase tracking-[0.3em] text-gray-400 hover:text-shri-gold transition-colors duration-300"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0.95 }}>
              <Link
                href={communityHref}
                className="text-xs uppercase tracking-[0.3em] text-shri-gold hover:text-white transition-colors duration-300 flex items-center gap-2"
              >
                {user ? (
                  <>
                    <User size={12} />
                    Community
                  </>
                ) : (
                  "Community"
                )}
              </Link>
            </motion.div>

            {user ? (
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowUserMenu(!showUserMenu);
                  }}
                  className="flex items-center gap-2 px-4 py-2 border border-shri-gold/20 text-shri-gold text-[10px] uppercase tracking-[0.2em] hover:bg-shri-gold/10 transition-all duration-300 rounded-full"
                >
                  {user.user_metadata?.avatar_url ? (
                    <Image
                      src={user.user_metadata.avatar_url}
                      alt=""
                      width={20}
                      height={20}
                      className="w-5 h-5 rounded-full object-cover border border-shri-gold/30"
                    />
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-shri-gold/20 flex items-center justify-center">
                      <span className="text-[8px] text-shri-gold font-medium">
                        {user.user_metadata?.name?.charAt(0)?.toUpperCase() || "?"}
                      </span>
                    </div>
                  )}
                  <span className="hidden lg:inline">{user.user_metadata?.name?.split(" ")[0]}</span>
                </motion.button>

                <AnimatePresence>
                  {showUserMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-full mt-3 w-48 glass rounded-xl border border-shri-gold/10 overflow-hidden"
                    >
                      <div className="px-4 py-3 border-b border-shri-gold/5">
                        <p className="text-[9px] text-gray-500 uppercase tracking-[0.2em]">Signed in as</p>
                        <p className="text-[11px] text-white font-light mt-1 truncate">{user.email}</p>
                      </div>
                      <button
                        onClick={() => supabase.auth.signOut()}
                        className="w-full px-4 py-3 text-left text-[10px] uppercase tracking-[0.2em] text-gray-400 hover:text-shri-gold hover:bg-shri-gold/5 transition-all flex items-center gap-2"
                      >
                        <LogOut size={12} />
                        Leave Space
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-2 border border-shri-gold/50 text-shri-gold text-[10px] uppercase tracking-[0.3em] hover:bg-shri-gold hover:text-shri-black transition-all duration-500"
              >
                Inquire
              </motion.button>
            )}
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
              {navItems.map((item) => (
                <Link key={item.label} href={item.href} className="text-sm uppercase tracking-[0.3em] text-gray-400" onClick={() => setIsOpen(false)}>{item.label}</Link>
              ))}
              <Link href={communityHref} className="text-sm uppercase tracking-[0.3em] text-shri-gold" onClick={() => setIsOpen(false)}>Community</Link>

              {user ? (
                <div className="flex items-center justify-between pt-4 border-t border-shri-gold/10">
                  <div className="flex items-center gap-3">
                    {user.user_metadata?.avatar_url ? (
                      <Image src={user.user_metadata.avatar_url} alt="" width={32} height={32} className="w-8 h-8 rounded-full object-cover border border-shri-gold/30" />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-shri-gold/20 flex items-center justify-center">
                        <span className="text-xs text-shri-gold font-medium">{user.user_metadata?.name?.charAt(0)?.toUpperCase()}</span>
                      </div>
                    )}
                    <span className="text-[11px] text-gray-300 font-light">{user.user_metadata?.name}</span>
                  </div>
                  <button
                    onClick={() => supabase.auth.signOut()}
                    className="text-[10px] uppercase tracking-[0.2em] text-gray-500 hover:text-shri-gold transition-colors flex items-center gap-1"
                  >
                    <LogOut size={12} /> Exit
                  </button>
                </div>
              ) : (
                <button onClick={() => { setIsModalOpen(true); setIsOpen(false); }} className="text-left text-shri-gold text-sm uppercase tracking-[0.3em]">Inquire</button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
