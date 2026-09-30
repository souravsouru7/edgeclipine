"use client";

import { useRef } from "react";
import DemoVideoDialog, { type DemoVideoDialogHandle } from "./DemoVideoDialog";

interface FooterDemoTriggerProps {
  className?: string;
}

// Section 10 footer "Watch the demo" row. Same amber play mark as before, now a
// real button that opens the shared demo-video dialog.
export default function FooterDemoTrigger({ className }: FooterDemoTriggerProps) {
  const demoRef = useRef<DemoVideoDialogHandle>(null);

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        onClick={() => demoRef.current?.open()}
        className={className}
      >
        <span aria-hidden="true" className="relative size-[max(28px,calc(var(--spacing)*52))] shrink-0">
          <span className="entry-glint absolute -inset-1/3 rounded-full bg-[radial-gradient(circle,rgba(255,190,90,0.55),transparent_65%)] opacity-0 [--entry-delay:400ms]" />
          <svg viewBox="0 0 64 64" className="relative size-full" fill="none">
            <circle cx="32" cy="32" r="24" fill="#130F08" fillOpacity={0.6} stroke="#FFCB64" strokeWidth={2} />
            <path d="m28 23 14 9-14 9z" fill="#FFF7E9" />
          </svg>
        </span>
        Watch the demo
      </button>

      <DemoVideoDialog ref={demoRef} />
    </>
  );
}
