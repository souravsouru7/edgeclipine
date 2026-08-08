import Image from "next/image";
import Link from "next/link";
import type { Founder } from "@/lib/founders";

export type { Founder };

interface FounderCardProps {
  founder: Founder;
  priority?: boolean;
  /** Hide the "Full profile" link when the card already is the profile page. */
  showProfileLink?: boolean;
}

export default function FounderCard({
  founder,
  priority = false,
  showProfileLink = true,
}: FounderCardProps) {
  const { slug, name, role, image, bio, responsibilities, linkedin, email } = founder;

  return (
    <article className="group flex h-full flex-col rounded-3xl border border-white/[0.07] bg-white/[0.02] p-6 md:p-8 hover:border-white/[0.14] transition-colors duration-300">
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03] mb-7">
        <Image
          src={image}
          alt={`${name} — ${role} of Edgecipline`}
          fill
          sizes="(max-width: 1024px) 100vw, 420px"
          priority={priority}
          className="object-cover object-center grayscale-[0.4] group-hover:grayscale-0 transition-[filter] duration-500"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#05080f]/55 via-transparent to-transparent"
        />
      </div>

      <h3 className="text-[clamp(20px,2.4vw,26px)] font-extrabold tracking-tight text-white mb-2">
        {showProfileLink ? (
          <Link href={`/founders/${slug}`} className="hover:text-[#00ffb2] transition-colors duration-200">
            {name}
          </Link>
        ) : (
          name
        )}
      </h3>
      <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#00ffb2] leading-relaxed mb-5">
        {role}
      </div>
      <p className="text-[14px] text-[#8b95aa] leading-[1.9] mb-7">{bio}</p>

      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8b95aa] mb-4">
        Role at Edgecipline
      </div>
      <ul className="flex flex-col gap-2.5 mb-7">
        {responsibilities.map((item) => (
          <li key={item} className="flex items-start gap-3 text-[13px] text-white/70 leading-relaxed">
            <span
              aria-hidden="true"
              className="w-1.5 h-1.5 rounded-full bg-[rgba(0,255,178,0.6)] mt-[7px] flex-shrink-0"
            />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-3">
        {showProfileLink && (
          <Link
            href={`/founders/${slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-white/60 hover:border-[rgba(0,255,178,0.4)] hover:text-[#00ffb2] transition-colors duration-200"
          >
            {name} profile
            <span aria-hidden="true">→</span>
          </Link>
        )}
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer me"
          aria-label={`${name}, ${role} of Edgecipline, on LinkedIn`}
          className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-white/60 hover:border-[rgba(0,255,178,0.4)] hover:text-[#00ffb2] transition-colors duration-200"
        >
          LinkedIn
          <span aria-hidden="true">↗</span>
        </a>
        <a
          href={`mailto:${email}`}
          className="font-mono text-[11px] text-white/40 hover:text-white transition-colors duration-200 break-all"
        >
          {email}
        </a>
      </div>
    </article>
  );
}
