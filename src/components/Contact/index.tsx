'use client';

import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasSuccessfullySent, setHasSuccessfullySent] = useState(false);
  const [error, setError] = useState(false);

  const handleContactSubmit: React.FormEventHandler<HTMLFormElement> = async (
    e,
  ) => {
    e.preventDefault();
    setIsLoading(true);
    setError(false);

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: e.currentTarget.firstName.value,
        lastName: e.currentTarget.lastName.value,
        email: e.currentTarget.email.value,
        phoneNumber: e.currentTarget.phoneNumber.value,
        message: e.currentTarget.message.value,
      }),
    });
    const data = await res.json();
    if (data.error) {
      setError(true);
    } else {
      setHasSuccessfullySent(true);
    }
    setIsLoading(false);
  };

  return (
    <section
      id="contact"
      className="isolate bg-white py-24 px-6 sm:py-32 lg:px-8">
      {hasSuccessfullySent ? (
        <div
          className="bg-teal-100 max-w-md mx-auto border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
          role="alert">
          <div className="flex">
            <FaCheckCircle className="text-green-400 mr-4" size={40} />
            <div>
              <p className="font-bold">Your message has been sent!</p>
              <p className="text-sm">We look forward to speaking with you :)</p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Contact
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              We&apos;ll get back in touch with you as soon as possible.
            </p>
          </div>

          <form
            onSubmit={handleContactSubmit}
            className="mx-auto mt-16 max-w-xl sm:mt-20">
            <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-semibold leading-6 text-gray-900">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-semibold leading-6 text-gray-900">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-semibold leading-6 text-gray-900">
                  Phone number
                </label>
                <div className="relative mt-2.5">
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-main-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-main-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-600">
                {isLoading ? (
                  <div
                    className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status"></div>
                ) : (
                  'Submit'
                )}
              </button>
            </div>
            {error && (
              <div role="alert">
                <div className="bg-red-500 text-white font-bold rounded-t mt-5 px-4 py-2">
                  Error
                </div>
                <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                  <p>
                    We&apos;re having trouble sending your message. Please try
                    again later
                  </p>
                </div>
              </div>
            )}
          </form>
        </>
      )}
    </section>
  );
};
