'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Decal,
  OrbitControls,
  Preload,
  useTexture,
  Text3D,
  Center,
  PerspectiveCamera,
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
      ref.current.position.setX(
        Math.sin(
          clock.getElapsedTime() * 0.5 +
            ((360 / total) * index * Math.PI) / 180,
        ) * 30,
      );
      ref.current.position.setZ(
        Math.cos(
          clock.getElapsedTime() * 0.5 +
            ((360 / total) * index * Math.PI) / 180,
        ) * 15,
      );
      // ref.current.rotation.set(
      //   0,
      //   Math.sin(clock.getElapsedTime() * 0.5) * 0.2,
      //   0,
      // );
    }
  });

  return (
    <mesh ref={ref} castShadow receiveShadow scale={[2.2, 2, 2]}>
      <icosahedronGeometry args={[1, 6]} />
      <meshStandardMaterial color='white' flatShading />
      <Decal
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
  return (
    <group position={[0, 0, -25]}>
      {tech.map((item, index) => (
        <Ball key={index} item={item} total={tech.length} index={index} />
      ))}
      <Center>
        <Text3D font={'/Inter_Bold.json'} size={5}>
          FrontEnd
          <meshNormalMaterial />
        </Text3D>
      </Center>
    </group>
  );
};

export default function Home() {
  return (
    <div className='flex h-screen bg-white items-center'>
      <div className='h-[300px] w-full'>
        <Canvas>
          <directionalLight position={[0, 10, 15]} intensity={1} />
          <PerspectiveCamera makeDefault>
            <RowOfBalls />
          </PerspectiveCamera>
          <OrbitControls />
          <Preload all />
        </Canvas>
      </div>
    </div>
  );
}
