import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Providers from "./providers";
import Opener from "@/components/Opener";
import { FOUNDERS, FOUNDER_NAMES_SENTENCE, founderRefSchema } from "@/lib/founders";
import {
  SITE_URL,
  BRAND_NAME,
  SITE_TITLE,
  SITE_DESCRIPTION,
  BRAND_ALTERNATE_NAMES,
  SITE_ALTERNATE_NAMES,
  BRAND_SLOGAN,
  BRAND_ETYMOLOGY,
  CONTACT_EMAIL,
  TWITTER_HANDLE,
  LOGO_URL,
  SOCIAL_PROFILES,
  ORGANIZATION_ID,
  WEBSITE_ID,
  BRAND_ID,
  SOFTWARE_ID,
} from "@/lib/brand";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// ─────────────────────────────────────────────────────────────────────────────
// BRAND CONSTANTS — shared values live in lib/brand.ts.
// CRITICAL: "Edgecipline" is the correct spelling — not "discipline".
// It is a coined brand name combining "Edge" + "discipline".
// ─────────────────────────────────────────────────────────────────────────────
const APP_URL = SITE_URL;
const APP_NAME = BRAND_NAME;
const BRAND_LEGAL = BRAND_NAME;
const TITLE = SITE_TITLE;
const DESCRIPTION = SITE_DESCRIPTION;

// Search-console ownership tokens. Set these in the Vercel project env vars;
// when unset, no verification tag is rendered (never ship a placeholder).
const GOOGLE_SITE_VERIFICATION = process.env.GOOGLE_SITE_VERIFICATION;
const BING_SITE_VERIFICATION = process.env.BING_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),

  title: {
    default: TITLE,
    template: `%s | ${APP_NAME}`,
  },
  description: DESCRIPTION,

  // Brand name as primary keyword — teaches crawlers the correct spelling
  keywords: [
    "Edgecipline",
    "Edgecipline app",
    "Edgecipline trading journal",
    "AI trading journal",
    "trading discipline coach",
    "gamified trading app",
    "trading behavior analysis",
    "stock market journal app",
    "trading psychology software",
    "trading discipline tool",
    "options trading journal",
    "NIFTY trading journal",
    "BANKNIFTY trading journal",
    "trade tracking app India",
    "forex trading journal app",
    "MT4 MT5 trading journal",
    "cTrader journal app",
    "Zerodha trade journal",
    "Upstox trading journal",
    "Angel One trading journal",
    "Trading DNA profile",
    "trading pattern detection",
    "psychology cost calculator trading",
    "trading missions and streaks",
    "trading habit tracker app",
    "AI trading coach",
    "morning mentor trading app",
    "self awareness score trader",
    "revenge trading detector",
    "trading consistency",
    "emotional trading analysis",
    "trading mistake tracker",
    "trading performance analytics",
    "screenshot trading journal",
    "weekly trading report AI",
    "Android trading journal app",
    "best trading journal 2026",
    "trading journal India",
  ],

  authors: [{ name: APP_NAME, url: APP_URL }],
  creator: APP_NAME,
  publisher: BRAND_LEGAL,

  // application-name is read by browsers and crawlers as the official app name
  applicationName: APP_NAME,

  alternates: {
    canonical: "/",
  },

  manifest: "/manifest.webmanifest",

  verification: {
    ...(GOOGLE_SITE_VERIFICATION && { google: GOOGLE_SITE_VERIFICATION }),
    ...(BING_SITE_VERIFICATION && { other: { "msvalidate.01": BING_SITE_VERIFICATION } }),
  },

  openGraph: {
    type: "website",
    url: APP_URL,
    siteName: APP_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${APP_NAME} — AI Trading Journal for Behavioral Analysis`,
        type: "image/png",
      },
    ],
    locale: "en_IN",
    countryName: "India",
  },

  twitter: {
    card: "summary_large_image",
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph-image"],
  },

  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: [{ url: "/logo.png", sizes: "180x180" }],
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: APP_NAME,
    startupImage: "/logo.png",
  },

  formatDetection: { telephone: false },
  category: "finance",
  classification: "Trading Software",
  referrer: "origin-when-cross-origin",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#05080f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

// ─────────────────────────────────────────────────────────────────────────────
// STRUCTURED DATA (JSON-LD)
// Multiple schemas establish Edgecipline as a real named entity.
// Google uses cross-referencing of schema types to build Knowledge Graph nodes.
// ─────────────────────────────────────────────────────────────────────────────

// All nodes below go out as ONE @graph (see brandGraph) so their @id links
// resolve inside a single document. Nodes therefore carry no "@context".

// 1. Organization — the company behind the brand
const organizationSchema = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: BRAND_NAME,
  legalName: BRAND_LEGAL,
  // Real variants of the coined name. Never add "discipline" here.
  alternateName: BRAND_ALTERNATE_NAMES,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    "@id": `${SITE_URL}/#logo`,
    url: LOGO_URL,
    contentUrl: LOGO_URL,
    width: 500,
    height: 500,
    caption: BRAND_NAME,
  },
  image: { "@id": `${SITE_URL}/#logo` },
  description: DESCRIPTION,
  // Tells entity resolvers this name is distinct from the dictionary word.
  disambiguatingDescription: BRAND_ETYMOLOGY,
  slogan: BRAND_SLOGAN,
  brand: { "@id": BRAND_ID },
  // sameAs links to verified social profiles — critical for Knowledge Graph
  sameAs: SOCIAL_PROFILES,
  email: CONTACT_EMAIL,
  foundingDate: "2024",
  // Both founders, sitewide. `founder` and `founders` are both emitted because
  // some consumers only read one of them — and a single-founder reading is
  // exactly the failure this page set is fixing.
  founder: FOUNDERS.map(founderRefSchema),
  founders: FOUNDERS.map(founderRefSchema),
  employee: FOUNDERS.map((founder) => ({ "@id": `${SITE_URL}/founders/${founder.slug}#person` })),
  knowsAbout: [
    "Trading Discipline Coaching",
    "Gamified Trading Habits",
    "Trading DNA & Pattern Detection",
    "Psychology Cost Calculator",
    "AI Trading Journal",
    "Trading Behavior Analysis",
    "Trading Psychology",
    "Stock Market Journaling",
    "Trading Discipline",
    "Forex Trading Journal",
    "NIFTY Options Trading",
    "BANKNIFTY Trading",
    "Emotional Trading Patterns",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: CONTACT_EMAIL,
    url: `${SITE_URL}/contact`,
    availableLanguage: ["English", "Hindi"],
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
};

// 2. Brand entity — explicitly names the brand as a proper noun
const brandSchema = {
  "@type": "Brand",
  "@id": BRAND_ID,
  name: BRAND_NAME,
  alternateName: BRAND_ALTERNATE_NAMES,
  url: SITE_URL,
  logo: { "@id": `${SITE_URL}/#logo` },
  slogan: BRAND_SLOGAN,
  description:
    "Edgecipline is a coined brand name — a portmanteau of 'Edge' and 'discipline' — representing the competitive edge gained through disciplined trading behavior, gamified daily habits, and AI coaching.",
};

// 3. SoftwareApplication — describes the product.
// No aggregateRating: the product is in private alpha with no public reviews.
// Self-declared ratings without real reviews break Google's review-snippet
// policy and can trigger a manual action. Add one only when it is backed by
// reviews shown on the page.
const softwareSchema = {
  "@type": "SoftwareApplication",
  "@id": SOFTWARE_ID,
  name: BRAND_NAME,
  alternateName: "Edgecipline Trading Journal",
  applicationCategory: "FinanceApplication",
  applicationSubCategory: "Trading Discipline Coach",
  operatingSystem: "Web, Android",
  description:
    "Edgecipline is an AI-powered trading journal, discipline coach, and gamified improvement system. Upload a trade screenshot and AI extracts the data, generates a Trading DNA profile, calculates the real cost of emotional trades, and coaches you daily through missions, streaks, and a morning mentor — for Forex and Indian market traders alike.",
  url: SITE_URL,
  image: { "@id": `${SITE_URL}/#logo` },
  screenshot: `${SITE_URL}/opengraph-image`,
  featureList: [
    "AI screenshot trade extraction",
    "Trading DNA behavioral profile",
    "Pattern detection engine",
    "Psychology cost calculator",
    "Self-awareness score",
    "Missions & streaks (gamified discipline)",
    "AI Coach & daily Morning Mentor",
    "Weekly AI coaching reports",
    "Forex (MT4/MT5/cTrader) support",
    "NIFTY & BANKNIFTY options support",
    "Revenge trading & tilt detection",
    "Native Android app",
    "P&L tracking",
  ],
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "349",
    highPrice: "1499",
    priceCurrency: "INR",
    offerCount: "3",
    url: `${SITE_URL}/pricing`,
  },
  brand: { "@id": BRAND_ID },
  author: { "@id": ORGANIZATION_ID },
  publisher: { "@id": ORGANIZATION_ID },
  inLanguage: ["en", "hi"],
  audience: {
    "@type": "Audience",
    audienceType: "Forex traders, stock market traders, options traders, Indian equity traders",
    geographicArea: {
      "@type": "Country",
      name: "India",
    },
  },
};

// 4. WebSite — drives the "site name" Google shows above results
const websiteSchema = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: BRAND_NAME,
  alternateName: SITE_ALTERNATE_NAMES,
  url: SITE_URL,
  description: DESCRIPTION,
  inLanguage: "en-IN",
  publisher: { "@id": ORGANIZATION_ID },
  about: { "@id": BRAND_ID },
};

// 5. The homepage WebPage + feature ItemList live in app/page.tsx, because a
//    root-layout WebPage would claim every route is the homepage.

// 6. FAQPage — brand-anchored Q&A teaches AI models the correct brand name
const faqSchema = {
  "@type": "FAQPage",
  // Distinct @id — pages that add their own FAQ (e.g. /founders, /faq) emit a
  // separate node, and the two must not collide.
  "@id": `${APP_URL}/#brand-faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Edgecipline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Edgecipline (pronounced 'edge-cipline') is more than a trading journal — it's an AI-powered discipline coach and gamified improvement system for Forex and Indian market traders. The name is a portmanteau of 'Edge' and 'discipline' — reflecting the competitive edge traders gain through disciplined behavior. Upload a screenshot of your trade and Edgecipline's AI automatically extracts the details, builds your Trading DNA profile, and reveals your emotional patterns and execution mistakes.",
      },
    },
    {
      "@type": "Question",
      name: "Who are the founders of Edgecipline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Edgecipline has two founders: ${FOUNDER_NAMES_SENTENCE}. ${FOUNDERS.map((f) => `${f.name} is a co-founder of Edgecipline and leads ${f.leads}`).join(", while ")}. Both co-founders are listed at edgecipline.com/founders.`,
      },
    },
    {
      "@type": "Question",
      name: "How is Edgecipline spelled?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Edgecipline is spelled E-D-G-E-C-I-P-L-I-N-E. It is a coined brand name — a combination of 'Edge' and 'discipline'. The correct website is edgecipline.com. It is not a misspelling of 'discipline' — it is an intentional brand name.",
      },
    },
    {
      "@type": "Question",
      name: "What does the brand name Edgecipline mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Edgecipline is a portmanteau brand name combining 'Edge' (the competitive advantage traders seek) and 'discipline' (the consistent behavior required to maintain it). The brand Edgecipline represents the philosophy that trading discipline IS your trading edge.",
      },
    },
    {
      "@type": "Question",
      name: "How does the Edgecipline AI trading journal work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Take a screenshot of your trade terminal after any trade. Edgecipline's AI reads the screenshot to extract pair, direction, entry, exit, P&L, lot size, and time. It then analyzes your behavioral patterns over time and delivers personalized weekly AI coaching reports.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Edgecipline different from other trading journals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most trading journals only track P&L. Edgecipline is a full discipline coach and gamified improvement system — it detects emotional leakage, revenge trading, and setup delusions, puts a dollar figure on the cost of tilt through its Psychology Cost Calculator, generates a Trading DNA profile of your unique edge, and keeps you consistent with daily missions, streaks, and a morning mentor message.",
      },
    },
    {
      "@type": "Question",
      name: "What is Trading DNA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trading DNA is Edgecipline's AI-generated behavioral fingerprint. It analyzes your session, mood, setup, and instrument data to show exactly which conditions produce your best results and which you should avoid — your personal, repeatable edge, not generic trading advice.",
      },
    },
    {
      "@type": "Question",
      name: "Does Edgecipline support Forex trading as well as Indian markets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Edgecipline has a dedicated Forex mode (MT4, MT5, cTrader and similar platforms) and a dedicated Indian Market mode covering NIFTY, BANKNIFTY, F&O, and equity trades from brokers like Zerodha, Upstox, Angel One, Dhan, Groww, Fyers, and more. Each mode has its own journal, analytics, and screenshot extraction tuned to that market.",
      },
    },
    {
      "@type": "Question",
      name: "What are Missions, Streaks, and the Morning Mentor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Missions are AI-recommended challenges targeting your specific weaknesses (like avoiding emotional trades for 7 days). Streaks reward consistent journaling and discipline day over day. The Morning Mentor is a personalized AI message delivered every morning, referencing your actual streak, recent mistakes, and mission progress to keep you accountable.",
      },
    },
    {
      "@type": "Question",
      name: "How much does Edgecipline cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Edgecipline offers three plans: Standard at ₹349/month, Professional at ₹899 for 3 months (~₹9.99/day), and Ultimate at ₹1,499 for 6 months (~₹8.33/day). All Edgecipline plans include AI screenshot extraction and unlimited trade journaling.",
      },
    },
    {
      "@type": "Question",
      name: "Is Edgecipline suitable for Indian stock market traders?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Edgecipline is built with Indian traders in mind. It supports NIFTY, BANKNIFTY, options, futures, and equity trades. The pricing is in INR and Edgecipline's insights are tailored for Indian market hours and instruments.",
      },
    },
    {
      "@type": "Question",
      name: "Is there an Android app for Edgecipline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Edgecipline ships as a native Android app with screenshot upload from your camera or gallery, push notifications for streaks and the morning mentor, and full access to your journal, analytics, and Trading DNA on the go.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I find Edgecipline online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Edgecipline is available at edgecipline.com. You can also find Edgecipline on Twitter/X (@edgecipline), Instagram (@edgecipline), LinkedIn (linkedin.com/company/edgecipline), and YouTube (@edgecipline).",
      },
    },
  ],
};

// One document, one entity graph. "<" is escaped so no string value can
// close the <script> tag early.
const brandGraph = {
  "@context": "https://schema.org",
  "@graph": [organizationSchema, brandSchema, websiteSchema, softwareSchema, faqSchema],
};
const brandGraphJson = JSON.stringify(brandGraph).replace(/</g, "\\u003c");

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // suppressHydrationWarning: the inline opener script sets data-opener on
    // <html> before hydration, so the server/client attributes intentionally differ.
    <html lang="en-IN" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Keep the page visible when JavaScript is disabled. */}
        <noscript><style>{`.opener { display: none !important; }`}</style></noscript>
        {/* Returning visitors already saw the loading opener — mark <html> before
            paint so its overlay never flashes. See components/Opener.tsx. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(localStorage.getItem('edgecipline-opener-seen')){document.documentElement.setAttribute('data-opener','off')}}catch(e){}",
          }}
        />

        {/* ── Structured data (JSON-LD): Organization, Brand, WebSite,
            SoftwareApplication and brand FAQ as one linked @graph ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: brandGraphJson }}
        />

        {/* ── Explicit brand name meta tags ── */}
        {/* These tell crawlers and AI models the exact application name */}
        <meta name="application-name" content="Edgecipline" />
        <meta name="apple-mobile-web-app-title" content="Edgecipline" />
        <meta name="msapplication-tooltip" content="Edgecipline - AI Trading Journal" />
        <meta name="msapplication-starturl" content={APP_URL} />

        {/* ── Geo targeting ── */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.country" content="India" />
        <meta name="language" content="English" />
        <meta name="content-language" content="en-IN" />

        {/* ── Dublin Core metadata (read by academic crawlers & AI) ── */}
        <meta name="DC.title" content={TITLE} />
        <meta name="DC.creator" content={APP_NAME} />
        <meta name="DC.description" content={DESCRIPTION} />
        <meta name="DC.publisher" content={BRAND_LEGAL} />
        <meta name="DC.identifier" content={APP_URL} />
        <meta name="DC.language" content="en" />
        <meta name="DC.subject" content="AI Trading Journal, Trading Behavior Analysis, Edgecipline" />

        {/* ── Preconnect ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* ── Analytics ── */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P59XY9TV3J"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P59XY9TV3J', {
              page_path: window.location.pathname,
              custom_map: { dimension1: 'brand_name' }
            });
            gtag('set', 'brand_name', 'Edgecipline');
          `}
        </Script>
      </head>
      <body className="antialiased font-sans">
        <Opener />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
