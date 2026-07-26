"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const NODE_COUNT = 90;

type Node = {
  position: THREE.Vector3;
  color: THREE.Color;
  size: number;
  speed: number;
  offset: number;
};

export default function NetworkGraph() {
  const groupRef = useRef<THREE.Group>(null);

  const nodes = useMemo<Node[]>(() => {
    const palette = [
      new THREE.Color("#4FD1FF"),
      new THREE.Color("#5B8CFF"),
      new THREE.Color("#7C5CFF"),
      new THREE.Color("#FFFFFF"),
    ];

    return Array.from({ length: NODE_COUNT }, () => {
      const radius = Math.random() * 1.8;

      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      return {
        position: new THREE.Vector3(x, y, z),
        color: palette[Math.floor(Math.random() * palette.length)].clone(),
        size: 0.006 + Math.random() * 0.006,
        speed: 0.3 + Math.random() * 0.7,
        offset: Math.random() * Math.PI * 2,
      };
    });
  }, []);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;

    const t = clock.elapsedTime;

    groupRef.current.children.forEach((child, index) => {
      const node = nodes[index];

      child.position.y =
        node.position.y +
        Math.sin(t * node.speed + node.offset) * 0.03;

      child.position.x =
        node.position.x +
        Math.cos(t * node.speed + node.offset) * 0.015;
    });
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, index) => (
        <mesh
          key={index}
          position={node.position}
        >
          <sphereGeometry args={[node.size, 8, 8]} />
          <meshBasicMaterial
            color={node.color}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}