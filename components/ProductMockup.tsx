"use client";

import { useEffect, useRef } from "react";

export default function ProductMockup() {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      pathRef.current?.classList.add("drawn");
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative animate-float">
      <div className="rounded-2xl overflow-hidden border border-[rgba(0,255,178,0.22)] bg-[#0a0e1a] shadow-[0_24px_80px_rgba(0,0,0,0.6),0_0_60px_rgba(0,255,178,0.07)]">
        {/* Titlebar */}
        <div className="flex items-center gap-2.5 px-4 py-2.5 border-b border-white/[0.05] bg-white/[0.02]">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57] block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e] block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840] block" />
          </div>
          <span className="font-mono text-[10px] text-[#8b95aa] tracking-[0.06em] mx-auto">app.edgeclipine.com</span>
        </div>

        {/* Body */}
        <div className="p-4">
          <div className="flex justify-between items-center mb-3.5">
            <span className="text-[13px] font-bold text-white">Rahul&apos;s Journal</span>
            <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-[#00ffb2] bg-[rgba(0,255,178,0.1)] border border-[rgba(0,255,178,0.25)] px-2 py-1 rounded-full flex items-center gap-1.5 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#00ffb2] before:animate-blink">
              Live
            </span>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-2.5 mb-3.5">
            {[
              { label: "Win Rate", value: "71.3%", green: true },
              { label: "Avg R:R", value: "2.4R", green: false },
              { label: "Net P&L", value: "+₹14.8k", green: true },
            ].map((m) => (
              <div key={m.label} className="bg-white/[0.03] border border-white/[0.06] rounded-[10px] px-2.5 py-2">
                <div className="font-mono text-[9px] text-[#8b95aa] uppercase tracking-[0.1em] mb-1">{m.label}</div>
                <div className={`font-mono text-base font-semibold leading-none ${m.green ? "text-[#00ffb2]" : "text-white"}`}>
                  {m.value}
                </div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <svg className="w-full h-12 block mb-3" viewBox="0 0 280 48" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00FFB2" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#00FFB2" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,44 L35,38 L70,32 L100,34 L130,22 L160,17 L195,10 L225,13 L260,5 L280,2 L280,48 L0,48Z" fill="url(#chartGrad)" />
            <path
              ref={pathRef}
              className="chart-path-draw"
              d="M0,44 L35,38 L70,32 L100,34 L130,22 L160,17 L195,10 L225,13 L260,5 L280,2"
              fill="none"
              stroke="#00FFB2"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* AI Insight */}
          <div className="bg-[rgba(0,255,178,0.05)] border border-[rgba(0,255,178,0.15)] rounded-[10px] px-3 py-2.5 flex gap-2 items-start mb-2.5">
            <span className="text-sm flex-shrink-0">🤖</span>
            <span className="text-[11px] text-white/60 leading-[1.55]">
              You exit winners too early on Fridays —{" "}
              <strong className="text-[rgba(0,255,178,0.9)]">costing ~0.8R/week</strong>
            </span>
          </div>

          {/* Trades */}
          <div className="flex flex-col gap-1.5">
            {[
              { pair: "NIFTY 50", tag: "WIN", pnl: "+₹4,200", win: true },
              { pair: "BANKNIFTY", tag: "LOSS", pnl: "−₹1,100", win: false },
              { pair: "RELIANCE", tag: "WIN", pnl: "+₹2,850", win: true },
            ].map((t) => (
              <div key={t.pair} className="flex justify-between items-center px-2.5 py-1.5 bg-white/[0.02] rounded-[7px] text-[11px]">
                <span className="text-white/70 font-semibold">{t.pair}</span>
                <span className={`font-mono text-[9px] tracking-[0.1em] px-1.5 py-0.5 rounded ${t.win ? "bg-[rgba(0,255,178,0.12)] text-[#00ffb2]" : "bg-[rgba(255,77,77,0.12)] text-[#ff4d4d]"}`}>
                  {t.tag}
                </span>
                <span className={`font-mono font-semibold ${t.win ? "text-[#00ffb2]" : "text-[#ff4d4d]"}`}>{t.pnl}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating tags */}
      <div className="absolute -top-4 -left-4 bg-[rgba(10,14,24,0.95)] border border-white/[0.12] rounded-full px-3.5 py-1.5 text-[11px] font-semibold text-white/80 whitespace-nowrap shadow-[0_8px_24px_rgba(0,0,0,0.4)] animate-[tagFloat1_4s_ease-in-out_infinite]">
        📸 Screenshot → Auto-logged
      </div>
      <div className="absolute top-1/3 -right-6 bg-[rgba(10,14,24,0.95)] border border-white/[0.12] rounded-full px-3.5 py-1.5 text-[11px] font-semibold text-white/80 whitespace-nowrap shadow-[0_8px_24px_rgba(0,0,0,0.4)] animate-[tagFloat2_4.5s_ease-in-out_infinite_0.5s]">
        🧠 AI Insight Ready
      </div>
      <div className="absolute -bottom-4 left-1/4 bg-[rgba(10,14,24,0.95)] border border-[rgba(0,255,178,0.3)] rounded-full px-3.5 py-1.5 text-[11px] font-semibold text-[#00ffb2] whitespace-nowrap shadow-[0_8px_24px_rgba(0,0,0,0.4)] animate-[tagFloat3_3.8s_ease-in-out_infinite_1s]">
        +₹2,400 saved this week
      </div>
    </div>
  );
}
