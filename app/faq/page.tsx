import type { Metadata } from "next";
import FAQClient from "./FAQClient";
import { FOUNDER_FAQ_SCHEMA_ENTRIES } from "@/lib/founders";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    ...FOUNDER_FAQ_SCHEMA_ENTRIES,
    {
      "@type": "Question",
      name: "What is Edgecipline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Edgecipline is an AI-powered trading journal, discipline coach, and gamified improvement system. Upload a screenshot of your trade and the AI automatically extracts the details, builds your Trading DNA profile, and reveals your emotional patterns, execution mistakes, and behavioral blind spots over time.",
      },
    },
    {
      "@type": "Question",
      name: "How does AI screenshot extraction work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Take a screenshot of your trade terminal after any trade. Edgecipline's AI reads the screenshot to extract: trading pair, direction (long/short), entry price, exit price, P&L, lot size, and time. No manual data entry required.",
      },
    },
    {
      "@type": "Question",
      name: "Does Edgecipline support Forex trading (MT4/MT5/cTrader)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Edgecipline has a dedicated Forex mode built for MT4, MT5, cTrader, and similar platforms, with its own journal, analytics, and screenshot extraction tuned for pip-based pairs.",
      },
    },
    {
      "@type": "Question",
      name: "Is Edgecipline suitable for NIFTY and BANKNIFTY traders?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Edgecipline has a dedicated Indian Market mode. It supports NIFTY, BANKNIFTY, options, futures, and equity trades from Zerodha, Upstox, Angel One, Dhan, Groww, and more, with pricing in INR and insights tailored for Indian market hours.",
      },
    },
    {
      "@type": "Question",
      name: "What is Trading DNA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trading DNA is Edgecipline's AI-generated behavioral fingerprint. It breaks down your performance by session, mood, setup, and instrument to show exactly which conditions produce your best results — your personal, repeatable edge.",
      },
    },
    {
      "@type": "Question",
      name: "What are Missions, Streaks, and the Morning Mentor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Missions are AI-recommended challenges targeting your specific weaknesses. Streaks reward consistent daily journaling. The Morning Mentor sends a personalized AI message every morning at 6am referencing your actual streak, recent mistakes, and mission progress.",
      },
    },
    {
      "@type": "Question",
      name: "Is there an Android app for Edgecipline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Edgecipline ships as a native Android app with camera and gallery screenshot upload, push notifications for streaks and the morning mentor, and full access to your journal, analytics, and Trading DNA on the go.",
      },
    },
    {
      "@type": "Question",
      name: "How much does Edgecipline cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Three plans: Standard at ₹149/month, Professional at ₹249 for 3 months (~₹2.76/day), and Ultimate at ₹449 for 6 months (~₹2.47/day). One bad trade costs more than a year of Edgecipline.",
      },
    },
    {
      "@type": "Question",
      name: "When will Edgecipline launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We're currently in private early access with 847+ traders on the waitlist. Join the waitlist to get priority access when we launch publicly and to lock in early access pricing.",
      },
    },
    {
      "@type": "Question",
      name: "Does Edgecipline have access to my broker account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Edgecipline never connects to your broker. You upload screenshots — we never need your login credentials or direct broker access. Your account security is never at risk.",
      },
    },
    {
      "@type": "Question",
      name: "What behavioral patterns does Edgecipline detect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Edgecipline detects revenge trading patterns, FOMO entry behavior, time-of-day performance changes, bad streak management, rule adherence breakdowns, setup delusion, and emotional state correlations with outcomes.",
      },
    },
    {
      "@type": "Question",
      name: "Is the waitlist free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, completely free. You join, you wait, you get priority access when we launch. No credit card required.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "FAQ — Edgecipline Questions & Answers",
  description:
    "Frequently asked questions about Edgecipline — the AI trading journal, discipline coach, and gamified improvement system. Who founded Edgecipline, Trading DNA, missions & streaks, Forex + Indian market support, pricing, and data privacy.",
  alternates: { canonical: "/faq" },
  openGraph: {
    url: "https://www.edgecipline.com/faq",
    title: "FAQ — Edgecipline Questions & Answers",
    description:
      "Everything you want to know about Edgecipline — Trading DNA, missions & streaks, Forex + Indian market support, pricing, and data privacy.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Edgecipline FAQ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Edgecipline FAQ — Common Questions Answered",
    description:
      "Questions about Trading DNA, missions & streaks, Forex/NIFTY/BANKNIFTY support, pricing, and more.",
    images: ["/opengraph-image"],
  },
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQClient />
    </>
  );
}
