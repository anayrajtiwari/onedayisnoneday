"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Loader2, ArrowLeft, Send } from "lucide-react";
import Link from "next/link";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export default function BlogEditor() {
  const router = useRouter();
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Announcement");
  const [status, setStatus] = useState<"idle" | "publishing" | "success" | "error">("idle");

  useEffect(() => {
    const token = sessionStorage.getItem("admin_token");
    if (!token) router.push("/admin");
  }, [router]);

  const handlePublish = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    setStatus("publishing");
    const token = sessionStorage.getItem("admin_token");

    try {
      const res = await fetch(`${API}/admin/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ content: content.trim(), category }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setContent("");
        setTimeout(() => setStatus("idle"), 2000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <main className="min-h-screen bg-shri-black text-shri-offwhite">
      <nav className="fixed top-0 left-0 w-full z-50 py-4 bg-shri-black/80 backdrop-blur-md border-b border-shri-gold/10">
        <div className="max-w-4xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Link href="/admin" className="text-gray-400 hover:text-shri-gold transition-colors">
              <ArrowLeft size={16} />
            </Link>
            <h1 className="text-lg font-thin tracking-[0.3em] uppercase">
              New <span className="italic metallic-text font-light">Post</span>
            </h1>
          </div>
          <span className="text-[9px] text-gray-500 uppercase tracking-[0.2em]">Admin</span>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-8">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handlePublish} className="space-y-8">
            <div className="flex items-center gap-4">
              <label className="text-[9px] uppercase tracking-[0.3em] text-gray-500">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-shri-black/60 border border-shri-gold/10 rounded-xl px-4 py-2.5 text-white text-[10px] uppercase tracking-[0.2em] focus:outline-none focus:border-shri-gold/40 transition-colors"
              >
                <option value="Announcement">Announcement</option>
                <option value="Update">Update</option>
                <option value="General">General</option>
                <option value="Release">Release</option>
              </select>
            </div>

            <div className="relative">
              <textarea
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your post here..."
                rows={10}
                className="w-full bg-shri-black/60 border border-shri-gold/10 rounded-2xl px-6 py-6 text-white text-base font-light leading-relaxed focus:outline-none focus:border-shri-gold/40 transition-colors resize-none placeholder:text-gray-600"
              />
              <div className="absolute bottom-4 right-4">
                <span className="text-[9px] text-gray-600">{content.length} chars</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setContent("")}
                className="text-[9px] uppercase tracking-[0.3em] text-gray-500 hover:text-gray-300 transition-colors"
              >
                Clear
              </button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === "publishing" || !content.trim()}
                className="flex items-center gap-2 px-8 py-3.5 bg-shri-gold text-shri-black text-[10px] uppercase tracking-[0.3em] font-semibold rounded-xl hover:bg-white transition-all duration-500 disabled:opacity-40"
              >
                {status === "publishing" ? (
                  <><Loader2 size={14} className="animate-spin" /> Publishing...</>
                ) : status === "success" ? (
                  <><Send size={14} /> Published</>
                ) : (
                  <><Send size={14} /> Publish</>
                )}
              </motion.button>
            </div>

            {status === "error" && (
              <p className="text-red-400 text-[10px] uppercase tracking-[0.15em] text-center">
                Failed to publish. Try again.
              </p>
            )}
          </form>

          {content.trim() && (
            <div className="mt-20 border-t border-shri-gold/10 pt-12">
              <h3 className="text-[9px] uppercase tracking-[0.4em] text-gray-500 mb-6">Preview</h3>
              <div className="glass rounded-2xl p-8 border border-shri-gold/10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-shri-gold/60 bg-shri-gold/5 px-3 py-1 rounded-full">
                    {category}
                  </span>
                  <span className="text-[9px] text-gray-500">by SHRI Admin</span>
                </div>
                <p className="text-sm text-white font-light leading-relaxed whitespace-pre-wrap">{content}</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
