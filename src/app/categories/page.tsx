import Category from '@/components/categories/Category';

export default function Categories() {
  return (
    <>
      <div className='mx-auto grid grid-cols-2 gap-6'>
        <Category label='category 1' slug='adventure' id={0} />
        <Category label='category 1' slug='adventure' id={1} />
        <Category label='category 1' slug='adventure' id={2} />
        <Category label='category 1' slug='adventure' id={3} />
        <Category label='category 1' slug='adventure' id={4} />
      </div>
    </>
  );
}
