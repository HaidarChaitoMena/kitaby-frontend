'use client';
import Image from 'next/image';

export default function NotFound() {
  return (
    <main className='flex h-full min-h-screen w-full flex-col justify-center rounded-3xl bg-primary p-10 px-6 text-center align-middle md:px-14'>
      <div className='text-8xl text-error'>404</div>
      <Image
        className='mx-auto h-24'
        width={130}
        height={150}
        alt='404'
        src={'/static/images/404.png'}
      />
      <div className='text-3xl text-error'>A Dog Ate this Page</div>
      <div className='mx-auto max-w-lg'>
        Your dog is cute but honestly a menace. Where are my shoes? Where is my graduation
        certificate? Where is the chocolate cake I baked for my Aunt’s birthday? And why did you
        take your dog to the vet on that same Thursday?!
      </div>
    </main>
  );
}
