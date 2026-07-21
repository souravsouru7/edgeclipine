"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { EASE } from "@/lib/motion";

const FAQ_DATA = [
  {
    category: "About Edgecipline",
    questions: [
      {
        q: "What is Edgecipline?",
        a: "Edgecipline is an AI-powered trading journal, discipline coach, and gamified improvement system — not just a P&L tracker. Upload a screenshot of your trade and the AI automatically extracts the details, builds your Trading DNA profile, and reveals your emotional patterns, execution mistakes, and behavioral blind spots over time.",
      },
      {
        q: "How is Edgecipline spelled? Is it a typo?",
        a: "Edgecipline is spelled E-D-G-E-C-I-P-L-I-N-E. It's an intentional brand name — a portmanteau of 'Edge' (the competitive advantage traders seek) and 'discipline' (the consistent behavior required to maintain it). Not a misspelling of discipline.",
      },
      {
        q: "Who is Edgecipline built for?",
        a: "Edgecipline is built for retail Forex traders using MT4, MT5, or cTrader, and Indian retail traders on NIFTY, BANKNIFTY, options, and equity through brokers like Zerodha, Upstox, Angel One, Dhan, and Groww — anyone tired of losing money to emotional decisions and inconsistent execution.",
      },
      {
        q: "When will Edgecipline launch?",
        a: "We're currently in private early access with 847+ traders on the waitlist. Join the waitlist to get priority access when we launch publicly and to lock in early access pricing.",
      },
      {
        q: "Is there a mobile app?",
        a: "Yes. Edgecipline ships as a native Android app with camera/gallery screenshot upload, push notifications for streaks and the morning mentor, and your full journal, analytics, and Trading DNA on the go.",
      },
    ],
  },
  {
    category: "AI & Features",
    questions: [
      {
        q: "How does AI screenshot extraction work?",
        a: "Take a screenshot of your trade terminal after any trade. Edgecipline's AI reads the screenshot to extract: trading pair, direction (long/short), entry price, exit price, P&L, lot size, and time. No manual data entry required.",
      },
      {
        q: "What brokers and platforms does Edgecipline support?",
        a: "Edgecipline auto-detects 20+ Forex and Indian broker platforms from your screenshot — MT4, MT5, cTrader, Zerodha, Upstox, Angel One, Dhan, Groww, Fyers, 5paisa, ICICI Direct, Kotak Securities, Paytm Money, and more.",
      },
      {
        q: "What is Trading DNA?",
        a: "Trading DNA is your behavioral fingerprint — a comprehensive profile of your unique trading patterns, strengths, weaknesses, and psychological tendencies, built from your actual data. It also powers a Pattern Detection Engine that finds high-edge combinations like 'London session + confident mood + breakout setup.'",
      },
      {
        q: "What is the Psychology Cost Calculator?",
        a: "It groups your trades by emotion and mistake tag — revenge, FOMO, greed, no stop loss, chased price — and calculates the exact P&L cost of each behavior, so you see a real number instead of a vague feeling.",
      },
      {
        q: "What are Missions, Streaks, and the Morning Mentor?",
        a: "Missions are AI-recommended challenges targeting your specific weaknesses, like avoiding emotional trades for 7 days. Streaks reward consistent daily journaling. The Morning Mentor sends a personalized AI message every morning at 6am based on your real trading data.",
      },
      {
        q: "What behavioral patterns does Edgecipline detect?",
        a: "Edgecipline detects revenge trading patterns, FOMO entry behavior, tilt spirals, time-of-day performance changes, size escalation after win streaks, rule adherence breakdowns, setup delusion, and emotional state correlations with outcomes.",
      },
      {
        q: "What are the weekly AI coaching reports?",
        a: "Every Sunday, Edgecipline generates a personalized report based on your actual trade data from the week: what worked, what didn't, your biggest behavioral pattern, win rate by setup, and one specific improvement focus for next week. Not generic tips — specific to your data.",
      },
    ],
  },
  {
    category: "Forex & Indian Markets",
    questions: [
      {
        q: "Does Edgecipline support Forex trading (MT4/MT5/cTrader)?",
        a: "Yes. Edgecipline has a dedicated Forex mode built for MT4, MT5, cTrader, and similar platforms, with its own journal, analytics, and screenshot extraction tuned for pip-based currency pairs.",
      },
      {
        q: "Is Edgecipline suitable for NIFTY and BANKNIFTY traders?",
        a: "Yes — Edgecipline has a dedicated Indian Market mode covering NIFTY, BANKNIFTY, options, futures, and equity trades, with pricing in INR and insights tailored for Indian market hours.",
      },
      {
        q: "Does it work for options traders?",
        a: "Yes. Indian Market mode captures F&O-specific fields — strike price, option type (CE/PE), expiry date, and lot size — and tracks behavioral patterns unique to options, like theta decay denial and expiry-day FOMO.",
      },
    ],
  },
  {
    category: "Pricing & Access",
    questions: [
      {
        q: "How much does Edgecipline cost?",
        a: "Three plans: Standard at ₹149/month, Professional at ₹249 for 3 months (~₹2.76/day), and Ultimate at ₹449 for 6 months (~₹2.47/day). One bad trade costs more than a year of Edgecipline.",
      },
      {
        q: "Is the waitlist free?",
        a: "Yes, completely free. You join, you wait, you get priority access when we launch. No credit card required.",
      },
      {
        q: "What do waitlist members get?",
        a: "Priority access before the general public, potential founding pricing discounts, early beta access to new features, and the ability to shape the product through feedback.",
      },
      {
        q: "Is there a free trial?",
        a: "Early access members will receive an extended trial period when we launch. Join the waitlist to be first in line.",
      },
    ],
  },
  {
    category: "Privacy & Data",
    questions: [
      {
        q: "How is my trade data stored?",
        a: "Your trade data is stored securely and encrypted. We never share your personal trading information with third parties. Full details are in our Privacy Policy.",
      },
      {
        q: "Does Edgecipline have access to my broker account?",
        a: "No. Edgecipline never connects to your broker. You upload screenshots — we never need your login credentials or direct broker access. Your account security is never at risk.",
      },
      {
        q: "What data is collected when I join the waitlist?",
        a: "When you join the waitlist, we collect your email, phone number, and trading experience level — only to notify you when we launch. See our Privacy Policy for full details.",
      },
    ],
  },
];

interface ItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ question, answer, isOpen, onToggle }: ItemProps) {
  return (
    <div className="border-b border-white/[0.06]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-[14px] font-semibold text-white/85 group-hover:text-white transition-colors duration-200 leading-snug">
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full border border-white/[0.12] flex items-center justify-center font-mono text-sm text-[#8b95aa] group-hover:border-[rgba(0,255,178,0.4)] group-hover:text-[#00ffb2] transition-all duration-200 ${
            isOpen ? "rotate-45 border-[rgba(0,255,178,0.4)] text-[#00ffb2]" : ""
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="text-[13px] text-[#8b95aa] leading-[1.85] pb-5 pr-10">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQClient() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const toggle = (key: string) => setOpenKey(openKey === key ? null : key);

  return (
    <>
      <Navbar />
      <main>
        <section className="pt-36 pb-16 px-5 md:px-9 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-6 h-px bg-[rgba(0,255,178,0.4)]" />
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8b95aa]">FAQ</span>
              <div className="w-6 h-px bg-[rgba(0,255,178,0.4)]" />
            </div>
            <h1 className="text-[clamp(30px,5vw,54px)] font-extrabold leading-[1.08] tracking-tight text-white mb-5">
              Everything you{" "}
              <em className="not-italic text-[#00ffb2]">want to know</em>
            </h1>
            <p className="text-[16px] text-[#8b95aa] leading-relaxed">
              Questions about Edgecipline, Trading DNA, gamified missions & streaks, pricing, and
              how it works for both Forex and Indian market traders.
            </p>
          </div>
        </section>

        <section className="pb-20 px-5 md:px-9 border-t border-white/[0.05]">
          <div className="max-w-2xl mx-auto pt-14 flex flex-col gap-14">
            {FAQ_DATA.map(({ category, questions }) => (
              <div key={category}>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8b95aa] mb-6 flex items-center gap-3">
                  <span>{category}</span>
                  <div className="flex-1 h-px bg-white/[0.06]" />
                </div>
                <div className="border-t border-white/[0.06]">
                  {questions.map(({ q, a }) => {
                    const key = `${category}-${q}`;
                    return (
                      <AccordionItem
                        key={key}
                        question={q}
                        answer={a}
                        isOpen={openKey === key}
                        onToggle={() => toggle(key)}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-16 px-5 md:px-9 border-t border-white/[0.05]">
          <div className="max-w-2xl mx-auto pt-16 text-center">
            <h2 className="text-[22px] font-bold text-white mb-3">Still have questions?</h2>
            <p className="text-[14px] text-[#8b95aa] mb-6">
              Reach out to the team — we respond to every message.
            </p>
            <Link
              href="/contact"
              className="inline-block border border-white/[0.12] hover:border-[rgba(0,255,178,0.4)] text-white/70 hover:text-white font-semibold text-[13px] px-6 py-3 rounded-full transition-all duration-200"
            >
              Contact us →
            </Link>
          </div>
        </section>

        <CTABanner
          title="Ready to find your edge?"
          description="Join the waitlist. Get priority access. Lock in founding pricing before public launch."
        />
      </main>
      <Footer />
    </>
  );
}
