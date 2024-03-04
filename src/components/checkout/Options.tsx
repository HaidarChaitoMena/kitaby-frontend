'use client';
import { useState } from 'react';
type props = {
  name: string;
  items: {
    id: number;
    label: string;
    slug: string;
  }[];
};

function Options({ items, name }: props) {
  const [selected, setSeleceted] = useState(0);
  return (
    <>
      <div className='mx-4 flex w-full pb-4'>
        {items.map((item, index) => {
          return (
            <div
              key={item.id}
              className='flex w-[44%] cursor-pointer flex-row text-lg font-medium text-secondary'
            >
              <label className='w-full' htmlFor={`${item.label}-${item.id}`}>
                <div
                  className={`card rounded-box flex h-20   flex-wrap  content-center justify-center  ${
                    selected == item.id ? 'bg-accent' : 'bg-secondary'
                  }`}
                >
                  {item.label}
                  <div className={` mb-4 flex h-1/2 flex-row items-center`}>
                    <input
                      id={`${item.slug}-${item.id}`}
                      type='radio'
                      name={name}
                      className='hidden'
                      value={item.id}
                      onChange={(e) => setSeleceted(item.id)}
                    />
                  </div>
                </div>
              </label>
              {index < items.length - 1 && <div className='divider divider-horizontal'>or</div>}
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Options;
