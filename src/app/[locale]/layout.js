


import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {getMessages} from 'next-intl/server'; 
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import "./globals.css";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import CustomCursor from './Components/CustomCursor/CustomCursor';

import { Playfair_Display_SC } from 'next/font/google';

const playfairSC = Playfair_Display_SC({
  subsets: ['latin'],
  weight: ['400'],
  style: ['italic'],
  variable: '--font-playfair-sc', 
});



export default async function LocaleLayout({children, params}) {
 
  const { locale } = await params;
  
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }


  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
      
        <NextIntlClientProvider messages={messages}>
          <Header />
          {/* <CustomCursor></CustomCursor> */}
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}