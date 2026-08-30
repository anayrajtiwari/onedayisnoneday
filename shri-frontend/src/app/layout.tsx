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
    default: "SHRI | Bringing Worlds Together",
    template: "%s | SHRI"
  },
  description: "An interdisciplinary institution founded by Anay Raj Tiwari uniting software engineering, physical hardware gadgets (SHRI ELA), digital presence agency, and strategic capital.",
  keywords: [
    "Anay Raj Tiwari",
    "Anay Tiwari",
    "Founder Anay Raj Tiwari",
    "An Initiative By Anay Raj Tiwari",
    "Bringing Worlds Together",
    "A Thread Bringing Worlds Together",
    "A Thread",
    "SHRI",
    "Shri Hari Research Innovations",
    "Hardware",
    "Electronics",
    "SHRI ELA",
    "Digital Presence Agency",
    "SEO Optimization",
    "Social Media Management",
    "Astera OS",
    "Glyph-CLI",
    "Quantitative Finance",
    "Systems Architecture"
  ],
  authors: [
    { name: "Anay Raj Tiwari", url: "https://anay.shri.org.in" },
    { name: "SHRI Team" }
  ],
  creator: "Anay Raj Tiwari",
  publisher: "Shri Hari Research & Innovations Corporation",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shri.org.in",
    siteName: "SHRI",
    title: "SHRI | Bringing Worlds Together — Founded by Anay Raj Tiwari",
    description: "An interdisciplinary institution founded by Anay Raj Tiwari uniting software engineering, physical hardware, online presence agency, and strategic capital.",
    images: [
      {
        url: "https://shri.org.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "SHRI - Bringing Worlds Together by Anay Raj Tiwari",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SHRI | Bringing Worlds Together — Founded by Anay Raj Tiwari",
    description: "An interdisciplinary institution founded by Anay Raj Tiwari uniting software engineering, physical hardware, online presence agency, and strategic capital.",
    images: ["https://shri.org.in/og-image.png"],
    creator: "@__anay___",
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
        "@type": "WebSite",
        "@id": "https://shri.org.in/#website",
        "url": "https://shri.org.in",
        "name": "SHRI",
        "alternateName": "Shri Hari Research & Innovations Corporation",
        "description": "Shri Hari Research & Innovations Corporation — an interdisciplinary institution uniting software engineering, physical hardware, online presence agency, and strategic capital.",
        "publisher": {
          "@id": "https://shri.org.in/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": "https://shri.org.in/#organization",
        "name": "SHRI",
        "legalName": "Shri Hari Research & Innovations Corporation",
        "url": "https://shri.org.in",
        "logo": "https://shri.org.in/shri.jpeg",
        "description": "An interdisciplinary institution uniting software engineering, physical hardware, digital presence agency, and strategic capital.",
        "founder": {
          "@type": "Person",
          "@id": "https://anay.shri.org.in/#person",
          "name": "Anay Raj Tiwari",
          "url": "https://anay.shri.org.in"
        },
        "sameAs": [
          "https://twitter.com/shri_vision",
          "https://instagram.com/shri_vision",
          "https://github.com/anayrajtiwari"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://anay.shri.org.in/#person",
        "name": "Anay Raj Tiwari",
        "alternateName": ["anayrajtiwari", "Anay Tiwari", "@anayrajtiwari"],
        "url": "https://anay.shri.org.in",
        "sameAs": [
          "https://www.instagram.com/anayrajtiwari/",
          "https://instagram.com/anayrajtiwari",
          "https://x.com/__anay___",
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
