"use client";

import Link from "next/link";
import { useRef } from "react";
import { WAITLIST_HREF } from "@/lib/nav";
import { cn } from "@/lib/utils";
import HeroDemoTexture from "./HeroDemoTexture";

interface HeroDemoButtonProps {
  className?: string;
}

// "Watch Demo" tile of the mobile hero. The project has no demo video yet, so
// the tile opens an honest coming-soon dialog that points to the waitlist.
// Swap the dialog body for a <video> once the demo exists.
export default function HeroDemoButton({ className }: HeroDemoButtonProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const close = () => dialogRef.current?.close();

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        onClick={() => dialogRef.current?.showModal()}
        className={cn(
          "group flex min-h-[44px] items-center overflow-hidden rounded-[calc(var(--spacing)*18)] border border-[#2fd79a]/70 bg-[#03110e]/60 text-left shadow-[0_0_calc(var(--spacing)*34)_rgba(47,215,154,0.16),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md transition-colors duration-200 hover:border-[#41f5af] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#41f5af]",
          className,
        )}
      >
        <HeroDemoTexture />
        <svg viewBox="0 0 80 80" aria-hidden="true" className="relative ml-34 size-70 shrink-0">
          <circle cx="40" cy="40" r="37" fill="#001D1B" fillOpacity=".6" stroke="#30EBA6" strokeWidth="2" />
          <path d="M32 26 54 40 32 54Z" fill="#41F5AF" />
        </svg>
        <span className="relative ml-36 text-[length:max(12px,calc(var(--spacing)*27))] font-semibold tracking-[-0.01em] text-white">
          Watch Demo
        </span>
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby="demo-dialog-title"
        onClick={(e) => e.target === e.currentTarget && close()}
        className="m-auto w-[min(22rem,calc(100vw-2rem))] rounded-3xl border border-[rgba(0,255,178,0.25)] bg-[#0b0f19] p-0 text-white shadow-[0_0_80px_rgba(0,255,178,0.1)] [--spacing:0.25rem] backdrop:bg-black/80 backdrop:backdrop-blur-md"
      >
        <div className="px-7 py-8">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#00ffb2]">Coming soon</p>
          <h2 id="demo-dialog-title" className="mb-2.5 text-[22px] leading-tight text-white">
            The demo video isn&apos;t ready yet.
          </h2>
          <p className="mb-6 text-[13px] leading-relaxed text-[#8b95aa]">
            We&apos;re still recording the walkthrough. Join the waitlist and we&apos;ll send it to you as soon as
            it&apos;s live.
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
