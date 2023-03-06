import Image from 'next/image';

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden bg-white py-24 px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              “They paid me to write this review but the boat is pretty cool I
              guess.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <Image
              className="mx-auto h-15 w-15 rounded-full"
              src="/images/madeline.png"
              width={100}
              height={100}
              alt="Madeline Deshazer"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">
                Madeline Deshazer
              </div>
              <svg
                viewBox="0 0 2 2"
                width={3}
                height={3}
                aria-hidden="true"
                className="fill-gray-900">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">CEO of Hooper St</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};
