'use client';
import { AiOutlineBook, AiOutlineHeart, AiOutlineHome, AiOutlineSearch } from 'react-icons/ai';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type props = {};

export default function NavBar({}: props) {
  const pathname = usePathname();

  return (
    <div className='w-full p-4 pr-0 md:w-1/4 md:pt-8'>
      <div className='md:mb-8 md:ml-2'>
        <Link className='font-extrabold' href={'/'}>
          <h2 className='text-center text-neutral-content md:text-start'>Kitaby</h2>
        </Link>
      </div>
      <div className='flex flex-row justify-start md:flex-col'>
        <Link
          href={'/'}
          className={`mb-2 flex h-14 w-full items-center justify-center p-5 pl-0 text-start duration-150 ease-in-out hover:bg-primary md:justify-start md:rounded-l-3xl ${
            pathname == '/' ? 'bg-primary' : ''
          }`}
        >
          <AiOutlineHome className='mx-2 fill-base-200 text-2xl' />
          <span className='mx-2 hidden md:block'>Home</span>
        </Link>
        <Link
          href={'/discover'}
          className={`easy-in-out  mb-2 flex h-14 w-full items-center justify-center text-start duration-150 hover:bg-primary md:justify-start md:rounded-l-3xl md:p-5 md:pl-0 ${
            pathname == '/discover' ? 'bg-primary' : ''
          }`}
        >
          <AiOutlineSearch className='mx-2 fill-base-200 text-2xl' />
          <span className='mx-2 hidden md:block'>Discover</span>
        </Link>
        <Link
          href={'/categories'}
          className={`easy-in-out  mb-2 flex h-14 w-full items-center justify-center p-5 pl-0 text-start duration-150 hover:bg-primary md:justify-start md:rounded-l-3xl ${
            pathname == '/categories' ? 'bg-primary' : ''
          }`}
        >
          <AiOutlineBook className='mx-2 fill-base-200 text-2xl' />
          <span className='mx-2 hidden md:block'>Categories</span>
        </Link>
        <Link
          href={'/favorites'}
          className={`easy-in-out  mb-2 flex h-14 w-full items-center justify-center p-5 pl-0 text-start duration-150 hover:bg-primary md:justify-start md:rounded-l-3xl ${
            pathname == '/favorites' ? 'bg-primary' : ''
          }`}
        >
          <AiOutlineHeart className='mx-2 fill-base-200 text-2xl' />
          <span className='mx-2 hidden md:block'>Favorites</span>
        </Link>
      </div>
    </div>
  );
}
