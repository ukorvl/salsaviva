import '@/lib/fontawesome/configure';
import Footer from '@/components/Footer/Footer';
import WithGtag from '@/lib/gtag/WithGtag';
import meta from './metadata';
import {kumbhSans, robotoMono} from './fonts';
import './globals.css';

export const metadata = meta;

/**
 * @param {{children}} props Props.
 * @returns Global layout.
 */
export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.variable} ${kumbhSans.variable} antialiased min-h-screen font-sans text-white bg-black`}
      >
        <WithGtag />
        <main className="flex flex-col items-center justify-center p-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
