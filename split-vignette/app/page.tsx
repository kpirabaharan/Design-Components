'use client';

import { ecommerce, netflix, spotify, smartwindows } from './assets/images';

import { Gallery } from '@/components/Gallery';

const projects = [
  { name: 'ecommerce', image: ecommerce },
  { name: 'netflix', image: netflix },
  { name: 'spotify', image: spotify },
  { name: 'smartwindows', image: smartwindows },
];

export default function Home() {
  return (
    <main>
      {projects.map((project, index) => (
        <Gallery key={index} image={project.image} />
      ))}
    </main>
  );
}
