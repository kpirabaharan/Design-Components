'use client';

import { useRef } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';
import { motion } from 'framer-motion-3d';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

import { flower } from '@/assets';
import { OrbitControls, useTexture, useVideoTexture } from '@react-three/drei';

const VideoMaterial = ({ url, side }: { url: string; side: number }) => {
  const texture = useVideoTexture(url);
  return (
    <meshStandardMaterial
      map={texture}
      attach={`material-${side}`}
      toneMapped={true}
    />
  );
};

const ImageMaterial = ({ url, side }: { url: string; side: number }) => {
  const texture = useTexture(url);
  return (
    <meshStandardMaterial
      map={texture}
      attach={`material-${side}`}
      toneMapped={true}
    />
  );
};

const Box = () => {
  const mesh = useRef<Mesh>(null!);

  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.15;
    mesh.current.rotation.y += delta * 0.15;
    mesh.current.rotation.z += delta * 0.15;
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[10, 10, 10]} />
      <VideoMaterial url={'Oppenheimer.mp4'} side={0} />
      <VideoMaterial url={'Oppenheimer.mp4'} side={1} />
      <ImageMaterial url={flower.src} side={2} />
      <ImageMaterial url={flower.src} side={3} />
      <VideoMaterial url={'Oppenheimer.mp4'} side={4} />
      <ImageMaterial url={flower.src} side={5} />
    </mesh>
  );
};

const Cube = () => {
  return (
    <main className='h-[500vh]'>
      <div className='sticky top-0 h-screen'>
        <Canvas camera={{ position: [0, 2, 50], fov: 30 }}>
          <OrbitControls enableZoom={false} enablePan={false} />
          <ambientLight intensity={2} />
          <directionalLight position={[2, 1, 1]} />
          <Box />
        </Canvas>
      </div>
    </main>
  );
};

export default Cube;
