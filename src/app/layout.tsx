import { Navbar, Footer } from '~/components';
import { SITE_TITLE, SITE_DESCRIPTION } from '~/constants';
import './globals.css';

export const metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
