import { Book } from '@/types/Book';
import SmallBookCard from './SmallBookCard';
import Image from 'next/image';
import Link from 'next/link';

type props = {
  selectedBook: Book;
  featuredBooks: Book[];
};

export default function SideBar({ selectedBook, featuredBooks }: props) {
  return (
    <div className='mx-8 mt-8 w-full flex-col md:w-1/4'>
      <section className='mb-4 flex-none'>
        <div className='mx-auto rounded-xl bg-primary p-4'>
          <h3 className='text-primary-content'>Details</h3>
          <div className='grid grid-cols-2 gap-2'>
            <div>
              <div className='text-xs text-primary-content'>Language</div>
              <div className='font-bold text-neutral-content'>{selectedBook.language}</div>
            </div>
            <div>
              <div className='text-xs text-primary-content'>Paper Page</div>
              <div className='font-bold text-neutral-content'>{selectedBook.paperPage}</div>
            </div>
            <div>
              <div className='text-xs text-primary-content'>Auther</div>
              <div className='font-bold text-neutral-content'>{selectedBook.auther}</div>
            </div>
            <div>
              <div className='text-xs text-primary-content'>Publish Date</div>
              <div className='font-bold text-neutral-content'>{selectedBook.publishDate}</div>
            </div>
          </div>
        </div>
      </section>
      <section className='mb-4 grow'>
        <div className='mb-3 text-xl font-medium text-primary-content'>Featured books</div>
        <div className='h-80 overflow-y-scroll'>
          {[1, 2, 3, 4, 5].map(function (book, i) {
            return (
              <SmallBookCard
                key={i}
                book={{
                  label: 'The Poison of Love',
                  rating: 3,
                  id: 0,
                  description:
                    'When Tulsi first meets Madhav, she is irrevocably drawn to his chiselled good looks and charm. Although wary of his many dalliances and the string of broken hearts left in his wake, she is surprised by the intense desire that Madhav arouses in her. And before long, she forsakes her family, her prospective career, her fiancé all for the love of this inscrutable man. But love can be like poison. And nothing can prepare Tulsi for the heartache and betrayal that lie ahead. Years later, Tulsi escapes to the ancient city of Vrindavan, seeking redemption amidst the cries and prayers of its anguished widows. However, when her past catches up with her, old wounds resurface with dramatic consequences. By turns savage and tender, The Poison of Love is a spellbinding tale of love and sacrifice, pain and retribution, confirming K.R. Meera as one of our most fearless and accomplished writers.',
                  ratingCount: 10,
                  image: 'poisonOfLove.png',
                }}
              />
            );
          })}
        </div>
      </section>
      <section className='flex-none'>
        <div className='card image-full w-full bg-base-100 shadow-xl'>
          <figure>
            <Image fill src={'/static/images/offers/offer1.png'} alt='Shoes' />
          </figure>
          <div className='card-body p-4'>
            <h2 className='card-title self-center'>Spciaal Offer!</h2>
            <p className='mb-0 text-center'>50% on everything</p>
            <Link href={'/products/all'} className='btn btn-primary hover:brightness-105'>
              Copy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
