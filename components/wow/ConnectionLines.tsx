"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const LINE_COUNT = 32;

type LineObject = {
  line: THREE.Line;
  speed: number;
  offset: number;
};

export default function ConnectionLines() {
  const group = useRef<THREE.Group>(null);

  const lines = useMemo<LineObject[]>(() => {
    return Array.from({ length: LINE_COUNT }).map(() => {
      const radius = 1.7 + Math.random() * 1.5;

      const a1 = Math.random() * Math.PI * 2;
      const a2 = Math.random() * Math.PI * 2;

      const p1 = new THREE.Vector3(
        Math.cos(a1) * radius,
        (Math.random() - 0.5) * radius,
        Math.sin(a1) * radius
      );

      const p2 = new THREE.Vector3(
        Math.cos(a2) * radius,
        (Math.random() - 0.5) * radius,
        Math.sin(a2) * radius
      );

      const geometry = new THREE.BufferGeometry().setFromPoints([p1, p2]);

      const material = new THREE.LineBasicMaterial({
        color:
          Math.random() > 0.5
            ? "#5B8CFF"
            : "#4FD1FF",
        transparent: true,
        opacity: 0.14,
        toneMapped: false,
      });

      return {
        line: new THREE.Line(geometry, material),
        speed: 0.15 + Math.random() * 0.25,
        offset: Math.random() * Math.PI * 2,
      };
    });
  }, []);

  useFrame(({ clock }) => {
    if (!group.current) return;

    const t = clock.elapsedTime;

    group.current.rotation.y += 0.0015;

    group.current.rotation.x =
      Math.sin(t * 0.25) * 0.12;

    group.current.rotation.z =
      Math.cos(t * 0.18) * 0.08;

    lines.forEach(({ line, speed, offset }) => {
      const material = line.material as THREE.LineBasicMaterial;

      material.opacity =
        0.08 +
        Math.abs(Math.sin(t * speed + offset)) * 0.12;
    });
  });

  return (
    <group ref={group}>
      {lines.map(({ line }, index) => (
        <primitive
          key={index}
          object={line}
        />
      ))}
    </group>
  );
}