import {
  GiMartini as CelebrationsIcon,
  GiFishingHook as FishingIcon,
} from 'react-icons/gi';
import { MdKitesurfing } from 'react-icons/md';
import Image from 'next/image';

const features = [
  {
    name: 'Fishing',
    icon: FishingIcon,
  },
  {
    name: 'Celebrations',
    icon: CelebrationsIcon,
  },
  {
    name: 'Watersports',
    icon: MdKitesurfing,
  },
];

export const Features = () => {
  return (
    <section id="features" className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Boat Rental
              </p>
              <p className="mt-6 mb-8 text-lg leading-8 text-gray-600">
                Enjoy the best boat rental in the caicos islands. We have a
                variety of trips to choose from. Anything from fishing to
                watersports to just cruising around the islands!
              </p>
              <dl className="mt-2 flex justify-around text-base text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <dt
                    key={feature.name}
                    className="flex flex-col uppercase text-gray-900 mb-4">
                    <feature.icon
                      className="text-main-400 mx-auto mb-4"
                      size={55}
                      aria-hidden="true"
                    />
                    <h3>{feature.name}</h3>
                  </dt>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src="/images/boat-1.png"
            alt="Boat on water in Turks and Caicos Islands"
            className="w-[48rem] rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={600}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};
