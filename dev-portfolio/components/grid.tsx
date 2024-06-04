import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';

import { gridItems } from '@/data';

const Grid = () => {
  return (
    <section id='about'>
      <BentoGrid className='w-full py-20'>
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            imgClassName,
            titleClassName,
            img,
            spareImg,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              img={img}
              spareImg={spareImg}
            />
          ),
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
