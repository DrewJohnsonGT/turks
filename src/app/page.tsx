// import clsx from 'clsx';
// import { EB_Garamond } from 'next/font/google';
import { About, Contact, Features, Testimonials, Navbar } from '~/components';

// const font = EB_Garamond({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <About />
      <Features />
      <Testimonials />
      <Contact />
    </main>
  );
}
