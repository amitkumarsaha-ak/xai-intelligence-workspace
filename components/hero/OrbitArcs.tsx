"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export default function OrbitArcs() {
  const group = useRef<THREE.Group>(null);

  const rings = useMemo(
    () => [
      {
        radius: 1.55,
        color: "#5B8CFF",
        rotation: [0, 0, 0] as [number, number, number],
        speed: 0.12,
      },
      {
        radius: 1.9,
        color: "#4FD1FF",
        rotation: [0.7, 0.35, 0] as [number, number, number],
        speed: -0.09,
      },
      {
        radius: 2.25,
        color: "#7C5CFF",
        rotation: [-0.8, 0.55, 0] as [number, number, number],
        speed: 0.07,
      },
    ],
    []
  );

  useFrame((_, delta) => {
    if (!group.current) return;

    group.current.children.forEach((ring, index) => {
      ring.rotation.z += delta * rings[index].speed;
      ring.rotation.x += delta * 0.02;
    });
  });

  return (
    <group ref={group}>
      {rings.map((ring) => (
        <mesh
          key={ring.radius}
          rotation={ring.rotation}
        >
          <torusGeometry
            args={[
              ring.radius,
              0.012,
              32,
              300,
            ]}
          />

          <meshBasicMaterial
            color={ring.color}
            transparent
            opacity={0.45}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}