'use client';

import { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader, Mesh } from 'three';

import { flower } from '@/assets';

const Box = () => {
  const mesh = useRef<Mesh>(null!);

  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.15;
    mesh.current.rotation.y += delta * 0.15;
    mesh.current.rotation.z += delta * 0.15;
  });

  const texture_1 = useLoader(TextureLoader, flower.src);
  const texture_2 = useLoader(TextureLoader, flower.src);
  const texture_3 = useLoader(TextureLoader, flower.src);
  const texture_4 = useLoader(TextureLoader, flower.src);
  const texture_5 = useLoader(TextureLoader, flower.src);
  const texture_6 = useLoader(TextureLoader, flower.src);

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial map={texture_1} attach={'material-0'} />
      <meshStandardMaterial map={texture_2} attach={'material-1'} />
      <meshStandardMaterial map={texture_3} attach={'material-2'} />
      <meshStandardMaterial map={texture_4} attach={'material-3'} />
      <meshStandardMaterial map={texture_5} attach={'material-4'} />
      <meshStandardMaterial map={texture_6} attach={'material-5'} />
    </mesh>
  );
};

const Cube = () => {
  return (
    <main className='h-[500vh]'>
      <div className='sticky top-0 h-screen'>
        <Canvas>
          <ambientLight intensity={2} />
          <directionalLight position={[2, 1, 1]} />
          <Box />
        </Canvas>
      </div>
    </main>
  );
};

export default Cube;
