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
    default: "SHRI | Shri Hari Redirect Initiative",
    template: "%s | SHRI"
  },
  description: "Shri Hari Redirect Initiative (SHRI) — an interdisciplinary organization founded by Anay Raj Tiwari uniting software systems, physical hardware, digital presence agency, and strategic capital.",
  keywords: [
    "Anay Raj Tiwari",
    "Anay Tiwari",
    "Founder Anay Raj Tiwari",
    "SHRI",
    "Shri Hari Redirect Initiative",
    "Astera OS",
    "Glyph-CLI",
    "SHRI ELA",
    "Hardware",
    "Electronics",
    "Digital Presence Agency",
    "Systems Architecture"
  ],
  authors: [
    { name: "Anay Raj Tiwari", url: "https://anay.shri.org.in" },
    { name: "SHRI Team" }
  ],
  creator: "Anay Raj Tiwari",
  publisher: "Shri Hari Redirect Initiative",
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
    title: "SHRI | Shri Hari Redirect Initiative — Founded by Anay Raj Tiwari",
    description: "Shri Hari Redirect Initiative (SHRI) — an interdisciplinary organization founded by Anay Raj Tiwari uniting software systems, physical hardware, digital presence agency, and strategic capital.",
    images: [
      {
        url: "https://shri.org.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "SHRI - Shri Hari Redirect Initiative by Anay Raj Tiwari",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SHRI | Shri Hari Redirect Initiative — Founded by Anay Raj Tiwari",
    description: "Shri Hari Redirect Initiative (SHRI) — an interdisciplinary organization founded by Anay Raj Tiwari uniting software systems, physical hardware, digital presence agency, and strategic capital.",
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
        "alternateName": ["Shri Hari Redirect Initiative", "SHRI Ecosystem"],
        "description": "Shri Hari Redirect Initiative — an interdisciplinary institution founded by Anay Raj Tiwari uniting software engineering, physical hardware, online presence agency, and strategic capital.",
        "publisher": {
          "@id": "https://shri.org.in/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": "https://shri.org.in/#organization",
        "name": "Shri Hari Redirect Initiative",
        "alternateName": ["SHRI", "SHRI Ecosystem"],
        "legalName": "Shri Hari Redirect Initiative",
        "url": "https://shri.org.in",
        "logo": "https://shri.org.in/shri.jpeg",
        "description": "An interdisciplinary organization founded by Anay Raj Tiwari uniting software engineering, physical hardware, digital presence agency, and strategic capital.",
        "founder": {
          "@type": "Person",
          "@id": "https://anay.shri.org.in/#person",
          "name": "Anay Raj Tiwari",
          "url": "https://anay.shri.org.in",
          "jobTitle": "Founder & Systems Architect",
          "sameAs": [
            "https://x.com/__anay___",
            "https://instagram.com/anayrajtiwari",
            "https://github.com/anayrajtiwari"
          ]
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
        "jobTitle": "Founder & Systems Architect",
        "worksFor": {
          "@id": "https://shri.org.in/#organization"
        },
        "founder": {
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
