import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';

interface GalleryProps {
  image: StaticImageData;
}

export const Gallery = ({ image }: GalleryProps) => {
  // const { x, y } = mousePosition;

  return (
    <div>
      <div>
        <Image src={image.src} alt='image' />
      </div>
    </div>
  );
};
