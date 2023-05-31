import { Inter } from 'next/font/google';
import './css/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Salsaviva',
  description: 'Salsa, Bachata and Kizomba in Yerevan',
};

/**
 *
 * @param root0
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
