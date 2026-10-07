// ─────────────────────────────────────────────────────────────────────────────
// BRAND ENTITY — single source of truth
// Used by: root layout metadata + JSON-LD, robots.ts, sitemap.ts, and every
// page schema that points back at the Organization / WebSite / Brand nodes.
//
// "Edgecipline" is a coined brand name (Edge + discipline). It is NOT a
// misspelling of "discipline". Search engines stop "correcting" a coined name
// once they see one consistent entity: the same name, URL, logo and @id on
// every page, cross-confirmed by the social profiles listed in SOCIAL_PROFILES.
// Never put the word "discipline" in a name / alternateName field.
// ─────────────────────────────────────────────────────────────────────────────

/** Canonical host. The apex domain 308-redirects here (see next.config.ts). */
export const SITE_URL = "https://www.edgecipline.com";

/** Primary name — matches the casing used in the visible site copy. */
export const BRAND_NAME = "Edgecipline";

/** All-caps wordmark form plus product variants people type into search. */
export const BRAND_ALTERNATE_NAMES = [
  "EDGECIPLINE",
  "Edgecipline App",
  "Edgecipline Trading Journal",
];

/** WebSite alternates feed Google's "site name" — keep them short. */
export const SITE_ALTERNATE_NAMES = ["EDGECIPLINE", "edgecipline.com"];

/**
 * Default <title>. It opens with the exact coined token followed by a pipe, so
 * it reads as a proper noun rather than a query to spell-correct.
 */
export const SITE_TITLE =
  "Edgecipline | AI Trading Journal, Trading DNA & Gamified Growth for Traders";
export const SITE_DESCRIPTION =
  "Edgecipline is more than a trading journal — it's an AI discipline coach and gamified improvement system for Forex and Indian market traders. Upload a screenshot — AI reveals your Trading DNA, calculates the real cost of emotional trades, and coaches you daily with missions, streaks, and a morning mentor. Join 847+ traders.";

export const BRAND_SLOGAN = "Track behavior, not just P&L.";
export const BRAND_ETYMOLOGY =
  "Edgecipline is a coined brand name, a portmanteau of 'Edge' and 'discipline'. It is spelled E-D-G-E-C-I-P-L-I-N-E and is not a misspelling of 'discipline'.";

export const CONTACT_EMAIL = "support@edgecipline.com";
export const TWITTER_HANDLE = "@edgecipline";
export const LOGO_URL = `${SITE_URL}/logo.png`;

/**
 * Profiles listed in schema `sameAs`. Only list profiles that exist, are
 * public, and link back to edgecipline.com. A dead or unrelated profile weakens
 * entity matching instead of helping it. These four are the ones the site
 * itself links to (footer + contact page).
 */
export const SOCIAL_PROFILES = [
  "https://twitter.com/edgecipline",
  "https://www.linkedin.com/company/edgecipline",
  "https://www.instagram.com/edgecipline",
  "https://www.youtube.com/@edgecipline",
];

// Stable JSON-LD node ids. Every page references these instead of re-declaring
// an anonymous Organization, so crawlers merge everything into one entity.
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const BRAND_ID = `${SITE_URL}/#brand`;
export const SOFTWARE_ID = `${SITE_URL}/#software`;
