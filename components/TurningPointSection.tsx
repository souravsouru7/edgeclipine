"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { EASE } from "@/lib/motion";

const insights = [
  {
    emoji: "🔥",
    title: "Emotional Leakage",
    impact: "3× bigger loss",
    desc: "After a red trade, your next trade loses 3× more on average.",
    color: "red",
    bars: [30, 55, 80, 95, 70, 60, 85],
  },
  {
    emoji: "⏰",
    title: "Bad Time Patterns",
    impact: "Fridays = −68%",
    desc: "Your worst sessions are on the same days every week. Invisible without data.",
    color: "amber",
    bars: [40, 25, 75, 90, 35, 50, 95],
  },
  {
    emoji: "📊",
    title: "Setup Delusion",
    impact: "Your fav = worst",
    desc: "The setup you think is best — data shows it's your worst performer.",
    color: "green",
    bars: [65, 40, 20, 55, 75, 30, 60],
  },
  {
    emoji: "🔁",
    title: "The Revenge Loop",
    impact: "3 trades = broken",
    desc: "Every week, 3 trades after a stop-out — you've broken all your rules.",
    color: "red",
    bars: [10, 30, 20, 90, 15, 25, 85],
  },
];

const barColor: Record<string, string> = {
  red: "bg-[rgba(255,77,77,0.3)]",
  amber: "bg-[rgba(245,166,35,0.3)]",
  green: "bg-[rgba(0,255,178,0.2)]",
};

const impactColor: Record<string, string> = {
  red: "text-[#ff4d4d]",
  amber: "text-[#f5a623]",
  green: "text-[#00ffb2]",
};

const hoverBorder: Record<string, string> = {
  red: "hover:border-[rgba(255,77,77,0.35)]",
  amber: "hover:border-[rgba(245,166,35,0.35)]",
  green: "hover:border-[rgba(0,255,178,0.35)]",
};

export default function TurningPointSection() {
  return (
    <section id="realization" className="py-28 md:py-36 px-5 md:px-9 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Big stat */}
          <div>
            <SectionLabel chapter="Chapter 03" label="The Realization" />
            <div className="relative inline-flex items-center justify-center w-44 h-44 mb-6">
              <svg viewBox="0 0 120 120" className="absolute inset-0 w-full h-full" aria-hidden="true">
                <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,77,77,0.1)" strokeWidth="7" />
                <motion.circle
                  cx="60" cy="60" r="52"
                  fill="none" stroke="#ff4d4d" strokeWidth="7" strokeLinecap="round"
                  style={{ rotate: "-90deg", transformOrigin: "center", filter: "drop-shadow(0 0 8px rgba(255,77,77,0.6))" }}
                  strokeDasharray="326.73"
                  initial={{ strokeDashoffset: 326.73 }}
                  whileInView={{ strokeDashoffset: 32.67 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.2, ease: EASE }}
                />
              </svg>
              <div className="relative z-10 text-center">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="text-[clamp(52px,9vw,72px)] font-light text-white leading-none tracking-tight font-mono"
                >
                  90%
                </motion.span>
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[#8b95aa] block mt-1">traders fail</span>
              </div>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE }}
              className="text-[clamp(28px,4vw,46px)] font-extrabold leading-[1.2] tracking-tight text-white mb-5"
            >
              It&apos;s not the charts.<br />
              <em className="not-italic text-[#ff4d4d]">It&apos;s always been you.</em>
            </motion.h2>
            <p className="text-sm leading-relaxed text-[#8b95aa]">
              Markets are not the problem.<br />
              <strong className="text-white/65">You are unpredictable to yourself.</strong>
            </p>
          </div>

          {/* Right: Insight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {insights.map((ins, i) => (
              <motion.div
                key={ins.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                whileHover={{ y: -4 }}
                className={`p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] transition-colors duration-300 cursor-default ${hoverBorder[ins.color]}`}
              >
                <span className="text-4xl block mb-3 leading-none">{ins.emoji}</span>
                <div className="text-sm font-bold text-white mb-1.5">{ins.title}</div>
                <div className={`font-mono text-xl font-semibold mb-2.5 ${impactColor[ins.color]}`}>{ins.impact}</div>
                <div className="text-xs text-[#8b95aa] leading-[1.65] mb-2.5">{ins.desc}</div>
                <div className="flex items-end gap-1 h-5">
                  {ins.bars.map((h, j) => (
                    <motion.div
                      key={j}
                      className={`flex-1 rounded-[2px_2px_0_0] ${barColor[ins.color]}`}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2 + j * 0.05, ease: EASE }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
