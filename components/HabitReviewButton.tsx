"use client";

import Link from "next/link";
import { useRef } from "react";
import { WAITLIST_HREF } from "@/lib/nav";
import { cn } from "@/lib/utils";

interface HabitReviewButtonProps {
  className?: string;
}

// "Review my week" on the Section 08 phone screen (600px design space, see
// HabitPhoneScreen). Weekly reviews only exist in the upcoming app, so the
// button opens an honest dialog that points to the waitlist instead of faking
// a result. An invisible extension brings the tap target past 44px at phone
// widths. The mint ring pulses once after it arrives (opacity only).
export default function HabitReviewButton({ className }: HabitReviewButtonProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const close = () => dialogRef.current?.close();

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        onClick={() => dialogRef.current?.showModal()}
        className={cn(
          "absolute flex h-118 w-508 items-center gap-40 rounded-full border-[3px] border-[#00EFCF] bg-[#021715]/90 pl-50 text-[33px] font-bold tracking-[-0.01em] text-white shadow-[0_0_28px_rgba(0,239,207,0.28),inset_0_0_18px_rgba(0,239,207,0.12)] transition-colors duration-200 after:absolute after:inset-x-0 after:-top-24 after:-bottom-120 hover:bg-[#04241f] focus-visible:outline-[10px] focus-visible:outline-offset-[10px] focus-visible:outline-[#00EFCF]",
          className,
        )}
      >
        <span aria-hidden="true" className="entry-glint pointer-events-none absolute -inset-[3px] rounded-full opacity-0 shadow-[0_0_0_5px_rgba(0,239,207,0.8),0_0_48px_12px_rgba(0,239,207,0.4)] [--entry-delay:1650ms]" />
        <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false" className="size-56 shrink-0" fill="none" stroke="#00EFCF" strokeWidth={4} strokeLinecap="round">
          <path d="M8 16h48M8 32h48M8 48h48" />
          <path d="M24 10v12M42 26v12M20 42v12" />
        </svg>
        Review my week
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby="habits-review-title"
        onClick={(e) => e.target === e.currentTarget && close()}
        className="m-auto w-[min(22rem,calc(100vw-2rem))] rounded-3xl border border-[rgba(0,255,178,0.25)] bg-[#0b0f19] p-0 text-left text-white shadow-[0_0_80px_rgba(0,255,178,0.1)] [--spacing:0.25rem] backdrop:bg-black/80 backdrop:backdrop-blur-md"
      >
        <div className="px-7 py-8">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#00ffb2]">Coming with the app</p>
          <h2 id="habits-review-title" className="mb-2.5 text-[22px] leading-tight text-white">
            Weekly reviews aren&apos;t live yet.
          </h2>
          <p className="mb-6 text-[13px] leading-relaxed text-[#8b95aa]">
            Edgecipline hasn&apos;t launched, so there&apos;s no week to review here, and anything you typed on the
            screen wasn&apos;t saved or sent. Join the waitlist to get weekly reviews when the app opens.
          </p>
          <div className="flex flex-col gap-3">
            <Link
              href={WAITLIST_HREF}
              onClick={close}
              className="block rounded-xl bg-[#00ffb2] py-3.5 text-center text-[13px] font-bold uppercase tracking-[0.1em] text-[#060910] transition-colors duration-200 hover:bg-[#00e09e]"
            >
              Join Waitlist →
            </Link>
            <button
              type="button"
              onClick={close}
              className="min-h-11 rounded-xl border border-white/10 text-[13px] font-medium text-[#8b95aa] transition-colors duration-200 hover:text-white"
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
