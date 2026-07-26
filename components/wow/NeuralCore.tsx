"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

import DataNodes from "./DataNodes";
import ConnectionLines from "./ConnectionLines";

function Core() {
  const group = useRef<THREE.Group>(null);

  const mouse = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame(({ clock }) => {
    if (!group.current) return;

    const t = clock.elapsedTime;

    // Base rotation
    group.current.rotation.y += 0.0025;

    // Cursor tilt
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      mouse.current.y * 0.25,
      0.05
    );

    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      -mouse.current.x * 0.25,
      0.05
    );

    // Floating motion
    group.current.position.y = Math.sin(t * 1.2) * 0.08;

    // Pulse
    const scale = 1 + Math.sin(t * 2.2) * 0.05;

    group.current.scale.setScalar(scale);
  });

  return (
    <group ref={group}>
      {/* Outer Glow */}

      <mesh scale={2.6}>
        <sphereGeometry args={[0.45, 48, 48]} />

        <meshBasicMaterial
          color="#5B8CFF"
          transparent
          opacity={0.05}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>

      {/* Orbit Ring 1 */}

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.9, 0.02, 32, 200]} />

        <meshBasicMaterial
          color="#4FD1FF"
          toneMapped={false}
        />
      </mesh>

      {/* Orbit Ring 2 */}

      <mesh rotation={[0.7, 0.6, 0]}>
        <torusGeometry args={[1.15, 0.018, 32, 200]} />

        <meshBasicMaterial
          color="#7C5CFF"
          toneMapped={false}
        />
      </mesh>

      {/* Orbit Ring 3 */}

      <mesh rotation={[-0.8, 0.4, 0]}>
        <torusGeometry args={[1.4, 0.018, 32, 200]} />

        <meshBasicMaterial
          color="#5B8CFF"
          toneMapped={false}
        />
      </mesh>

      {/* Core */}

      <mesh>
        <icosahedronGeometry args={[0.28, 2]} />

        <meshStandardMaterial
          color="#F2EEFF"
          emissive="#7C5CFF"
          emissiveIntensity={2}
          metalness={0.45}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}

export default function NeuralCore() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 4],
        fov: 45,
      }}
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: true,
      }}
    >
      {/* Lights */}

      <ambientLight intensity={1.2} />

      <pointLight
        position={[2, 2, 2]}
        intensity={30}
        color="#5B8CFF"
      />

      <pointLight
        position={[-2, -2, 2]}
        intensity={18}
        color="#7C5CFF"
      />

      <pointLight
        position={[0, 0, 3]}
        intensity={10}
        color="#FFFFFF"
      />

      <Float
        speed={2}
        rotationIntensity={0.4}
        floatIntensity={0.6}
      >
        <ConnectionLines />

        <DataNodes />

        <Core />
      </Float>
    </Canvas>
  );
}