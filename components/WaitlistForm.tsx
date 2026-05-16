"use client";

import { useState } from "react";

interface WaitlistFormProps {
  onSuccess?: () => void;
  compact?: boolean;
}

export default function WaitlistForm({ onSuccess, compact }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [experience, setExperience] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, phone, experience }),
      });
      if (!res.ok) throw new Error("Server error");

      setSuccess(true);
      if (typeof window !== "undefined") {
        localStorage.setItem("waitlist_joined", "1");
      }
      onSuccess?.();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="text-center px-6 py-5 rounded-xl bg-[rgba(0,255,178,0.08)] border border-[rgba(0,255,178,0.25)] max-w-md mx-auto">
        <div className="text-2xl mb-2">✓</div>
        <p className="text-[#00ffb2] font-semibold text-sm">You&apos;re on the list.</p>
        <p className="text-[#8b95aa] text-xs mt-1">We&apos;ll reach out when we&apos;re ready.</p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-transparent border border-white/[0.1] outline-none rounded-[10px] px-5 py-3.5 font-sans text-sm text-white placeholder-[#8b95aa] focus:border-[rgba(0,255,178,0.5)] transition-colors duration-200";

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-3 p-3 rounded-xl border border-[rgba(0,255,178,0.25)] bg-black/30 transition-all duration-300 focus-within:border-[#00ffb2] focus-within:shadow-[0_0_30px_rgba(0,255,178,0.12)] ${compact ? "max-w-sm" : "max-w-md"} mx-auto`}
    >
      <input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={inputClass}
        required
      />
      <input
        type="tel"
        placeholder="Phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className={inputClass}
        required
      />
      <select
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
        className={`${inputClass} appearance-none bg-white/[0.02] cursor-pointer`}
        required
      >
        <option value="">Trading experience</option>
        <option value="0-1 years">0–1 years</option>
        <option value="1-3 years">1–3 years</option>
        <option value="3-5 years">3–5 years</option>
        <option value="5+ years">5+ years</option>
      </select>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#00ffb2] hover:bg-[#00e09e] text-[#060910] font-extrabold text-[13px] uppercase tracking-[0.1em] py-4 rounded-[10px] transition-colors duration-200 disabled:opacity-60 disabled:cursor-wait"
      >
        {loading ? "Joining..." : "Join the Waitlist →"}
      </button>
      {error && (
        <p className="text-center text-[#ff8c8c] text-xs font-medium">{error}</p>
      )}
    </form>
  );
}
