import { cn } from "@/lib/utils";

interface PlanAvailabilityProps {
  included: boolean;
  /** Entrance delay class for an included mark, e.g. "[--entry-delay:600ms]". */
  delay?: string;
}

// One cell of the plan matrix. Included: the kit's active check, scaling in
// once with a soft teal glow. Not included: a muted circle with a dash (not a
// grey check, which would still read as "included"); it never lights up.
export default function PlanAvailability({ included, delay }: PlanAvailabilityProps) {
  return (
    <>
      {included ? (
        <svg
          viewBox="0 0 64 64"
          aria-hidden="true"
          focusable="false"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn(
            "entry-emerge inline-block size-50 align-middle drop-shadow-[0_0_calc(var(--spacing)*7)_rgba(0,246,208,0.55)] [--entry-dur:450ms] [--entry-rise:0px] [--entry-scale:0.65]",
            delay,
          )}
        >
          <circle cx="32" cy="32" r="22" stroke="#66FFE8" strokeWidth={3} />
          <path d="m21 32 8 8 15-17" stroke="#B9FFF5" strokeWidth={3.5} />
        </svg>
      ) : (
        <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false" fill="none" strokeLinecap="round" className="inline-block size-50 align-middle">
          <circle cx="32" cy="32" r="22" stroke="#4B5659" strokeWidth={3} />
          <path d="M24 32h16" stroke="#6B777A" strokeWidth={3.5} />
        </svg>
      )}
      <span className="sr-only">{included ? "Included" : "Not included"}</span>
    </>
  );
}
