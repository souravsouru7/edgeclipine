// Plan summary for the mobile pricing scene (Section 09). Source of truth is
// PLANS / COMPARE_ROWS in app/pricing/page.tsx; keep the two in sync when
// prices or entitlements change. Groups combine COMPARE_ROWS as follows:
//   Trade review        = journals, AI extraction, analytics      → all plans
//   Coaching & missions = AI Coach & Mentor, missions & streaks,
//                         psychology cost calculator, tilt alerts → Professional+
//   Trading DNA         = DNA & pattern detection, self-awareness → Ultimate

export type PlanId = "standard" | "professional" | "ultimate";

export interface PlanTier {
  id: PlanId;
  name: string;
  price: string;
  /** Billing term shown under the price. */
  term: string;
  /** The plan the site features ("Most Popular"). */
  featured: boolean;
}

export const PLAN_TIERS: PlanTier[] = [
  { id: "standard", name: "Standard", price: "₹349", term: "Monthly", featured: false },
  { id: "professional", name: "Professional", price: "₹899", term: "3 months", featured: true },
  { id: "ultimate", name: "Ultimate", price: "₹1,499", term: "6 months", featured: false },
];

export type PlanFeatureIcon = "trade-review" | "coaching" | "trading-dna";

export interface PlanFeatureGroup {
  icon: PlanFeatureIcon;
  title: string;
  description: string;
  includedIn: PlanId[];
}

export const PLAN_FEATURE_GROUPS: PlanFeatureGroup[] = [
  {
    icon: "trade-review",
    title: "Trade review",
    description: "Journals, AI extraction and analytics.",
    includedIn: ["standard", "professional", "ultimate"],
  },
  {
    icon: "coaching",
    title: "Coaching & missions",
    description: "AI Coach, missions, streaks and tilt alerts.",
    includedIn: ["professional", "ultimate"],
  },
  {
    icon: "trading-dna",
    title: "Trading DNA",
    description: "Pattern detection and your self-awareness score.",
    includedIn: ["ultimate"],
  },
];
