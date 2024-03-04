'use client';
import { Book } from '@/types/Book';
import { motion } from 'framer-motion';
import Image from 'next/image';

type props = {
  book: Book;
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
export default function SmallBookCard({ book }: props) {
  return (
    <motion.div
      variants={variants}
      custom={book.id}
      animate='visible'
      initial='hidden'
      className='card card-side mb-4 h-24 w-full p-2 duration-150 ease-in-out hover:cursor-pointer hover:bg-primary'
    >
      <Image
        className='my-0 h-20 w-24 rounded-md'
        height={100}
        width={100}
        src={'/static/images/books/' + book.image}
        alt='Movie'
      />
      <div className='card-body overflow-hidden p-2'>
        <h2 className='card-title text-sm text-neutral-content'>{book.label}</h2>
        <div className='rating'>
          {Array.from(Array(5).keys()).map((i) => {
            return (
              <span
                key={i}
                className={`mask mask-heart my-auto h-4 w-4 ${
                  i < book.rating ? 'bg-accent' : 'bg-accent-content'
                }`}
              ></span>
            );
          })}
          <span> ({book.ratingCount})</span>
        </div>
      </div>
    </motion.div>
  );
}
