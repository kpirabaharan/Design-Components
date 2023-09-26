'use client';

import { MouseEvent, useRef } from 'react';
import {
  SpringOptions,
  motionValue,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import { motion } from 'framer-motion-3d';
import { Canvas, MeshProps, useFrame } from '@react-three/fiber';

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
interface BoxProps {
  mouse: any;
}

const Box = ({ mouse }: BoxProps) => {
  const mesh = useRef<MeshProps>(null!);

  return (
    <motion.mesh ref={mesh} rotation-x={mouse.y} rotation-y={mouse.x}>
      <boxGeometry args={[10, 10, 10]} />
      <VideoMaterial url={'Oppenheimer.mp4'} side={0} />
      <VideoMaterial url={'Oppenheimer.mp4'} side={1} />
      <ImageMaterial url={flower.src} side={2} />
      <ImageMaterial url={flower.src} side={3} />
      <VideoMaterial url={'Oppenheimer.mp4'} side={4} />
      <ImageMaterial url={flower.src} side={5} />
    </motion.mesh>
  );
};

const Cube = () => {
  const options: SpringOptions = { damping: 20 };
  const mouse = {
    x: useSpring(useMotionValue(0), options),
    y: useSpring(motionValue(0), options),
  };

  const manageMouseMove = (e: MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;
    const multiplier = 0.5;
    const x = (clientX / innerWidth - 0.5) * multiplier;
    const y = (clientY / innerHeight - 0.5) * multiplier;
    mouse.x.set(x);
    mouse.y.set(y);
  };

  return (
    <main className='h-[500vh]'>
      <div className='sticky top-0 h-screen'>
        <Canvas
          camera={{ position: [0, 2, 50], fov: 30 }}
          onMouseMove={manageMouseMove}
        >
          <OrbitControls enableZoom={false} enablePan={false} />
          <ambientLight intensity={2} />
          <directionalLight position={[2, 1, 1]} />
          <Box mouse={mouse} />
        </Canvas>
      </div>
    </main>
  );
};

export default Cube;
