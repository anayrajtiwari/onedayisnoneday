import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "@/components/Providers";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://shri.org.in"),
  alternates: {
    canonical: "https://shri.org.in",
  },
  title: {
    default: "SHRI | The Future of Human Ecosystems",
    template: "%s | SHRI"
  },
  description: "Experience the intersection of sacred geometry and futuristic engineering. SHRI is the nexus of digital harmony, developer tools like Glyph-CLI, and Astera Operating System.",
  keywords: ["Sacred Geometry", "Futuristic Engineering", "Human Ecosystems", "Digital Harmony", "Structural Intelligence", "Luxury Tech", "Glyph-CLI", "Glyph", "Docflow", "Developer Tools", "Astera OS"],
  authors: [{ name: "SHRI Team" }],
  creator: "SHRI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shri.org.in",
    siteName: "SHRI",
    title: "SHRI | The Future of Human Ecosystems",
    description: "Experience the intersection of sacred geometry and futuristic engineering, building tools like Glyph-CLI and Astera OS.",
    images: [
      {
        url: "/og-image.png", // Assuming this will be added or handled by Vercel OG
        width: 1200,
        height: 630,
        alt: "SHRI - The Future of Human Ecosystems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SHRI | The Future of Human Ecosystems",
    description: "Experience the intersection of sacred geometry and futuristic engineering, building tools like Glyph-CLI and Astera OS.",
    images: ["/og-image.png"],
    creator: "@shri_vision",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://shri.org.in/#organization",
        "name": "SHRI",
        "url": "https://shri.org.in",
        "logo": "https://shri.org.in/logo.png",
        "description": "The intersection of sacred geometry and futuristic engineering, building products like Astera OS and Glyph-CLI.",
        "founder": {
          "@type": "Person",
          "@id": "https://anay.shri.org.in/#person",
          "name": "Anay Raj Tiwari",
          "url": "https://anay.shri.org.in"
        },
        "sameAs": [
          "https://twitter.com/shri_vision",
          "https://instagram.com/shri_vision"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://anay.shri.org.in/#person",
        "name": "Anay Raj Tiwari",
        "url": "https://anay.shri.org.in",
        "sameAs": [
          "https://x.com/__anay___",
          "https://www.instagram.com/anayrajtiwari/",
          "https://github.com/anayrajtiwari"
        ],
        "jobTitle": "Builder & Founder",
        "worksFor": {
          "@id": "https://shri.org.in/#organization"
        }
      }
    ]
  };

  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-shri-black text-shri-offwhite selection:bg-shri-gold selection:text-shri-black">
        <Providers>
          <SmoothScroll>
            {children}
          </SmoothScroll>
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
