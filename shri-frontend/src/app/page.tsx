"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import dynamic from "next/dynamic";
// Lazy load heavy visual components
import AdvancedLotus from "@/components/AdvancedLotus";
const DivisionsSection = dynamic(() => import("@/components/DivisionsSection"));
const GlyphShowcase = dynamic(() => import("@/components/GlyphShowcase"));
const ElaShowcase = dynamic(() => import("@/components/ElaShowcase"));
const AgencySection = dynamic(() => import("@/components/AgencySection"));
const FinanceSection = dynamic(() => import("@/components/FinanceSection"));
const FutureVision = dynamic(() => import("@/components/FutureVision"));
const Philosophy = dynamic(() => import("@/components/Philosophy"));
const ContactSection = dynamic(() => import("@/components/ContactSection"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="min-h-screen bg-shri-black text-shri-offwhite selection:bg-shri-gold selection:text-shri-black overflow-x-hidden relative">
      {/* Seamless global background rotation */}
      <AdvancedLotus />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        
        <div id="ecosystem">
          <DivisionsSection />
          <GlyphShowcase />
          <ElaShowcase />
          <AgencySection />
          <FinanceSection />
          <FutureVision />
          <Philosophy />
          <ContactSection />
        </div>
        
        <Footer />
      </div>
    </main>
  );
}
