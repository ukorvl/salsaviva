import clsx from 'clsx';
import '@/lib/fontawesome/configure';
import Footer from '@/components/shared/Footer/Footer';
import WithGtag from '@/lib/gtag/WithGtag';
import CustomCursor from '@/lib/customCursor/CustomCursor';
import WebVitals from '@/components/shared/WebVitals/WebVitals';
import meta from './metadata';
import viewportData from './viewport';
import {kumbhSans, robotoMono} from './fonts';
import './styles.css';

export const metadata = meta;
export const viewport = viewportData;

const bodyCn = clsx(
  robotoMono.variable,
  kumbhSans.variable,
  'antialiased',
  'font-sans',
  'text-white',
  'flex',
  'flex-col',
  'min-h-screen',
  'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-black via-alternate to-black',
  'bg-fixed',
  'animate-gradient-melting',
);

const mainCn = clsx('flex', 'flex-col', 'items-center', 'justify-start', 'grow');

/**
 * @param {{children}} props Props.
 * @returns Global layout.
 */
export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={bodyCn}>
        <WithGtag />
        <CustomCursor />
        <WebVitals />
        <main className={mainCn}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
