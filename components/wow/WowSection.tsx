"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import NeuralCore from "./NeuralCore";

gsap.registerPlugin(ScrollTrigger);

export default function WowSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (
      !sectionRef.current ||
      !contentRef.current ||
      !visualRef.current
    )
      return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        visualRef.current,
        {
          opacity: 0,
          scale: 0.9,
          rotate: -6,
        },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.to(visualRef.current, {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#050816] py-20 md:py-28 xl:py-32"
    >
      <div
        className="
          mx-auto
          grid
          max-w-[1440px]
          items-center
          gap-14
          px-6

          md:px-8

          lg:grid-cols-2
          lg:gap-16

          xl:gap-20
        "
      >
        {/* Left */}

        <div
          ref={contentRef}
          className="text-center lg:text-left"
        >
          <span className="inline-flex rounded-full border border-[#5B8CFF]/20 bg-[#5B8CFF]/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[#4FD1FF] sm:text-xs">
            Signature Interaction
          </span>

          <h2
            className="
              mt-8
              font-bold
              leading-[1.05]
              tracking-[-0.03em]
              text-white

              text-[38px]

              sm:text-[46px]

              xl:text-[56px]
            "
          >
            Watch Intelligence

            <br />

            Organize Itself
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-[520px]
              text-[16px]
              leading-8
              text-[#94A3B8]

              lg:mx-0

              lg:text-lg
            "
          >
            Raw signals reorganize into connected intelligence.
            This interaction demonstrates how XAI transforms
            fragmented information into structured knowledge.
          </p>

          <div
            className="
              mt-12
              flex
              flex-col
              gap-4

              sm:flex-row

              lg:justify-start
            "
          >
            <button className="rounded-xl bg-[#5B8CFF] px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#709BFF] hover:shadow-[0_10px_35px_rgba(91,140,255,.35)]">
              Explore Intelligence
            </button>

            <button className="rounded-xl border border-[#1E293B] px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#5B8CFF]/40 hover:bg-white/5">
              Learn More
            </button>
          </div>
        </div>

        {/* Visualization */}

        <div
          ref={visualRef}
          className="
            relative
            mx-auto
            h-[360px]
            w-full
            max-w-[360px]
            overflow-hidden
            rounded-[28px]
            border
            border-[#1E293B]
            bg-[#0B1020]

            sm:h-[480px]
            sm:max-w-[480px]

            md:h-[600px]
            md:max-w-[600px]

            xl:h-[720px]
            xl:max-w-none
          "
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5B8CFF]/10 blur-[120px]" />

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[40%] w-[40%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C5CFF]/10 blur-[90px]" />

          <div className="absolute inset-0">
            <NeuralCore />
          </div>

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(5,8,22,.35)_100%)]" />
        </div>
      </div>
    </section>
  );
}