import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Edgecipline",
  description:
    "Edgecipline Privacy Policy. Learn how we collect, use, and protect your personal information including waitlist data, cookies, and analytics.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    url: "https://www.edgecipline.com/privacy",
    title: "Privacy Policy — Edgecipline",
    description: "How Edgecipline collects, uses, and protects your personal information.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Edgecipline Privacy Policy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — Edgecipline",
    description: "How Edgecipline collects, uses, and protects your personal information.",
    images: ["/opengraph-image"],
  },
};

const LAST_UPDATED = "January 2026";
const CONTACT_EMAIL = "support@edgecipline.com";
const APP_URL = "https://www.edgecipline.com";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-[18px] font-bold text-white mb-4">{title}</h2>
      <div className="text-[14px] text-[#8b95aa] leading-[1.9] flex flex-col gap-3">{children}</div>
    </div>
  );
}

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="font-mono text-[11px] text-[#8b95aa]">Last updated: {LAST_UPDATED}</p>
          </div>
        </section>

        <article className="px-5 md:px-9 pb-24 border-t border-white/[0.05] pt-12">
          <div className="max-w-3xl mx-auto">

            <Section title="1. Introduction">
              <p>
                Welcome to Edgecipline (&quot;Edgecipline&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). We are committed to
                protecting your personal information and your right to privacy. This Privacy Policy
                explains how we collect, use, and safeguard your information when you visit our website
                at {APP_URL} and join our waitlist.
              </p>
              <p>
                Edgecipline is currently in pre-launch mode. The primary data collection on this site is
                for our waitlist program. This policy governs that pre-launch data collection and will be
                updated when the full product launches.
              </p>
            </Section>

            <Section title="2. Information We Collect">
              <p>
                <strong className="text-white/80">Waitlist registration data:</strong> When you join
                our waitlist, we collect your email address, phone number, and trading experience level.
                This information is required to add you to the waitlist and notify you when we launch.
              </p>
              <p>
                <strong className="text-white/80">Contact form data:</strong> If you contact us via our
                contact form, we collect your name, email address, the subject of your message, and the
                message content.
              </p>
              <p>
                <strong className="text-white/80">Analytics data:</strong> We use Google Analytics to
                understand how visitors interact with our website. This may include your IP address,
                browser type, device type, pages visited, and time spent on pages. This data is
                aggregated and anonymized.
              </p>
              <p>
                <strong className="text-white/80">Cookies:</strong> We use essential cookies to ensure
                our website functions correctly (e.g., remembering if you&apos;ve already joined the
                waitlist). Analytics cookies are set by Google Analytics. You can opt out of analytics
                cookies through your browser settings or by using Google&apos;s opt-out tools.
              </p>
            </Section>

            <Section title="3. How We Use Your Information">
              <p>We use the information we collect to:</p>
              <ul className="list-none flex flex-col gap-2">
                {[
                  "Send you notifications when Edgecipline launches or early access becomes available",
                  "Respond to your contact form inquiries",
                  "Understand our user base and improve our product planning",
                  "Analyze website traffic and user behavior to improve the website",
                  "Comply with legal obligations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-[9px] w-3 h-px bg-[rgba(0,255,178,0.4)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                We will never sell your personal information to third parties or use it for purposes not
                described in this policy without your consent.
              </p>
            </Section>

            <Section title="4. Data Storage & Security">
              <p>
                Your waitlist and contact data is stored in Firebase Firestore, a Google Cloud service
                with enterprise-grade security. All data is encrypted in transit (TLS/SSL) and at rest.
              </p>
              <p>
                We retain waitlist data until you request deletion or until 12 months after our product
                launches, whichever comes first. Contact form data is retained for 6 months for customer
                service purposes.
              </p>
            </Section>

            <Section title="5. Third-Party Services">
              <p>We use the following third-party services that may process your data:</p>
              <ul className="list-none flex flex-col gap-2">
                {[
                  "Google Analytics — Website analytics and usage statistics",
                  "Firebase / Google Cloud — Data storage and hosting",
                  "Google Tag Manager — Tag management for analytics",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-[9px] w-3 h-px bg-[rgba(0,255,178,0.4)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                Each of these services has their own privacy policies. We recommend reviewing them if
                you have concerns about how they process your data.
              </p>
            </Section>

            <Section title="6. Email Communications">
              <p>
                By joining the waitlist, you consent to receive emails from Edgecipline regarding product
                launch updates, early access invitations, and related announcements. You can unsubscribe
                at any time by clicking the unsubscribe link in any email or by contacting us at{" "}
                {CONTACT_EMAIL}.
              </p>
              <p>
                We do not send marketing emails to contact form submitters unless they separately join
                the waitlist.
              </p>
            </Section>

            <Section title="7. Your Rights">
              <p>You have the following rights regarding your personal data:</p>
              <ul className="list-none flex flex-col gap-2">
                {[
                  "Access: Request a copy of the data we hold about you",
                  "Correction: Request correction of inaccurate data",
                  "Deletion: Request deletion of your personal data",
                  "Opt-out: Unsubscribe from communications at any time",
                  "Portability: Request your data in a portable format",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-[9px] w-3 h-px bg-[rgba(0,255,178,0.4)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                To exercise any of these rights, email us at{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-[#00ffb2] hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
                . We will respond within 30 days.
              </p>
            </Section>

            <Section title="8. Children's Privacy">
              <p>
                Edgecipline is not intended for children under 18. We do not knowingly collect personal
                information from individuals under 18 years of age. If you believe we have inadvertently
                collected such information, please contact us immediately.
              </p>
            </Section>

            <Section title="9. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. When we do, we will update the
                &quot;Last updated&quot; date at the top of this page. We encourage you to review this policy
                periodically. Continued use of our website after changes constitutes acceptance of the
                updated policy.
              </p>
            </Section>

            <Section title="10. Contact Us">
              <p>
                If you have questions or concerns about this Privacy Policy or our data practices, please
                contact us:
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
                <p>Website: {APP_URL}</p>
              </div>
            </Section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
