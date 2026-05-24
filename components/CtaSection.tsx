"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import WaitlistForm from "./WaitlistForm";
import { EASE } from "@/lib/motion";

export default function CtaSection() {
  return (
    <section id="cta" className="relative py-28 md:py-40 px-5 md:px-9 bg-[#04060a] overflow-hidden text-center">
      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[rgba(0,255,178,0.05)] blur-[120px] pointer-events-none" aria-hidden="true" />

      {/* Floating text particles */}
      {["alpha","+R","edge","data","discipline","pnl","0.8R","journal","AI"].map((txt, i) => (
        <span
          key={txt}
          className="absolute font-mono text-[10px] text-[rgba(0,255,178,0.1)] tracking-[0.08em] pointer-events-none select-none"
          style={{
            left: `${8 + i * 11}%`,
            animation: `ctaFloat ${12 + i * 2}s linear infinite`,
            animationDelay: `${-i * 1.5}s`,
          }}
          aria-hidden="true"
        >
          {txt}
        </span>
      ))}

      <div className="relative z-10 max-w-xl mx-auto">
        <SectionLabel chapter="Epilogue" label="The Invitation" center />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-[clamp(38px,7vw,76px)] font-extrabold italic leading-[1.05] tracking-[-0.04em] text-white mb-6"
        >
          Stop guessing.<br />
          <em className="not-italic text-[#00ffb2]">Start knowing.</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          className="text-base leading-[1.9] text-[#8b95aa] mb-12 max-w-md mx-auto"
        >
          We&apos;re still building. And we want traders who feel this story in their gut to be part of shaping what comes next.{" "}
          <strong className="text-white/70">Join the waitlist. Help us build it right.</strong>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
        >
          <WaitlistForm />
          <p className="mt-5 font-mono text-[11px] tracking-[0.14em] uppercase text-[#8b95aa]">
            No spam · No credit card · Early access only
          </p>
        </motion.div>

        <div className="w-10 h-px bg-white/[0.08] mx-auto my-12" />

        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          className="text-[15px] text-white/75 leading-[1.8] max-w-md mx-auto"
        >
          &ldquo;We built this because we lived it. Every blown account, every strategy pivot, every frustrating Thursday — it all led here. If this story sounds like yours, you belong in this community.&rdquo;
        </motion.blockquote>
        <p className="mt-4 font-mono text-[11px] tracking-[0.14em] uppercase text-white/50">— The Edgecipline Team</p>
      </div>
    </section>
  );
}
