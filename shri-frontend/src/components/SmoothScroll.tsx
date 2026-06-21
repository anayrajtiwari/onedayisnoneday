"use client";

import { ReactNode } from "react";

/**
 * SmoothScroll wrapper — Lenis has been removed.
 * 
 * Lenis hijacks the browser's native scroll and re-implements it via
 * requestAnimationFrame with lerp interpolation. This fights with
 * Framer Motion's own scroll listeners (useScroll, whileInView) and
 * creates double-work on every frame. Native scroll + CSS scroll-behavior
 * is smoother and far cheaper.
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
