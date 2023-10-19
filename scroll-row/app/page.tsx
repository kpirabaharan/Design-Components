'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Decal,
  OrbitControls,
  PerspectiveCamera,
  Preload,
  useTexture,
} from '@react-three/drei';

import { tech } from '@/constants';
import { StaticImageData } from 'next/image';

interface BallProps {
  item: {
    name: string;
    icon: StaticImageData;
  };
}

const Ball = ({ item }: BallProps) => {
  const decal = useTexture(item.icon.src);
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = Math.tan(clock.getElapsedTime() * 0.5) / 20;
    }
  });

  return (
    <mesh ref={ref} castShadow receiveShadow scale={1}>
      <icosahedronGeometry args={[1, 6]} />
      <meshStandardMaterial
        color='white'
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
      />
      <Decal
        debug
        position={[0, 0, 0.5]}
        rotation={[2 * Math.PI, 0, 6.25]}
        scale={1.5}
        map={decal}
      />
    </mesh>
  );
};

const RowOfBalls = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <group position={[0, 0, -20]}>
      {tech.map((item, index) => (
        <mesh
          key={index}
          position={[
            Math.sin(((360 / tech.length) * index * Math.PI) / 180) * 20,
            0,
            Math.cos(((360 / tech.length) * index * Math.PI) / 180) * 20,
          ]}
          onPointerOver={() => setHovered(index)}
          onPointerOut={() => setHovered(null)}
        >
          <Ball item={item} />
        </mesh>
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
