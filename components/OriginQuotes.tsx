import { cn } from "@/lib/utils";

// The three founder quotes, each with the kit's gold index/line marker,
// waveform and grey quote mark (edgecipline-origin-section-04-assets/accents/).
// Line breaks follow the comp. Each item reveals on its own scroll view.
const QUOTES = [
  { lines: ["We kept changing", "strategies."], className: "top-931" },
  { lines: ["The pattern was", "our behavior."], className: "top-1111" },
  { lines: ["So we built a way", "to see it."], className: "top-1290" },
];

interface OriginQuotesProps {
  className?: string;
}

export default function OriginQuotes({ className }: OriginQuotesProps) {
  return (
    <ol aria-label="How Edgecipline started" className={cn("absolute inset-0 list-none", className)}>
      {QUOTES.map(({ lines, className: position }, i) => (
        <li key={lines[0]} data-scroll-start={0.48 + i * 0.12} data-scroll-end={0.66 + i * 0.12} className={cn("scene-reveal absolute left-62", position)}>
          <div aria-hidden="true" className="flex h-24 items-center">
            <span className="w-38 font-(family-name:--font-scene-mono) text-[length:max(9px,calc(var(--spacing)*19))] leading-none text-[#f3c45d]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <svg viewBox="39 0 112 24" className="h-18 w-86">
              <path d="M39 12h105" stroke="#B7893F" strokeWidth={2} />
              <circle cx="145" cy="12" r="6" fill="#F3C45D" />
            </svg>
            <svg viewBox="0 0 105 28" className="ml-22 h-24 w-88" fill="none" stroke="#7A8584" strokeWidth={1.2} strokeLinecap="round">
              <path d="M2 14v-6m6 12V4m6 18V6m6 10v-4m6 10V2m6 17V9m6 8v-6m6 12V5m6 9v-2m6 6V8m6 12V6m6 11v-6m6 9V8m6 7v-2m6 5V10m6 7v-6m6 5v-4m6 4v-4" />
            </svg>
          </div>
          <blockquote className="relative mt-20 pl-72">
            <svg viewBox="0 0 64 64" aria-hidden="true" className="absolute -left-6 -top-9 size-52">
              <path
                fill="#636D79"
                d="M28 16C15 22 8 34 8 47c0 6 3 10 9 10 7 0 11-5 11-11 0-7-4-10-11-10 1-5 5-10 13-14Zm29 0C44 22 37 34 37 47c0 6 3 10 9 10 7 0 11-5 11-11 0-7-4-10-11-10 1-5 5-10 13-14Z"
              />
            </svg>
            <p className="whitespace-nowrap text-[length:max(14px,calc(var(--spacing)*39))] font-bold leading-[1.08] tracking-[-0.01em] text-[#f4f4f2]">
              {lines.map((line, j) => (
                <span key={line} className="block">
                  {line}
                  {j < lines.length - 1 && " "}
                </span>
              ))}
            </p>
          </blockquote>
        </li>
      ))}
    </ol>
  );
}
