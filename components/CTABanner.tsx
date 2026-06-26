import Link from "next/link";

interface CTABannerProps {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function CTABanner({
  title = "Ready to trade with discipline?",
  description = "Join 847+ traders on the waitlist. Get early access and lock in founding pricing before public launch.",
  ctaLabel = "Join Waitlist →",
  ctaHref = "/#cta",
}: CTABannerProps) {
  return (
    <section className="py-24 px-5 md:px-9">
      <div className="max-w-2xl mx-auto text-center">
        <div className="rounded-3xl border border-[rgba(0,255,178,0.15)] bg-[rgba(0,255,178,0.03)] px-8 md:px-14 py-14">
          <div className="inline-flex items-center gap-2 bg-[rgba(0,255,178,0.08)] border border-[rgba(0,255,178,0.15)] px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ffb2] animate-blink" />
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#00ffb2]">
              Early Access Open
            </span>
          </div>
          <h2 className="text-[clamp(24px,4vw,42px)] font-extrabold leading-tight tracking-tight text-white mb-4">
            {title}
          </h2>
          <p className="text-[15px] text-[#8b95aa] leading-relaxed mb-8 max-w-md mx-auto">
            {description}
          </p>
          <Link
            href={ctaHref}
            className="inline-block bg-[#00ffb2] hover:bg-[#00e09e] text-[#060910] font-extrabold text-[13px] uppercase tracking-[0.12em] px-8 py-4 rounded-full transition-colors duration-200 animate-btn-glow"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
