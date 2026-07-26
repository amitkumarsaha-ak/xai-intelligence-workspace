"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const NODE_COUNT = 80;

type NodeData = {
  radius: number;
  theta: number;
  phi: number;
  speed: number;
  size: number;
  color: string;
};

export default function DataNodes() {
  const group = useRef<THREE.Group>(null);

  const nodes = useMemo<NodeData[]>(() => {
    return Array.from({ length: NODE_COUNT }).map(() => ({
      radius: 1.8 + Math.random() * 1.6,
      theta: Math.random() * Math.PI * 2,
      phi: Math.random() * Math.PI,
      speed: 0.2 + Math.random() * 0.35,
      size: 0.012 + Math.random() * 0.02,
      color:
        Math.random() > 0.7
          ? "#FFFFFF"
          : Math.random() > 0.5
          ? "#4FD1FF"
          : "#5B8CFF",
    }));
  }, []);

  useFrame(({ clock }) => {
    if (!group.current) return;

    const t = clock.elapsedTime;

    group.current.children.forEach((child, index) => {
      const node = nodes[index];

      const theta = node.theta + t * node.speed;

      const x =
        Math.sin(node.phi) *
        Math.cos(theta) *
        node.radius;

      const y =
        Math.cos(node.phi) *
          node.radius +
        Math.sin(t * node.speed * 2 + index) * 0.08;

      const z =
        Math.sin(node.phi) *
        Math.sin(theta) *
        node.radius;

      child.position.set(x, y, z);

      child.rotation.x += 0.01;
      child.rotation.y += 0.01;
    });

    // Whole field slowly rotates
    group.current.rotation.y += 0.001;

    group.current.rotation.x =
      Math.sin(t * 0.15) * 0.15;

    group.current.rotation.z =
      Math.cos(t * 0.18) * 0.12;
  });

  return (
    <group ref={group}>
      {nodes.map((node, index) => (
        <mesh key={index}>
          <sphereGeometry args={[node.size, 10, 10]} />

          <meshBasicMaterial
            color={node.color}
            transparent
            opacity={0.9}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}