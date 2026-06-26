import type { Metadata } from "next";
import FAQClient from "./FAQClient";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Edgecipline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Edgecipline is an AI-powered trading journal that tracks your behavioral patterns, not just your P&L. Upload a screenshot of your trade and the AI automatically extracts the details, then reveals your emotional patterns, execution mistakes, and behavioral blind spots over time.",
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
      name: "Is Edgecipline suitable for NIFTY and BANKNIFTY traders?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Edgecipline is built with Indian traders as the primary focus. It supports NIFTY, BANKNIFTY, options, futures, and equity trades, with pricing in INR and insights tailored for Indian market hours.",
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
    "Frequently asked questions about Edgecipline — the AI trading journal. Learn about AI screenshot extraction, pricing, Indian market support, waitlist access, and data privacy.",
  alternates: { canonical: "/faq" },
  openGraph: {
    url: "https://www.edgecipline.com/faq",
    title: "FAQ — Edgecipline Questions & Answers",
    description:
      "Everything you want to know about Edgecipline — AI extraction, pricing, Indian market support, waitlist, and data privacy.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Edgecipline FAQ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Edgecipline FAQ — Common Questions Answered",
    description:
      "Questions about AI screenshot extraction, pricing, NIFTY/BANKNIFTY support, waitlist, and more.",
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
