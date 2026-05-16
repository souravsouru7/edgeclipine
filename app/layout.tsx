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

const APP_URL = "https://www.edgeclipine.com";
const APP_NAME = "Edgeclipine";
const TITLE = "Edgeclipine | AI Trading Journal & Behavior Analysis";
const DESCRIPTION =
  "Edgeclipine is the first AI trading journal that tracks your behavior, not just your P&L. Upload a screenshot — AI reveals the emotional patterns sabotaging your consistency. Join 847+ traders.";

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),

  title: {
    default: TITLE,
    template: `%s | ${APP_NAME}`,
  },
  description: DESCRIPTION,

  keywords: [
    "AI trading journal",
    "trading behavior analysis",
    "stock market journal app",
    "trading psychology software",
    "trading discipline tool",
    "options trading journal",
    "NIFTY trading journal",
    "trade tracking app India",
    "trading consistency",
    "emotional trading analysis",
    "trading mistake tracker",
    "AI trading coach",
    "trading performance analytics",
    "screenshot trading journal",
    "best trading journal 2025",
  ],

  authors: [{ name: APP_NAME, url: APP_URL }],
  creator: APP_NAME,
  publisher: "Edgeclipine Technologies",

  alternates: {
    canonical: "/",
  },

  manifest: "/manifest.webmanifest",

  // ── Google Search Console verification ──
  // Replace the content value with your actual verification code from
  // https://search.google.com/search-console → Add property → HTML tag method
  verification: {
    google: "REPLACE_WITH_YOUR_GOOGLE_VERIFICATION_CODE",
  },

  // ── Open Graph ──
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
        alt: `${APP_NAME} — AI Trading Journal`,
        type: "image/png",
      },
    ],
    locale: "en_US",
  },

  // ── Twitter / X ──
  twitter: {
    card: "summary_large_image",
    site: "@edgeclipine",
    creator: "@edgeclipine",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph-image"],
  },

  // ── Icons ──
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: [{ url: "/logo.png", sizes: "180x180" }],
  },

  // ── Apple Web App ──
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: APP_NAME,
    startupImage: "/logo.png",
  },

  // ── Misc ──
  formatDetection: { telephone: false },
  category: "finance",
  classification: "Trading Software",

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

// ── Structured Data ──
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: APP_NAME,
  url: APP_URL,
  logo: `${APP_URL}/logo.png`,
  sameAs: [],
  description: DESCRIPTION,
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: APP_NAME,
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  description:
    "AI trading journal that analyzes behavioral patterns and emotional decisions to improve trading consistency.",
  url: APP_URL,
  screenshot: `${APP_URL}/opengraph-image`,
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
    name: "Edgeclipine Technologies",
    url: APP_URL,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: APP_NAME,
  url: APP_URL,
  description: DESCRIPTION,
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${APP_URL}/?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Edgeclipine?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Edgeclipine is an AI-powered trading journal that tracks your trading behavior, not just your P&L. Simply upload a screenshot of your trade and the AI automatically extracts the details and reveals your emotional patterns and execution mistakes.",
      },
    },
    {
      "@type": "Question",
      name: "How does the AI trading journal work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Take a screenshot of your trade terminal after any trade. Edgeclipine's AI reads the screenshot to extract pair, direction, entry, exit, P&L, lot size, and time. It then analyzes your behavioral patterns over time and delivers personalized weekly AI coaching reports.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Edgeclipine different from other trading journals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most trading journals only track P&L. Edgeclipine is the first journal that focuses on your behavior — detecting emotional leakage, revenge trading patterns, bad time-of-day habits, and setup delusions that traditional journals miss.",
      },
    },
    {
      "@type": "Question",
      name: "How much does Edgeclipine cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Edgeclipine offers three plans: Standard at ₹149/month, Professional at ₹249 for 3 months (~₹2.76/day), and Ultimate at ₹449 for 6 months (~₹2.47/day). All plans include AI screenshot extraction and unlimited trade journaling.",
      },
    },
    {
      "@type": "Question",
      name: "Is Edgeclipine suitable for Indian stock market traders?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Edgeclipine is built with Indian traders in mind. It supports NIFTY, BANKNIFTY, options, futures, and equity trades. The pricing is in INR and the insights are tailored for Indian market hours and instruments.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P59XY9TV3J"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P59XY9TV3J', { page_path: window.location.pathname });
          `}
        </Script>
      </head>
      <body className="antialiased font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
