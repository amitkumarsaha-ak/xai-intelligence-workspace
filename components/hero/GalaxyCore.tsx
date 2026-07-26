"use client";

import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

export default function GalaxyCore() {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!group.current) return;

    const t = clock.elapsedTime;

    group.current.rotation.y += 0.0025;
    group.current.rotation.x = Math.sin(t * 0.3) * 0.08;

    const scale = 1 + Math.sin(t * 2.4) * 0.04;
    group.current.scale.setScalar(scale);
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.25}
      floatIntensity={0.45}
    >
      <group ref={group}>
        {/* Outer Glow */}

        <mesh scale={2.7}>
          <sphereGeometry args={[0.42, 64, 64]} />

          <meshBasicMaterial
            color="#5B8CFF"
            transparent
            opacity={0.05}
            depthWrite={false}
            toneMapped={false}
          />
        </mesh>

        {/* Inner Glow */}

        <mesh scale={1.55}>
          <sphereGeometry args={[0.30, 64, 64]} />

          <meshBasicMaterial
            color="#7C5CFF"
            transparent
            opacity={0.10}
            depthWrite={false}
            toneMapped={false}
          />
        </mesh>

        {/* Main Core */}

        <mesh>
          <icosahedronGeometry args={[0.28, 2]} />

          <meshStandardMaterial
            color="#F8FAFC"
            emissive="#7C5CFF"
            emissiveIntensity={2.4}
            metalness={0.55}
            roughness={0.15}
          />
        </mesh>

        {/* Orbit Ring 1 */}

        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.82, 0.015, 32, 220]} />

          <meshBasicMaterial
            color="#4FD1FF"
            toneMapped={false}
          />
        </mesh>

        {/* Orbit Ring 2 */}

        <mesh rotation={[0.6, 0.5, 0]}>
          <torusGeometry args={[1.05, 0.015, 32, 220]} />

          <meshBasicMaterial
            color="#5B8CFF"
            toneMapped={false}
          />
        </mesh>

        {/* Orbit Ring 3 */}

        <mesh rotation={[-0.7, 0.35, 0]}>
          <torusGeometry args={[1.28, 0.015, 32, 220]} />

          <meshBasicMaterial
            color="#7C5CFF"
            toneMapped={false}
          />
        </mesh>
      </group>
    </Float>
  );
}