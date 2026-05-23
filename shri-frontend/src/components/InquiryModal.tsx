"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function InquiryModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Robust URL construction
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
    const targetUrl = baseUrl.endsWith("/") ? baseUrl + "inquiries" : baseUrl + "/inquiries";

    try {
      const response = await fetch(targetUrl, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          interest: "General Inquiry",
        }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-8 bg-shri-black/90 backdrop-blur-xl"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 120 }}
            className="glass max-w-lg w-full p-12 rounded-[2.5rem] relative border border-shri-gold/20"
          >
            <button onClick={onClose} className="absolute top-8 right-8 text-gray-500 hover:text-white transition-colors">
              <X size={20} />
            </button>

            {status === "success" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-shri-gold/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-shri-gold/50 text-shri-gold">
                  <motion.svg initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17L4 12" /></motion.svg>
                </div>
                <h2 className="text-2xl font-light text-white mb-4">Intention Received</h2>
                <p className="text-gray-400 text-sm font-light">We will connect with you via the digital ether soon.</p>
                <button onClick={onClose} className="mt-12 text-shri-gold text-[10px] uppercase tracking-[0.4em] underline decoration-shri-gold/30 underline-offset-8">Close</button>
              </div>
            ) : (
              <>
                <h2 className="text-shri-gold text-[10px] uppercase tracking-[0.6em] mb-4">Contact SHRI</h2>
                <h1 className="text-3xl font-light text-white mb-8">Build with Intention.</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-gray-500 ml-1">Your Name</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-shri-black/50 border border-shri-gold/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-shri-gold transition-colors font-light"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-gray-500 ml-1">Email Address</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-shri-black/50 border border-shri-gold/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-shri-gold transition-colors font-light"
                    />
                  </div>
                  {status === "error" && (
                    <p className="text-red-500 text-[10px] uppercase tracking-[0.2em] text-center">Connection failed. Ensure backend is running.</p>
                  )}
                  <button
                    disabled={status === "submitting"}
                    className="w-full mt-8 bg-shri-gold text-shri-black py-4 rounded-xl text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-shri-gold/90 transition-all"
                  >
                    {status === "submitting" ? "Syncing..." : "Submit Inquiry"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
