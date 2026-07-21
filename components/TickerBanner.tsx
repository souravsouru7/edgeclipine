const ITEMS = [
  "Year 1 of Trading",
  "Random Wins",
  "Brutal Losses",
  "No Pattern Visible",
  "Strategy Shopping",
  "The Real Enemy",
  "Psychology Kills",
  "Data Reveals Truth",
  "Building the Solution",
];

interface TickerBannerProps {
  variant?: "default" | "alt";
}

const ALT_ITEMS = [
  "Building in public",
  "2 founders · 1 mission",
  "Trading DNA · Your repeatable edge",
  "Missions & streaks · Gamified discipline",
  "Forex + Indian markets",
  "No spreadsheets",
  "No excuses",
  "Join the waitlist",
  "Trading psychology · Data · Discipline",
];

export default function TickerBanner({ variant = "default" }: TickerBannerProps) {
  const items = variant === "alt" ? ALT_ITEMS : ITEMS;
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-t border-b border-white/[0.06] py-3.5 bg-white/[0.01]">
      <div className="flex w-max animate-ticker">
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 px-7 font-mono text-[11px] tracking-[0.14em] uppercase text-[#8b95aa] whitespace-nowrap after:content-['·'] after:text-[rgba(0,255,178,0.3)] after:text-sm after:ml-2.5"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
