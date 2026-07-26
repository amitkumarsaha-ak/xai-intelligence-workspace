"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const PARTICLE_COUNT = 1400;
const MAX_RADIUS = 4.2;
const BRANCHES = 5;

export default function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, colors, scales } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const scales = new Float32Array(PARTICLE_COUNT);

    const colorInside = new THREE.Color("#7C5CFF");
    const colorMiddle = new THREE.Color("#4FD1FF");
    const colorOutside = new THREE.Color("#FFFFFF");

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;

      const radius = Math.random() * MAX_RADIUS;

      const branchAngle =
        ((i % BRANCHES) / BRANCHES) * Math.PI * 2;

      const spinAngle = radius * 1.7;

      const randomX =
        Math.pow(Math.random(), 3) *
        (Math.random() < 0.5 ? -1 : 1) *
        0.35;

      const randomY =
        (Math.random() - 0.5) * 2.2;

      const randomZ =
        Math.pow(Math.random(), 3) *
        (Math.random() < 0.5 ? -1 : 1) *
        0.35;

      positions[i3] =
        Math.cos(branchAngle + spinAngle) * radius + randomX;

      positions[i3 + 1] = randomY;

      positions[i3 + 2] =
        Math.sin(branchAngle + spinAngle) * radius + randomZ;

      const mixedColor = colorInside.clone();

      if (radius < MAX_RADIUS * 0.45) {
        mixedColor.lerp(
          colorMiddle,
          radius / (MAX_RADIUS * 0.45)
        );
      } else {
        mixedColor.copy(colorMiddle).lerp(
          colorOutside,
          (radius - MAX_RADIUS * 0.45) /
            (MAX_RADIUS * 0.55)
        );
      }

      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;

      scales[i] = Math.random();
    }

    return {
      positions,
      colors,
      scales,
    };
  }, []);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;

    pointsRef.current.rotation.y =
      clock.elapsedTime * 0.04;

    pointsRef.current.rotation.z =
      Math.sin(clock.elapsedTime * 0.15) * 0.04;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
  />

       <bufferAttribute
         attach="attributes-color"
         args={[colors, 3]}
  />
</bufferGeometry>

      <pointsMaterial
        size={0.024}
        vertexColors
        transparent
        opacity={0.85}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}