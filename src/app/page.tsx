import {
  About,
  Banner,
  Contact,
  FAQ,
  Features,
  Map,
  Testimonials,
} from '~/components';

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-main-300">
      <Banner />
      <Features />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
      <Map />
    </main>
  );
}
