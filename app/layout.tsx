import clsx from 'clsx';
import '@/lib/fontawesome/configure';
import Footer from '@/components/shared/Footer/Footer';
import WithGtagScript from '@/lib/gtag/WithGtagScript';
import CustomCursor from '@/lib/customCursor/CustomCursor';
import WebVitals from '@/components/shared/WebVitals/WebVitals';
import WithHotjarScript from '@/lib/hotjar/WithHotjarScript';
import {LocationChangeTracker} from '@/lib/gtag/LocationChangeTracker';
import TopMenu from '@/components/shared/TopMenu/TopMenu';
import ScrollToTopButton from '@/components/shared/ScrollToTop/ScrollToTop';
import MotoinProvider from '@/lib/framerMotion/MotionProvider';
import meta from './metadata';
import viewportData from './viewport';
import {kumbhSans, robotoMono} from './fonts';
import {env} from './env.mjs';
import {menuItems, socialLinks} from './topMenuConfig';
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
  const {GA_TRACKING_ID, DISABLE_GA_IN_DEV_MODE} = env;
  return (
    <html lang="en">
      <body className={bodyCn}>
        <WithGtagScript />
        <WithHotjarScript />
        <CustomCursor />
        <main className={mainCn}>
          <MotoinProvider>
            <ScrollToTopButton
              bottom={50}
              right={50}
            />
            <TopMenu
              menuItems={menuItems}
              socialLinks={socialLinks}
            />
            {children}
          </MotoinProvider>
        </main>
        <Footer />
        {!DISABLE_GA_IN_DEV_MODE && (
          <>
            <WebVitals />
            <LocationChangeTracker trackingId={GA_TRACKING_ID} />
          </>
        )}
      </body>
    </html>
  );
}
