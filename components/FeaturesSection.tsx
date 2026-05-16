"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { EASE } from "@/lib/motion";

const setupBars = [
  { label: "BO", pct: 82, color: "green", val: "82%" },
  { label: "PDH", pct: 67, color: "green", val: "67%" },
  { label: "VWAP", pct: 48, color: "amber", val: "48%" },
  { label: "Rev", pct: 23, color: "red", val: "23%" },
];

const emotions = [
  { label: "😨 Fear", cls: "bg-[rgba(0,120,255,0.1)] border-[rgba(0,120,255,0.3)] text-[#5aadff]" },
  { label: "⚡ FOMO", cls: "bg-[rgba(255,200,0,0.1)] border-[rgba(255,200,0,0.3)] text-[#ffc800]" },
  { label: "🔥 Revenge", cls: "bg-[rgba(255,77,77,0.1)] border-[rgba(255,77,77,0.3)] text-[#ff8a8a]" },
  { label: "✅ In-zone", cls: "bg-[rgba(0,255,178,0.1)] border-[rgba(0,255,178,0.3)] text-[#00ffb2]" },
  { label: "😤 Frustrated", cls: "bg-[rgba(255,100,0,0.1)] border-[rgba(255,100,0,0.3)] text-[#ff9a5c]" },
  { label: "💜 Greed", cls: "bg-[rgba(180,0,255,0.1)] border-[rgba(180,0,255,0.3)] text-[#c97aff]" },
];

const cardBase = "relative p-7 rounded-3xl bg-white/[0.02] border border-white/[0.07] hover:border-[rgba(0,255,178,0.25)] transition-colors duration-400 overflow-hidden group";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-28 md:py-36 px-5 md:px-9">
      <div className="max-w-5xl mx-auto">
        <SectionLabel chapter="Chapter 05" label="What We're Building" />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-[clamp(30px,5vw,58px)] font-extrabold leading-[1.1] tracking-tight text-white mb-14"
        >
          Not a journal.<br />
          <em className="not-italic text-[#00ffb2]">A mirror for traders.</em>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr] gap-4">
          {/* Large card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="relative md:row-span-2 p-8 rounded-3xl bg-[rgba(0,255,178,0.04)] border border-[rgba(0,255,178,0.15)] hover:border-[rgba(0,255,178,0.3)] transition-colors duration-400 overflow-hidden group"
          >
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,255,178,0.06),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
            <div className="w-11 h-11 rounded-xl bg-[rgba(0,255,178,0.08)] border border-[rgba(0,255,178,0.15)] flex items-center justify-center text-xl mb-5">📸</div>
            <h3 className="text-xl font-bold text-white mb-3 leading-tight">Screenshot. That&apos;s it.</h3>
            <p className="text-[13px] text-[#8b95aa] leading-[1.8] mb-7">
              Took a trade? Screenshot your terminal. Edgeclipine&apos;s AI reads every detail — pair, direction, entry, exit, P&amp;L, lot size, time of day. No manual entry. No spreadsheets. No friction.
              <br /><br />We removed every excuse not to journal.
            </p>
            <div className="rounded-xl bg-black/30 border border-white/[0.06] p-4">
              <div className="flex justify-between items-center mb-3.5 pb-2.5 border-b border-white/[0.05]">
                <div className="flex gap-1.5">
                  {["#ff5f57","#febc2e","#28c840"].map(c => <span key={c} className="w-2 h-2 rounded-full block" style={{background: c}} />)}
                </div>
                <span className="font-mono text-[8px] text-[#8b95aa]">app.edgeclipine.com</span>
              </div>
              <div className="grid grid-cols-3 gap-2.5 mb-3">
                {[{l:"Win Rate",v:"71.3%",g:true},{l:"Avg RR",v:"2.4R",g:false},{l:"Net P&L",v:"+₹14.8k",g:true}].map(m => (
                  <div key={m.l}>
                    <div className="font-mono text-[9px] text-[#8b95aa] uppercase tracking-[0.08em] mb-1">{m.l}</div>
                    <div className={`font-mono text-base font-medium ${m.g ? "text-[#00ffb2]" : "text-white"}`}>{m.v}</div>
                  </div>
                ))}
              </div>
              <svg className="w-full h-10" viewBox="0 0 300 40" preserveAspectRatio="none">
                <defs><linearGradient id="fg2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#00FFB2" stopOpacity="0.3"/><stop offset="100%" stopColor="#00FFB2" stopOpacity="0"/></linearGradient></defs>
                <path d="M0,35 Q40,30 70,22 T140,18 T200,8 T280,2 L300,0 L300,40 L0,40Z" fill="url(#fg2)"/>
                <path d="M0,35 Q40,30 70,22 T140,18 T200,8 T280,2" fill="none" stroke="#00FFB2" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="absolute right-6 bottom-4 font-mono text-[80px] font-light text-white/[0.04] leading-none tracking-[-0.05em] pointer-events-none select-none">01</span>
          </motion.div>

          {/* Card 02 */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2, ease: EASE }} className={cardBase}>
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,255,178,0.04),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <div className="w-11 h-11 rounded-xl bg-[rgba(0,255,178,0.08)] border border-[rgba(0,255,178,0.15)] flex items-center justify-center text-xl mb-5">🧠</div>
            <h3 className="text-xl font-bold text-white mb-2">AI Coach That Knows You</h3>
            <p className="text-[13px] text-[#8b95aa] leading-[1.8] mb-4">Personalized weekly reports — not generic tips.</p>
            <div className="p-3.5 bg-[rgba(0,255,178,0.04)] border border-[rgba(0,255,178,0.12)] rounded-xl text-[12px] leading-[1.7] text-white/50">
              <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#00ffb2] mb-2">🤖 Weekly Insight · Mon 9:00 AM</div>
              Your <strong className="text-[rgba(0,255,178,0.85)]">Friday P&amp;L is −₹8,400</strong> avg. You overtrade after lunch. Best window: <strong className="text-[rgba(0,255,178,0.85)]">9:15–11:00 AM</strong>.
            </div>
            <span className="absolute right-5 bottom-4 font-mono text-[80px] font-light text-white/[0.04] leading-none tracking-[-0.05em] pointer-events-none select-none">02</span>
          </motion.div>

          {/* Card 03 */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3, ease: EASE }} className={cardBase}>
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,255,178,0.04),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <div className="w-11 h-11 rounded-xl bg-[rgba(0,255,178,0.08)] border border-[rgba(0,255,178,0.15)] flex items-center justify-center text-xl mb-5">👁</div>
            <h3 className="text-xl font-bold text-white mb-2">See Your Blind Spots</h3>
            <p className="text-[13px] text-[#8b95aa] leading-[1.8] mb-4">Tag every trade with your mental state. See the pattern.</p>
            <div className="flex flex-wrap gap-1.5">
              {emotions.map(e => (
                <span key={e.label} className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border ${e.cls}`}>{e.label}</span>
              ))}
            </div>
            <span className="absolute right-5 bottom-4 font-mono text-[80px] font-light text-white/[0.04] leading-none tracking-[-0.05em] pointer-events-none select-none">03</span>
          </motion.div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {/* Card 04 */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1, ease: EASE }} className={cardBase}>
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,255,178,0.04),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <div className="w-11 h-11 rounded-xl bg-[rgba(0,255,178,0.08)] border border-[rgba(0,255,178,0.15)] flex items-center justify-center text-xl mb-5">📈</div>
            <h3 className="text-xl font-bold text-white mb-2">Setup Performance</h3>
            <p className="text-[13px] text-[#8b95aa] leading-[1.8] mb-4">Which setup actually makes you money?</p>
            <div className="flex flex-col gap-2">
              {setupBars.map(b => (
                <div key={b.label} className="flex items-center gap-2">
                  <span className="font-mono text-[9px] text-[#8b95aa] w-10 uppercase tracking-[0.06em]">{b.label}</span>
                  <div className="flex-1 h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${b.color === "green" ? "bg-[#00ffb2]" : b.color === "amber" ? "bg-[#f5a623]" : "bg-[#ff4d4d]"}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${b.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: EASE }}
                    />
                  </div>
                  <span className={`font-mono text-[10px] w-8 text-right ${b.color === "green" ? "text-[#00ffb2]" : b.color === "amber" ? "text-[#f5a623]" : "text-[#ff4d4d]"}`}>{b.val}</span>
                </div>
              ))}
            </div>
            <span className="absolute right-5 bottom-4 font-mono text-[80px] font-light text-white/[0.04] leading-none tracking-[-0.05em] pointer-events-none select-none">04</span>
          </motion.div>

          {/* Card 05 */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2, ease: EASE }} className={cardBase}>
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,255,178,0.04),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <div className="w-11 h-11 rounded-xl bg-[rgba(0,255,178,0.08)] border border-[rgba(0,255,178,0.15)] flex items-center justify-center text-xl mb-5">🔒</div>
            <h3 className="text-xl font-bold text-white mb-2">Trade History, Forever</h3>
            <p className="text-[13px] text-[#8b95aa] leading-[1.8] mb-4">Every screenshot. Every AI insight. Compounding over time.</p>
            <div className="p-4 bg-[rgba(0,255,178,0.04)] border border-[rgba(0,255,178,0.12)] rounded-xl text-center">
              <div className="text-4xl mb-2" style={{ filter: "drop-shadow(0 0 16px rgba(0,255,178,0.4))" }}>🗄️</div>
              <div className="font-mono text-[10px] text-[#8b95aa] tracking-[0.1em]">247 trades · 14 months · secured</div>
            </div>
            <span className="absolute right-5 bottom-4 font-mono text-[80px] font-light text-white/[0.04] leading-none tracking-[-0.05em] pointer-events-none select-none">05</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
