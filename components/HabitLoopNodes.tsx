import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const AMBER = "#FFB942";
const TEAL = "#00F6D0";

// Icon strokes from nodes/*-node.svg (64-unit icon box inside the 128 badge).
const ICONS: Record<string, ReactNode> = {
  notice: (
    <>
      <path d="M11 32Q32 12 53 32Q32 52 11 32Z" />
      <circle cx="32" cy="32" r="7" />
    </>
  ),
  pause: <path d="M25 19v26M39 19v26" />,
  review: <path d="M20 21h24M20 30h17M20 39h13M42 41l4 4 8-9" />,
  repeat: <path d="M47 28a16 16 0 0 0-28-8l-4 4M17 36a16 16 0 0 0 28 8l4-4M15 15v9h9M49 49v-9h-9" />,
};

// Badge centres (artboard x, y − 530). Each badge scales .85→1 as the segment
// reaching it lands and its label follows 100ms later. Notice opens the loop,
// so its single glow pulse waits until the last segment closes it (2800ms).
// The kit's arc passes behind the Repeat/Pause labels, so labels carry a dark
// halo that keeps them legible where the line crosses.
const STATIONS = [
  { key: "notice", label: "Notice", color: AMBER, at: "left-431 top-119", below: false, node: "[--entry-delay:600ms]", text: "[--entry-delay:700ms]", pulse: "[--entry-delay:2800ms]" },
  { key: "pause", label: "Pause", color: TEAL, at: "left-758 top-367", below: false, node: "[--entry-delay:1150ms]", text: "[--entry-delay:1250ms]", pulse: "[--entry-delay:1150ms]" },
  { key: "review", label: "Review", color: TEAL, at: "left-430 top-627", below: true, node: "[--entry-delay:1700ms]", text: "[--entry-delay:1800ms]", pulse: "[--entry-delay:1700ms]" },
  { key: "repeat", label: "Repeat", color: AMBER, at: "left-112 top-371", below: false, node: "[--entry-delay:2250ms]", text: "[--entry-delay:2350ms]", pulse: "[--entry-delay:2250ms]" },
];

interface HabitLoopNodesProps {
  className?: string;
}

export default function HabitLoopNodes({ className }: HabitLoopNodesProps) {
  return (
    // Overlays the phone: pointer-events-none keeps its field and button tappable.
    <ol aria-label="The habit loop" className={cn("pointer-events-none absolute inset-0 list-none", className)}>
      {STATIONS.map(({ key, label, color, at, below, node, text, pulse }) => (
        <li key={key} className={cn("absolute size-0", at)}>
          <span
            aria-hidden="true"
            className={cn(
              "entry-glint absolute size-200 -translate-1/2 rounded-full opacity-0",
              color === AMBER
                ? "bg-[radial-gradient(circle,rgba(255,185,66,0.5),rgba(255,185,66,0.14)_45%,transparent_70%)]"
                : "bg-[radial-gradient(circle,rgba(0,246,208,0.45),rgba(0,246,208,0.12)_45%,transparent_70%)]",
              pulse,
            )}
          />
          <svg
            viewBox="0 0 128 128"
            aria-hidden="true"
            focusable="false"
            className={cn("entry-emerge absolute size-128 -translate-1/2 overflow-visible [--entry-dur:350ms] [--entry-rise:0px] [--entry-scale:0.85]", node)}
            fill="none"
          >
            <circle cx="64" cy="64" r="49" stroke={color} strokeWidth={8} opacity={0.55} filter="url(#habit-node-glow)" />
            <circle cx="64" cy="64" r="49" fill="#03110F" fillOpacity={0.84} stroke={color} strokeWidth={2.5} />
            <g transform="translate(32 32)" stroke={color} strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round">
              {ICONS[key]}
            </g>
          </svg>
          <span
            aria-hidden="true"
            className={cn("entry-reveal absolute left-0 h-18 w-[1.5px] -translate-x-1/2 bg-white/45 [--entry-rise:0px]", below ? "top-56" : "-top-72", text)}
          />
          <span
            className={cn(
              "entry-reveal absolute left-0 -translate-x-1/2 whitespace-nowrap pl-[0.28em] font-(family-name:--font-scene-mono) text-[length:max(9px,calc(var(--spacing)*17))] uppercase leading-none tracking-[0.28em] text-[#e6ebec] [text-shadow:0_0_4px_#02080a,0_0_10px_#02080a,0_0_16px_#02080a] [--entry-rise:6px]",
              below ? "top-86" : "-top-102",
              text,
            )}
          >
            {label}
          </span>
        </li>
      ))}
    </ol>
  );
}
