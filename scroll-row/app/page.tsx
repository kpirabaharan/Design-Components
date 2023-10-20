'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Decal,
  Html,
  OrbitControls,
  PerspectiveCamera,
  Preload,
  useTexture,
} from '@react-three/drei';

import { tech } from '@/constants';
import { StaticImageData } from 'next/image';

interface BallProps {
  total: number;
  index: number;
  item: {
    name: string;
    icon: StaticImageData;
  };
}

const Ball = ({ total, index, item }: BallProps) => {
  const decal = useTexture(item.icon.src);
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.5 * -1;
    }
  });

  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      scale={1}
      position={[
        Math.sin(((360 / total) * index * Math.PI) / 180) * 15,
        0,
        Math.cos(((360 / total) * index * Math.PI) / 180) * 15,
      ]}
    >
      <icosahedronGeometry args={[1, 6]} />
      <meshStandardMaterial color='white' flatShading />
      <Decal
        debug
        position={[0, 0, 0.5]}
        rotation={[2 * Math.PI, 0, 6.25]}
        scale={1.5}
      >
        <meshBasicMaterial
          transparent
          polygonOffset
          polygonOffsetFactor={-10}
          map={decal}
        />
      </Decal>
    </mesh>
  );
};

const RowOfBalls = () => {
  const ref = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <group ref={ref} position={[0, 0, -20]}>
      {tech.map((item, index) => (
        <Ball key={index} item={item} total={tech.length} index={index} />
      ))}
    </group>
  );
};

export default function Home() {
  return (
    <div className='flex h-screen bg-white'>
      <Canvas>
        {/* <ambientLight intensity={0.25} /> */}
        <directionalLight position={[0, 0, 15]} intensity={1} />
        <RowOfBalls />
        <OrbitControls
        // enableZoom={false}
        // enablePan={false}
        // enableRotate={false}
        />
      </Canvas>
    </div>
  );
}
