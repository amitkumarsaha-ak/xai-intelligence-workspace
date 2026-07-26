"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.2,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="
        fixed
        left-0
        top-0
        z-[9999]
        h-[3px]
        w-full
        origin-left
        bg-gradient-to-r
        from-[#4FD1FF]
        via-[#5B8CFF]
        to-[#7C5CFF]
        shadow-[0_0_20px_rgba(91,140,255,.55)]
      "
    />
  );
}