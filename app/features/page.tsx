import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import PageHero from "@/components/PageHero";

const OG_IMAGE = [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Edgecipline Features" }];

export const metadata: Metadata = {
  title: "Features — AI Discipline Coach, Trading DNA & Gamified Journal | Edgecipline",
  description:
    "Explore every Edgecipline feature: Trading DNA, pattern detection, psychology cost calculator, self-awareness score, missions & streaks, AI coach & morning mentor, AI screenshot extraction, and Forex + Indian market support.",
  alternates: { canonical: "/features" },
  openGraph: {
    url: "https://www.edgecipline.com/features",
    title: "Features — AI Discipline Coach, Trading DNA & Gamified Journal | Edgecipline",
    description:
      "15 features built for disciplined traders — Trading DNA, gamified missions & streaks, daily AI coaching, and AI screenshot extraction for Forex and Indian markets.",
    images: OG_IMAGE,
  },
  twitter: {
    card: "summary_large_image",
    title: "Edgecipline Features — AI Discipline Coach & Trading DNA",
    description:
      "15 features built for disciplined traders — Trading DNA, gamified missions & streaks, daily AI coaching, and AI extraction.",
    images: ["/opengraph-image"],
  },
};

const FEATURES = [
  {
    id: "screenshot",
    number: "01",
    title: "AI Screenshot Extraction",
    tagline: "Screenshot. That's it.",
    problem: "Manual trade entry is the #1 reason traders quit journaling. Spreadsheets, forms, manual typing — all of it kills the habit before it starts.",
    solution: "Take a screenshot of your trade terminal after any trade. A three-layer AI pipeline (Gemini Vision, Google Cloud Vision, and an OCR fallback) reads it automatically — extracting pair, direction, entry, exit, P&L, lot size, time, and more. No typing. No friction.",
    benefits: [
      "Works with 20+ Forex and Indian broker platforms",
      "Extracts single or multiple trades from one screenshot",
      "Supports MT4, MT5, cTrader, NIFTY, BANKNIFTY, options, futures, and equity",
      "No manual data entry — ever",
    ],
    accent: "#00ffb2",
  },
  {
    id: "dual-market",
    number: "02",
    title: "Forex & Indian Market Modes",
    tagline: "Built for two markets, not a generic one.",
    problem: "Most journals are built for one market and bolt everything else on as an afterthought. Forex pip math and Indian F&O fields like strike price, expiry, and lot size need completely different handling.",
    solution: "Edgecipline runs two dedicated modes — Forex (MT4/MT5/cTrader) and Indian Market (NIFTY, BANKNIFTY, options, intraday equity) — each with its own journal, analytics, currency labels, and screenshot extraction tuned to that market's brokers.",
    benefits: [
      "Separate Forex and Indian market journals and analytics",
      "Broker auto-detection from your screenshot",
      "Zerodha, Upstox, Angel One, Dhan, Groww, Fyers, 5paisa, and more",
      "Pips vs. rupees, lots vs. lot size — labels adapt automatically",
    ],
    accent: "#00ffb2",
  },
  {
    id: "journal",
    number: "03",
    title: "Trading Journal",
    tagline: "Your entire trading history, organized.",
    problem: "Most traders have scattered trade records — some on a broker console, some on a spreadsheet, some in chat screenshots. There's no single source of truth.",
    solution: "Edgecipline becomes your single trading history. Every trade, with full context — setup tags, emotional state, rule adherence, and behavioral notes — all searchable and organized.",
    benefits: [
      "Unlimited trade history stored securely",
      "Filter by instrument, setup, emotion, outcome",
      "Attach setup tags and psychology notes",
      "Searchable, exportable, forever yours",
    ],
    accent: "#00ffb2",
  },
  {
    id: "trading-dna",
    number: "04",
    title: "Trading DNA & Pattern Detection",
    tagline: "Discover your repeatable edge.",
    problem: "Every trader has a unique set of conditions where they perform best. Most never find them — they trade every session and setup equally, diluting the edge they actually have.",
    solution: "Trading DNA analyzes your trades by session, mood, setup, and instrument to find exactly when you're at your best. The Pattern Detection Engine goes further, surfacing combinations — like 'London + Confident + Breakout' — that carry a real, repeatable win-rate edge.",
    benefits: [
      "Session, mood, and instrument breakdown of your edge",
      "Combination pattern detection (session + mood + setup)",
      "Shareable public DNA report link",
      "Full history of past DNA profiles as you evolve",
    ],
    accent: "#f5a623",
  },
  {
    id: "psychology",
    number: "05",
    title: "Psychology Cost Calculator",
    tagline: "A real dollar figure for every emotional trade.",
    problem: "You know emotional trading is hurting you. But you can't see the patterns because you don't have the data. 'I trade emotionally sometimes' is not actionable.",
    solution: "Tag each trade with your emotional state: calm, confident, anxious, revenge, FOMO, greed. Edgecipline groups every trade by emotion and mistake tag, then calculates the exact P&L cost of each behavior — down to the rupee or pip.",
    benefits: [
      "Win rate and total cost by emotional trigger",
      "Mistake cost breakdown (no stop loss, chased price, overleveraged)",
      "Detect revenge trading and FOMO patterns automatically",
      "Emotion vs. P&L correlation over time",
    ],
    accent: "#f5a623",
  },
  {
    id: "risk-patterns",
    number: "06",
    title: "Risk Pattern Detection",
    tagline: "Catch tilt spirals before they blow up your account.",
    problem: "A single bad trade isn't a pattern. But three losses in a row every Monday, or sizing up after a win streak — those are dangerous patterns most traders never notice until the damage is done.",
    solution: "Edgecipline scans your trade history for repeated loss clusters, tilt spirals, and size-escalation patterns, then suggests a concrete rule to stop each one before it repeats.",
    benefits: [
      "Tilt spiral detection (trades taken within minutes of a loss)",
      "Day-of-week and time-of-day loss clustering",
      "Size escalation after win-streak detection",
      "Specific rule suggestions for each pattern found",
    ],
    accent: "#f5a623",
  },
  {
    id: "self-awareness",
    number: "07",
    title: "Self-Awareness Score",
    tagline: "How well do you actually know yourself?",
    problem: "Traders who rate themselves highly but trade with poor discipline are the most dangerous kind — they never see the gap between their self-image and their real behavior.",
    solution: "After every trade, you mark whether you'd retake it. Edgecipline compares that self-review to the actual outcome, flagging 'bad process, good luck' wins — the trades most likely to reinforce bad habits.",
    benefits: [
      "Review calibration matrix (self-review vs. actual outcome)",
      "Flags dangerous 'won for the wrong reason' trades",
      "Plan adherence percentage and most-broken rule",
      "Adherence-vs-win-rate correlation",
    ],
    accent: "#00ffb2",
  },
  {
    id: "analytics",
    number: "08",
    title: "Behavior & Performance Analytics",
    tagline: "Every metric that actually matters.",
    problem: "Broker consoles show P&L and basic stats. They don't show win rate by setup, time-of-day performance, drawdown recovery, or how discipline correlates with results.",
    solution: "Edgecipline's analytics dashboard covers every dimension: setup performance, time-of-day win rates, R:R distribution, drawdown analysis, Sharpe ratio, profit factor, and a calendar P&L heatmap — cached for instant load even with years of history.",
    benefits: [
      "Win rate and P&L by setup, session, and instrument",
      "Maximum drawdown and recovery tracking",
      "Calendar P&L heatmap and equity curve",
      "Advanced metrics: Sharpe ratio, profit factor, streaks",
    ],
    accent: "#00ffb2",
  },
  {
    id: "missions",
    number: "09",
    title: "Missions & Streaks",
    tagline: "Gamified discipline you can't ignore.",
    problem: "Knowing what to fix and actually building the habit are two different problems. Most traders know their weaknesses and still don't change their behavior day to day.",
    solution: "Edgecipline's AI recommends specific missions targeting your identified weaknesses — like avoiding emotional trades for 7 days — while a streak system rewards consistent journaling with milestone celebrations and streak-at-risk alerts.",
    benefits: [
      "AI-recommended missions based on your behavior profile",
      "Up to 3 active missions with measurable progress targets",
      "Daily streak tracking with milestone notifications",
      "Streak protector grace period so one missed day doesn't reset you",
    ],
    accent: "#f5a623",
  },
  {
    id: "ai-coach",
    number: "10",
    title: "AI Coach & Morning Mentor",
    tagline: "The coach that knows your actual history.",
    problem: "Generic trading coaches give generic advice. 'Control your emotions.' 'Follow your rules.' This advice is correct and useless without your specific behavioral data.",
    solution: "Edgecipline's AI Coach has access to your full trading history and answers with observation, evidence, and a specific recommended action. Every morning at 6am, the Morning Mentor sends a personalized message referencing your actual streak, mistakes, and mission progress.",
    benefits: [
      "Personalized to your actual trading data, not generic tips",
      "Daily 6am Morning Mentor push notification",
      "Specific, actionable recommendations with expected P&L impact",
      "Full conversation history for continuity",
    ],
    accent: "#00ffb2",
  },
  {
    id: "reports",
    number: "11",
    title: "Weekly AI Reports",
    tagline: "Your personal trading coach, every Sunday.",
    problem: "Even if you journal, you have to review it yourself — and you'll see the patterns you want to see, not the ones that are actually there. Confirmation bias makes self-review unreliable.",
    solution: "Every week, Edgecipline's AI generates a personalized coaching report: what worked, what didn't, your biggest behavioral patterns, and one specific improvement focus for next week.",
    benefits: [
      "Delivered every Sunday, with a daily reminder to review it",
      "Personalized to your actual trade data",
      "One clear improvement focus per week — not a wall of stats",
      "Full report archive to track week-over-week change",
    ],
    accent: "#00ffb2",
  },
  {
    id: "checklists",
    number: "12",
    title: "Setup Checklists",
    tagline: "Rules you can't ignore.",
    problem: "You have trading rules. You break them. Not because you forgot them — because there's no system that forces you to verify them before entering a trade.",
    solution: "Build custom pre-trade checklists for each setup strategy. Before you enter a trade, verify every condition. Every checklist completion is logged, so you can see exactly how rule adherence predicts your outcomes.",
    benefits: [
      "Custom checklist per setup or strategy",
      "Pre-trade rule verification, available on Android from the notification shade",
      "Logged adherence tracking per trade",
      "Correlate rule adherence with win rate",
    ],
    accent: "#f5a623",
  },
  {
    id: "android",
    number: "13",
    title: "Native Android App",
    tagline: "Journal from the phone you already trade on.",
    problem: "Most traders review and log trades from their phone, not a desktop. A mobile-unfriendly journal just doesn't get used.",
    solution: "Edgecipline ships as a native Android app with camera and gallery screenshot upload, push notifications for streaks and the morning mentor, and an interactive checklist notification you can complete without opening the app.",
    benefits: [
      "Native camera/gallery screenshot upload",
      "Push notifications for missions, streaks, and the morning mentor",
      "Full dashboard, journal, analytics, and Trading DNA on mobile",
      "Bottom navigation built for one-handed use",
    ],
    accent: "#00ffb2",
  },
  {
    id: "performance-review",
    number: "14",
    title: "Discipline & Psychology Timeline",
    tagline: "See if you're actually improving.",
    problem: "Most traders don't do structured reviews — and when they do, they only look at P&L. This misses the behavioral dimension that usually improves weeks before the P&L does.",
    solution: "The Psychology Timeline plots your psychology score, discipline percentage, average mood, and monthly P&L on one chart, so you can see discipline improvements translate into better results over time.",
    benefits: [
      "Psychology score, discipline %, and mood trend by month",
      "P&L overlaid to show the lag between behavior and results",
      "Repeated mistakes ranked by frequency and cost",
      "Discipline trend history on a dedicated page",
    ],
    accent: "#00ffb2",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge="Product Features"
          title="Not just a journal —"
          highlight="a discipline coach."
          description="Edgecipline combines AI screenshot extraction, Trading DNA, a psychology cost calculator, gamified missions & streaks, and daily AI coaching into one system built for Forex and Indian market traders."
        />

        {/* Feature grid overview */}
        <section className="pb-16 px-5 md:px-9 border-t border-white/[0.05]">
          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-14">
            {FEATURES.map(({ id, number, title }) => (
              <a
                key={id}
                href={`#${id}`}
                className="group rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-4 hover:border-[rgba(0,255,178,0.25)] hover:bg-[rgba(0,255,178,0.03)] transition-all duration-200"
              >
                <div className="font-mono text-[10px] text-[#8b95aa] mb-1">{number}</div>
                <div className="text-[13px] font-semibold text-white/80 group-hover:text-white transition-colors leading-snug">
                  {title}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Individual feature sections */}
        {FEATURES.map(({ id, number, title, tagline, problem, solution, benefits }, i) => (
          <section
            key={id}
            id={id}
            className="py-20 px-5 md:px-9 border-t border-white/[0.05]"
          >
            <div className="max-w-5xl mx-auto">
              <div
                className={`grid md:grid-cols-2 gap-12 items-start ${
                  i % 2 !== 0 ? "md:[direction:rtl]" : ""
                }`}
              >
                <div className={i % 2 !== 0 ? "md:[direction:ltr]" : ""}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-mono text-[11px] text-[#8b95aa]">{number}</span>
                    <div className="w-6 h-px bg-white/[0.1]" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8b95aa]">
                      Feature
                    </span>
                  </div>
                  <h2 className="text-[clamp(24px,3.5vw,40px)] font-extrabold leading-tight tracking-tight text-white mb-2">
                    {title}
                  </h2>
                  <p className="font-mono text-[12px] tracking-[0.08em] text-[#00ffb2] mb-8">
                    {tagline}
                  </p>

                  <div className="mb-6">
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8b95aa] mb-2">
                      The Problem
                    </div>
                    <p className="text-[14px] text-[#8b95aa] leading-[1.85]">{problem}</p>
                  </div>

                  <div className="mb-8">
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8b95aa] mb-2">
                      The Solution
                    </div>
                    <p className="text-[14px] text-[#8b95aa] leading-[1.85]">{solution}</p>
                  </div>

                  <Link
                    href="/#cta"
                    className="inline-block bg-[#00ffb2] hover:bg-[#00e09e] text-[#060910] font-bold text-[12px] uppercase tracking-[0.1em] px-6 py-3 rounded-full transition-colors duration-200"
                  >
                    Join Waitlist →
                  </Link>
                </div>

                <div className={i % 2 !== 0 ? "md:[direction:ltr]" : ""}>
                  <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8">
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8b95aa] mb-5">
                      What you get
                    </div>
                    <ul className="flex flex-col gap-4">
                      {benefits.map((b) => (
                        <li key={b} className="flex items-start gap-4">
                          <span className="mt-[6px] w-4 h-px bg-[rgba(0,255,178,0.4)] flex-shrink-0" />
                          <span className="text-[14px] text-white/75 leading-snug">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        <CTABanner
          title="All features. One tool."
          description="Edgecipline brings AI extraction, Trading DNA, gamified missions, and daily coaching together for Forex and Indian markets. Join the waitlist for early access."
        />
      </main>
      <Footer />
    </>
  );
}
