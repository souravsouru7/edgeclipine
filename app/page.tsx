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

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Page() {
  return (
    <>
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
