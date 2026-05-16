import type { Transition } from "framer-motion";

export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const EASE_SPRING: [number, number, number, number] = [0.34, 1.56, 0.64, 1];

export const baseTransition = (delay = 0, duration = 0.7): Transition => ({
  duration,
  delay,
  ease: EASE,
});

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: EASE },
  }),
};
