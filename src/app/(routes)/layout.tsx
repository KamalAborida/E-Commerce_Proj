import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBar from '@/app/shared/NavBar/NavBar';
import Footer from '@/app/shared/Footer/Footer';
import CartModal from '../shared/Cart/CartModal';
import SuccessModal from '../shared/SuccessModal/SuccessModal';
import NavModal from '../shared/NavBar/NavModal';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Suspense>
          <CartModal />
        </Suspense>
        <Suspense>
          <SuccessModal />
        </Suspense>
        <Suspense>
          <NavModal />
        </Suspense>
        <main className="main">
          <Suspense>
            <NavBar />
          </Suspense>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
