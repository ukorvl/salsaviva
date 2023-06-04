import '@/lib/fontawesome/configure';
import Footer from '@/components/Footer/Footer';
import WithGtag from '@/lib/gtag/WithGtag';
import meta from './metadata';
import {kumbhSans, robotoMono} from './fonts';
import './css/globals.css';

export const metadata = meta;

/**
 * @param {{children}} props Props.
 * @returns Global layout.
 */
export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${robotoMono.variable} ${kumbhSans.variable} antialiased`}>
        <WithGtag />
        <main className="flex min-h-screen flex-col items-center justify-center p-24 font-sans">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
