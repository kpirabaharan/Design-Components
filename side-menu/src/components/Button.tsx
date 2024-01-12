import { motion } from 'framer-motion';

interface ButtonProps {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Button = ({ isActive, setIsActive }: ButtonProps) => {
  return (
    <div
      onClick={() => setIsActive(!isActive)}
      className='absolute right-0 top-0 h-10 w-[100px] cursor-pointer overflow-hidden 
      rounded-[25px] bg-teal-600'
    >
      <motion.div
        className='relative h-full w-full uppercase'
        animate={{ top: isActive ? '-100%' : 0 }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className='flex h-full w-full items-center justify-center'>
          <p className='text-white'>Menu</p>
        </div>
        <div className='absolute top-full flex h-full w-full items-center justify-center bg-black'>
          <p className='text-white'>Close</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Button;
