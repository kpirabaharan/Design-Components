import { AnimatePresence, Variants, motion } from 'framer-motion';

interface NavProps {
  isActive: boolean;
}

const Nav = ({ isActive }: NavProps) => {
  const Links = [
    { title: 'Projects', href: '/' },
    { title: 'About', href: '/' },
    { title: 'Contact', href: '/' },
    { title: 'Resume', href: '/' },
    { title: 'Blog', href: '/' },
  ];

  const FooterLinks = [
    { title: 'Twitter', href: '/' },
    { title: 'GitHub', href: '/' },
    { title: 'LinkedIn', href: '/' },
    { title: 'Facebook', href: '/' },
  ];

  const navVariants: Variants = {
    initial: {
      opacity: 0,
      rotateX: 90,
      translateY: 80,
      translateX: -20,
    },
    enter: (index: number) => ({
      opacity: 1,
      rotateX: 0,
      translateY: 0,
      translateX: 0,
      transition: {
        delay: 0.5 + index * 0.1,
        duration: 0.65,
        opacity: { duration: 0.35, delay: 0.5 + index * 0.1 },
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const footerVariants: Variants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    enter: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 1 + index * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <nav className='box-border flex h-full flex-col justify-between px-[40px] pb-[50px] pt-[110px]'>
      <div className='flex flex-col gap-y-6'>
        {Links.map((link, index) => (
          <div className='perspective-1 perspective-origin-bottom' key={index}>
            <motion.div
              custom={index}
              variants={navVariants}
              initial={'initial'}
              animate={'enter'}
              exit={'exit'}
            >
              <a className='text-5xl text-black' href={link.href}>
                {link.title}
              </a>
            </motion.div>
          </div>
        ))}
      </div>
      <div className='grid grid-cols-2'>
        {FooterLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            custom={index}
            variants={footerVariants}
            initial={'initial'}
            animate={'enter'}
            exit={'exit'}
          >
            {link.title}
          </motion.a>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
