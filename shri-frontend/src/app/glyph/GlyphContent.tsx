"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const sections = [
  {
    title: "Lightweight and Zero-Dependency",
    content: `Documentation should not require hundreds of megabytes of frameworks.

We believed that a simple wiki, developer guide, or API documentation portal should compile instantly and run without any external resource constraints.

That is why Glyph was built with zero dependencies. No Webpack, no heavy JavaScript runtimes, no complex bundlers. It is written using pure JavaScript to parse raw Markdown and MDX files into beautiful static pages.`,
  },
  {
    title: "Instant Static Compilation",
    content: `A compilation pipeline built directly on top of V8.

Glyph processes documents at V8 speeds — individual markdown pages compile in under 10ms, and complete directories are built into a self-contained production-ready output folder in less than 50ms.

Simply type the command:
node bin/compiler.js build

And the entire docs folder is transformed into static HTML, CSS, and JS ready to deploy anywhere.`,
  },
  {
    title: "Fuzzy Client-Side Search",
    content: `Instant indexing without database services.

Most modern portals require complex external search indexes like Algolia. Glyph completely eliminates this need.

During compilation, Glyph extracts metadata, titles, descriptions, and plain text from your pages and packs them into a lightweight local JSON index. Users get high-performance fuzzy matching on-the-fly entirely client-side.`,
  },
  {
    title: "Live Rebuilding & Dev Server",
    content: `A reactive environment built for fast writing.

Running the preview server launches a lightweight HTTP listener at localhost:3000 and watches your source documents for edits.

By implementing a debounced file watcher, saving any file inside the source directory triggers a silent sub-50ms rebuild, instantly updating the browser on save.`,
  },
  {
    title: "Clean Developer Aesthetics",
    content: `Optimized layouts optimized for readability.

Featuring a built-in glowing dark theme, Glyph comes pre-packaged with modern glassmorphism sidebars, code highlight styling, page-to-page navigation pagers, and native support for GitHub-style blockquote alerts (NOTE, TIP, WARNING, IMPORTANT).`,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function GlyphContent() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div variants={itemVariants} className="mb-24 text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-shri-gold/40" />
          <span className="text-shri-gold text-[10px] uppercase tracking-[0.8em]">Developer Tools</span>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-shri-gold/40" />
        </div>
        <h1 className="text-7xl md:text-9xl font-thin tracking-tight text-white mb-6">
          <span className="italic metallic-text font-light">Glyph-CLI</span>
        </h1>
        <p className="text-gray-500 text-xs uppercase tracking-[0.4em] font-light max-w-xl mx-auto">
          A Zero-Dependency Documentation Compiler
        </p>
      </motion.div>

      <div className="space-y-32">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            variants={itemVariants}
            className="relative"
          >
            <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-shri-gold/40 via-shri-gold/10 to-transparent hidden md:block" />

            <div className="mb-8 flex items-center gap-4">
              <span className="text-shri-gold/30 text-sm font-serif tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="h-[1px] flex-grow bg-gradient-to-r from-shri-gold/20 to-transparent" />
            </div>

            <h2 className="text-3xl md:text-4xl font-light text-white mb-10 tracking-tight leading-tight">
              {section.title}
            </h2>

            <div className="space-y-4 text-gray-400 font-light leading-relaxed tracking-wide text-sm md:text-base max-w-3xl">
              {section.content.split("\n\n").map((paragraph, i) => (
                <p key={i}>
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={itemVariants}
        className="mt-40 text-center border-t border-shri-gold/10 pt-20"
      >
        <div className="max-w-2xl mx-auto">
          <div className="w-16 h-[1px] bg-shri-gold/40 mx-auto mb-8" />
          <p className="text-2xl md:text-3xl font-extralight text-white leading-relaxed italic tracking-tight">
            &ldquo;Restoring human weight and speed<br />
            <span className="metallic-text font-normal">to developer documentation.&rdquo;</span>
          </p>
          <div className="w-16 h-[1px] bg-shri-gold/40 mx-auto mt-8" />
          <p className="mt-12 text-gray-600 text-[10px] uppercase tracking-[0.5em]">
            Glyph - A SHRI Ecosystem Project
          </p>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-40 text-center">
        <div className="max-w-lg mx-auto glass rounded-[2.5rem] p-16 border border-shri-gold/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-shri-gold/10 blur-3xl -mr-16 -mt-16 rounded-full" />
          <div className="w-16 h-16 border border-shri-gold/30 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-6 h-6 text-shri-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-thin tracking-[0.15em] text-white uppercase mb-6">
            Get the <span className="italic metallic-text font-light">Code</span>
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-shri-gold to-transparent mx-auto mb-8" />
          <p className="text-gray-500 text-xs uppercase tracking-[0.4em] font-light max-w-sm mx-auto leading-loose mb-8">
            Explore the public documentation repository, installation guide, and examples on GitHub.
          </p>
          <Link
            href="https://github.com/anayrajtiwari/glyph-docs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-8 py-3 border border-shri-gold/30 text-shri-gold text-[10px] uppercase tracking-[0.3em] hover:bg-shri-gold hover:text-shri-black transition-all duration-500 rounded-full"
          >
            View on GitHub
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
