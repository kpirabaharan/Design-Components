'use client';

import { useState } from 'react';
import { Variants, motion } from 'framer-motion';
import { KeyRoundIcon } from 'lucide-react';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const sideBarVariants: Variants = {
    open: {
      x: 0,
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      x: -180,
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <motion.aside
      className='fixed left-0 flex h-full w-60 flex-col items-center border-r 
    bg-[#1f1f23] pt-2 shadow-sm gap-y-2'
      initial={'closed'}
      animate={isOpen ? 'open' : 'closed'}
      exit={isOpen ? 'open' : 'closed'}
      variants={sideBarVariants}
    >
      <button className='w-full bg-blue-500' onClick={() => setIsOpen(!isOpen)}>
        Click
      </button>
      <div
        className={`relative w-full h-[44px] flex flex-row px-4 gap-x-4 items-center top-14 left-2`}
      >
        <KeyRoundIcon className='h-5 w-5' />
        <p>Test</p>
      </div>
    </motion.aside>
  );
};
