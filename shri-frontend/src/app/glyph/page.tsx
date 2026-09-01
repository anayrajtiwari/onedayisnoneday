import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlyphContent from "./GlyphContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glyph-CLI | Documentation Engine | SHRI",
  description: "Glyph is a fast, local, offline MDX documentation compiler developed by SHRI that transforms Markdown and MDX into clean static HTML and CSS without external API dependencies.",
  keywords: ["Glyph", "Glyph-CLI", "rz-glyph-cli", "MDX compiler", "documentation compiler", "offline docs", "static site compiler", "SHRI"],
  alternates: {
    canonical: "https://shri.org.in/glyph",
  },
};

export default function GlyphPage() {
  const glyphJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["SoftwareApplication", "SoftwareSourceCode"],
        "@id": "https://shri.org.in/glyph#software",
        "name": "Glyph",
        "alternateName": ["Glyph-CLI", "rz-glyph-cli"],
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Linux, macOS, Windows",
        "description": "A fast, local, offline MDX documentation compiler developed by SHRI that transforms Markdown and MDX into clean static HTML and CSS without requiring external APIs.",
        "programmingLanguage": "JavaScript",
        "creator": {
          "@type": "Person",
          "@id": "https://anay.shri.org.in/#person",
          "name": "Anay Raj Tiwari",
          "url": "https://anay.shri.org.in"
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://shri.org.in/#organization",
          "name": "Shri Hari Redirect Initiative",
          "alternateName": "SHRI",
          "url": "https://shri.org.in"
        },
        "codeRepository": "https://github.com/anayrajtiwari/glyph-cli"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://shri.org.in"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Glyph-CLI",
            "item": "https://shri.org.in/glyph"
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-shri-black text-shri-offwhite">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(glyphJsonLd) }}
      />
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
          <GlyphContent />
        </div>
      </section>

      <Footer />
    </main>
  );
}
