"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOut, FileText, Users, BarChart3, Loader2 } from "lucide-react";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

type View = "login" | "dashboard" | "inquiries" | "posts";

export default function AdminPage() {
  const router = useRouter();
  const [view, setView] = useState<View>("login");
  const [token, setToken] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [stats, setStats] = useState<{ inquiryCount: number; discussionCount: number } | null>(null);
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [discussions, setDiscussions] = useState<any[]>([]);

  useEffect(() => {
    const saved = sessionStorage.getItem("admin_token");
    if (saved) {
      setToken(saved);
    }
  }, []);

  useEffect(() => {
    if (token) {
      fetch(`${API}/admin/stats`, {
        headers: { Authorization: `Bearer ${token}` },
      }).then((r) => {
        if (r.ok) setView("dashboard");
        else sessionStorage.removeItem("admin_token");
      }).catch(() => {
        sessionStorage.removeItem("admin_token");
      });
    }
  }, [token]);

  const saveToken = (t: string) => {
    sessionStorage.setItem("admin_token", t);
    setToken(t);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API}/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.success) {
        saveToken(data.token);
      } else {
        setError(data.message || "Login failed.");
      }
    } catch {
      setError("Could not connect to server.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_token");
    setToken(null);
    setView("login");
    setEmail("");
    setPassword("");
  };

  const fetchData = async (endpoint: string) => {
    if (!token) return null;
    try {
      const res = await fetch(`${API}/admin/${endpoint}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.json();
    } catch {
      return null;
    }
  };

  const loadDashboard = async () => {
    setLoading(true);
    try {
      const [statsData, inquiriesData, discussionsData] = await Promise.all([
        fetchData("stats"),
        fetchData("inquiries"),
        fetchData("discussions"),
      ]);
      if (statsData?.success) setStats(statsData.data);
      if (inquiriesData?.success) setInquiries(inquiriesData.data);
      if (discussionsData?.success) setDiscussions(discussionsData.data);
    } catch {
      // silent fail — dashboard shows empty state
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (view === "dashboard") loadDashboard();
  }, [view]);

  if (view === "login") {
    return (
      <main className="min-h-screen bg-shri-black flex items-center justify-center p-8">
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-shri-gold/[0.02] blur-[150px] rounded-full" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 w-full max-w-sm"
        >
          <div className="text-center mb-10">
            <h1 className="text-4xl font-thin text-white uppercase tracking-[0.15em] mb-3">
              Admin <span className="italic metallic-text font-light">Portal</span>
            </h1>
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-shri-gold to-transparent mx-auto" />
          </div>
          <form onSubmit={handleLogin} className="glass rounded-2xl p-8 space-y-5 border border-shri-gold/10">
            <div>
              <label className="text-[9px] uppercase tracking-[0.3em] text-gray-500 mb-1.5 block font-light">Email</label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-shri-black/60 border border-shri-gold/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-shri-gold/40 transition-colors font-light"
              />
            </div>
            <div>
              <label className="text-[9px] uppercase tracking-[0.3em] text-gray-500 mb-1.5 block font-light">Password</label>
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-shri-black/60 border border-shri-gold/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-shri-gold/40 transition-colors font-light"
              />
            </div>
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                <p className="text-red-400 text-xs text-center font-light">{error}</p>
              </div>
            )}
            <button
              disabled={loading}
              className="w-full py-3 bg-shri-gold text-shri-black text-[10px] uppercase tracking-[0.3em] font-semibold rounded-xl hover:bg-white transition-all duration-500 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? <><Loader2 size={14} className="animate-spin" /> Authenticating...</> : "Enter"}
            </button>
            <div className="text-center">
              <Link href="/" className="text-[9px] text-gray-600 uppercase tracking-[0.3em] hover:text-shri-gold transition-colors">
                ← Return
              </Link>
            </div>
          </form>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-shri-black text-shri-offwhite">
      <nav className="fixed top-0 left-0 w-full z-50 py-4 bg-shri-black/80 backdrop-blur-md border-b border-shri-gold/10">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <h1 className="text-lg font-thin tracking-[0.3em] uppercase">
            Admin <span className="italic metallic-text font-light">Dashboard</span>
          </h1>
          <div className="flex items-center gap-6">
            <span className="text-[9px] text-gray-500 uppercase tracking-[0.2em]">{email || "Admin"}</span>
            <button
              onClick={handleLogout}
              className="text-gray-400 text-[9px] uppercase tracking-[0.2em] hover:text-shri-gold transition-colors flex items-center gap-1.5"
            >
              <LogOut size={12} /> Exit
            </button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
        <div className="flex gap-4 mb-12 border-b border-shri-gold/10 pb-4">
          {(["dashboard", "inquiries", "posts"] as const).map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`text-[10px] uppercase tracking-[0.3em] pb-4 border-b-2 transition-all ${
                view === v ? "text-shri-gold border-shri-gold" : "text-gray-500 border-transparent hover:text-gray-300"
              }`}
            >
              {v === "dashboard" ? "Overview" : v === "inquiries" ? "Users" : "Posts"}
            </button>
          ))}
        </div>

        {loading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 size={20} className="animate-spin text-shri-gold" />
          </div>
        )}

        {!loading && view === "dashboard" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="glass rounded-2xl p-8 border border-shri-gold/10 text-center">
              <BarChart3 size={24} className="text-shri-gold mx-auto mb-4" />
              <p className="text-3xl font-light text-white">{stats?.inquiryCount ?? 0}</p>
              <p className="text-[9px] text-gray-500 uppercase tracking-[0.3em] mt-2">Total Inquiries</p>
            </div>
            <div className="glass rounded-2xl p-8 border border-shri-gold/10 text-center">
              <FileText size={24} className="text-shri-gold mx-auto mb-4" />
              <p className="text-3xl font-light text-white">{stats?.discussionCount ?? 0}</p>
              <p className="text-[9px] text-gray-500 uppercase tracking-[0.3em] mt-2">Total Posts</p>
            </div>
            <div className="glass rounded-2xl p-8 border border-shri-gold/10 text-center">
              <Users size={24} className="text-shri-gold mx-auto mb-4" />
              <p className="text-3xl font-light text-white">{inquiries.length}</p>
              <p className="text-[9px] text-gray-500 uppercase tracking-[0.3em] mt-2">Unique Contacts</p>
            </div>
          </div>
        )}

        {!loading && view === "inquiries" && (
          <div>
            <h2 className="text-2xl font-thin tracking-[0.15em] uppercase mb-8">
              Contact <span className="italic metallic-text font-light">Inquiries</span>
            </h2>
            {inquiries.length === 0 ? (
              <p className="text-gray-500 text-sm font-light">No inquiries yet.</p>
            ) : (
              <div className="space-y-4">
                {inquiries.map((inq: any) => (
                  <div key={inq._id} className="glass rounded-xl p-6 border border-shri-gold/5">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <span className="text-white text-sm font-light">{inq.name}</span>
                        <span className="text-gray-500 text-[10px] ml-3">{inq.email}</span>
                      </div>
                      <span className="text-[9px] text-gray-600 uppercase tracking-[0.2em]">
                        {new Date(inq.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[9px] uppercase tracking-[0.2em] text-shri-gold/60 bg-shri-gold/5 px-3 py-1 rounded-full">
                        {inq.interest}
                      </span>
                    </div>
                    {inq.message && (
                      <p className="mt-3 text-gray-400 text-xs font-light">{inq.message}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {!loading && view === "posts" && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-thin tracking-[0.15em] uppercase">
                Published <span className="italic metallic-text font-light">Posts</span>
              </h2>
              <Link
                href="/admin/blog"
                className="text-[9px] uppercase tracking-[0.3em] text-shri-gold border border-shri-gold/20 px-5 py-2.5 rounded-full hover:bg-shri-gold/10 transition-all"
              >
                + New Post
              </Link>
            </div>
            {discussions.length === 0 ? (
              <p className="text-gray-500 text-sm font-light">No posts yet.</p>
            ) : (
              <div className="space-y-4">
                {discussions.map((post: any) => (
                  <div key={post._id} className="glass rounded-xl p-6 border border-shri-gold/5">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-[9px] uppercase tracking-[0.2em] text-shri-gold/60 bg-shri-gold/5 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-[10px]">by {post.author?.name}</span>
                      </div>
                      <span className="text-[9px] text-gray-600 uppercase tracking-[0.2em]">
                        {new Date(post.timestamp).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm text-white font-light mt-2">{post.content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </section>
    </main>
  );
}
