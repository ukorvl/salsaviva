import clsx from 'clsx';
import '@/lib/fontawesome/configure';
import Footer from '@/components/Footer/Footer';
import WithGtag from '@/lib/gtag/WithGtag';
import ScrollToTopButton from '@/components/ScrollToTop/ScrollToTop';
import meta from './metadata';
import {kumbhSans, robotoMono} from './fonts';
import './globals.css';

export const metadata = meta;

const bodyCn = clsx(
  robotoMono.variable,
  kumbhSans.variable,
  'antialiased',
  'font-sans',
  'text-white',
  'bg-alternate',
  'flex',
  'flex-col',
);

const mainCn = clsx('flex', 'flex-col', 'items-center', 'justify-center', 'p-24', 'min-h-screen');

/**
 * @param {{children}} props Props.
 * @returns Global layout.
 */
export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={bodyCn}>
        <WithGtag />
        <main className={mainCn}>{children}</main>
        <Footer />
        <ScrollToTopButton
          bottom={150}
          right={150}
        />
      </body>
    </html>
  );
}
