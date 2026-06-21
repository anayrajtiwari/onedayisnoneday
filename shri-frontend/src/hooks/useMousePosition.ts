"use client";

import { useEffect } from "react";
import { useMotionValue } from "framer-motion";
import type { MotionValue } from "framer-motion";

/**
 * Returns mouse position as MotionValues — updates bypass React state
 * so dependent components (LotusBackground) never re-render on pointer moves.
 */
export const useMousePosition = (): { x: MotionValue<number>; y: MotionValue<number> } => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    // Initialize to viewport center
    x.set(window.innerWidth / 2);
    y.set(window.innerHeight / 2);

    const handlePointerMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [x, y]);

  return { x, y };
};
