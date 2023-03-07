// import clsx from 'clsx';
// import { EB_Garamond } from 'next/font/google';
import {
  Banner,
  Contact,
  FAQ,
  Features,
  Map,
  Testimonials,
} from '~/components';

// const font = EB_Garamond({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner />
      <Features />
      <Testimonials />
      <FAQ />
      <Contact />
      <Map />
    </main>
  );
}
