import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className='relative mb-8 w-full overflow-hidden rounded-3xl bg-secondary p-6'>
      <Image
        className='float-right m-0 w-96'
        src={'/static/images/hero.png'}
        alt='book'
        height={380}
        width={380}
      />
      <div className='mb-2 w-full text-4xl font-bold text-neutral-content md:w-2/3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </div>
      <div className='mb-8 w-full md:w-2/3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur id, voluptate voluptatibus
        at laudantium esse facilis
      </div>
      <Link href={'/products/all'} className='btn btn-neutral hover:brightness-75'>
        Explore
      </Link>
    </div>
  );
}
