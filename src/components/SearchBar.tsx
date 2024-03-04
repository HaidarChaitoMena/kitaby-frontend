export default function SearchBar() {
  return (
    <form method='GET' className='mb-4 w-full pt-8 '>
      <div className='relative '>
        <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
          <button
            type='submit'
            className='focus:shadow-outline bg-secondary p-1 focus:outline-none'
          >
            <svg
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              className='h-6 w-6'
            >
              <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
            </svg>
          </button>
        </span>
        <input
          type='search'
          name='q'
          className='input w-full rounded-3xl bg-secondary pl-10 text-sm'
          placeholder='Search...'
          autoComplete='off'
        />
      </div>
    </form>
  );
}
