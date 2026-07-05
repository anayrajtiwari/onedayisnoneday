"use client";

import React, { useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useSupabase } from "@/components/Providers";

const LotusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16">
    <path d="M12 21C12 21 18 17 18 12C18 7 12 3 12 3C12 3 6 7 6 12C6 17 12 21 12 21Z" />
    <path d="M12 21C12 21 21 15 21 10C21 5 16 3 12 3" />
    <path d="M12 21C12 21 3 15 3 10C3 5 8 3 12 3" />
    <path d="M12 21C12 21 19 19 22 14C25 9 19 5 12 3" />
    <path d="M12 21C12 21 5 19 2 14C-1 9 5 5 12 3" />
  </svg>
);

function SignInContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const callbackUrl = searchParams.get("callbackUrl") || "/community";
  const { supabase } = useSupabase();

  const [mode, setMode] = useState<"login" | "signup">("login");
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "success">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleCredentialsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: { data: { name: formData.name } },
      });

      if (error) {
        setStatus("error");
        setErrorMessage(error.message);
        return;
      }

      setStatus("success");
      setErrorMessage("Check your email for the confirmation link.");
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      setStatus("error");
      setErrorMessage(error.message);
    } else {
      setStatus("success");
      router.push(callbackUrl);
    }
  };

  const handleGoogleSignIn = () => {
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/auth/callback?callbackUrl=${callbackUrl}` },
    });
  };

  const toggleMode = () => {
    setMode(mode === "login" ? "signup" : "login");
    setStatus("idle");
    setErrorMessage("");
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <main className="min-h-screen bg-shri-black text-shri-offwhite flex flex-col relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-shri-gold/[0.03] blur-[150px] rounded-full auth-glow-1" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-shri-gold/[0.04] blur-[120px] rounded-full auth-glow-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-shri-gold/[0.02] blur-[180px] rounded-full" />
      </div>

      <div
        className="fixed inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 py-8 px-8"
      >
        <Link href="/" className="flex items-center space-x-3 group w-fit">
          <motion.div whileHover={{ rotate: 5, scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
              <path d="M12 21C12 21 18 17 18 12C18 7 12 3 12 3C12 3 6 7 6 12C6 17 12 21 12 21Z" />
              <path d="M12 21C12 21 21 15 21 10C21 5 16 3 12 3" />
              <path d="M12 21C12 21 3 15 3 10C3 5 8 3 12 3" />
            </svg>
          </motion.div>
          <span className="text-2xl font-bold tracking-[0.2em] text-white italic">SHRI</span>
        </Link>
      </motion.header>

      <div className="flex-grow flex items-center justify-center relative z-10 px-4 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-md"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-shri-gold/20 blur-2xl rounded-full"
              />
              <LotusIcon />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center mb-10"
          >
            <AnimatePresence mode="wait">
              <motion.h1
                key={mode}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-3xl md:text-4xl font-thin tracking-[0.15em] text-white uppercase mb-3"
              >
                {mode === "login" ? (
                  <>Identify <span className="italic metallic-text font-light">Self</span></>
                ) : (
                  <>Join the <span className="italic metallic-text font-light">Ecosystem</span></>
                )}
              </motion.h1>
            </AnimatePresence>
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-shri-gold to-transparent mx-auto mb-4" />
            <p className="text-gray-500 tracking-[0.3em] text-[9px] uppercase font-light">
              {mode === "login" ? "Welcome back to the divine flow" : "Begin your journey within the ecosystem"}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="glass rounded-2xl p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-shri-gold/[0.04] blur-2xl -mr-12 -mt-12 rounded-full" />
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-shri-gold/[0.03] blur-2xl -ml-10 -mb-10 rounded-full" />

            <motion.button
              whileHover={{ scale: 1.01, y: -1 }}
              whileTap={{ scale: 0.99 }}
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-3 py-3.5 border border-shri-gold/20 rounded-xl text-white text-[11px] uppercase tracking-[0.2em] font-light hover:bg-shri-gold/5 hover:border-shri-gold/40 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-shri-gold/0 via-shri-gold/5 to-shri-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <svg className="w-4 h-4 relative z-10" viewBox="0 0 24 24">
                <path fill="#D4AF37" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                <path fill="#B8860B" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#A67C00" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#D4AF37" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="relative z-10">Continue with Google</span>
            </motion.button>

            <div className="flex items-center gap-4 my-7">
              <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent to-shri-gold/10" />
              <span className="text-[8px] text-gray-600 uppercase tracking-[0.5em] font-light">or</span>
              <div className="flex-grow h-[1px] bg-gradient-to-l from-transparent to-shri-gold/10" />
            </div>

            <form onSubmit={handleCredentialsSubmit} className="space-y-5">
              <AnimatePresence mode="wait">
                {mode === "signup" && (
                  <motion.div
                    key="name-field"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="auth-input-group">
                      <label className="text-[9px] uppercase tracking-[0.3em] text-gray-500 mb-1.5 block font-light">Name</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your identity"
                        className="auth-input"
                        minLength={2}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="auth-input-group">
                <label className="text-[9px] uppercase tracking-[0.3em] text-gray-500 mb-1.5 block font-light">Email</label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="soul@ecosystem.com"
                  className="auth-input"
                />
              </div>

              <div className="auth-input-group">
                <label className="text-[9px] uppercase tracking-[0.3em] text-gray-500 mb-1.5 block font-light">Password</label>
                <div className="relative">
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="••••••••"
                    className="auth-input pr-10"
                    minLength={6}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-shri-gold transition-colors"
                  >
                    {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </div>
              </div>

              <AnimatePresence>
                {status === "error" && errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-center py-2.5 px-4 rounded-lg bg-red-500/10 border border-red-500/20"
                  >
                    <p className="text-red-400 text-[10px] uppercase tracking-[0.15em] font-light">{errorMessage}</p>
                  </motion.div>
                )}
                {status === "success" && mode === "signup" && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-2.5 px-4 rounded-lg bg-shri-gold/10 border border-shri-gold/20"
                  >
                    <p className="text-shri-gold text-[10px] uppercase tracking-[0.15em] font-light">{errorMessage}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                disabled={status === "loading"}
                type="submit"
                className="w-full py-3.5 bg-shri-gold text-shri-black text-[10px] uppercase tracking-[0.3em] font-semibold rounded-xl hover:bg-white transition-all duration-500 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    <span>Synchronizing...</span>
                  </>
                ) : (
                  <>
                    <span>{mode === "login" ? "Enter the Ecosystem" : "Create Identity"}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-[9px] text-gray-500 uppercase tracking-[0.3em] font-light">
                {mode === "login" ? "New to the ecosystem?" : "Already part of the vision?"}
              </p>
              <button
                onClick={toggleMode}
                className="mt-2 text-shri-gold text-[10px] uppercase tracking-[0.3em] hover:text-white transition-colors duration-300 font-light underline decoration-shri-gold/20 underline-offset-4 hover:decoration-white/40"
              >
                {mode === "login" ? "Create an Identity" : "Sign In"}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-8 text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-[1px] w-6 bg-shri-gold/10" />
              <span className="text-[8px] text-gray-600 uppercase tracking-[0.6em] font-light">Secure Protocol v.5.0</span>
              <div className="h-[1px] w-6 bg-shri-gold/10" />
            </div>
            <Link
              href="/"
              className="text-[9px] text-gray-600 uppercase tracking-[0.4em] hover:text-shri-gold transition-colors duration-300 font-light"
            >
              ← Return to the Vision
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}

export default function SignInPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-shri-black flex items-center justify-center">
        <Loader2 size={24} className="animate-spin text-shri-gold" />
      </main>
    }>
      <SignInContent />
    </Suspense>
  );
}
