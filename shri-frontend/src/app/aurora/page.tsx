import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuroraContent from "./AuroraContent";

export default function AuroraPage() {
  return (
    <main className="min-h-screen bg-shri-black text-shri-offwhite">
      <Navbar />

      <section className="relative pt-40 pb-20 px-8 overflow-hidden">
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-shri-gold/[0.02] blur-[150px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-shri-gold/[0.03] blur-[120px] rounded-full" />
        </div>

        <div
          className="fixed inset-0 pointer-events-none opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />

        <div className="max-w-4xl mx-auto relative z-10">
          <AuroraContent />
        </div>
      </section>

      <Footer />
    </main>
  );
}
