"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastY = typeof window !== "undefined" ? window.scrollY : 0;
  const lastYRef = { current: lastY };

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${scrolled ? "bg-[rgba(5,8,15,0.85)] backdrop-blur-md border-b border-white/[0.05]" : ""}`}
    >
      <nav className="flex items-center justify-between px-5 md:px-9 py-5 max-w-7xl mx-auto" aria-label="Main navigation">
        <Link href="#hero" className="flex items-center gap-3 group" aria-label="Edgeclipine home">
          <Image
            src="/logo.png"
            alt="Edgeclipine"
            width={36}
            height={36}
            className="object-contain"
            priority
          />
          <span className="font-bold text-[17px] text-white tracking-tight leading-none">
            Edgeclipine
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <span className="hidden sm:inline font-mono text-[11px] tracking-[0.16em] uppercase text-[#8b95aa] border border-white/[0.08] px-3 py-1.5 rounded-full">
            Building in public — 2025
          </span>
          <Link
            href="#cta"
            className="bg-[#00ffb2] hover:bg-[#00e09e] text-[#060910] font-bold text-[12px] uppercase tracking-[0.1em] px-5 py-2.5 rounded-full transition-colors duration-200"
          >
            Join Waitlist
          </Link>
        </div>
      </nav>
    </header>
  );
}
