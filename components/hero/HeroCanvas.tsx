"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import ParticleField from "./ParticleField";
import OrbitArcs from "./OrbitArcs";
import NetworkGraph from "./NetworkGraph";
import GalaxyCore from "./GalaxyCore";
import Effects from "./Effects";

export default function HeroCanvas() {
  return (
    <div
      className="
        relative
        flex
        items-center
        justify-center

        h-[360px]
        w-[360px]

        sm:h-[480px]
        sm:w-[480px]

        md:h-[600px]
        md:w-[600px]

        lg:h-[640px]
        lg:w-[640px]

        xl:h-[760px]
        xl:w-[760px]

        2xl:h-[820px]
        2xl:w-[820px]
      "
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0 rounded-full bg-[#5B8CFF]/10 blur-[120px]" />

      <div className="pointer-events-none absolute inset-0 scale-75 rounded-full bg-[#7C5CFF]/10 blur-[90px]" />

      {/* Glass Ring */}

      <div className="pointer-events-none absolute h-[88%] w-[88%] rounded-full border border-white/5" />

      <Canvas
        dpr={[1, 1.5]}
        shadows={false}
        camera={{
          position: [0, 0, 6.4],
          fov: 38,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={null}>
          <ParticleField />

          <OrbitArcs />

          <NetworkGraph />

          <GalaxyCore />
        </Suspense>

        <Effects />
      </Canvas>

      {/* Decorative Blur */}

      <div className="pointer-events-none absolute bottom-8 left-1/2 h-28 w-40 -translate-x-1/2 rounded-full bg-[#5B8CFF]/10 blur-[50px]" />
    </div>
  );
}