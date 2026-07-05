import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SignOutButton } from "@/components/AuthButtons";

export default async function CommunityPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/signin?callbackUrl=/community");
  }

  return (
    <main className="min-h-screen bg-shri-black text-shri-offwhite">
      <Navbar />

      <section className="pt-40 pb-20 px-8 max-w-7xl mx-auto">
        <header className="flex justify-between items-end mb-20">
          <div>
            <h1 className="text-5xl md:text-7xl font-thin tracking-tight uppercase mb-4">
              Community <span className="italic metallic-text">Hub</span>
            </h1>
            <p className="text-shri-gold/60 tracking-[0.3em] uppercase text-xs">
              Welcome back, {user.user_metadata?.name?.split(" ")[0] || user.email?.split("@")[0]}
            </p>
          </div>
          <SignOutButton />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="border border-shri-gold/10 p-10 bg-shri-black/40 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-shri-gold/5 blur-3xl -mr-16 -mt-16 rounded-full group-hover:bg-shri-gold/10 transition-colors duration-700"></div>

              <h2 className="text-2xl font-thin tracking-[0.2em] uppercase mb-8 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-shri-gold"></span>
                Vision Roadmap
              </h2>

              <div className="space-y-8">
                {[
                  { phase: "Phase 01", title: "Core Architecture", status: "Completed", desc: "Foundational digital layer and structural intelligence protocols established." },
                  { phase: "Phase 02", title: "Community Genesis", status: "In Progress", desc: "Opening the gateway for early visionaries and ecosystem builders." },
                  { phase: "Phase 03", title: "Physical Integration", status: "Q4 2026", desc: "Manifesting digital protocols into high-end physical structural modules." }
                ].map((item, index) => (
                  <div key={index} className="relative pl-8 border-l border-shri-gold/10 py-2">
                    <div className="absolute left-[-5px] top-4 w-2 h-2 rounded-full bg-shri-gold shadow-[0_0_10px_#D4AF37]"></div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-light tracking-wide">{item.title}</h3>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-shri-gold/40">{item.phase}</span>
                    </div>
                    <p className="text-sm text-gray-400 font-light leading-relaxed mb-3">{item.desc}</p>
                    <span className={`text-[9px] uppercase tracking-[0.2em] ${item.status === 'In Progress' ? 'text-shri-gold' : 'text-gray-600'}`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="border border-shri-gold/10 p-10 bg-shri-black/40 backdrop-blur-sm h-full">
              <h2 className="text-2xl font-thin tracking-[0.2em] uppercase mb-8 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-shri-gold"></span>
                Discussions
              </h2>

              <div className="space-y-6">
                <div className="p-4 border border-shri-gold/5 bg-shri-gold/5">
                  <p className="text-[10px] text-shri-gold uppercase tracking-[0.2em] mb-2">Announcement</p>
                  <p className="text-sm font-light text-white mb-4">Ecosystem modules are now in beta testing.</p>
                  <div className="flex justify-between items-center text-[9px] text-gray-500 uppercase tracking-widest">
                    <span>SHRI Admin</span>
                    <span>2h ago</span>
                  </div>
                </div>

                <div className="text-center py-10">
                  <p className="text-[10px] text-gray-500 uppercase tracking-[0.4em] mb-4">Board Loading...</p>
                  <div className="w-8 h-[1px] bg-shri-gold/20 mx-auto"></div>
                </div>
              </div>

              <button className="w-full mt-10 py-4 border border-shri-gold/20 text-shri-gold text-[10px] uppercase tracking-[0.4em] hover:bg-shri-gold/10 transition-colors">
                New Intention
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
