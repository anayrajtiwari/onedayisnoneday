"use client";

import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "A Manifesto for Personal Computing",
    content: `Somewhere along the way, we stopped owning our computers.

Not literally. The devices still sit on our desks and in our hands. We paid for them. We use them every day.

But little by little, we surrendered control.

We accepted operating systems that decide how we should work. We accepted platforms that collect more than they need. We accepted ecosystems that lock us in, interfaces that distract us, and software that grows more complicated with every passing year.

And eventually, we accepted the idea that this was simply the price of modern technology.

We don't.`,
  },
  {
    title: "The Belief",
    content: `Astera began with a simple belief:

Technology should adapt to people — not the other way around.

That belief sounds obvious. Yet modern computing often does the opposite.

Instead of serving users, technology increasingly asks users to serve it.

Learn this workflow. Accept these restrictions. Use these services. Share this data. Adapt yourself.

The burden is always placed on the individual.

Astera exists because we believe personal computing deserves a different future. Not a future built around corporations. Not a future built around advertising. Not a future built around extracting as much value as possible from the people who depend on technology every day.

A future built around people.`,
  },
  {
    title: "Privacy Is Normal",
    content: `Privacy should not be a premium feature. It should not require technical expertise. It should not require reading pages of settings or installing dozens of tools.

Privacy should be the default.

When people sit down at their computers, they should know that their system works for them and them alone.

Not for advertisers. Not for algorithms. Not for invisible interests operating behind the scenes.

A computer should feel personal again.

Astera is being built with that principle at its foundation.`,
  },
  {
    title: "Simplicity and Freedom Can Coexist",
    content: `For years, users have been forced to make a choice.

Choose convenience or control. Choose beauty or flexibility. Choose ease of use or customization.

The industry treats these compromises as unavoidable.

We see them as design failures.

A system can be elegant without being restrictive. It can be powerful without being intimidating. It can be simple without hiding control from the people who want it.

Astera is our attempt to prove that.`,
  },
  {
    title: "Computing Should Feel Human",
    content: `Technology should not constantly compete for attention. It should not overwhelm users with notifications, complexity, and noise.

The best technology fades into the background.

It helps people create, learn, build, communicate, and explore without becoming the center of their lives.

Astera is designed around that idea.

Not to demand attention. But to earn trust.`,
  },
  {
    title: "Why Astera Exists",
    content: `Astera is not being built because the world needs another Linux distribution.

The world already has enough operating systems.

Astera exists because we believe there is still room for a better relationship between people and technology.

A relationship built on trust rather than dependency. On ownership rather than control. On transparency rather than obscurity. On respect rather than exploitation.

This is not a product roadmap. It is not a marketing campaign.

It is a statement of intent.

We believe personal computing can be better.

We believe users deserve better.

And Astera is our commitment to building it.`,
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

export default function AsteraContent() {
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
          <span className="text-shri-gold text-[10px] uppercase tracking-[0.8em]">Manifesto</span>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-shri-gold/40" />
        </div>
        <h1 className="text-7xl md:text-9xl font-thin tracking-tight text-white mb-6">
          <span className="italic metallic-text font-light">Astera</span>
        </h1>
        <p className="text-gray-500 text-xs uppercase tracking-[0.4em] font-light max-w-xl mx-auto">
          A new paradigm for personal computing
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
                <p key={i} className={paragraph.startsWith("Astera") && paragraph.endsWith("it.") ? "text-shri-gold/80 italic" : ""}>
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
            &ldquo;Technology should adapt to people —<br />
            <span className="metallic-text font-normal">not the other way around.&rdquo;</span>
          </p>
          <div className="w-16 h-[1px] bg-shri-gold/40 mx-auto mt-8" />
          <p className="mt-12 text-gray-600 text-[10px] uppercase tracking-[0.5em]">
            Astera - A SHRI Ecosystem Project
          </p>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-40 text-center">
        <div className="max-w-lg mx-auto glass rounded-[2.5rem] p-16 border border-shri-gold/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-shri-gold/10 blur-3xl -mr-16 -mt-16 rounded-full" />
          <div className="w-16 h-16 border border-shri-gold/30 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-6 h-6 text-shri-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-thin tracking-[0.15em] text-white uppercase mb-6">
            Coming <span className="italic metallic-text font-light">Soon</span>
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-shri-gold to-transparent mx-auto mb-8" />
          <p className="text-gray-500 text-xs uppercase tracking-[0.4em] font-light max-w-sm mx-auto leading-loose">
            Astera is currently in development. We are crafting a new paradigm for personal computing.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="h-[1px] w-8 bg-shri-gold/20" />
            <span className="text-shri-gold/40 text-[9px] uppercase tracking-[0.6em]">Est. 2026</span>
            <div className="h-[1px] w-8 bg-shri-gold/20" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
