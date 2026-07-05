"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-shri-black py-20 px-8 border-t border-shri-gold/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-[0.2em] text-white italic mb-2">SHRI</h2>
          <p className="text-gray-500 text-xs tracking-widest uppercase">The Intentional Ecosystem</p>
        </div>
        
        <div className="mt-12 md:mt-0 flex space-x-16">
          <div className="flex flex-col space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-shri-gold">Company</h4>
            <Link href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Philosophy</Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Vision</Link>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-shri-gold">Ecosystem</h4>
            <Link href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Astera</Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Products</Link>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-shri-gold/5 flex justify-between items-center text-[8px] uppercase tracking-[0.4em] text-gray-600">
        <span>© 2026 SHRI Ecosystems</span>
        <div className="flex space-x-8">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
