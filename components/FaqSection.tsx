"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE } from "@/lib/motion";

const faqs = [
  {
    q: "What is Edgecipline?",
    a: "Edgecipline is an AI-powered trading journal, discipline coach, and gamified improvement system. Upload a screenshot of your trade and the AI automatically extracts the details, builds your Trading DNA profile, and reveals your emotional patterns, execution mistakes, and behavioral blind spots.",
  },
  {
    q: "How does the AI screenshot extraction work?",
    a: "Take a screenshot of your trade terminal after any trade. Edgecipline's AI reads it to extract pair, direction, entry, exit, P&L, lot size, and time — automatically. No manual entry, no spreadsheets. Just screenshot and move on.",
  },
  {
    q: "What is Trading DNA?",
    a: "Trading DNA is your AI-generated behavioral fingerprint. It analyzes your session, mood, setup, and instrument data to show exactly which conditions produce your best results — and which ones you should avoid.",
  },
  {
    q: "What are Missions, Streaks, and the Morning Mentor?",
    a: "Missions are AI-recommended challenges that target your specific weaknesses. Streaks reward consistent journaling day after day. The Morning Mentor sends a personalized AI message every morning based on your real trading data.",
  },
  {
    q: "Does Edgecipline support Forex trading, or just Indian markets?",
    a: "Both. Edgecipline has a dedicated Forex mode for MT4, MT5, and cTrader traders, plus an Indian Market mode for NIFTY, BANKNIFTY, options, and equity trades from Zerodha, Upstox, Angel One, and more.",
  },
  {
    q: "What makes Edgecipline different from other trading journals?",
    a: "Most trading journals only track P&L. Edgecipline detects emotional leakage and revenge trading, puts a real dollar figure on the cost of tilt, and keeps you disciplined with missions, streaks, and daily AI coaching — not generic tips.",
  },
  {
    q: "How much does Edgecipline cost?",
    a: "Three plans: Standard (₹349/month), Professional (₹899 for 3 months, ~₹9.99/day), and Ultimate (₹1,499 for 6 months, ~₹8.33/day). One bad trade costs more than a year of Edgecipline.",
  },
  {
    q: "Is there an Android app?",
    a: "Yes. Edgecipline ships as a native Android app with screenshot upload from your camera or gallery, push notifications for streaks and the morning mentor, and your full journal on the go.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32 px-5 md:px-9" aria-label="Frequently asked questions">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-[rgba(0,255,178,0.3)]" />
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#8b95aa]">FAQ</span>
            <div className="w-8 h-px bg-[rgba(0,255,178,0.3)]" />
          </div>
          <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold leading-tight tracking-tight text-white">
            Common questions
          </h2>
        </motion.div>

        <div className="flex flex-col gap-0 border-t border-white/[0.06]">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: EASE }}
              className="border-b border-white/[0.06]"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                aria-expanded={open === i}
              >
                <span className="text-[15px] font-semibold text-white/85 group-hover:text-white transition-colors duration-200 leading-snug">
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full border border-white/[0.12] flex items-center justify-center font-mono text-sm text-[#8b95aa] group-hover:border-[rgba(0,255,178,0.4)] group-hover:text-[#00ffb2] transition-all duration-200 ${open === i ? "rotate-45 border-[rgba(0,255,178,0.4)] text-[#00ffb2]" : ""}`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <p className="text-[14px] text-[#8b95aa] leading-[1.8] pb-5 pr-10">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
