'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

type props = {
  id: number;
  label: string;
  slug: string;
  image?: string;
};
const variants = {
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.1,
    },
  }),
  hidden: { opacity: 0 },
};

export default function Category({ id, label, slug, image }: props) {
  return (
    <motion.div
      variants={variants}
      custom={id}
      animate='visible'
      initial='hidden'
      className='card image-full h-44 cursor-pointer bg-base-100 shadow-xl transition duration-150 ease-in-out hover:brightness-90'
    >
      {image && (
        <figure>
          <Image
            className='!object-fill'
            fill
            src={`/static/images/categories/${image}`}
            alt={label}
          />
        </figure>
      )}
      <div className='card-body my-auto text-center'>
        <h2 className='card-title self-center text-center'>{label}</h2>
      </div>
    </motion.div>
  );
}
