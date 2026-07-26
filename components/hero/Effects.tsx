"use client";

import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";

export default function Effects() {
  return (
    <EffectComposer multisampling={4}>
      <Bloom
        intensity={0.9}
        luminanceThreshold={0.18}
        luminanceSmoothing={0.9}
        mipmapBlur
      />

      <Vignette
        eskil={false}
        offset={0.15}
        darkness={0.85}
      />
    </EffectComposer>
  );
}