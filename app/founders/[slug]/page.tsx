import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import {
  FOUNDERS,
  FOUNDER_NAMES_SENTENCE,
  ORGANIZATION_ID,
  SITE_URL,
  WEBSITE_ID,
  founderId,
  founderPersonSchema,
  founderUrl,
  getFounder,
} from "@/lib/founders";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return FOUNDERS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const founder = getFounder(slug);
  if (!founder) return {};

  const title = `${founder.name} — Co-Founder of Edgecipline`;
  const description = `${founder.name} is a co-founder of Edgecipline and leads ${founder.leads}. ${founder.bio}`;

  return {
    title,
    description,
    keywords: [
      founder.name,
      `${founder.name} Edgecipline`,
      `${founder.name} co-founder`,
      `${founder.name} founder`,
      ...founder.alternateNames,
      "Edgecipline founders",
      "founders of Edgecipline",
    ],
    alternates: { canonical: `/founders/${founder.slug}` },
    openGraph: {
      type: "profile",
      url: founderUrl(founder),
      title,
      description,
      firstName: founder.givenName,
      lastName: founder.familyName,
      images: [
        {
          url: founder.image,
          width: 1200,
          height: 1200,
          alt: `${founder.name} — ${founder.role} of Edgecipline`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [founder.image],
    },
  };
}

export default async function FounderProfilePage({ params }: Props) {
  const { slug } = await params;
  const founder = getFounder(slug);
  if (!founder) notFound();

  const other = FOUNDERS.find((f) => f.slug !== founder.slug);

  // ── ProfilePage: Google's documented type for a page about one person ──
  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${founderUrl(founder)}#webpage`,
    url: founderUrl(founder),
    name: `${founder.name} — Co-Founder of Edgecipline`,
    description: `${founder.name} is a co-founder of Edgecipline and leads ${founder.leads}.`,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
    mainEntity: { "@context": "https://schema.org", ...founderPersonSchema(founder) },
    inLanguage: "en-IN",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Founders", item: `${SITE_URL}/founders` },
        { "@type": "ListItem", position: 3, name: founder.name, item: founderUrl(founder) },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <Navbar />
      <main>
        {/* Breadcrumb — crawlable path back to the founders hub */}
        <nav aria-label="Breadcrumb" className="pt-32 px-5 md:px-9">
          <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#8b95aa]">
            <li>
              <Link href="/" className="hover:text-white transition-colors duration-200">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/founders" className="hover:text-white transition-colors duration-200">
                Founders
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-white/60">{founder.name}</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="pt-10 pb-16 px-5 md:px-9">
          <div className="max-w-4xl mx-auto grid md:grid-cols-[260px_1fr] gap-10 items-start">
            <div className="relative aspect-square w-full max-w-[260px] overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.03]">
              <Image
                src={founder.image}
                alt={`${founder.name} — ${founder.role} of Edgecipline`}
                fill
                sizes="260px"
                priority
                className="object-cover object-center"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="w-6 h-px bg-[rgba(0,255,178,0.4)]" />
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8b95aa]">
                  Co-Founder
                </span>
              </div>
              <h1 className="text-[clamp(30px,5.5vw,54px)] font-extrabold leading-[1.05] tracking-tight text-white mb-4">
                {founder.name}
              </h1>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#00ffb2] leading-relaxed mb-6">
                {founder.role}, Edgecipline
              </p>
              <p className="text-[16px] text-white/75 leading-[1.9]">
                <strong className="font-semibold text-white">{founder.name}</strong> is a co-founder
                of Edgecipline and leads {founder.leads}.
              </p>
            </div>
          </div>
        </section>

        {/* Biography */}
        <section className="py-16 px-5 md:px-9 border-t border-white/[0.05]">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8b95aa] mb-7">
              About {founder.name}
            </h2>
            <div className="flex flex-col gap-5">
              {founder.longBio.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-[15px] text-[#8b95aa] leading-[1.9]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Responsibilities + expertise */}
        <section className="py-16 px-5 md:px-9 border-t border-white/[0.05]">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8b95aa] mb-6">
                What {founder.givenName} owns at Edgecipline
              </h2>
              <ul className="flex flex-col gap-3">
                {founder.responsibilities.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[14px] text-white/70 leading-relaxed"
                  >
                    <span
                      aria-hidden="true"
                      className="w-1.5 h-1.5 rounded-full bg-[rgba(0,255,178,0.6)] mt-[8px] flex-shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8b95aa] mb-6">
                Areas of expertise
              </h2>
              <ul className="flex flex-wrap gap-2">
                {founder.expertise.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-[12px] text-white/60"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-14 px-5 md:px-9 border-t border-white/[0.05]">
          <div className="max-w-3xl mx-auto flex flex-wrap items-center gap-4">
            <a
              href={founder.linkedin}
              target="_blank"
              rel="noopener noreferrer me"
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-white/70 hover:border-[rgba(0,255,178,0.4)] hover:text-[#00ffb2] transition-colors duration-200"
            >
              {founder.name} on LinkedIn
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href={`mailto:${founder.email}`}
              className="font-mono text-[12px] text-white/40 hover:text-white transition-colors duration-200 break-all"
            >
              {founder.email}
            </a>
          </div>
        </section>

        {/* The other founder — keeps both names on every founder page */}
        {other && (
          <section className="py-16 px-5 md:px-9 border-t border-white/[0.05]">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-[clamp(20px,3vw,30px)] font-extrabold leading-tight tracking-tight text-white mb-4">
                The other co-founder of Edgecipline
              </h2>
              <p className="text-[15px] text-[#8b95aa] leading-[1.9] mb-7">
                Edgecipline was founded by {FOUNDER_NAMES_SENTENCE}. Alongside {founder.name},{" "}
                <Link
                  href={`/founders/${other.slug}`}
                  className="text-[#00ffb2] hover:underline underline-offset-4"
                >
                  {other.name}
                </Link>{" "}
                is a co-founder of Edgecipline and leads {other.leads}.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/founders/${other.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-white/70 hover:border-[rgba(0,255,178,0.4)] hover:text-[#00ffb2] transition-colors duration-200"
                >
                  {other.name} profile
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/founders"
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-white/70 hover:border-[rgba(0,255,178,0.4)] hover:text-[#00ffb2] transition-colors duration-200"
                >
                  Both founders
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </section>
        )}

        <CTABanner
          title="Join the waitlist today."
          description="Be among the first traders to access Edgecipline when we launch. Priority access for early members."
        />
      </main>
      <Footer />
    </>
  );
}
