import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import FooterDemoTrigger from "./FooterDemoTrigger";

const LINKS = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/contact", label: "Contact" },
];

interface FinaleFooterProps {
  className?: string;
}

// Bottom of Section 10, its own EntryScope target (`data-entry`) so it plays
// as the bottom scrolls in. "Watch the demo" opens the shared demo-video dialog
// (see FooterDemoTrigger / DemoVideoDialog); its amber play mark warms once.
// Brand row + legal links over
// the dark rocks, wrapping at narrow widths. This is the home page footer on
// phones and tablets; the shared site Footer is shown on desktop.
export default function FinaleFooter({ className }: FinaleFooterProps) {
  return (
    <footer data-entry="" className={cn("entry-group flex flex-col", className)}>
      <FooterDemoTrigger className="entry-step mx-auto flex min-h-[44px] items-center gap-26 text-[length:max(12px,calc(var(--spacing)*21))] tracking-[0.14em] text-[#c9d0d2] [text-shadow:0_0_4px_#02080a,0_0_10px_#02080a,0_0_18px_#02080a] transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2ef2d6] [--entry-delay:100ms] [--entry-rise:12px]" />

      <div className="entry-step mt-auto flex flex-wrap items-center justify-between gap-x-16 gap-y-4 pt-40 pr-36 pb-56 pl-62 [--entry-delay:250ms] [--entry-rise:12px]">
        <Link href="/" className="flex min-h-[44px] items-center gap-18 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2ef2d6]">
          <Image src="/logo.png" alt="" width={56} height={56} className="size-[max(26px,calc(var(--spacing)*56))] object-contain" />
          <span className="text-[length:max(16px,calc(var(--spacing)*34))] font-bold tracking-[-0.02em] text-white">Edgecipline</span>
        </Link>
        <nav aria-label="Legal and contact">
          <ul className="flex list-none items-center">
            {LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="flex min-h-[44px] items-center rounded-sm px-[max(6px,calc(var(--spacing)*16))] font-(family-name:--font-scene-mono) text-[length:max(10px,calc(var(--spacing)*15))] uppercase tracking-[0.18em] text-[#c9d0d2] transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2ef2d6]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
