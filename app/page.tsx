import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TickerBanner from "@/components/TickerBanner";
import JourneySection from "@/components/JourneySection";
import TurningPointSection from "@/components/TurningPointSection";
import DecisionSection from "@/components/DecisionSection";
import FeaturesSection from "@/components/FeaturesSection";
import BeliefsSection from "@/components/BeliefsSection";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <TickerBanner />
        <JourneySection />
        <TurningPointSection />
        <DecisionSection />
        <FeaturesSection />
        <BeliefsSection />
        <TickerBanner variant="alt" />
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
      <WaitlistModal />
    </>
  );
}
