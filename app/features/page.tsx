import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import PageHero from "@/components/PageHero";

const OG_IMAGE = [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Edgecipline Features" }];

export const metadata: Metadata = {
  title: "Features — AI Trading Journal & Behavior Analytics | Edgecipline",
  description:
    "Explore every Edgecipline feature: AI screenshot extraction, behavioral analytics, weekly AI coaching, setup performance tracking, Trading DNA, and more. Built for disciplined traders.",
  alternates: { canonical: "/features" },
  openGraph: {
    url: "https://www.edgecipline.com/features",
    title: "Features — AI Trading Journal & Behavior Analytics | Edgecipline",
    description:
      "10 features built for disciplined traders — AI screenshot extraction, behavioral analytics, weekly coaching, and more.",
    images: OG_IMAGE,
  },
  twitter: {
    card: "summary_large_image",
    title: "Edgecipline Features — AI Trading Journal",
    description:
      "10 features built for disciplined traders — AI extraction, behavioral analytics, and weekly AI coaching.",
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
    solution: "Take a screenshot of your trade terminal after any trade. Edgecipline's AI reads it automatically — extracting pair, direction, entry, exit, P&L, lot size, time, and more. No typing. No friction.",
    benefits: [
      "Works with any broker terminal or platform",
      "Extracts trade data in seconds",
      "Supports NIFTY, BANKNIFTY, options, futures, equity, and forex",
      "No manual data entry — ever",
    ],
    accent: "#00ffb2",
  },
  {
    id: "journal",
    number: "02",
    title: "Trading Journal",
    tagline: "Your entire trading history, organized.",
    problem: "Most traders have scattered trade records — some on Zerodha's console, some on a spreadsheet, some in WhatsApp screenshots. There's no single source of truth.",
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
    id: "psychology",
    number: "03",
    title: "Trading Psychology",
    tagline: "See the emotions behind every trade.",
    problem: "You know emotional trading is hurting you. But you can't see the patterns because you don't have the data. 'I trade emotionally sometimes' is not actionable.",
    solution: "Tag each trade with your emotional state: calm, confident, anxious, frustrated, revenge, FOMO. Over time, Edgecipline surfaces exactly how each emotional state affects your win rate and P&L.",
    benefits: [
      "Emotion tagging on every trade",
      "Win rate by emotional state",
      "Detect revenge trading patterns automatically",
      "FOMO entry detection and analysis",
    ],
    accent: "#f5a623",
  },
  {
    id: "analytics",
    number: "04",
    title: "Behavior Analytics",
    tagline: "Data reveals what memory hides.",
    problem: "Traders remember their winners and forget their losers. Memory creates false confidence. You think your setup works better than it does because you only remember the good trades.",
    solution: "Edgecipline surfaces every behavioral pattern across your full trade history — not just what you remember. Time-of-day performance, streak analysis, rule adherence tracking, and emotional leakage detection.",
    benefits: [
      "Time-of-day win rate breakdown",
      "Rule adherence tracking (did you follow your system?)",
      "Streak analysis (how do you trade after wins/losses?)",
      "Behavioral blind spot detection",
    ],
    accent: "#00ffb2",
  },
  {
    id: "reports",
    number: "05",
    title: "Weekly AI Reports",
    tagline: "Your personal trading coach, every Sunday.",
    problem: "Even if you journal, you have to review it yourself — and you'll see the patterns you want to see, not the ones that are actually there. Confirmation bias makes self-review unreliable.",
    solution: "Every week, Edgecipline's AI generates a personalized coaching report: what worked, what didn't, your biggest behavioral patterns, and specific, actionable recommendations for the next week.",
    benefits: [
      "Delivered every Sunday morning",
      "Personalized to your actual trade data",
      "Not generic tips — specific to your patterns",
      "Tracks week-over-week behavioral improvement",
    ],
    accent: "#00ffb2",
  },
  {
    id: "analytics-dashboard",
    number: "06",
    title: "Performance Analytics",
    tagline: "Every metric that actually matters.",
    problem: "Broker consoles show P&L and basic stats. They don't show you win rate by setup, average R:R by time of day, or how your performance changes as the session progresses.",
    solution: "Edgecipline's analytics dashboard shows you every performance dimension: setup performance, time-of-day analysis, instrument breakdown, R:R distribution, and streak analysis.",
    benefits: [
      "Win rate by setup type",
      "Average R:R by instrument",
      "Daily and weekly P&L charts",
      "Drawdown analysis and recovery patterns",
    ],
    accent: "#00ffb2",
  },
  {
    id: "checklists",
    number: "07",
    title: "Setup Checklists",
    tagline: "Rules you can't ignore.",
    problem: "You have trading rules. You break them. Not because you forgot them — because there's no system that forces you to verify them before entering a trade.",
    solution: "Build custom pre-trade checklists for each setup. Before you enter a trade, verify every condition. Every checklist completion is logged — so you can see exactly how often your rule adherence predicts your outcomes.",
    benefits: [
      "Custom checklist per setup or strategy",
      "Pre-trade rule verification",
      "Logged adherence tracking",
      "Correlate rule adherence with outcomes",
    ],
    accent: "#f5a623",
  },
  {
    id: "ai-coach",
    number: "08",
    title: "AI Coach",
    tagline: "The coach that knows your actual history.",
    problem: "Generic trading coaches give generic advice. 'Control your emotions.' 'Follow your rules.' This advice is correct and useless without your specific behavioral data.",
    solution: "Edgecipline's AI Coach has access to your full trading history. It knows that you specifically trade worse on Thursdays, that you exit winners 40% too early, and that your revenge trades cost you ₹8,400 last month.",
    benefits: [
      "Personalized to your actual trading data",
      "Specific, actionable weekly recommendations",
      "Tracks improvement over time",
      "No generic advice — only data-driven coaching",
    ],
    accent: "#00ffb2",
  },
  {
    id: "trading-dna",
    number: "09",
    title: "Trading DNA",
    tagline: "Discover your behavioral fingerprint.",
    problem: "Every trader has a unique set of behavioral patterns. Some are revenge traders. Others are chronic over-traders. Some exit winners too early. Most don't know which they are.",
    solution: "Trading DNA is your behavioral fingerprint — a comprehensive profile of your unique trading patterns, strengths, weaknesses, and psychological tendencies. Built from your actual data, not a personality quiz.",
    benefits: [
      "Identifies your dominant behavioral archetype",
      "Strengths and weaknesses by market condition",
      "Tracks how your DNA evolves over time",
      "Personalized improvement roadmap",
    ],
    accent: "#f5a623",
  },
  {
    id: "performance-review",
    number: "10",
    title: "Performance Review",
    tagline: "Your monthly trading report card.",
    problem: "Most traders don't do monthly performance reviews — and when they do, they only look at P&L. This misses the behavioral dimension entirely.",
    solution: "Edgecipline generates a comprehensive monthly performance review: P&L, behavioral patterns, rule adherence score, best and worst sessions, key insights, and goals for next month.",
    benefits: [
      "Monthly behavioral performance score",
      "Year-over-year improvement tracking",
      "Best and worst session analysis",
      "Automated goal setting for next month",
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
          title="Everything you need to trade"
          highlight="with discipline."
          description="Edgecipline combines AI screenshot extraction, behavioral analytics, and personalized coaching into one tool built for serious traders."
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
          description="Edgecipline brings AI extraction, behavioral analytics, and weekly coaching together. Join the waitlist for early access."
        />
      </main>
      <Footer />
    </>
  );
}
