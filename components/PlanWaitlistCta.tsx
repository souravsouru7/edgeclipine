import Link from "next/link";
import { WAITLIST_HREF } from "@/lib/nav";
import { cn } from "@/lib/utils";

interface PlanWaitlistCtaProps {
  className?: string;
}

// Pricing note + "Join Waitlist" pill under the plan matrix. The pill is a
// plain link to the site's waitlist form (WAITLIST_HREF → the #cta section),
// the same destination as every other "Join Waitlist"; navigation is instant,
// so there is no pending state. waitlist-border-glow.svg is reproduced as a
// CSS glow on the link itself. It fades up at 1000ms and one light band
// sweeps across it (.entry-shine); hover/focus raise it 2px with more glow.
// The note repeats the pricing page's own terms ("All prices in INR. Waitlist
// is free"), replacing the comp's untrue "launch pricing announced soon".
export default function PlanWaitlistCta({ className }: PlanWaitlistCtaProps) {
  return (
    <div className={cn("relative flex flex-col items-center", className)}>
      {/* Scrim: the light trail runs right behind the note and pill. */}
      <span aria-hidden="true" className="absolute -inset-x-30 -inset-y-50 bg-[radial-gradient(ellipse_at_center,rgba(2,7,9,0.82),rgba(2,7,9,0.5)_45%,transparent_72%)]" />
      <p className="entry-reveal relative font-(family-name:--font-scene-mono) text-[length:max(9px,calc(var(--spacing)*14))] uppercase leading-none tracking-[calc(var(--spacing)*14.4-0.6em)] text-[#c3c8ca] [text-shadow:0_0_4px_#02080a,0_0_10px_#02080a,0_0_18px_#02080a] [--entry-delay:1000ms]">
        All prices in INR · The waitlist is free
      </p>
      <Link
        href={WAITLIST_HREF}
        className="entry-reveal group relative mt-34 flex h-[max(44px,calc(var(--spacing)*95))] w-504 items-center justify-center gap-22 overflow-hidden rounded-full border-[length:max(1.5px,calc(var(--spacing)*2.5))] border-[#2cf5dc] bg-[#031816]/90 text-[length:max(14px,calc(var(--spacing)*32))] font-semibold tracking-[-0.01em] text-white shadow-[0_0_calc(var(--spacing)*22)_rgba(0,239,203,0.4),inset_0_0_calc(var(--spacing)*18)_rgba(0,239,203,0.14)] transition-[translate,box-shadow] duration-200 hover:-translate-y-[2px] hover:shadow-[0_0_calc(var(--spacing)*34)_rgba(0,239,203,0.62),inset_0_0_calc(var(--spacing)*22)_rgba(0,239,203,0.22)] focus-visible:-translate-y-[2px] focus-visible:shadow-[0_0_calc(var(--spacing)*34)_rgba(0,239,203,0.62),inset_0_0_calc(var(--spacing)*22)_rgba(0,239,203,0.22)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2cf5dc] [--entry-delay:1000ms] [--entry-dur:450ms] [--entry-rise:12px]"
      >
        <span aria-hidden="true" className="absolute inset-0 bg-[url(/scenes/pricing/contours.svg)] bg-cover opacity-50" />
        <span
          aria-hidden="true"
          className="entry-shine absolute inset-0 bg-[linear-gradient(100deg,transparent_30%,rgba(190,255,247,0.3)_50%,transparent_70%)] opacity-0 [--entry-delay:1150ms]"
        />
        <span className="relative">Join Waitlist</span>
        <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false" className="relative size-40" fill="none" stroke="#F5FFFF" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 32h42M37 18l14 14-14 14" />
        </svg>
      </Link>
    </div>
  );
}
