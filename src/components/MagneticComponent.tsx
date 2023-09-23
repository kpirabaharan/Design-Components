/* Magnetic Component Created with Framer Motion */

import { useRef, useState, PropsWithChildren, MouseEvent } from 'react';
import { motion } from 'framer-motion';

/**
 * @param {modifier}      modifier     How much the magnetic component moves in the x and y directions. Higher Values = Travels Further
 * @param {className}     className    CSS passed to the main wrapper div
 * @param {className}     children     Child Component to be magnetically moved
 */

interface MagneticComponentProps extends PropsWithChildren {
  modifier?: { x: number; y: number };
  className?: string;
}

const MagneticComponent = ({
  modifier = { x: 1, y: 1 },
  className,
  children,
}: MagneticComponentProps) => {
  const ref = useRef<HTMLDivElement>(null!);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * modifier.x;
    const y = (clientY - (top + height / 2)) * modifier.y;
    setPosition({ x, y });
  };

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      className={className}
      ref={ref}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 150, damping: 8, mass: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default MagneticComponent;
