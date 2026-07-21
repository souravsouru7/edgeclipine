"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ProductMockup from "./ProductMockup";
import { EASE } from "@/lib/motion";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-5 md:px-9 pt-28 pb-16 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,178,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,178,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)",
        }}
        aria-hidden="true"
      />

      {/* Glow orbs */}
      <div className="absolute -top-24 -left-32 w-[600px] h-[600px] rounded-full bg-[rgba(0,255,178,0.05)] blur-[130px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[rgba(0,180,255,0.04)] blur-[130px] pointer-events-none" aria-hidden="true" />

      {/* Year watermark */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[clamp(120px,25vw,280px)] text-white/[0.025] leading-none tracking-[-0.05em] pointer-events-none select-none z-0" aria-hidden="true">
        2025
      </span>

      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">
        {/* Left: Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0, ease: EASE }}
            className="flex items-center gap-2.5 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ffb2] animate-blink flex-shrink-0" />
            <span className="font-mono text-xs tracking-[0.18em] uppercase text-[#00ffb2]">
              AI Trading Journal · Discipline Coach · Gamified Growth
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="text-[clamp(40px,6vw,78px)] font-extrabold leading-[1.06] tracking-[-0.03em] text-white mb-7"
          >
            You don&apos;t need<br />
            another strategy.<br />
            <em className="not-italic text-[#00ffb2]">You need a mirror.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="text-[17px] leading-[1.8] text-[#8b95aa] font-medium max-w-[520px] mb-10"
          >
            Edgecipline tracks your{" "}
            <strong className="text-white/60 font-semibold">behavior, not just P&amp;L</strong>. Upload a screenshot — AI
            builds your journal, reveals your Trading DNA, and keeps you disciplined with missions,
            streaks, and a daily AI coach. Built for Forex and Indian market traders.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            className="flex flex-wrap gap-3.5 mb-8"
          >
            <Link
              href="#cta"
              className="inline-flex items-center gap-2 bg-[#00ffb2] hover:bg-[#00e09e] text-[#060910] font-extrabold text-[13px] uppercase tracking-[0.1em] px-7 py-3.5 rounded-full animate-btn-glow transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(0,255,178,0.3)]"
            >
              Join Waitlist →
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center gap-2 bg-transparent text-white/60 hover:text-white font-semibold text-[13px] border border-white/[0.15] hover:border-white/40 px-6 py-3.5 rounded-full transition-colors duration-200"
            >
              See Features ↓
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
            className="flex items-center gap-2 text-xs text-[#8b95aa] font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-[#00ffb2] animate-blink flex-shrink-0" />
            <span>
              <strong className="text-[#00ffb2]">847+</strong> traders already on the waitlist
            </span>
          </motion.div>
        </div>

        {/* Right: Product mockup */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
          className="hidden lg:block"
        >
          <ProductMockup />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 text-white/20 font-mono text-[11px] tracking-[0.16em] uppercase lg:hidden"
        aria-hidden="true"
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-[rgba(0,255,178,0.5)]" />
        scroll to read the story
      </motion.div>
    </section>
  );
}
