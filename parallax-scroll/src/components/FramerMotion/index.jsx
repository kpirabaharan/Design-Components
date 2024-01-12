'use client';

import { useRef } from 'react';
import styles from '../../app/page.module.scss';
import Picture1 from '../../../public/medias/4.jpg';
import Picture2 from '../../../public/medias/5.jpg';
import Picture3 from '../../../public/medias/6.jpg';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const word = 'with framer-motion';

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });
  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const images = [
    {
      src: Picture1,
      y: 0,
    },
    {
      src: Picture2,
      y: lg,
    },
    {
      src: Picture3,
      y: md,
    },
  ];

  const IndividualParallax = () => {
    return useTransform(
      scrollYProgress,
      [0, 1],
      [0, Math.floor(Math.random() * -75) - 25],
    );
  };

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.body}>
        <motion.h1 style={{ y: sm }}>Parallax</motion.h1>
        <h1>Scroll</h1>
        <div className={styles.word}>
          <p>
            {word.split('').map((letter, i) => {
              const y = IndividualParallax();
              return (
                <motion.span style={{ top: y }} key={`l_${i}`}>
                  {letter}
                </motion.span>
              );
            })}
          </p>
        </div>
      </div>
      <div className={styles.images}>
        {images.map(({ src, y }, i) => {
          return (
            <motion.div
              style={{ y }}
              key={`i_${i}`}
              className={styles.imageContainer}
            >
              <Image src={src} placeholder='blur' alt='image' fill />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
