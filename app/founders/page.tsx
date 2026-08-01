import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import PageHero from "@/components/PageHero";
import FounderCard, { type Founder } from "@/components/FounderCard";

const APP_URL = "https://www.edgecipline.com";
const OG_IMAGE = [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Edgecipline — AI Trading Journal" }];

export const metadata: Metadata = {
  title: "Founders — Sourav R & Munavvir TP",
  description:
    "Edgecipline is run by two founders who cover the two halves of the business between them. Sourav R leads product, technology and strategy. Munavvir TP leads operations, administration and people.",
  alternates: { canonical: "/founders" },
  openGraph: {
    url: `${APP_URL}/founders`,
    title: "Founders — Sourav R & Munavvir TP",
    description:
      "Two founders, two halves of the business: product and technology, operations and people.",
    images: OG_IMAGE,
  },
  twitter: {
    card: "summary_large_image",
    title: "Founders — Sourav R & Munavvir TP",
    description:
      "Two founders, two halves of the business: product and technology, operations and people.",
    images: ["/opengraph-image"],
  },
};

const FOUNDERS: Founder[] = [
  {
    name: "Sourav R",
    role: "Co-Founder — Product, Technology and Strategy",
    image: "/sourav.png",
    bio: "A business and technology professional who combines management education with hands-on software development and product execution.",
    responsibilities: [
      "Product development",
      "Technology strategy and software architecture",
      "Technical decision-making",
      "Business planning",
      "Product execution",
    ],
    linkedin: "https://www.linkedin.com/in/sourav-r-9566b5194",
    email: "sourav@edgecipline.com",
  },
  {
    name: "Munavvir TP",
    role: "Co-Founder — Operations, Administration and People",
    image: "/munaveer.png",
    bio: "An operations, administration and people-management professional with more than seven years of experience across India and the UAE.",
    responsibilities: [
      "Business operations",
      "Administration and internal processes",
      "People coordination",
      "Documentation and reporting",
      "Client communication",
      "Organizational execution",
    ],
    linkedin: "https://www.linkedin.com/in/munavvirtp93",
    email: "munavvir@edgecipline.com",
  },
];

const SPLIT = [
  { name: "Sourav R", domain: "Product and technology", scope: "What gets built" },
  { name: "Munavvir TP", domain: "Operations and people", scope: "How the company runs" },
];

// ── Structured data: founders as Person entities tied to the Organization ──
const personSchemas = FOUNDERS.map((founder) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${APP_URL}/founders#${founder.name.toLowerCase().replace(/\s+/g, "-")}`,
  name: founder.name,
  jobTitle: founder.role,
  description: founder.bio,
  image: `${APP_URL}${founder.image}`,
  url: `${APP_URL}/founders`,
  sameAs: [founder.linkedin],
  email: founder.email,
  worksFor: { "@id": `${APP_URL}/#organization` },
  knowsAbout: founder.responsibilities,
}));

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${APP_URL}/founders#webpage`,
  url: `${APP_URL}/founders`,
  name: "Founders — Sourav R & Munavvir TP | Edgecipline",
  isPartOf: { "@id": `${APP_URL}/#website` },
  about: { "@id": `${APP_URL}/#organization` },
  mainEntity: personSchemas.map((person) => ({ "@id": person["@id"] })),
  inLanguage: "en-IN",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: APP_URL },
      { "@type": "ListItem", position: 2, name: "About", item: `${APP_URL}/about` },
      { "@type": "ListItem", position: 3, name: "Founders", item: `${APP_URL}/founders` },
    ],
  },
};

export default function FoundersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([...personSchemas, aboutPageSchema]) }}
      />
      <Navbar />
      <main>
        <PageHero
          badge="Leadership"
          title="Two founders,"
          highlight="two halves of the business."
          description="Edgecipline is run by two founders who cover the two halves of the business between them — one on product and technology, one on operations and people."
        />

        {/* About us */}
        <section className="py-20 px-5 md:px-9 border-t border-white/[0.05]">
          <div className="max-w-3xl mx-auto">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8b95aa] mb-6">
              About Us
            </div>
            <p className="text-[15px] text-[#8b95aa] leading-[1.9] mb-5">
              Sourav R comes from a business and management background and moved into software
              development, so product decisions and technical decisions sit with the same person.
              Munavvir TP comes from over seven years of operations, administration and HR work
              across India and the UAE, and runs how the company actually functions day to day.
            </p>
            <p className="text-[15px] text-white/70 leading-[1.9]">
              Between them the company is covered end to end: what gets built, and how the business
              runs while it&apos;s being built.
            </p>
          </div>
        </section>

        {/* Founder profiles */}
        <section className="py-20 px-5 md:px-9 border-t border-white/[0.05]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8b95aa] mb-3">
                The Founders
              </div>
              <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold leading-tight tracking-tight text-white">
                Who runs Edgecipline
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {FOUNDERS.map((founder, i) => (
                <FounderCard key={founder.name} founder={founder} priority={i === 0} />
              ))}
            </div>
          </div>
        </section>

        {/* The split */}
        <section className="py-20 px-5 md:px-9 border-t border-white/[0.05]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8b95aa] mb-3">
                The Split
              </div>
              <h2 className="text-[clamp(22px,3.5vw,36px)] font-extrabold leading-tight tracking-tight text-white">
                Clear ownership, no overlap
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {SPLIT.map(({ name, domain, scope }) => (
                <div
                  key={name}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7 hover:border-white/[0.14] transition-colors duration-300"
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8b95aa] mb-5">
                    {name}
                  </div>
                  <div className="text-[18px] font-extrabold tracking-tight text-white mb-3">
                    {domain}
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                    <span aria-hidden="true" className="w-4 h-px bg-[rgba(0,255,178,0.5)]" />
                    <span className="text-[13px] text-[#00ffb2]">{scope}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[14px] text-[#8b95aa] leading-[1.9] text-center max-w-xl mx-auto mt-10">
              Product and technology decisions sit with one founder. Operations, administration and
              people sit with the other. Between them the company is covered end to end.
            </p>
          </div>
        </section>

        {/* Company context */}
        <section className="py-16 px-5 md:px-9 border-t border-white/[0.05]">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-[clamp(20px,3vw,30px)] font-extrabold leading-tight tracking-tight text-white mb-4">
              Why the company exists
            </h2>
            <p className="text-[15px] text-[#8b95aa] leading-relaxed mb-8">
              Edgecipline was built by traders who lost money the same way most traders do — not
              from bad strategies, but from bad behavior. Read the full story behind the product.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-white/70 hover:border-[rgba(0,255,178,0.4)] hover:text-[#00ffb2] transition-colors duration-200"
            >
              Our story
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <CTABanner
          title="Join the waitlist today."
          description="Be among the first traders to access Edgecipline when we launch. Priority access for early members."
        />
      </main>
      <Footer />
    </>
  );
}
