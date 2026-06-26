import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — Edgecipline",
  description:
    "Edgecipline Terms of Service. Read our terms of use, financial disclaimer, risk disclosure, and acceptable use policy.",
  alternates: { canonical: "/terms" },
  openGraph: {
    url: "https://www.edgecipline.com/terms",
    title: "Terms of Service — Edgecipline",
    description: "Terms of use, financial disclaimer, risk disclosure, and acceptable use policy for Edgecipline.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Edgecipline Terms of Service" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service — Edgecipline",
    description: "Terms of use, financial disclaimer, and risk disclosure for Edgecipline.",
    images: ["/opengraph-image"],
  },
};

const LAST_UPDATED = "January 2026";
const CONTACT_EMAIL = "support@edgecipline.com";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-[18px] font-bold text-white mb-4">{title}</h2>
      <div className="text-[14px] text-[#8b95aa] leading-[1.9] flex flex-col gap-3">{children}</div>
    </div>
  );
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-36 pb-12 px-5 md:px-9">
          <div className="max-w-3xl mx-auto">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8b95aa] mb-4">
              Legal
            </div>
            <h1 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight text-white mb-3">
              Terms of Service
            </h1>
            <p className="font-mono text-[11px] text-[#8b95aa]">Last updated: {LAST_UPDATED}</p>
          </div>
        </section>

        <article className="px-5 md:px-9 pb-24 border-t border-white/[0.05] pt-12">
          <div className="max-w-3xl mx-auto">

            {/* Risk disclaimer box */}
            <div className="rounded-2xl border border-[rgba(255,77,77,0.3)] bg-[rgba(255,77,77,0.05)] p-6 mb-10">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#ff8c8c] mb-3">
                Important Risk Disclaimer
              </div>
              <p className="text-[14px] text-[#8b95aa] leading-[1.85]">
                <strong className="text-white/80">Trading involves substantial risk of loss.</strong>{" "}
                Edgecipline is a journaling and analytics tool — it is NOT financial advice, investment
                advice, or a trading signal service. Past performance of any trading strategy or analysis
                does not guarantee future results. You are solely responsible for your own trading
                decisions. Never trade with money you cannot afford to lose.
              </p>
            </div>

            <Section title="1. Acceptance of Terms">
              <p>
                By accessing or using the Edgecipline website at edgecipline.com and any related services
                (collectively, the &quot;Service&quot;), you agree to be bound by these Terms of Service
                (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the Service.
              </p>
              <p>
                These Terms apply to all visitors, waitlist members, and any future users of the Service.
                Edgecipline reserves the right to update these Terms at any time. Continued use of the
                Service after changes constitutes acceptance of the updated Terms.
              </p>
            </Section>

            <Section title="2. Description of Service">
              <p>
                Edgecipline is an AI-powered trading journal and behavioral analytics platform (currently
                in pre-launch). The Service allows users to:
              </p>
              <ul className="list-none flex flex-col gap-2">
                {[
                  "Join a waitlist for early access to the Edgecipline platform",
                  "Upload screenshots of trades for AI-powered data extraction (at launch)",
                  "Track trading history, behavioral patterns, and performance analytics (at launch)",
                  "Receive personalized AI coaching reports (at launch)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-[9px] w-3 h-px bg-[rgba(0,255,178,0.4)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                The Service is currently a pre-launch marketing website. Features described on this site
                are planned for future release and may change before launch.
              </p>
            </Section>

            <Section title="3. Financial & Trading Disclaimer">
              <p>
                <strong className="text-white/80">
                  Edgecipline is NOT a financial advisor, investment advisor, or broker.
                </strong>{" "}
                Nothing on this website or in the Edgecipline platform (when launched) constitutes
                financial advice, investment recommendations, or trading signals.
              </p>
              <p>
                The behavioral analytics, AI coaching reports, and pattern detection features are
                educational tools to help traders understand their own behavior. They are not
                recommendations to buy, sell, or hold any financial instrument.
              </p>
              <p>
                All trading decisions are made solely by you. Edgecipline and its founders, employees,
                and affiliates are not responsible for any trading losses incurred while using or after
                using the Service.
              </p>
              <p>
                Past performance data shown in any Edgecipline analytics does not guarantee future
                results. All investments and trades involve risk, including the possible loss of all
                capital invested.
              </p>
            </Section>

            <Section title="4. Waitlist Terms">
              <p>
                By joining the Edgecipline waitlist, you agree to:
              </p>
              <ul className="list-none flex flex-col gap-2">
                {[
                  "Provide accurate contact information",
                  "Receive email communications from Edgecipline regarding launch updates and early access",
                  "Acknowledge that joining the waitlist does not guarantee access to the Service",
                  "Acknowledge that pricing and features are subject to change before launch",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-[9px] w-3 h-px bg-[rgba(0,255,178,0.4)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                Joining the waitlist is free and does not create any financial obligation. You may remove
                yourself from the waitlist at any time by contacting us at {CONTACT_EMAIL}.
              </p>
            </Section>

            <Section title="5. Acceptable Use">
              <p>When using the Service, you agree NOT to:</p>
              <ul className="list-none flex flex-col gap-2">
                {[
                  "Violate any applicable laws or regulations",
                  "Provide false or misleading information",
                  "Attempt to gain unauthorized access to any part of the Service",
                  "Use the Service to distribute spam or malware",
                  "Reverse engineer, copy, or reproduce any part of the Service",
                  "Use the Service for any commercial purpose without written permission",
                  "Harass or harm other users of the Service",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-[9px] w-3 h-px bg-[rgba(0,255,178,0.4)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="6. Intellectual Property">
              <p>
                All content on the Edgecipline website, including text, graphics, logos, and software, is
                the intellectual property of Edgecipline Technologies and is protected by applicable
                copyright, trademark, and other intellectual property laws.
              </p>
              <p>
                The Edgecipline name and logo are trademarks of Edgecipline Technologies. You may not use
                our trademarks without prior written permission.
              </p>
            </Section>

            <Section title="7. Subscriptions & Refunds">
              <p>
                <strong className="text-white/80">Pre-launch note:</strong> Edgecipline has not yet
                launched subscriptions. This section will be updated with full subscription terms before
                launch.
              </p>
              <p>
                When subscriptions launch, we will publish a clear refund policy. Our goal is for every
                subscriber to find value within the first 30 days. If not, we will work to make it right.
              </p>
            </Section>

            <Section title="8. Limitation of Liability">
              <p>
                To the maximum extent permitted by applicable law, Edgecipline Technologies and its
                founders, employees, and affiliates shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages, including but not limited to:
              </p>
              <ul className="list-none flex flex-col gap-2">
                {[
                  "Trading losses incurred while using or after using the Service",
                  "Loss of profits, revenue, or data",
                  "Business interruption",
                  "Any damages arising from reliance on information provided by the Service",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-[9px] w-3 h-px bg-[rgba(0,255,178,0.4)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="9. Governing Law">
              <p>
                These Terms are governed by the laws of India. Any disputes arising from these Terms or
                your use of the Service shall be subject to the exclusive jurisdiction of the courts of
                India.
              </p>
            </Section>

            <Section title="10. Contact">
              <p>
                If you have questions about these Terms, please contact us:
              </p>
              <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-6">
                <p>Edgecipline Technologies</p>
                <p>
                  Email:{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-[#00ffb2] hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </p>
              </div>
            </Section>

          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
