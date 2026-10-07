import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LoopSection from "@/components/LoopSection";
import StorySection from "@/components/StorySection";
import OriginSection from "@/components/OriginSection";
import ProductSection from "@/components/ProductSection";
import CoachSection from "@/components/CoachSection";
import DnaSection from "@/components/DnaSection";
import HabitsSection from "@/components/HabitsSection";
import PlansSection from "@/components/PlansSection";
import TickerBanner from "@/components/TickerBanner";
import JourneySection from "@/components/JourneySection";
import TurningPointSection from "@/components/TurningPointSection";
import DecisionSection from "@/components/DecisionSection";
import FeaturesSection from "@/components/FeaturesSection";
import BeliefsSection from "@/components/BeliefsSection";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import FinaleSection from "@/components/FinaleSection";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";
import {
  SITE_URL,
  SITE_TITLE,
  SITE_DESCRIPTION,
  ORGANIZATION_ID,
  WEBSITE_ID,
  BRAND_ID,
} from "@/lib/brand";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// Homepage-only nodes. The sitewide Organization / Brand / WebSite graph is in
// app/layout.tsx; these point at it by @id.
const HOME_FEATURES = [
  "AI Screenshot Trade Extraction",
  "Trading DNA & Pattern Detection",
  "Psychology Cost Calculator",
  "Missions, Streaks & Morning Mentor",
  "Weekly AI Coaching Reports",
  "Forex, NIFTY & BANKNIFTY Support",
];

const homeGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: SITE_TITLE,
      description: SITE_DESCRIPTION,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": ORGANIZATION_ID },
      mentions: { "@id": BRAND_ID },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
      },
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split("T")[0],
      inLanguage: "en-IN",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }],
      },
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/#features-list`,
      name: "Edgecipline Key Features",
      description: "Core features of the Edgecipline AI trading journal",
      itemListElement: HOME_FEATURES.map((name, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name,
        url: `${SITE_URL}/#features`,
      })),
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeGraph).replace(/</g, "\\u003c") }}
      />
      <Navbar variant="hero" />
      <main id="main-content">
        <HeroSection />
        {/* Phones/tablets only: scenes 02–10 directly after the mobile hero. */}
        <LoopSection />
        <StorySection />
        <OriginSection />
        <ProductSection />
        <CoachSection />
        <DnaSection />
        <HabitsSection />
        <PlansSection />
        {/* Desktop only: the original story sections, replaced below lg by the scenes above. */}
        <div className="max-lg:hidden">
          <TickerBanner />
          <JourneySection />
          <TurningPointSection />
          <DecisionSection />
          <FeaturesSection />
          <BeliefsSection />
          <TickerBanner variant="alt" />
          <PricingSection />
          <FaqSection />
        </div>
        {/* The waitlist every "Join Waitlist" link (/#cta) points to: scene 10
            (FAQ + form) below lg, the original CTA section on desktop. */}
        <div id="cta">
          <FinaleSection />
          <div className="max-lg:hidden">
            <CtaSection />
          </div>
        </div>
      </main>
      <div className="max-lg:hidden">
        <Footer />
      </div>
      <WaitlistModal />
    </>
  );
}
