import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "@/components/Providers";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: {
    default: "SHRI | The Future of Human Ecosystems",
    template: "%s | SHRI"
  },
  description: "Experience the intersection of sacred geometry and futuristic engineering. SHRI is the nexus of digital harmony and structural intelligence.",
  keywords: ["Sacred Geometry", "Futuristic Engineering", "Human Ecosystems", "Digital Harmony", "Structural Intelligence", "Luxury Tech"],
  authors: [{ name: "SHRI Team" }],
  creator: "SHRI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shri.vision",
    siteName: "SHRI",
    title: "SHRI | The Future of Human Ecosystems",
    description: "Experience the intersection of sacred geometry and futuristic engineering.",
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
    description: "Experience the intersection of sacred geometry and futuristic engineering.",
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
    "@type": "Organization",
    "name": "SHRI",
    "url": "https://shri.vision",
    "logo": "https://shri.vision/logo.png",
    "description": "The intersection of sacred geometry and futuristic engineering.",
    "sameAs": [
      "https://twitter.com/shri_vision",
      "https://instagram.com/shri_vision"
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
