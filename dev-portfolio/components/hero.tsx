import { Spotlight } from '@/components/ui/spotlight';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { FaLocationArrow } from 'react-icons/fa';
import MagicButton from './ui/magic-button';

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight
          className='-left-10 -top-40 h-screen md:-left-32 md:-top-20'
          fill='white'
        />
        <Spotlight
          className='left-full top-10 h-[80vh] w-[50vh]'
          fill='purple'
        />
        <Spotlight className='left-80 top-28 h-[80vh] w-[50vh]' fill='blue' />
      </div>
      <div className='dark:bg-grid-white/[0.05] bg-grid-black/[0.2] absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white dark:bg-black-100'>
        {/* Radial gradient for the container to give a faded look */}
        <div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100' />
      </div>
      <div className='relative z-10 my-20 flex justify-center'>
        <div className='flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]'>
          <h2 className='max-w-80 text-center text-xs uppercase tracking-widest text-blue-100'>
            Dynamic Web Magic with Next.js
          </h2>
          <TextGenerateEffect
            className='text-center text-[40px] md:text-5xl lg:text-6xl'
            words='Transforming Concepts into Seamless User Experiences'
          />
          <p className='mb-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl'>
            Hi, I&apos;m Keeshigan a Software Developer based in Ontario,
            Canada.
          </p>
          <a href='#about'>
            <MagicButton
              title='Show my work'
              icon={<FaLocationArrow />}
              position={'right'}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
