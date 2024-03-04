import BookCard from '@/components/home/BookCard';
import Hero from '@/components/home/Hero';

export default function Home() {
  return (
    <>
      <Hero />
      <div className='mb-1 flex flex-row justify-between md:px-8'>
        <h3 className='self-center text-base-300 brightness-125'>Categories</h3>
        <div>
          <select className='select select-ghost w-full max-w-xs bg-primary focus:outline-0 active:bg-primary'>
            <option>Newest</option>
            <option>Hot</option>
            <option>Top</option>
          </select>
        </div>
      </div>
      <div className='flex flex-row flex-wrap md:px-8'>
        <BookCard
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
        <BookCard
          book={{
            label: 'Harry Potter and the Half-Blood Prince',
            rating: 2,
            id: 1,
            description:
              "The war against Voldemort is not going well; even Muggle governments are noticing. Ron scans the obituary pages of the Daily Prophet, looking for familiar names. Dumbledore is absent from Hogwarts for long stretches of time, and the Order of the Phoenix has already suffered losses. And yet...As in all wars, life goes on. Sixth-year students learn to Apparate - and lose a few eyebrows in the process. The Weasley twins expand their business. Teenagers flirt and fight and fall in love. Classes are never straightforward, though Harry receives some extraordinary help from the mysterious Half-Blood Prince.So it's the home front that takes center stage in the multilayered sixth installment of the story of Harry Potter. Here at Hogwarts, Harry will search for the full and complex story of the boy who became Lord Voldemort - and thereby find what may be his only vulnerability.",
            ratingCount: 3,
            image: 'harryPotterAndTheHalfBloodPrince.png',
          }}
        />
      </div>
      <div className='flex flex-row flex-wrap md:px-8'>
        <BookCard
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
        <BookCard
          book={{
            label: 'Harry Potter and the Half-Blood Prince',
            rating: 2,
            id: 1,
            description:
              "The war against Voldemort is not going well; even Muggle governments are noticing. Ron scans the obituary pages of the Daily Prophet, looking for familiar names. Dumbledore is absent from Hogwarts for long stretches of time, and the Order of the Phoenix has already suffered losses. And yet...As in all wars, life goes on. Sixth-year students learn to Apparate - and lose a few eyebrows in the process. The Weasley twins expand their business. Teenagers flirt and fight and fall in love. Classes are never straightforward, though Harry receives some extraordinary help from the mysterious Half-Blood Prince.So it's the home front that takes center stage in the multilayered sixth installment of the story of Harry Potter. Here at Hogwarts, Harry will search for the full and complex story of the boy who became Lord Voldemort - and thereby find what may be his only vulnerability.",
            ratingCount: 3,
            image: 'harryPotterAndTheHalfBloodPrince.png',
          }}
        />
      </div>
    </>
  );
}
