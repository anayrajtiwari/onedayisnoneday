"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import dynamic from "next/dynamic";
// Lazy load heavy visual components
const AdvancedLotus = dynamic(() => import("@/components/AdvancedLotus"), { 
  ssr: false,
  loading: () => <div className="h-screen bg-shri-black" /> 
});
const AuroraShowcase = dynamic(() => import("@/components/AuroraShowcase"));
const FutureVision = dynamic(() => import("@/components/FutureVision"));
const Philosophy = dynamic(() => import("@/components/Philosophy"));
const ContactSection = dynamic(() => import("@/components/ContactSection"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="min-h-screen bg-shri-black text-shri-offwhite selection:bg-shri-gold selection:text-shri-black overflow-x-hidden">
      <Navbar />
      <Hero />
      
      {/* Background animation for sections below hero */}
      <div className="relative">
        <AdvancedLotus />
        
        <div className="relative z-10">
          <AuroraShowcase />
          <FutureVision />
          <Philosophy />

          <ContactSection />
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
