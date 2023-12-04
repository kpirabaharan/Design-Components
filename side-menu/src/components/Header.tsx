'use client';

import { useState } from 'react';
import { AnimatePresence, Variants, motion } from 'framer-motion';

import Button from '@/components/Button';
import Nav from '@/components/Nav';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const variants: Variants = {
    open: {
      width: 450,
      height: 650,
      top: -25,
      right: -25,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      width: 100,
      height: 40,
      top: 0,
      right: 0,
      transition: { delay: 0.35, duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <div className='fixed right-12 top-12'>
      <motion.div
        variants={variants}
        initial='closed'
        animate={isActive ? 'open' : 'closed'}
        className='relative h-[650px] w-[450px] rounded-[25px] bg-teal-600'
      >
        <AnimatePresence>
          {isActive && <Nav isActive={isActive} />}
        </AnimatePresence>
      </motion.div>
      <Button isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default Header;
