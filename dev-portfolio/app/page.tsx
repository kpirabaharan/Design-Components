import Grid from '@/components/grid';
import Hero from '@/components/hero';
import { FloatingNav } from '@/components/ui/floating-nav';
import { BiHome, BiMessage, BiUser } from 'react-icons/bi';

export default function Home() {
  const navItems = [
    {
      name: 'Home',
      link: '/',
      icon: <BiHome className='h-4 w-4 text-neutral-500 dark:text-white' />,
    },
    {
      name: 'About',
      link: '/about',
      icon: <BiUser className='h-4 w-4 text-neutral-500 dark:text-white' />,
    },
    {
      name: 'Contact',
      link: '/contact',
      icon: <BiMessage className='h-4 w-4 text-neutral-500 dark:text-white' />,
    },
  ];

  return (
    <main className='relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black-100 px-5 sm:px-10'>
      <div className='w-full max-w-7xl'>
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
