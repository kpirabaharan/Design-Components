'use client';

/* eslint-disable @next/next/no-img-element */
import Lottie from 'lottie-react';
import { useState } from 'react';
import { IoCopyOutline } from 'react-icons/io5';

import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import { GridGlobe } from '@/components/ui/grid-globe';
import MagicButton from '@/components/ui/magic-button';

import animationData from '@/data/confetti.json';
import { cn } from '@/utils/cn';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'md:grid-row-7 mx-auto grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-5 lg:gap-8',
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  imgClassName,
  titleClassName,
  img,
  spareImg,
  title,
  description,
  header,
  icon,
}: {
  id: number;
  className?: string;
  imgClassName?: string;
  titleClassName?: string;
  img?: string;
  spareImg?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  const leftLists = ['React.js', 'Next.js', 'Typescript'];
  const rightLists = ['AWS', 'Docker', 'Kubernetes'];

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('kpirabaharan3@gmail.com');
    setCopied(true);
  };

  return (
    <div
      className={cn(
        'group/bento relative row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-3xl border border-white/[0.1] shadow-input transition duration-200 hover:shadow-xl dark:shadow-none',
        className,
      )}
      style={{
        background: 'rgb(4,7,29)',
        backgroundColor:
          'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
      }}
    >
      {/* Img Divs */}
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className='absolute h-full w-full'>
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover object-center')}
            />
          )}
        </div>
        <div
          className={`absolute -bottom-5 right-0 ${
            id === 5 && 'w-full opacity-80'
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className='h-full w-full object-cover object-center'
            />
          )}
        </div>

        {/* Gradient Tile 6 */}
        {id === 6 && <BackgroundGradientAnimation />}

        <div
          className={cn(
            titleClassName,
            'relative flex min-h-40 flex-col p-5 px-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full lg:p-10',
          )}
        >
          <div className='z-10 font-sans text-sm font-extralight text-[#C1C2D3] md:max-w-32 md:text-xs lg:text-base'>
            {description}
          </div>
          <div
            className={`z-10 max-w-96 font-sans text-lg font-bold lg:text-3xl`}
          >
            {title}
          </div>

          {/* 3D Globe */}
          {id === 2 && <GridGlobe />}

          {/* Tech Stack List */}
          {id === 3 && (
            <div className='absolute -right-3 flex w-fit gap-1 lg:-right-2 lg:gap-5'>
              {/* Left List */}
              <div className='flex flex-col gap-3 md:gap-3 lg:gap-8'>
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className='rounded-lg bg-[#10132E] px-3 py-2 text-center text-xs opacity-50 lg:px-3 lg:py-4 lg:text-base lg:opacity-100'
                  >
                    {item}
                  </span>
                ))}
                <span className='rounded-lg bg-[#10132E] px-3 py-4 text-center lg:px-3 lg:py-4'></span>
              </div>
              {/* Right List */}
              <div className='flex flex-col gap-3 md:gap-3 lg:gap-8'>
                <span className='rounded-lg bg-[#10132E] px-3 py-4 text-center lg:px-3 lg:py-4'></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className='rounded-lg bg-[#10132E] px-3 py-2 text-center text-xs opacity-50 lg:px-3 lg:py-4 lg:text-base lg:opacity-100'
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Gradient Tile */}
          {id === 6 && (
            <div className='relative mt-5'>
              <div className='absolute -bottom-5 right-0'>
                <Lottie
                  loop={copied}
                  autoPlay={copied}
                  animationData={animationData}
                  rendererSettings={{
                    preserveAspectRatio: 'xMidYMid slice',
                  }}
                />
              </div>
              <MagicButton
                title={copied ? 'Email copied' : 'Copy my email'}
                icon={<IoCopyOutline />}
                position={'left'}
                otherClasses='!bg-[#151a31]'
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
