import Image from 'next/image';

export const Banner = () => {
  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-32">
      <Image
        src="/images/boat-ocean.png"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        width={2000}
        height={2000}
        priority
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Luxury Boat Charters
          </h2>
          <p className="mt-6 text-lg leading-8 text-white">
            Luxurious and unforgettable boat charter experiences in the
            beautiful Turks and Caicos Islands.
          </p>
        </div>
      </div>
    </section>
  );
};
