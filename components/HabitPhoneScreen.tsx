import { cn } from "@/lib/utils";
import HabitReviewButton from "./HabitReviewButton";

// Week row from phone-ui/weekly-reflection-screen-editable.svg: three reviewed
// days light up left to right, Friday (amber) lands last.
const DAYS = [
  { letter: "M", x: "left-72", dot: "bg-[#00EFCF]", done: "[--entry-delay:550ms]" },
  { letter: "T", x: "left-145", dot: "bg-[#00EFCF]", done: "[--entry-delay:640ms]" },
  { letter: "W", x: "left-218", dot: "bg-[#00EFCF]", done: "[--entry-delay:730ms]" },
  { letter: "T", x: "left-291", dot: "border-2 border-[#00EFCF] bg-[#02100F]" },
  { letter: "F", x: "left-364", dot: "bg-[#FFB942]", done: "[--entry-delay:950ms]" },
  { letter: "S", x: "left-437", dot: "border-2 border-[#31726B] bg-[#02100F]" },
  { letter: "S", x: "left-510", dot: "border-2 border-[#31726B] bg-[#02100F]" },
];

interface HabitPhoneScreenProps {
  className?: string;
}

// Weekly reflection screen for the blank shell in Section 08. The content is
// laid out on a fixed 600×1300px screen and projected onto the shell's screen
// with one homography (matrix3d), measured from the PNG's screen corners
// (705,95) (2152,72) (1770,3739) (37,3520) and expressed in a 1000px-wide
// phone frame. That frame is scaled to the rendered phone with
// tan(atan2(100cqw, 1000px)), a unitless ratio in plain CSS. Because the
// screen is scaled rather than sized small, the field keeps a real ≥16px font
// size, so iOS does not zoom on focus.
//
// The field is a real, editable textarea (nothing is stored or sent); the
// "Review my week" button explains honestly that weekly reviews ship with the
// app (HabitReviewButton). Entrance timings come from HabitLoop's .entry-group.
export default function HabitPhoneScreen({ className }: HabitPhoneScreenProps) {
  return (
    <figure className={cn("@container absolute inset-0 m-0", className)}>
      <figcaption className="sr-only">
        Concept of the Edgecipline weekly reflection screen: a week with three reviewed days and Friday flagged, then a
        prompt to write where you broke your plan.
      </figcaption>
      <div className="absolute left-0 top-0 h-[1658.75px] w-[1000px] origin-top-left [scale:tan(atan2(100cqw,1000px))]">
        <div className="absolute left-0 top-0 h-[1300px] w-[600px] origin-top-left overflow-hidden rounded-[56px] [--spacing:1px] [transform:matrix3d(0.955911,-0.019431,0,-0.000092348,-0.224143,0.930751,0,-0.000136343,0,0,1,0,304.536,41.037,0,1)]">
          <svg viewBox="0 0 600 1300" aria-hidden="true" focusable="false" className="entry-reveal absolute inset-0 size-full [--entry-delay:300ms]" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M62 84l-16 16 16 16" stroke="#E8F4F1" strokeWidth={5} />
            <g fill="#E8F4F1">
              <circle cx="548" cy="86" r="4.5" />
              <circle cx="548" cy="101" r="4.5" />
              <circle cx="548" cy="116" r="4.5" />
            </g>
          </svg>

          <h3 className="entry-reveal absolute left-46 top-186 whitespace-nowrap text-[37px] font-medium! leading-none tracking-[-0.005em]! text-[#E5E9E9] [--entry-delay:350ms] [--entry-rise:30px]">
            Weekly Reflection
          </h3>

          <div aria-hidden="true" className="entry-reveal absolute inset-x-0 top-266 h-74 [--entry-delay:450ms] [--entry-rise:0px]">
            <span className="absolute left-72 top-57 h-[2px] w-438 bg-[#1A4641]" />
            {DAYS.map(({ letter, x, dot, done }, i) => (
              <span key={i} className={cn("absolute top-0 -translate-x-1/2", x)}>
                <span className={cn("block text-center text-[22px] font-medium italic leading-none", done && i < 3 ? "text-[#8CEBDD]" : "text-[#AAB6B8]")}>
                  {letter}
                </span>
                <span className={cn("absolute left-1/2 top-44 size-27 -translate-x-1/2 rounded-full", dot, done && "entry-emerge [--entry-dur:300ms] [--entry-rise:0px] [--entry-scale:0.4]", done)} />
              </span>
            ))}
          </div>

          <label
            htmlFor="habits-reflection"
            className="entry-reveal absolute left-46 top-420 text-[52px] font-bold leading-[1.12] tracking-[-0.01em] text-white [--entry-delay:1250ms] [--entry-rise:40px]"
          >
            Where did you
            <br />
            break your plan?
          </label>
          <textarea
            id="habits-reflection"
            rows={3}
            placeholder="Be honest with yourself..."
            className="entry-reveal absolute left-46 top-590 h-220 w-508 resize-none rounded-[26px] border-2 border-[#355A57] bg-[#091918]/85 px-26 py-24 text-[26px] leading-[1.35] text-[#E5E9E9] caret-[#00EFCF] outline-none placeholder:text-[#9FAAAA] focus-visible:border-[#00EFCF] focus-visible:shadow-[0_0_0_4px_rgba(0,239,207,0.35)] [--entry-delay:1350ms] [--entry-rise:40px]"
          />

          <HabitReviewButton className="entry-reveal left-46 top-870 [--entry-delay:1450ms] [--entry-rise:40px]" />
        </div>
      </div>
    </figure>
  );
}
