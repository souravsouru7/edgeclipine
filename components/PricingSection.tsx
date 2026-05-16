"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionLabel from "./SectionLabel";
import { EASE } from "@/lib/motion";

const plans = [
  {
    name: "Standard",
    price: "₹149",
    period: "per month",
    badge: null,
    savings: null,
    featured: false,
    features: ["Unlimited trade journals", "AI screenshot extraction", "Standard analytics dashboard", "Email support"],
  },
  {
    name: "Professional",
    price: "₹249",
    period: "3 months · ~₹2.76/day",
    badge: "Most Popular",
    savings: "Save 40% vs monthly",
    featured: true,
    features: ["Everything in Standard", "AI Coach weekly reports", "Setup & psychology tagging", "Priority support"],
  },
  {
    name: "Ultimate",
    price: "₹449",
    period: "6 months · ~₹2.47/day",
    badge: "Best Value",
    savings: null,
    featured: false,
    features: ["Everything in Professional", "Lifetime trade backup", "Custom strategy slots", "Early beta access"],
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-28 md:py-36 px-5 md:px-9">
      <div className="max-w-5xl mx-auto">
        <SectionLabel chapter="Chapter 07" label="Simple Pricing" />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-[clamp(30px,5vw,58px)] font-extrabold leading-[1.1] tracking-tight text-white mb-4"
        >
          Invest in your<br />
          <em className="not-italic text-[#00ffb2]">discipline.</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          className="text-[15px] text-[#8b95aa] leading-relaxed max-w-md mb-16"
        >
          One bad trade costs more than a year of Edgeclipine. Choose the timeframe that fits your journey.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              whileHover={{ y: -5 }}
              className={`relative rounded-3xl p-9 overflow-hidden transition-all duration-300 ${
                plan.featured
                  ? "bg-[rgba(0,255,178,0.04)] border border-[rgba(0,255,178,0.3)] animate-plan-glow"
                  : "bg-white/[0.02] border border-white/[0.07] hover:border-white/[0.15]"
              }`}
            >
              {plan.badge && (
                <div className={`absolute -top-px right-6 font-mono text-[11px] font-bold tracking-[0.12em] uppercase px-2.5 py-1.5 rounded-b-lg ${
                  plan.featured ? "bg-[#00ffb2] text-[#060910]" : "bg-white/[0.08] text-white/50"
                }`}>
                  {plan.badge}
                </div>
              )}

              <div className="font-bold text-[11px] uppercase tracking-[0.2em] text-[#8b95aa] mb-2">{plan.name}</div>
              <div className={`font-mono text-[44px] font-light leading-none tracking-tight mb-1.5 ${plan.featured ? "text-[#00ffb2]" : "text-white"}`}>
                {plan.price}
              </div>
              <div className="text-xs text-[#8b95aa] mb-3">{plan.period}</div>
              {plan.savings ? (
                <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-[#00ffb2] mb-6">{plan.savings}</div>
              ) : <div className="mb-6" />}

              <ul className="flex flex-col gap-2.5 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-[13px] text-white/70 leading-[1.5]">
                    <span className="w-4 h-px bg-[rgba(0,255,178,0.3)] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="#cta"
                className={`block w-full text-center font-bold text-[13px] uppercase tracking-[0.1em] py-3.5 rounded-xl transition-colors duration-200 ${
                  plan.featured
                    ? "bg-[#00ffb2] hover:bg-[#00e09e] text-[#060910]"
                    : "bg-white/[0.06] hover:bg-white/[0.1] text-white/70 hover:text-white"
                }`}
              >
                Join Waitlist →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
