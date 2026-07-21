import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// ─────────────────────────────────────────────────────────────────────────────
// BRAND CONSTANTS
// CRITICAL: "Edgecipline" is the correct spelling — not "discipline".
// It is a coined brand name combining "Edge" + "discipline".
// ─────────────────────────────────────────────────────────────────────────────
const APP_URL = "https://www.edgecipline.com";
const APP_NAME = "Edgecipline";
const BRAND_LEGAL = "Edgecipline";
const TITLE = "Edgecipline | AI Discipline Coach, Trading DNA & Gamified Trading Growth";
const DESCRIPTION =
  "Edgecipline is more than a trading journal — it's an AI discipline coach and gamified improvement system for Forex and Indian market traders. Upload a screenshot — AI reveals your Trading DNA, calculates the real cost of emotional trades, and coaches you daily with missions, streaks, and a morning mentor. Join 847+ traders.";

// Social profiles — fill in as you create them (critical for entity recognition)
const SOCIAL_PROFILES = [
  "https://twitter.com/edgecipline",
  "https://www.linkedin.com/company/edgecipline",
  "https://www.instagram.com/edgecipline",
  "https://www.youtube.com/@edgecipline",
  "https://www.facebook.com/edgecipline",
  "https://github.com/edgecipline",
];

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

  // Replace with real code from Google Search Console → HTML tag method
  verification: {
    google: "REPLACE_WITH_YOUR_GOOGLE_VERIFICATION_CODE",
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
    site: "@edgecipline",
    creator: "@edgecipline",
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

// 1. Organization — the legal entity behind the brand
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${APP_URL}/#organization`,
  name: APP_NAME,
  legalName: BRAND_LEGAL,
  // alternateName explicitly teaches Google this IS the intended name, not a misspelling
  alternateName: ["Edgecipline", "Edgecipline App", "Edgecipline Trading Journal"],
  url: APP_URL,
  logo: {
    "@type": "ImageObject",
    url: `${APP_URL}/logo.png`,
    width: "512",
    height: "512",
  },
  // sameAs links to verified social profiles — critical for Knowledge Graph
  sameAs: SOCIAL_PROFILES,
  description: DESCRIPTION,
  foundingDate: "2024",
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
    email: "support@edgecipline.com",
    availableLanguage: ["English", "Hindi"],
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
};

// 2. Brand entity — explicitly names the brand as a proper noun
const brandSchema = {
  "@context": "https://schema.org",
  "@type": "Brand",
  "@id": `${APP_URL}/#brand`,
  name: APP_NAME,
  alternateName: "Edgecipline",
  url: APP_URL,
  logo: `${APP_URL}/logo.png`,
  slogan: "Track behavior, not just P&L.",
  description:
    "Edgecipline is a coined brand name — a portmanteau of 'Edge' and 'discipline' — representing the competitive edge gained through disciplined trading behavior, gamified daily habits, and AI coaching.",
};

// 3. SoftwareApplication — describes the product
const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${APP_URL}/#software`,
  name: APP_NAME,
  alternateName: "Edgecipline Trading Journal",
  applicationCategory: "FinanceApplication",
  applicationSubCategory: "Trading Discipline Coach",
  operatingSystem: "Web, Android",
  description:
    "Edgecipline is an AI-powered trading journal, discipline coach, and gamified improvement system. Upload a trade screenshot and AI extracts the data, generates a Trading DNA profile, calculates the real cost of emotional trades, and coaches you daily through missions, streaks, and a morning mentor — for Forex and Indian market traders alike.",
  url: APP_URL,
  screenshot: `${APP_URL}/opengraph-image`,
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
    lowPrice: "149",
    highPrice: "449",
    priceCurrency: "INR",
    offerCount: "3",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "847",
    bestRating: "5",
    worstRating: "1",
  },
  author: {
    "@type": "Organization",
    "@id": `${APP_URL}/#organization`,
    name: BRAND_LEGAL,
    url: APP_URL,
  },
  publisher: {
    "@type": "Organization",
    "@id": `${APP_URL}/#organization`,
    name: APP_NAME,
  },
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

// 4. WebSite — for sitelinks searchbox and brand authority
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${APP_URL}/#website`,
  name: APP_NAME,
  alternateName: "Edgecipline - AI Trading Journal",
  url: APP_URL,
  description: DESCRIPTION,
  inLanguage: "en-IN",
  publisher: {
    "@type": "Organization",
    "@id": `${APP_URL}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${APP_URL}/?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

// 5. WebPage — describes the homepage as a distinct entity
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${APP_URL}/#webpage`,
  url: APP_URL,
  name: TITLE,
  description: DESCRIPTION,
  isPartOf: { "@id": `${APP_URL}/#website` },
  about: { "@id": `${APP_URL}/#organization` },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: `${APP_URL}/opengraph-image`,
    width: "1200",
    height: "630",
  },
  datePublished: "2024-01-01",
  dateModified: new Date().toISOString().split("T")[0],
  inLanguage: "en-IN",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: APP_URL,
      },
    ],
  },
};

// 6. FAQPage — brand-anchored Q&A teaches AI models the correct brand name
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
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
        text: "Edgecipline offers three plans: Standard at ₹149/month, Professional at ₹249 for 3 months (~₹2.76/day), and Ultimate at ₹449 for 6 months (~₹2.47/day). All Edgecipline plans include AI screenshot extraction and unlimited trade journaling.",
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

// 7. ItemList — lists key features as structured entities
const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Edgecipline Key Features",
  description: "Core features of the Edgecipline AI trading journal",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "AI Screenshot Trade Extraction",
      url: `${APP_URL}/#features`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Trading DNA & Pattern Detection",
      url: `${APP_URL}/#features`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Psychology Cost Calculator",
      url: `${APP_URL}/#features`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Missions, Streaks & Morning Mentor",
      url: `${APP_URL}/#features`,
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Weekly AI Coaching Reports",
      url: `${APP_URL}/#features`,
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Forex, NIFTY & BANKNIFTY Support",
      url: `${APP_URL}/#features`,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={inter.variable}>
      <head>
        {/* ── Structured data (JSON-LD) ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(brandSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
