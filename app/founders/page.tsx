import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import PageHero from "@/components/PageHero";
import FounderCard from "@/components/FounderCard";
import {
  FOUNDERS,
  FOUNDER_FAQS,
  FOUNDER_FAQ_SCHEMA_ENTRIES,
  FOUNDER_NAMES_SENTENCE,
  FOUNDER_NAMES_SHORT,
  FOUNDERS_ANSWER,
  ORGANIZATION_ID,
  SITE_URL,
  WEBSITE_ID,
  founderId,
  founderPersonSchema,
  founderUrl,
} from "@/lib/founders";

const TITLE = `Founders of Edgecipline — ${FOUNDER_NAMES_SHORT}`;
const DESCRIPTION = `${FOUNDERS_ANSWER} Meet both co-founders of Edgecipline, what each one owns, and how they split the company between them.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "founders of Edgecipline",
    "Edgecipline founders",
    "Edgecipline co-founders",
    "who founded Edgecipline",
    "who owns Edgecipline",
    "Edgecipline founder name",
    ...FOUNDERS.flatMap((f) => [f.name, `${f.name} Edgecipline`, `${f.name} co-founder`]),
  ],
  alternates: { canonical: "/founders" },
  openGraph: {
    type: "profile",
    url: `${SITE_URL}/founders`,
    title: TITLE,
    description: `Edgecipline was founded by ${FOUNDER_NAMES_SENTENCE} — two co-founders covering product and technology, operations and people.`,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: `Edgecipline was founded by ${FOUNDER_NAMES_SENTENCE} — two co-founders covering product and technology, operations and people.`,
  },
};

// ── Structured data ──────────────────────────────────────────────────────────
// Both founders are emitted as full Person nodes, wrapped in an ItemList so no
// single founder reads as "the" founder, and cross-referenced from the
// AboutPage's mainEntity. The @ids match the Organization node in the root
// layout, which is what merges these into one entity per person.

const personSchemas = FOUNDERS.map(founderPersonSchema).map((person) => ({
  "@context": "https://schema.org",
  ...person,
}));

const founderListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE_URL}/founders#founder-list`,
  name: "Founders of Edgecipline",
  description: `The two founders of Edgecipline: ${FOUNDER_NAMES_SENTENCE}.`,
  numberOfItems: FOUNDERS.length,
  itemListOrder: "https://schema.org/ItemListUnordered",
  itemListElement: FOUNDERS.map((founder, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: founder.name,
    url: founderUrl(founder),
    item: { "@id": founderId(founder) },
  })),
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE_URL}/founders#webpage`,
  url: `${SITE_URL}/founders`,
  name: `${TITLE} | Edgecipline`,
  description: DESCRIPTION,
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": ORGANIZATION_ID },
  mainEntity: { "@id": `${SITE_URL}/founders#founder-list` },
  mentions: FOUNDERS.map((founder) => ({ "@id": founderId(founder) })),
  inLanguage: "en-IN",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
      { "@type": "ListItem", position: 3, name: "Founders", item: `${SITE_URL}/founders` },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/founders#faq`,
  mainEntity: FOUNDER_FAQ_SCHEMA_ENTRIES,
};

export default function FoundersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            ...personSchemas,
            founderListSchema,
            aboutPageSchema,
            faqSchema,
          ]),
        }}
      />
      <Navbar />
      <main>
        <PageHero
          badge="Leadership"
          title="The founders of Edgecipline are"
          highlight={FOUNDER_NAMES_SHORT}
          description={`Edgecipline has two founders. ${FOUNDERS[0].name} leads ${FOUNDERS[0].leads}. ${FOUNDERS[1].name} leads ${FOUNDERS[1].leads}.`}
        />

        {/* Direct answer — the paragraph search engines and AI assistants quote
            when asked "who are the founders of Edgecipline". Names, roles, and
            profile links all sit in the first block of body copy. */}
        <section className="pb-20 px-5 md:px-9">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-3xl border border-white/[0.07] bg-white/[0.02] px-7 md:px-10 py-9">
              <p className="text-[16px] md:text-[17px] text-white/80 leading-[1.9]">
                <strong className="font-semibold text-white">
                  Edgecipline was founded by {FOUNDER_NAMES_SENTENCE}.
                </strong>{" "}
                {FOUNDERS.map((founder, i) => (
                  <span key={founder.slug}>
                    <Link
                      href={`/founders/${founder.slug}`}
                      className="text-[#00ffb2] hover:underline underline-offset-4"
                    >
                      {founder.name}
                    </Link>{" "}
                    is a co-founder of Edgecipline and leads {founder.leads}
                    {i === FOUNDERS.length - 1 ? "." : ". "}
                  </span>
                ))}{" "}
                Both are active co-founders — one owns what gets built, the other owns how the
                company runs.
              </p>
            </div>
          </div>
        </section>

        {/* About us */}
        <section className="py-20 px-5 md:px-9 border-t border-white/[0.05]">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8b95aa] mb-6">
              About the Edgecipline founders
            </h2>
            <p className="text-[15px] text-[#8b95aa] leading-[1.9] mb-5">
              {FOUNDERS[0].name}, co-founder of Edgecipline, comes from a business and management
              background and moved into software development, so product decisions and technical
              decisions sit with the same person. {FOUNDERS[1].name}, co-founder of Edgecipline,
              comes from over seven years of operations, administration and HR work across India and
              the UAE, and runs how the company actually functions day to day.
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
                Meet {FOUNDER_NAMES_SENTENCE}
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {FOUNDERS.map((founder, i) => (
                <FounderCard key={founder.slug} founder={founder} priority={i === 0} />
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
              {FOUNDERS.map(({ slug, name, domain, scope }) => (
                <div
                  key={slug}
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

        {/* Founder FAQ — visible copy mirrors the FAQPage structured data above */}
        <section className="py-20 px-5 md:px-9 border-t border-white/[0.05]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8b95aa] mb-3">
                Founder FAQ
              </div>
              <h2 className="text-[clamp(22px,3.5vw,36px)] font-extrabold leading-tight tracking-tight text-white">
                Questions about who founded Edgecipline
              </h2>
            </div>

            <div className="flex flex-col gap-8">
              {FOUNDER_FAQS.map(({ q, a }) => (
                <div key={q} className="border-t border-white/[0.06] pt-6">
                  <h3 className="text-[15px] font-semibold text-white mb-3 leading-snug">{q}</h3>
                  <p className="text-[14px] text-[#8b95aa] leading-[1.9]">{a}</p>
                </div>
              ))}
            </div>
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
