"use client";

import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";

type Status = "idle" | "pending" | "joined" | "duplicate" | "invalid" | "error";

const MESSAGES: Partial<Record<Status, string>> = {
  joined: "You’re on the list. We’ll email you when early access opens.",
  duplicate: "You’re already on the list — no need to sign up again.",
  invalid: "Enter a valid email address, like name@example.com.",
  error: "We couldn’t add you just now. Please try again in a moment.",
};

interface FinaleWaitlistFormProps {
  className?: string;
}

// Section 10's single-field waitlist form. It posts to the same /api/waitlist
// as WaitlistForm (email only; the API treats phone/experience as optional)
// and only reports success once the server answers ok. The API flags repeats
// (`duplicate`). Messages live in a polite live region; invalid input is
// marked with aria-invalid. The field keeps a ≥16px font so iOS does not zoom.
// Narrow containers stack the field above the button.
export default function FinaleWaitlistForm({ className }: FinaleWaitlistFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const done = status === "joined" || status === "duplicate";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const input = e.currentTarget.elements.namedItem("email") as HTMLInputElement;
    if (!input.validity.valid) {
      setStatus("invalid");
      input.focus();
      return;
    }
    setStatus("pending");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: input.value }),
      });
      const data: { ok?: boolean; duplicate?: boolean; error?: string } = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        localStorage.setItem("waitlist_joined", "1");
        setStatus(data.duplicate ? "duplicate" : "joined");
      } else {
        setStatus(data.error === "invalid_email" ? "invalid" : "error");
      }
    } catch {
      setStatus("error");
    }
  }

  const message = MESSAGES[status];

  return (
    <div className={cn("@container", className)}>
      {!done && (
        <form noValidate onSubmit={handleSubmit} aria-busy={status === "pending"} className="group relative">
          <span aria-hidden="true" className="entry-glint pointer-events-none absolute inset-0 rounded-[calc(var(--spacing)*44)] opacity-0 shadow-[0_0_calc(var(--spacing)*26)_rgba(0,237,208,0.55)] [--entry-delay:1250ms]" />
          <div className="relative flex items-center gap-8 rounded-[calc(var(--spacing)*44)] border border-[#3a4a4b] bg-[#040b0c]/80 p-[calc(var(--spacing)*6)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-[border-color,box-shadow] duration-200 group-focus-within:border-[#2ef2d6] group-focus-within:shadow-[0_0_calc(var(--spacing)*24)_rgba(0,237,208,0.35)] @max-[17rem]:flex-col @max-[17rem]:items-stretch @max-[17rem]:rounded-[calc(var(--spacing)*30)]">
            <label htmlFor="finale-email" className="sr-only">Email address</label>
            <input
              id="finale-email"
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              required
              placeholder="Email address"
              aria-invalid={status === "invalid" || undefined}
              aria-describedby="finale-email-status"
              onInput={() => status === "invalid" && setStatus("idle")}
              className="min-h-[44px] min-w-0 flex-1 bg-transparent pl-24 text-[length:max(16px,calc(var(--spacing)*27))] text-white outline-none placeholder:text-[#8d9799]"
            />
            <button
              type="submit"
              disabled={status === "pending"}
              className="min-h-[44px] shrink-0 cursor-pointer rounded-full bg-[#10f0d4] px-[max(18px,calc(var(--spacing)*46))] py-[calc(var(--spacing)*18)] text-[length:max(15px,calc(var(--spacing)*28))] font-semibold leading-none text-[#03110f] shadow-[0_0_calc(var(--spacing)*22)_rgba(16,240,212,0.35)] transition-colors duration-200 hover:bg-[#5ffbe6] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white disabled:cursor-wait disabled:opacity-70"
            >
              {status === "pending" ? "Joining…" : "Join Waitlist"}
            </button>
          </div>
        </form>
      )}
      <p
        id="finale-email-status"
        aria-live="polite"
        className={cn(
          "text-center text-[length:max(12.5px,calc(var(--spacing)*21))] leading-snug empty:hidden",
          done ? "rounded-[calc(var(--spacing)*30)] border border-[#2ef2d6]/40 bg-[#04201c]/80 px-24 py-24 text-[#bff9ef]" : "mt-14 text-[#ff9c8c]",
        )}
      >
        {message}
      </p>
    </div>
  );
}
