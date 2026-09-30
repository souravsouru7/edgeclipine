"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";
import HeroDemoTexture from "./HeroDemoTexture";
import DemoVideoDialog, { type DemoVideoDialogHandle } from "./DemoVideoDialog";

interface HeroDemoButtonProps {
  className?: string;
}

// "Watch Demo" tile of the mobile hero. Opens the shared demo-video dialog.
export default function HeroDemoButton({ className }: HeroDemoButtonProps) {
  const demoRef = useRef<DemoVideoDialogHandle>(null);

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        onClick={() => demoRef.current?.open()}
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

      <DemoVideoDialog ref={demoRef} />
    </>
  );
}
