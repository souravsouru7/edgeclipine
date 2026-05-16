"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { EASE } from "@/lib/motion";

const messages = [
  { side: "me", time: "11:42 PM", text: "Bhai I think I finally figured out why we keep losing. It's not the strategy. It's us." },
  { side: "friend", time: "11:43 PM", text: "What do you mean? I've tried like 6 different strategies this year" },
  { side: "me", time: "11:44 PM", text: "Exactly. And I bet they all worked — until your emotions didn't. The data is right there, we just can't see it clearly." },
  { side: "friend", time: "11:46 PM", text: "...ok that actually makes sense. So what do we do about it?" },
  { side: "me", time: "11:47 PM", text: "We build it. A journal that actually shows you yourself. If 90% of traders face this — why isn't there a tool built for this?" },
  { side: "friend", time: "11:48 PM", text: "I'm in. Let's build it. 🚀", highlight: true },
];

const stats = [
  { num: "90", unit: "%", accent: "red", label: "Traders who quit within 3 years" },
  { num: "2", unit: "", accent: "green", label: "Founders who felt this problem personally" },
  { num: "1", unit: "×", accent: "green", label: "Tool that finally shows you yourself" },
];

export default function DecisionSection() {
  return (
    <section id="decision" className="py-28 md:py-36 px-5 md:px-9 bg-[#040609] overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <div className="absolute left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-[rgba(0,255,178,0.04)] blur-[90px] pointer-events-none" aria-hidden="true" />

        <div className="relative z-10">
          <SectionLabel chapter="Chapter 04" label="The Decision" center />

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-[clamp(32px,5.5vw,66px)] font-extrabold text-center leading-[1.1] tracking-tight text-white mb-12"
          >
            If I had this problem,<br />
            <em className="not-italic text-[#00ffb2]">so did everyone else.</em>
          </motion.h2>

          {/* Chat */}
          <div className="flex flex-col gap-3 mb-14">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: EASE }}
                className={`flex flex-col ${msg.side === "me" ? "items-end" : "items-start"}`}
              >
                <div className={`font-mono text-[11px] tracking-[0.14em] text-[#8b95aa] uppercase mb-1 ${msg.side === "me" ? "text-right" : ""}`}>
                  {msg.side === "me" ? "Me" : "Friend"} · {msg.time}
                </div>
                <div
                  className={`max-w-[72%] px-4 py-3.5 text-sm leading-[1.7] font-medium rounded-[18px] ${
                    msg.side === "me"
                      ? "bg-[rgba(0,255,178,0.1)] border border-[rgba(0,255,178,0.2)] text-[rgba(0,255,178,0.9)] rounded-br-[4px]"
                      : (msg as {highlight?: boolean}).highlight
                      ? "bg-[rgba(0,255,178,0.06)] border border-[rgba(0,255,178,0.15)] text-[rgba(0,255,178,0.8)] rounded-bl-[4px]"
                      : "bg-white/[0.04] border border-white/[0.07] text-white/65 rounded-bl-[4px]"
                  }`}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                className="px-5 py-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center"
              >
                <div className="font-mono text-[40px] font-light text-white leading-none tracking-tight mb-2">
                  <span className={s.accent === "red" ? "text-[#ff4d4d]" : "text-[#00ffb2]"}>{s.num}</span>
                  {s.unit && <span className={s.accent === "green" ? "text-[#00ffb2]" : ""}>{s.unit}</span>}
                </div>
                <div className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#8b95aa] leading-relaxed">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
