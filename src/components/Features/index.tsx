import {
  GiMartini as CelebrationsIcon,
  GiFishingHook as FishingIcon,
  GiSnorkel as SnorklingIcon,
  GiBoatHorizon as RelaxingIcon,
} from 'react-icons/gi';
import Image from 'next/image';
import { HeadingText } from '~/components/HeadingText';

const features = [
  {
    name: 'Relaxing',
    icon: RelaxingIcon,
  },
  {
    name: 'Fishing',
    icon: FishingIcon,
  },
  {
    name: 'Snorkling',
    icon: SnorklingIcon,
  },
  {
    name: 'Celebrations',
    icon: CelebrationsIcon,
  },
];

export const Features = () => {
  return (
    <section id="features" className="overflow-hidden py-12 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <HeadingText text="Boat Charter" />
              <p className="mt-6 mb-12 text-lg leading-8 text-gray-600">
                Our experienced Captain and Crew can provide you with the
                perfect charter for a once-in-a-lifetime experience. Whether
                you&apos;re looking for a romantic cruise or an ocean adventure,
                our team is here to make sure you have the best experience
                possible. <br /> <br />
                Book your charter today and get ready for the ultimate boat
                charter experience!
              </p>
              <dl className="mt-2 flex flex-wrap justify-around text-base text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <dt
                    key={feature.name}
                    className="flex flex-col text-main-900 mb-4">
                    <feature.icon
                      className="text-main-800 w-14 h-14 mx-auto mb-4"
                      aria-hidden="true"
                    />
                    <h3>{feature.name}</h3>
                  </dt>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src="/images/boat-5.png"
            alt="Boat on water in Turks and Caicos Islands"
            className="w-[48rem] shadow-2xl rounded-md sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={300}
            height={250}
          />
        </div>
      </div>
    </section>
  );
};
