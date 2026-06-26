import Image from "next/image";
import Link from "next/link";

const PRODUCT = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
];

const COMPANY = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

const LEGAL = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

const SOCIALS = [
  { href: "https://twitter.com/edgecipline", label: "Twitter / X", char: "𝕏" },
  { href: "https://linkedin.com/company/edgecipline", label: "LinkedIn", char: "in" },
  { href: "https://instagram.com/edgecipline", label: "Instagram", char: "ig" },
  { href: "https://youtube.com/@edgecipline", label: "YouTube", char: "▶" },
];

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8b95aa] mb-4">
        {title}
      </div>
      <ul className="flex flex-col gap-3">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-[13px] text-white/50 hover:text-white transition-colors duration-200"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] px-6 md:px-9 pt-16 pb-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Image
                src="/logo.png"
                alt="Edgecipline"
                width={28}
                height={28}
                className="object-contain"
              />
              <span className="font-bold text-[15px] text-white tracking-tight">Edgecipline</span>
            </Link>
            <p className="text-[13px] text-[#8b95aa] leading-relaxed mb-5 max-w-[200px]">
              Track behavior, not just P&L. The AI trading journal for disciplined traders.
            </p>
            <div className="flex items-center gap-2">
              {SOCIALS.map(({ href, label, char }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full border border-white/[0.1] flex items-center justify-center text-[10px] font-bold text-white/40 hover:border-[rgba(0,255,178,0.4)] hover:text-[#00ffb2] transition-all duration-200"
                >
                  {char}
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Product" links={PRODUCT} />
          <FooterCol title="Company" links={COMPANY} />
          <FooterCol title="Legal" links={LEGAL} />
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.05] pt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className="font-mono text-[11px] tracking-[0.08em] text-white/25">
            © 2026 Edgecipline Technologies. All rights reserved.
          </span>
          <span className="font-mono text-[10px] text-white/20 max-w-xs sm:text-right leading-relaxed">
            Past performance ≠ future results. Trading involves substantial risk of loss and is not
            suitable for all investors.
          </span>
        </div>
      </div>
    </footer>
  );
}
