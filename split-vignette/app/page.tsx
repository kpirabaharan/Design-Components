'use client';

import { MouseEvent, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

import SplitVignette from '@/components/SplitVignette';

import { ecommerce, netflix, spotify, smartwindows } from './assets/images';
import { useSpring, SpringOptions } from 'framer-motion';

const projects = [
  { name: 'ecommerce', image: ecommerce },
  { name: 'netflix', image: netflix },
  { name: 'spotify', image: spotify },
  { name: 'smartwindows', image: smartwindows },
];

export default function Home() {
  const spring: SpringOptions = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };

  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  const mouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const targetX = clientX - (window.innerWidth / 2) * 0.25;
    const targetY = clientY - (window.innerWidth / 2) * 0.3;
    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY);
  };

  return (
    <main onMouseMove={mouseMove}>
      {projects.map((project, index) => (
        <SplitVignette
          key={index}
          image={project.image}
          mousePosition={mousePosition}
        />
      ))}
    </main>
  );
}
