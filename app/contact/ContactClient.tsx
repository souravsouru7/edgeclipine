"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SOCIALS = [
  { label: "Twitter / X", handle: "@edgecipline", href: "https://twitter.com/edgecipline" },
  { label: "LinkedIn", handle: "edgecipline", href: "https://linkedin.com/company/edgecipline" },
  { label: "Instagram", handle: "@edgecipline", href: "https://instagram.com/edgecipline" },
  { label: "YouTube", handle: "@edgecipline", href: "https://youtube.com/@edgecipline" },
];

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      if (!res.ok) throw new Error("Server error");
      setFormState("success");
    } catch {
      setFormState("error");
    }
  }

  const inputClass =
    "w-full bg-transparent border border-white/[0.1] outline-none rounded-xl px-5 py-3.5 font-sans text-[14px] text-white placeholder-[#8b95aa] focus:border-[rgba(0,255,178,0.5)] transition-colors duration-200";

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-36 pb-14 px-5 md:px-9 text-center">
          <div className="max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-6 h-px bg-[rgba(0,255,178,0.4)]" />
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8b95aa]">
                Get in Touch
              </span>
              <div className="w-6 h-px bg-[rgba(0,255,178,0.4)]" />
            </div>
            <h1 className="text-[clamp(30px,5vw,52px)] font-extrabold leading-[1.08] tracking-tight text-white mb-5">
              We read every <em className="not-italic text-[#00ffb2]">message.</em>
            </h1>
            <p className="text-[16px] text-[#8b95aa] leading-relaxed">
              Questions about Edgecipline, the waitlist, features, or partnerships — reach out and
              we&apos;ll respond within 24–48 hours.
            </p>
          </div>
        </section>

        {/* Contact grid */}
        <section className="pb-24 px-5 md:px-9 border-t border-white/[0.05]">
          <div className="max-w-5xl mx-auto pt-14 grid md:grid-cols-[1fr_1.5fr] gap-14">
            {/* Info side */}
            <div>
              <div className="mb-10">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8b95aa] mb-4">
                  Email
                </div>
                <a
                  href="mailto:support@edgecipline.com"
                  className="text-[15px] text-white hover:text-[#00ffb2] transition-colors duration-200"
                >
                  support@edgecipline.com
                </a>
                <p className="text-[12px] text-[#8b95aa] mt-1">
                  We respond within 24–48 hours on business days.
                </p>
              </div>

              <div className="mb-10">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8b95aa] mb-4">
                  Social
                </div>
                <div className="flex flex-col gap-3">
                  {SOCIALS.map(({ label, handle, href }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between group"
                    >
                      <span className="text-[13px] text-[#8b95aa]">{label}</span>
                      <span className="text-[13px] text-white/60 group-hover:text-[#00ffb2] transition-colors duration-200">
                        {handle} →
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8b95aa] mb-4">
                  Company
                </div>
                <p className="text-[13px] text-[#8b95aa] leading-relaxed">
                  Edgecipline Technologies
                  <br />
                  India
                  <br />
                  <span className="text-[11px]">Founded 2024 · Building in public</span>
                </p>
              </div>
            </div>

            {/* Form side */}
            <div>
              {formState === "success" ? (
                <div className="rounded-2xl border border-[rgba(0,255,178,0.25)] bg-[rgba(0,255,178,0.05)] p-10 text-center">
                  <div className="text-3xl mb-4">✓</div>
                  <h2 className="text-[18px] font-bold text-white mb-2">Message sent!</h2>
                  <p className="text-[14px] text-[#8b95aa]">
                    We&apos;ll get back to you within 24–48 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8 flex flex-col gap-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-[0.14em] text-[#8b95aa] mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={inputClass}
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-[0.14em] text-[#8b95aa] mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={inputClass}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-[0.14em] text-[#8b95aa] mb-2">
                      Subject
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className={`${inputClass} appearance-none bg-white/[0.02] cursor-pointer`}
                      required
                    >
                      <option value="">Select a topic</option>
                      <option value="General Question">General question</option>
                      <option value="Waitlist">Waitlist & early access</option>
                      <option value="Features">Product features</option>
                      <option value="Pricing">Pricing</option>
                      <option value="Partnership">Partnership / collaboration</option>
                      <option value="Press">Press / media</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-[0.14em] text-[#8b95aa] mb-2">
                      Message
                    </label>
                    <textarea
                      placeholder="Tell us what's on your mind..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      className={`${inputClass} resize-none`}
                      required
                    />
                  </div>

                  {formState === "error" && (
                    <p className="text-[#ff8c8c] text-[12px] font-medium text-center">
                      Something went wrong. Try emailing us directly at support@edgecipline.com
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={formState === "loading"}
                    className="w-full bg-[#00ffb2] hover:bg-[#00e09e] text-[#060910] font-extrabold text-[13px] uppercase tracking-[0.1em] py-4 rounded-xl transition-colors duration-200 disabled:opacity-60 disabled:cursor-wait mt-2"
                  >
                    {formState === "loading" ? "Sending..." : "Send Message →"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
