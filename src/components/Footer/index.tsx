import React from 'react';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="relative bg-main-900 pt-4 pb-4 text-white">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: '80px' }}>
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 45"
          x="0"
          y="0">
          <polygon
            className="text-gray-300 fill-main-900"
            points="2580 0 2560 45 0 45"></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center text-xs text-white font-light py-1">
          <Image
            src="/logo/with-text-white.png"
            alt="Turks Luxe"
            className="mb-3"
            width={150}
            height={150}
            priority
          />
          Copyright © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};
