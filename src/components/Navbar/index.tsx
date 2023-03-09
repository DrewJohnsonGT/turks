'use client';

import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export const NAV_LINKS = [
  { label: 'About', href: '/#about' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Contact', href: '/#contact' },
];

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="items-center justify-between px-1 py-1 bg-white">
      <div className="mx-0 flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-main-900"
            href="#contact">
            <Image
              src="/logo/with-text-blue.png"
              alt="Turks Luxe"
              className="inline-block pl-1"
              width={100}
              height={100}
              priority
            />
          </Link>
          <button
            className="text-main-900 cursor-pointer text-xl leading-none px-3 py-1 border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}>
            <FaBars size={20} />
          </button>
        </div>
        <div
          className={
            'lg:flex flex-grow items-center' +
            (navbarOpen ? ' flex' : ' hidden')
          }
          id="nav-items">
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto text-main-900">
            {NAV_LINKS.map((link) => (
              <li className="nav-item" key={link.href}>
                <a
                  className="px-2 flex items-center text-sm uppercase font-bold leading-snug text-main-900 hover:opacity-75"
                  href={link.href}>
                  <span className="ml-2 text-main-900">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
