import { cn } from "@/lib/utils";

// Answers are the site's own FAQ copy (app/faq/FAQClient.tsx): "What is
// Edgecipline?", "How does AI screenshot extraction work?" + "What brokers and
// platforms…" + "…access to my broker account?", and "When will Edgecipline
// launch?" without its unverified waitlist count. No launch date is claimed.
const FAQS = [
  {
    q: "What is Edgecipline?",
    a: "An AI-powered trading journal, discipline coach and gamified improvement system — not just a P&L tracker. Upload a screenshot of your trade and the AI extracts the details, builds your Trading DNA profile and reveals your emotional patterns, execution mistakes and blind spots over time.",
  },
  {
    q: "How does screenshot import work?",
    a: "Take a screenshot of your trade terminal after any trade. The AI reads it and extracts the pair, direction, entry, exit, P&L, lot size and time — no manual entry. It recognises 20+ platforms, including MT4, MT5, cTrader, Zerodha, Upstox, Angel One, Dhan, Groww and Fyers, and never connects to your broker account.",
  },
  {
    q: "When will the app launch?",
    a: "Edgecipline is in private early access. Join the waitlist to get priority access when we launch publicly and to lock in early-access pricing.",
  },
];

const ROW_DELAY = ["[--entry-delay:90ms]", "[--entry-delay:180ms]", "[--entry-delay:270ms]"];

interface FinaleFaqProps {
  className?: string;
}

// Three native <details> rows sharing a `name`, so opening one closes the
// others (the site's FAQ accordions work that way too). Enter/Space come from
// <summary>; the open transition is .finale-faq in globals.css. The plus turns
// into the kit's minus by collapsing its vertical stroke.
export default function FinaleFaq({ className }: FinaleFaqProps) {
  return (
    <div className={className}>
      <h2 className="entry-step ml-62 flex items-center gap-24 whitespace-nowrap font-(family-name:--font-scene-mono) text-[length:max(9px,calc(var(--spacing)*15))] font-light! uppercase leading-none tracking-[calc(var(--spacing)*18-0.6em)]! text-[#8f989d] [--entry-rise:14px]">
        <span aria-hidden="true" className="h-[1.5px] w-46 shrink-0 bg-[#27c890]" />
        Frequent questions
      </h2>

      <div className="mt-22 ml-64 flex w-640 flex-col gap-12">
        {FAQS.map(({ q, a }, i) => (
          <details
            key={q}
            name="finale-faq"
            className={cn(
              "finale-faq group entry-step rounded-[calc(var(--spacing)*10)] border border-[#2C3A3A] bg-[#010908]/60 transition-colors duration-200 open:border-[#2c5550] [--entry-rise:14px]",
              ROW_DELAY[i],
            )}
          >
            <summary className="flex min-h-[max(44px,calc(var(--spacing)*70))] cursor-pointer list-none items-center justify-between gap-16 rounded-[inherit] py-10 pr-22 pl-26 text-[length:max(13px,calc(var(--spacing)*25))] font-medium leading-snug text-[#e9eeee] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2ef2d6] [&::-webkit-details-marker]:hidden">
              {q}
              <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false" className="size-[max(22px,calc(var(--spacing)*40))] shrink-0" fill="none" stroke="#00EDD4" strokeWidth={2.5} strokeLinecap="round">
                <circle cx="32" cy="32" r="24" strokeWidth={2} />
                <path d="M22 32h20" />
                <path d="M32 22v20" className="origin-center transition-transform duration-200 [transform-box:fill-box] group-open:scale-y-0" />
              </svg>
            </summary>
            <p className="px-26 pb-22 text-[length:max(12.5px,calc(var(--spacing)*21))] leading-[1.55] text-[#aab5b8]">{a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
