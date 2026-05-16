"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { EASE } from "@/lib/motion";

const beliefs = [
  { emoji: "🎯", title: "Discipline Creates Edge", sub: "Not indicators. Not strategies. You." },
  { emoji: "📊", title: "Data Over Feelings", sub: "Your gut lies. Numbers don't." },
  { emoji: "🪞", title: "Markets = Mirror", sub: "Most traders look away. Don't be most traders." },
  { emoji: "⚡", title: "Small Edge Beats Perfect", sub: "Consistent 55% win rate > brilliant but emotional." },
  { emoji: "🔁", title: "Self-Knowledge Compounds", sub: "Every logged trade makes you sharper. Start today." },
  { emoji: "🏆", title: "Built by Traders", sub: "We lost money the same way you are. That's why this exists." },
];

export default function BeliefsSection() {
  return (
    <section id="beliefs" className="py-28 md:py-36 px-5 md:px-9 bg-[#04060a] text-center">
      <div className="max-w-3xl mx-auto">
        <SectionLabel chapter="Chapter 06" label="Why This Exists" center />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-[clamp(30px,5vw,56px)] font-extrabold leading-[1.1] tracking-tight text-white mb-16"
        >
          Winners study<br />
          <em className="not-italic text-[#f5a623]">themselves</em><br />
          as hard as charts.
        </motion.h2>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3.5">
        {beliefs.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.07, ease: EASE }}
            whileHover={{ y: -4 }}
            className="p-7 rounded-2xl bg-white/[0.02] border border-white/[0.07] text-center transition-colors duration-300 cursor-default hover:border-[rgba(0,255,178,0.3)] hover:bg-[rgba(0,255,178,0.03)]"
          >
            <span className="text-[38px] block mb-3.5 leading-none">{b.emoji}</span>
            <div className="text-[13px] font-bold text-white leading-tight mb-1.5">{b.title}</div>
            <div className="text-[11px] text-[#8b95aa] leading-[1.6]">{b.sub}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
