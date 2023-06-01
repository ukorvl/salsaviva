import '@/lib/fontawesome/configure';
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
      <body className={`${robotoMono.variable} ${kumbhSans.variable}`}>{children}</body>
    </html>
  );
}
