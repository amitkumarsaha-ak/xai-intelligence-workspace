"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;

    if (!glow) return;

    const move = (e: MouseEvent) => {
      glow.animate(
        {
          left: `${e.clientX}px`,
          top: `${e.clientY}px`,
        },
        {
          duration: 250,
          fill: "forwards",
          easing: "ease-out",
        }
      );
    };

    window.addEventListener("pointermove", move);

    return () => {
      window.removeEventListener("pointermove", move);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-50
        h-[280px]
        w-[280px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-[#5B8CFF]/10
        blur-[90px]
        hidden
        lg:block
      "
    />
  );
}