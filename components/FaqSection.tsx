"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE } from "@/lib/motion";

const faqs = [
  {
    q: "What is Edgecipline?",
    a: "Edgecipline is an AI-powered trading journal that tracks your trading behavior, not just your P&L. Upload a screenshot of your trade and the AI automatically extracts the details and reveals your emotional patterns, execution mistakes, and behavioral blind spots.",
  },
  {
    q: "How does the AI screenshot extraction work?",
    a: "Take a screenshot of your trade terminal after any trade. Edgecipline's AI reads it to extract pair, direction, entry, exit, P&L, lot size, and time — automatically. No manual entry, no spreadsheets. Just screenshot and move on.",
  },
  {
    q: "What makes Edgecipline different from other trading journals?",
    a: "Most trading journals only track P&L. Edgecipline is the first that focuses on behavior — detecting emotional leakage, revenge trading patterns, bad time-of-day habits, and setup delusions. It delivers personalized weekly AI coaching reports, not generic tips.",
  },
  {
    q: "Is it suitable for Indian market traders (NIFTY, BANKNIFTY, options)?",
    a: "Yes. Edgecipline is built with Indian traders in mind. It supports NIFTY, BANKNIFTY, options, futures, and equity trades, with pricing in INR and insights tailored for Indian market hours.",
  },
  {
    q: "How much does Edgecipline cost?",
    a: "Three plans: Standard (₹149/month), Professional (₹249 for 3 months, ~₹2.76/day), and Ultimate (₹449 for 6 months, ~₹2.47/day). One bad trade costs more than a year of Edgecipline.",
  },
  {
    q: "When will Edgecipline launch?",
    a: "We're currently in private early access. Join the waitlist to get priority access, help shape the product, and lock in early pricing before public launch.",
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
