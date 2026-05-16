"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { EASE, EASE_SPRING } from "@/lib/motion";

const phases = [
  {
    emoji: "🎯",
    era: "Year 1 · Early",
    name: "Honeymoon Phase",
    quote: '"5 wins in a row. I\'ve cracked it."',
    pnl: "−₹40,000",
    color: "red",
  },
  {
    emoji: "🔄",
    era: "Year 1 · Mid",
    name: "Strategy Trap",
    quote: '"6 strategies. Same results."',
    pnl: "₹3 Courses Bought",
    color: "amber",
  },
  {
    emoji: "🌀",
    era: "Year 1 · Late",
    name: "The Spiral",
    quote: '"Revenge trading every Thursday."',
    pnl: "−₹1,20,000",
    color: "red",
  },
  {
    emoji: "💡",
    era: "Year 2 · Shift",
    name: "Data Reveals All",
    quote: '"The pattern was obvious. I just wasn\'t looking."',
    pnl: "+₹2.4R avg",
    color: "green",
  },
];

const colorMap = {
  red: {
    name: "text-[#ff8a8a]",
    pnl: "text-[#ff4d4d] bg-[rgba(255,77,77,0.1)]",
    hover: "hover:border-[rgba(255,77,77,0.4)]",
  },
  amber: {
    name: "text-[#f5a623]",
    pnl: "text-[#f5a623] bg-[rgba(245,166,35,0.1)]",
    hover: "hover:border-[rgba(245,166,35,0.4)]",
  },
  green: {
    name: "text-[#00ffb2]",
    pnl: "text-[#00ffb2] bg-[rgba(0,255,178,0.1)]",
    hover: "hover:border-[rgba(0,255,178,0.45)]",
    card: "bg-[rgba(0,255,178,0.03)] border-[rgba(0,255,178,0.18)]",
  },
};

export default function JourneySection() {
  return (
    <section id="journey" className="py-28 md:py-36 px-5 md:px-9 bg-[#04060a]">
      <div className="max-w-5xl mx-auto">
        <SectionLabel chapter="Chapter 02" label="The Journey" />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-[clamp(32px,5vw,60px)] font-extrabold leading-[1.1] tracking-tight text-white mb-14"
        >
          Every trader goes through<br />
          <em className="not-italic text-[#f5a623]">the same 4 phases.</em>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {phases.map((phase, i) => {
            const c = colorMap[phase.color as keyof typeof colorMap];
            return (
              <motion.div
                key={phase.name}
                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE_SPRING }}
                whileHover={{ y: -6 }}
                className={`relative p-7 rounded-2xl border border-white/[0.07] transition-colors duration-300 cursor-default overflow-hidden ${c.hover} ${"card" in c ? c.card : "bg-white/[0.02]"}`}
              >
                {i < phases.length - 1 && (
                  <span className="hidden lg:block absolute top-1/2 -right-3.5 -translate-y-1/2 text-white/[0.12] text-lg z-10 pointer-events-none">
                    →
                  </span>
                )}
                <span className="text-4xl block mb-3.5 leading-none">{phase.emoji}</span>
                <div className="font-mono text-[9px] tracking-[0.22em] uppercase text-[#8b95aa] mb-2">{phase.era}</div>
                <div className={`text-base font-bold mb-2 leading-tight ${c.name}`}>{phase.name}</div>
                <div className="text-xs text-[#8b95aa] italic leading-[1.65] mb-3.5">{phase.quote}</div>
                <span className={`font-mono text-[13px] font-semibold px-2.5 py-1 rounded-md inline-block ${c.pnl}`}>
                  {phase.pnl}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
