'use client';

import Image, { StaticImageData } from 'next/image';
import { MotionValue, motion } from 'framer-motion';

interface SplitVignetteProps {
  image: StaticImageData;
  mousePosition: { x: MotionValue<number>; y: MotionValue<number> };
}

const SplitVignette = ({ image, mousePosition }: SplitVignetteProps) => {
  const { x, y } = mousePosition;

  return (
    <div className='h-[120vh] clip-path-mypolygon'>
      <div className='h-full w-full relative'>
        <Image
          className='object-cover w-full'
          src={image.src}
          alt='image'
          fill
        />
      </div>
      <motion.div
        style={{ x, y }}
        className='h-[30vw] w-[25vw] fixed rounded-3xl top-0 overflow-hidden'
      >
        <Image
          className='object-cover w-full'
          src={image.src}
          alt='image'
          fill
        />
      </motion.div>
    </div>
  );
};

export default SplitVignette;
