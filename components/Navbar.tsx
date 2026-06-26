"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const lastYRef = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setHidden(y > lastYRef.current && y > 80);
      setScrolled(y > 20);
      lastYRef.current = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${scrolled || open ? "bg-[rgba(5,8,15,0.92)] backdrop-blur-md border-b border-white/[0.05]" : ""}`}
    >
      <nav
        className="flex items-center justify-between px-5 md:px-9 py-4 max-w-7xl mx-auto"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-3" aria-label="Edgecipline home">
          <Image
            src="/logo.png"
            alt="Edgecipline"
            width={34}
            height={34}
            className="object-contain"
            priority
          />
          <span className="font-bold text-[16px] text-white tracking-tight">Edgecipline</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-[13px] font-medium transition-colors duration-200 ${
                isActive(href) ? "text-white" : "text-[#8b95aa] hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/#cta"
            className="bg-[#00ffb2] hover:bg-[#00e09e] text-[#060910] font-bold text-[12px] uppercase tracking-[0.1em] px-4 py-2.5 rounded-full transition-colors duration-200 animate-btn-glow"
          >
            Join Waitlist
          </Link>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center items-end gap-[5px] w-7 h-7"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span
              className={`block h-px bg-white transition-all duration-200 origin-right ${
                open ? "w-6 rotate-[-45deg] translate-y-[3px]" : "w-6"
              }`}
            />
            <span
              className={`block h-px bg-white/50 transition-all duration-200 ${
                open ? "opacity-0 w-0" : "w-4"
              }`}
            />
            <span
              className={`block h-px bg-white transition-all duration-200 origin-right ${
                open ? "w-6 rotate-[45deg] -translate-y-[3px]" : "w-5"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-white/[0.06] px-5 pt-5 pb-7 flex flex-col gap-4 bg-[rgba(5,8,15,0.96)]">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-[15px] font-medium py-1 transition-colors duration-200 ${
                isActive(href) ? "text-[#00ffb2]" : "text-white/70 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="mt-2 pt-4 border-t border-white/[0.06]">
            <Link
              href="/#cta"
              className="block w-full text-center bg-[#00ffb2] text-[#060910] font-bold text-[13px] uppercase tracking-[0.1em] py-3.5 rounded-xl transition-colors duration-200"
            >
              Join Waitlist →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
