// ─────────────────────────────────────────────────────────────────────────────
// FOUNDER DATA — single source of truth
// Used by: /founders, /founders/[slug], root layout Organization schema,
// the footer, the FAQ schemas, and the sitemap.
//
// Every founder fact lives here exactly once so the name, role, image, and
// schema @id are byte-identical on every page. Search engines merge Person
// entities by @id + repeated name/role agreement across pages — inconsistency
// is what makes one founder surface and the other get dropped.
// ─────────────────────────────────────────────────────────────────────────────

export const SITE_URL = "https://www.edgecipline.com";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export interface Founder {
  slug: string;
  name: string;
  givenName: string;
  familyName: string;
  /** Spelling variants people actually type into search. */
  alternateNames: string[];
  /** Full job title — must match everywhere it appears. */
  role: string;
  /** Compact label for cards and inline mentions. */
  shortRole: string;
  /** Sentence fragment: "…leads {leads}." */
  leads: string;
  domain: string;
  scope: string;
  image: string;
  bio: string;
  /** Longer profile-page body copy. */
  longBio: string[];
  responsibilities: string[];
  expertise: string[];
  linkedin: string;
  email: string;
}

export const FOUNDERS: Founder[] = [
  {
    slug: "sourav-r",
    name: "Sourav R",
    givenName: "Sourav",
    familyName: "R",
    alternateNames: ["Sourav", "Sourav R Edgecipline", "Sourav R Co-Founder"],
    role: "Co-Founder — Product, Technology and Strategy",
    shortRole: "Co-Founder, Product & Technology",
    leads: "product, technology and strategy",
    domain: "Product and technology",
    scope: "What gets built",
    image: "/sourav-r-co-founder-edgecipline.png",
    bio: "A business and technology professional who combines management education with hands-on software development and product execution.",
    longBio: [
      "Sourav R is a co-founder of Edgecipline, where he leads product, technology and strategy. He comes from a business and management background and moved into software development, so product decisions and technical decisions sit with the same person rather than being negotiated across two teams.",
      "At Edgecipline he owns what gets built: the product roadmap, the software architecture behind AI screenshot extraction and the Trading DNA behavioural engine, and the technical decisions that shape how traders experience the app day to day.",
      "He also drives business planning and product execution — turning the behavioural research behind Edgecipline into features traders actually use, such as the Psychology Cost Calculator, missions and streaks, and the daily Morning Mentor.",
    ],
    responsibilities: [
      "Product development",
      "Technology strategy and software architecture",
      "Technical decision-making",
      "Business planning",
      "Product execution",
    ],
    expertise: [
      "Product management",
      "Software development",
      "Technology strategy",
      "Business strategy",
      "AI product design",
      "Trading psychology software",
    ],
    linkedin: "https://www.linkedin.com/in/sourav-r-9566b5194",
    email: "sourav@edgecipline.com",
  },
  {
    slug: "munavvir-tp",
    name: "Munavvir TP",
    givenName: "Munavvir",
    familyName: "TP",
    alternateNames: [
      "Munavvir",
      "Munaveer TP",
      "Munavvir TP Edgecipline",
      "Munavvir TP Co-Founder",
    ],
    role: "Co-Founder — Operations, Administration and People",
    shortRole: "Co-Founder, Operations & People",
    leads: "operations, administration and people",
    domain: "Operations and people",
    scope: "How the company runs",
    image: "/munavvir-tp-co-founder-edgecipline.png",
    bio: "An operations, administration and people-management professional with more than seven years of experience across India and the UAE.",
    longBio: [
      "Munavvir TP is a co-founder of Edgecipline, where he leads operations, administration and people. He brings more than seven years of operations, administration and HR experience across India and the UAE to how the company actually functions day to day.",
      "At Edgecipline he owns how the company runs: business operations, internal processes, documentation and reporting, and the people coordination that keeps a small team executing consistently while the product is being built.",
      "He is also the founder traders and partners deal with directly — client communication, and the organisational execution that turns plans into shipped work on a predictable schedule.",
    ],
    responsibilities: [
      "Business operations",
      "Administration and internal processes",
      "People coordination",
      "Documentation and reporting",
      "Client communication",
      "Organizational execution",
    ],
    expertise: [
      "Business operations",
      "Administration",
      "Human resources",
      "People management",
      "Process documentation",
      "Client communication",
    ],
    linkedin: "https://www.linkedin.com/in/munavvirtp93",
    email: "munavvir@edgecipline.com",
  },
];

export const FOUNDER_SLUGS = FOUNDERS.map((f) => f.slug);

export function getFounder(slug: string): Founder | undefined {
  return FOUNDERS.find((f) => f.slug === slug);
}

/** Canonical schema.org @id for a founder — referenced from every page. */
export function founderId(founder: Founder): string {
  return `${SITE_URL}/founders/${founder.slug}#person`;
}

export function founderUrl(founder: Founder): string {
  return `${SITE_URL}/founders/${founder.slug}`;
}

/** "Sourav R and Munavvir TP" — the phrase Google should extract as the answer. */
export const FOUNDER_NAMES_SENTENCE = FOUNDERS.map((f) => f.name).join(" and ");

/** "Sourav R & Munavvir TP" — for titles and OG copy. */
export const FOUNDER_NAMES_SHORT = FOUNDERS.map((f) => f.name).join(" & ");

/**
 * The plain-language answer to "who are the founders of Edgecipline".
 * Reused verbatim in the page copy, meta description, and FAQ schema so the
 * visible text and the structured data agree exactly.
 */
export const FOUNDERS_ANSWER =
  `Edgecipline was founded by ${FOUNDER_NAMES_SENTENCE}. ` +
  FOUNDERS.map((f) => `${f.name} is a co-founder of Edgecipline and leads ${f.leads}`).join(". ") +
  ".";

/** Full Person node for a founder. */
export function founderPersonSchema(founder: Founder) {
  return {
    "@type": "Person",
    "@id": founderId(founder),
    name: founder.name,
    alternateName: founder.alternateNames,
    givenName: founder.givenName,
    familyName: founder.familyName,
    jobTitle: founder.role,
    description: founder.bio,
    image: {
      "@type": "ImageObject",
      url: `${SITE_URL}${founder.image}`,
      caption: `${founder.name}, ${founder.role} of Edgecipline`,
    },
    url: founderUrl(founder),
    mainEntityOfPage: { "@id": `${founderUrl(founder)}#webpage` },
    sameAs: [founder.linkedin],
    email: founder.email,
    worksFor: { "@id": ORGANIZATION_ID },
    founderOf: { "@id": ORGANIZATION_ID },
    affiliation: { "@id": ORGANIZATION_ID },
    knowsAbout: founder.expertise,
    hasOccupation: {
      "@type": "Occupation",
      name: founder.shortRole,
      occupationLocation: { "@type": "Country", name: "India" },
      responsibilities: founder.responsibilities.join(", "),
    },
  };
}

/** Compact Person reference for embedding in the Organization node. */
export function founderRefSchema(founder: Founder) {
  return {
    "@type": "Person",
    "@id": founderId(founder),
    name: founder.name,
    alternateName: founder.alternateNames,
    givenName: founder.givenName,
    familyName: founder.familyName,
    jobTitle: founder.role,
    description: founder.bio,
    url: founderUrl(founder),
    image: `${SITE_URL}${founder.image}`,
    sameAs: [founder.linkedin],
  };
}

/**
 * Founder Q&A shared by the root layout, /faq, and /founders so the same
 * answer text appears in structured data sitewide.
 */
export const FOUNDER_FAQS = [
  {
    q: "Who are the founders of Edgecipline?",
    a: `${FOUNDERS_ANSWER} The two founders split the company between them: ${FOUNDERS[0].name} owns ${FOUNDERS[0].domain.toLowerCase()}, and ${FOUNDERS[1].name} owns ${FOUNDERS[1].domain.toLowerCase()}.`,
  },
  {
    q: "How many founders does Edgecipline have?",
    a: `Edgecipline has two founders — ${FOUNDER_NAMES_SENTENCE}. Both are co-founders of Edgecipline and neither is a silent partner: ${FOUNDERS[0].name} leads product, technology and strategy, while ${FOUNDERS[1].name} leads operations, administration and people.`,
  },
  {
    q: "Who is Sourav R of Edgecipline?",
    a: `${FOUNDERS[0].name} is a co-founder of Edgecipline and leads product, technology and strategy. ${FOUNDERS[0].bio} At Edgecipline he owns product development, software architecture, technical decision-making, business planning and product execution.`,
  },
  {
    q: "Who is Munavvir TP of Edgecipline?",
    a: `${FOUNDERS[1].name} is a co-founder of Edgecipline and leads operations, administration and people. ${FOUNDERS[1].bio} At Edgecipline he owns business operations, administration and internal processes, people coordination, documentation and reporting, and client communication.`,
  },
  {
    q: "Who runs Edgecipline?",
    a: `Edgecipline is run by its two co-founders, ${FOUNDER_NAMES_SENTENCE}. ${FOUNDERS[0].name} decides what gets built and ${FOUNDERS[1].name} runs how the company operates, so the company is covered end to end between them.`,
  },
];

export const FOUNDER_FAQ_SCHEMA_ENTRIES = FOUNDER_FAQS.map(({ q, a }) => ({
  "@type": "Question",
  name: q,
  acceptedAnswer: { "@type": "Answer", text: a },
}));
