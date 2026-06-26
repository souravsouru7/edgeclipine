import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import PageHero from "@/components/PageHero";

const OG_IMAGE = [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Edgecipline — AI Trading Journal" }];

export const metadata: Metadata = {
  title: "About Edgecipline — Mission, Story & Philosophy",
  description:
    "Edgecipline was built by traders who lost money the same way most traders do — not from bad strategies, but from bad behavior. Here's our story, mission, and why we built this.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "https://www.edgecipline.com/about",
    title: "About Edgecipline — Mission, Story & Philosophy",
    description:
      "Built by traders who felt this problem. Our story, mission, philosophy, and why behavioral analytics changes everything.",
    images: OG_IMAGE,
  },
  twitter: {
    card: "summary_large_image",
    title: "About Edgecipline — Mission, Story & Philosophy",
    description:
      "Built by traders who felt this problem. Our story, mission, and philosophy.",
    images: ["/opengraph-image"],
  },
};

const TIMELINE = [
  {
    year: "2022",
    label: "The Problem",
    text: "Losing money despite having a strategy. Revenge trades. Breaking rules. Realizing the issue wasn't the market — it was the trader.",
  },
  {
    year: "2023",
    label: "The Research",
    text: "Deep-diving into trading psychology, behavioral finance, and habit research. The pattern was clear: behavior, not strategy, was the bottleneck.",
  },
  {
    year: "2024",
    label: "The Build",
    text: "Started building Edgecipline — an AI trading journal focused on behavioral analysis, not just P&L tracking.",
  },
  {
    year: "2025",
    label: "Private Alpha",
    text: "Launched private alpha with 847+ traders on the waitlist. Refining the product based on real feedback.",
  },
  {
    year: "2026",
    label: "Public Launch",
    text: "Preparing for public launch. AI screenshot extraction, behavioral analytics, and weekly coaching reports — coming soon.",
  },
];

const BELIEFS = [
  { icon: "🎯", title: "Discipline Creates Edge", body: "Your edge isn't your strategy — it's your ability to execute it consistently. Discipline is the edge." },
  { icon: "📊", title: "Data Over Feelings", body: "Feelings tell you what you want to believe. Data tells you what's actually happening. We build for data." },
  { icon: "🪞", title: "Markets Are a Mirror", body: "Every trade reflects a decision. Every loss reflects a behavior. The market shows you exactly who you are." },
  { icon: "⚡", title: "Small Edge, Executed Well", body: "A 55% win rate + consistent R:R + disciplined execution beats a 70% win rate traded emotionally every time." },
  { icon: "🔁", title: "Self-Knowledge Compounds", body: "The more you know about your behavioral patterns, the better your next 100 trades will be. This knowledge compounds." },
  { icon: "🏆", title: "Built by Traders", body: "We trade. We journal. We've had the same psychological struggles. We built the tool we wish we had." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge="Our Story"
          title="Built by traders who"
          highlight="felt this problem."
          description="Edgecipline exists because we lived through the same painful cycle most traders face: good strategy, inconsistent execution, unexplained losses. The problem wasn't the market."
        />

        {/* Mission + Vision */}
        <section className="py-20 px-5 md:px-9 border-t border-white/[0.05]">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8b95aa] mb-4">
                Mission
              </div>
              <h2 className="text-[clamp(22px,3vw,34px)] font-extrabold leading-tight tracking-tight text-white mb-4">
                Help every trader understand{" "}
                <em className="not-italic text-[#00ffb2]">themselves</em> as clearly as the market.
              </h2>
              <p className="text-[14px] text-[#8b95aa] leading-[1.9]">
                Most trading tools track what happened. We track why. By surfacing behavioral patterns
                that drive losses — revenge trading, FOMO entries, time-of-day blind spots — we help
                traders fix the root cause, not just the symptoms.
              </p>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8b95aa] mb-4">
                Vision
              </div>
              <h2 className="text-[clamp(22px,3vw,34px)] font-extrabold leading-tight tracking-tight text-white mb-4">
                A world where discipline is the{" "}
                <em className="not-italic text-[#00ffb2]">default</em>, not the exception.
              </h2>
              <p className="text-[14px] text-[#8b95aa] leading-[1.9]">
                When every trader has access to honest behavioral feedback, the entire ecosystem
                becomes healthier. Better traders make better decisions. Better decisions create more
                consistent outcomes — for everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Founder story */}
        <section className="py-20 px-5 md:px-9 border-t border-white/[0.05]">
          <div className="max-w-3xl mx-auto">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8b95aa] mb-8 text-center">
              Why We Built This
            </div>
            <div className="rounded-3xl border border-white/[0.07] bg-white/[0.02] px-8 md:px-12 py-10">
              <p className="text-[15px] text-[#8b95aa] leading-[1.9] mb-5">
                "I had a strategy that worked. Backtested. Profitable on paper. But every month, I'd
                end up negative. Not because the strategy failed — but because I didn't follow it.
                I'd revenge trade after a loss. I'd overtrade on expiry Thursdays. I'd exit winners
                at 50% of target and hold losers 3x past my stop."
              </p>
              <p className="text-[15px] text-[#8b95aa] leading-[1.9] mb-5">
                "I started keeping a journal. Not a P&L tracker — a behavioral journal. Three months
                later, the data showed me something embarrassing: I had a 67% win rate on my
                morning trades and a 31% win rate on afternoon trades. I had been averaging my way
                to zero."
              </p>
              <p className="text-[15px] text-white/70 leading-[1.9]">
                "I stopped trading after 1pm. My account started growing. Edgecipline is that journal
                — built for every trader who knows their strategy works but can't figure out why
                their account doesn't."
              </p>
              <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[rgba(0,255,178,0.1)] border border-[rgba(0,255,178,0.25)] flex items-center justify-center text-[14px]">
                  S
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-white">Sourav</div>
                  <div className="font-mono text-[10px] text-[#8b95aa] tracking-[0.1em] uppercase">
                    Founder, Edgecipline
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-5 md:px-9 border-t border-white/[0.05]">
          <div className="max-w-3xl mx-auto">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8b95aa] mb-12 text-center">
              Our Journey
            </div>
            <div className="flex flex-col gap-10">
              {TIMELINE.map(({ year, label, text }) => (
                <div key={year} className="flex gap-8">
                  <div className="flex flex-col items-center gap-1 flex-shrink-0">
                    <div className="w-[10px] h-[10px] rounded-full border-2 border-[rgba(0,255,178,0.6)] bg-[#05080f] mt-1" />
                    <div className="w-px flex-1 bg-white/[0.06]" />
                  </div>
                  <div className="pb-2">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-mono text-[11px] text-[#8b95aa]">{year}</span>
                      <span className="font-bold text-[12px] uppercase tracking-[0.12em] text-[#00ffb2]">
                        {label}
                      </span>
                    </div>
                    <p className="text-[14px] text-[#8b95aa] leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-20 px-5 md:px-9 border-t border-white/[0.05]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8b95aa] mb-3">
                Philosophy
              </div>
              <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold leading-tight tracking-tight text-white">
                What we believe
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {BELIEFS.map(({ icon, title, body }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7 hover:border-white/[0.14] transition-colors duration-300"
                >
                  <div className="text-2xl mb-4">{icon}</div>
                  <div className="font-bold text-[14px] text-white mb-2">{title}</div>
                  <p className="text-[13px] text-[#8b95aa] leading-[1.8]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Launch status */}
        <section className="py-16 px-5 md:px-9 border-t border-white/[0.05]">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[rgba(0,255,178,0.08)] border border-[rgba(0,255,178,0.15)] px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00ffb2] animate-blink" />
              <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#00ffb2]">
                Building in Public — 2026
              </span>
            </div>
            <h2 className="text-[clamp(22px,3.5vw,36px)] font-extrabold leading-tight tracking-tight text-white mb-4">
              Currently in private early access
            </h2>
            <p className="text-[15px] text-[#8b95aa] leading-relaxed max-w-md mx-auto">
              847+ traders are on the waitlist. We&apos;re refining the product based on real feedback
              before public launch. Join the list to get priority access and founding-member pricing.
            </p>
          </div>
        </section>

        <CTABanner
          title="Join the waitlist today."
          description="Be among the first traders to access Edgecipline when we launch. Priority access for early members."
        />
      </main>
      <Footer />
    </>
  );
}
