import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import PageHero from "@/components/PageHero";

const OG_IMAGE = [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Edgecipline Pricing" }];

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Edgecipline AI Trading Journal & Discipline Coach",
  description:
    "AI-powered trading journal, discipline coach, and gamified improvement system with Trading DNA, screenshot extraction, missions & streaks, and AI coaching for Forex and Indian market traders.",
  url: "https://www.edgecipline.com/pricing",
  offers: [
    {
      "@type": "Offer",
      name: "Standard",
      price: "349",
      priceCurrency: "INR",
      billingDuration: "P1M",
      description: "AI screenshot extraction, analytics dashboard, unlimited trade journals for Forex and Indian markets.",
    },
    {
      "@type": "Offer",
      name: "Professional",
      price: "899",
      priceCurrency: "INR",
      billingDuration: "P3M",
      description: "Everything in Standard plus AI Coach, Morning Mentor, weekly reports, missions & streaks, and the psychology cost calculator.",
    },
    {
      "@type": "Offer",
      name: "Ultimate",
      price: "1499",
      priceCurrency: "INR",
      billingDuration: "P6M",
      description: "Full platform including Trading DNA, pattern detection, monthly performance review, and lifetime trade backup.",
    },
  ],
};

export const metadata: Metadata = {
  title: "Pricing — Edgecipline Plans & Early Access",
  description:
    "Edgecipline pricing: Standard ₹349/month, Professional ₹899 for 3 months (~₹9.99/day), Ultimate ₹1,499 for 6 months (~₹8.33/day). Trading DNA, missions & streaks, and AI coaching for Forex and Indian markets. Join the waitlist for founding-member pricing.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    url: "https://www.edgecipline.com/pricing",
    title: "Pricing — Edgecipline Plans & Early Access",
    description:
      "Three plans from ₹349/month. One bad trade costs more than a year of Edgecipline. Join the waitlist for founding pricing.",
    images: OG_IMAGE,
  },
  twitter: {
    card: "summary_large_image",
    title: "Edgecipline Pricing — From ₹349/month",
    description:
      "Standard ₹349/mo · Professional ₹899/3mo · Ultimate ₹1,499/6mo. Join the waitlist for founding pricing.",
    images: ["/opengraph-image"],
  },
};

const PLANS = [
  {
    name: "Standard",
    price: "₹349",
    period: "per month",
    dailyCost: null,
    badge: null,
    featured: false,
    description: "For traders who want to start journaling with AI extraction and build the habit.",
    features: [
      "Unlimited trade journals · Forex + Indian markets",
      "AI screenshot extraction",
      "Standard analytics dashboard",
      "Emotion & setup tagging",
      "Trade history search",
      "Email support",
    ],
    notIncluded: ["AI Coach & Morning Mentor", "Missions & streaks", "Trading DNA profile"],
  },
  {
    name: "Professional",
    price: "₹899",
    period: "3 months",
    dailyCost: "~₹9.99/day",
    badge: "Most Popular",
    featured: true,
    description: "For serious traders who want gamified discipline and personalized AI coaching.",
    features: [
      "Everything in Standard",
      "AI Coach, Morning Mentor & weekly reports",
      "Missions & streaks",
      "Psychology cost calculator",
      "Revenge & tilt alerts",
      "Priority support",
    ],
    notIncluded: ["Trading DNA profile", "Pattern detection engine"],
  },
  {
    name: "Ultimate",
    price: "₹1,499",
    period: "6 months",
    dailyCost: "~₹8.33/day",
    badge: "Best Value",
    featured: false,
    description: "For committed traders who want the complete behavioral intelligence platform.",
    features: [
      "Everything in Professional",
      "Trading DNA profile & pattern detection",
      "Self-awareness score & psychology timeline",
      "Monthly performance review",
      "Lifetime trade backup",
      "Early beta access to new features",
    ],
    notIncluded: [],
  },
];

const COMPARE_ROWS = [
  { label: "Unlimited trade journals (Forex + Indian)", standard: true, professional: true, ultimate: true },
  { label: "AI screenshot extraction", standard: true, professional: true, ultimate: true },
  { label: "Analytics dashboard", standard: true, professional: true, ultimate: true },
  { label: "Emotion & setup tagging", standard: true, professional: true, ultimate: true },
  { label: "AI Coach & Morning Mentor", standard: false, professional: true, ultimate: true },
  { label: "Missions & streaks", standard: false, professional: true, ultimate: true },
  { label: "Psychology cost calculator", standard: false, professional: true, ultimate: true },
  { label: "Revenge & tilt pattern alerts", standard: false, professional: true, ultimate: true },
  { label: "Trading DNA & pattern detection", standard: false, professional: false, ultimate: true },
  { label: "Self-awareness score", standard: false, professional: false, ultimate: true },
  { label: "Monthly performance review", standard: false, professional: false, ultimate: true },
  { label: "Lifetime trade backup", standard: false, professional: false, ultimate: true },
  { label: "Early beta access", standard: false, professional: false, ultimate: true },
];

const FAQS = [
  {
    q: "When will Edgecipline launch?",
    a: "We're currently in private early access. Join the waitlist to get priority access when we launch publicly. Early access members get discounted founding pricing.",
  },
  {
    q: "Can I switch plans after subscribing?",
    a: "Yes. You can upgrade or downgrade your plan at any time. Upgrades take effect immediately; downgrades take effect at the end of your current billing period.",
  },
  {
    q: "Is there a free trial?",
    a: "Early access members will receive an extended trial period. Join the waitlist to be first in line when we launch.",
  },
  {
    q: "What currencies do you support?",
    a: "Edgecipline is priced in Indian Rupees (INR) and is optimized for Indian market traders. We plan to add international pricing at public launch.",
  },
  {
    q: "Do I need a credit card to join the waitlist?",
    a: "No. The waitlist is completely free to join. You only pay when you subscribe after we launch.",
  },
  {
    q: "What's your refund policy?",
    a: "We'll publish a detailed refund policy at launch. Our goal is for you to see behavioral insights within the first week — if you don't find value, we want to make it right.",
  },
];

function Check() {
  return (
    <span className="w-5 h-5 rounded-full bg-[rgba(0,255,178,0.12)] border border-[rgba(0,255,178,0.3)] flex items-center justify-center mx-auto">
      <span className="text-[#00ffb2] text-[10px] font-bold">✓</span>
    </span>
  );
}

function Cross() {
  return (
    <span className="text-white/20 text-[12px] block text-center">—</span>
  );
}

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
      <Navbar />
      <main>
        <PageHero
          badge="Pricing"
          title="Invest in your"
          highlight="discipline."
          description="One bad trade costs more than a year of Edgecipline. Choose the timeframe that fits your journey."
        />

        {/* Pricing cards */}
        <section className="pb-20 px-5 md:px-9">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-4 items-start">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl p-8 ${
                  plan.featured
                    ? "bg-[rgba(0,255,178,0.04)] border border-[rgba(0,255,178,0.3)] animate-plan-glow"
                    : "bg-white/[0.02] border border-white/[0.07] hover:border-white/[0.14]"
                } transition-all duration-300`}
              >
                {plan.badge && (
                  <div
                    className={`absolute -top-px right-6 font-mono text-[10px] font-bold tracking-[0.12em] uppercase px-2.5 py-1.5 rounded-b-lg ${
                      plan.featured
                        ? "bg-[#00ffb2] text-[#060910]"
                        : "bg-white/[0.08] text-white/50"
                    }`}
                  >
                    {plan.badge}
                  </div>
                )}

                <div className="font-bold text-[10px] uppercase tracking-[0.2em] text-[#8b95aa] mb-2">
                  {plan.name}
                </div>
                <div
                  className={`font-mono text-[44px] font-light leading-none tracking-tight mb-1 ${
                    plan.featured ? "text-[#00ffb2]" : "text-white"
                  }`}
                >
                  {plan.price}
                </div>
                <div className="text-[12px] text-[#8b95aa] mb-1">{plan.period}</div>
                {plan.dailyCost && (
                  <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-[#00ffb2] mb-1">
                    {plan.dailyCost}
                  </div>
                )}
                <p className="text-[12px] text-[#8b95aa] leading-relaxed mb-6 mt-3 border-t border-white/[0.06] pt-4">
                  {plan.description}
                </p>

                <ul className="flex flex-col gap-2.5 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-[13px] text-white/75">
                      <span className="w-4 h-px bg-[rgba(0,255,178,0.35)] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                  {plan.notIncluded.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-[13px] text-white/25 line-through">
                      <span className="w-4 h-px bg-white/[0.1] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/#cta"
                  className={`block w-full text-center font-bold text-[12px] uppercase tracking-[0.1em] py-3.5 rounded-xl transition-colors duration-200 ${
                    plan.featured
                      ? "bg-[#00ffb2] hover:bg-[#00e09e] text-[#060910]"
                      : "bg-white/[0.05] hover:bg-white/[0.1] text-white/70 hover:text-white border border-white/[0.08]"
                  }`}
                >
                  Join Waitlist →
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center font-mono text-[11px] text-[#8b95aa] mt-8">
            All prices in INR. Waitlist is free — you only pay when we launch.
          </p>
        </section>

        {/* Comparison table */}
        <section className="py-20 px-5 md:px-9 border-t border-white/[0.05]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8b95aa] mb-3">
                Feature Comparison
              </div>
              <h2 className="text-[clamp(24px,3.5vw,38px)] font-extrabold tracking-tight text-white">
                Compare all plans
              </h2>
            </div>

            <div className="rounded-2xl border border-white/[0.07] overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-4 border-b border-white/[0.07] bg-white/[0.02]">
                <div className="p-4 text-[11px] font-mono uppercase tracking-[0.14em] text-[#8b95aa]">
                  Feature
                </div>
                {["Standard", "Professional", "Ultimate"].map((name) => (
                  <div key={name} className="p-4 text-center text-[12px] font-bold text-white">
                    {name}
                  </div>
                ))}
              </div>
              {/* Rows */}
              {COMPARE_ROWS.map(({ label, standard, professional, ultimate }, i) => (
                <div
                  key={label}
                  className={`grid grid-cols-4 border-b border-white/[0.04] ${
                    i % 2 === 0 ? "" : "bg-white/[0.01]"
                  }`}
                >
                  <div className="px-4 py-3.5 text-[13px] text-white/65 flex items-center">{label}</div>
                  <div className="px-4 py-3.5 flex items-center justify-center">
                    {standard ? <Check /> : <Cross />}
                  </div>
                  <div className="px-4 py-3.5 flex items-center justify-center">
                    {professional ? <Check /> : <Cross />}
                  </div>
                  <div className="px-4 py-3.5 flex items-center justify-center">
                    {ultimate ? <Check /> : <Cross />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-5 md:px-9 border-t border-white/[0.05]">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8b95aa] mb-3">
                Pricing FAQ
              </div>
              <h2 className="text-[clamp(24px,3.5vw,38px)] font-extrabold tracking-tight text-white">
                Common questions
              </h2>
            </div>
            <div className="flex flex-col gap-0 border-t border-white/[0.06]">
              {FAQS.map(({ q, a }) => (
                <div key={q} className="border-b border-white/[0.06] py-6">
                  <div className="font-semibold text-[14px] text-white mb-2">{q}</div>
                  <p className="text-[13px] text-[#8b95aa] leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          title="Founding pricing — only for early members."
          description="Join the waitlist before public launch to lock in the best pricing. No credit card required."
          ctaLabel="Join Free Waitlist →"
        />
      </main>
      <Footer />
    </>
  );
}
