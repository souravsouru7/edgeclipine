"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import WaitlistForm from "./WaitlistForm";

export default function WaitlistModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem("waitlist_joined")) return;
    const timer = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    setOpen(false);
    localStorage.setItem("popup_dismissed", "1");
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[9000] flex items-center justify-center p-5 bg-black/80 backdrop-blur-md"
          onClick={(e) => e.target === e.currentTarget && dismiss()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-[#0b0f19] border border-[rgba(0,255,178,0.25)] rounded-3xl px-8 py-10 max-w-md w-full shadow-[0_0_80px_rgba(0,255,178,0.1)]"
          >
            <button
              onClick={dismiss}
              aria-label="Close"
              className="absolute top-4 right-5 text-[#8b95aa] hover:text-white text-xl leading-none transition-colors duration-200"
            >
              ✕
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ffb2] animate-blink" />
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#00ffb2]">Limited Early Access</span>
            </div>

            <h2 id="modal-title" className="text-[26px] font-extrabold leading-[1.15] tracking-tight text-white mb-2.5">
              Stop losing.<br />
              <em className="not-italic text-[#00ffb2]">Start knowing.</em>
            </h2>
            <p className="text-[13px] text-[#8b95aa] leading-relaxed mb-6">
              Join traders getting early access to the AI journal that reveals your blind spots. No spam, no credit card.
            </p>

            <WaitlistForm onSuccess={() => setTimeout(dismiss, 2000)} compact />

            <p className="text-center font-mono text-[10px] tracking-[0.12em] uppercase text-[#8b95aa] mt-3">
              No spam · No credit card · Early access only
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
