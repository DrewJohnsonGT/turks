import Image from 'next/image';
import { HeadingText } from '~/components/HeadingText';

const SECTIONS = [
  {
    title: 'Features & Amenities',
    items: [
      'Comfortable seating',
      'Cabin to store your valuables',
      'Marine toilet',
      'Sun lounger',
      'Fast engines and very smooth ride',
    ],
    image: '/images/boat-5.png',
  },
  {
    title: 'Fun & Adventure',
    items: [
      'Snorkeling',
      'Freediving',
      'Paddle Boarding',
      'Exploring',
      'Island hopping',
    ],
    image: '/images/boat-4.png',
  },
  {
    title: 'Relaxing',
    items: [
      'Bring your own snacks and drinks',
      'Or order refreshments through us',
      'Ice and cooler are provided',
      'Cups, plates, cuttlery, etc, on board',
      'Shaded seating area (up to 7)',
    ],
    image: '/images/boat-3.png',
  },
];
export const About = () => {
  return (
    <section className="text-main-900">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <HeadingText className="text-center" text="Amenities & Activities" />
        <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-3 lg:px-12 xl:px-32">
          {SECTIONS.map(({ title, items, image }) => (
            <div key={title}>
              <Image
                src={image}
                width={300}
                height={300}
                alt={title}
                className="object-cover w-full h-64 rounded-xl"
              />
              <h3 className="font-semibold mt-4">{title}</h3>
              <ul className="mt-1 mr-2 text-gray-600 list-disc">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
