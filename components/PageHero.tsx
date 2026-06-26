interface PageHeroProps {
  badge?: string;
  title: string;
  highlight?: string;
  description: string;
  centered?: boolean;
}

export default function PageHero({
  badge,
  title,
  highlight,
  description,
  centered = true,
}: PageHeroProps) {
  return (
    <section className={`pt-36 pb-20 px-5 md:px-9 ${centered ? "text-center" : ""}`}>
      <div className={`max-w-3xl ${centered ? "mx-auto" : ""}`}>
        {badge && (
          <div className={`inline-flex items-center gap-2 mb-6 ${centered ? "" : ""}`}>
            <div className="w-6 h-px bg-[rgba(0,255,178,0.4)]" />
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8b95aa]">
              {badge}
            </span>
            <div className="w-6 h-px bg-[rgba(0,255,178,0.4)]" />
          </div>
        )}
        <h1 className="text-[clamp(32px,6vw,64px)] font-extrabold leading-[1.05] tracking-tight text-white mb-6">
          {title}{" "}
          {highlight && (
            <em className="not-italic text-[#00ffb2]">{highlight}</em>
          )}
        </h1>
        <p
          className={`text-[16px] md:text-[18px] text-[#8b95aa] leading-relaxed ${
            centered ? "max-w-xl mx-auto" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      </div>
    </section>
  );
}
