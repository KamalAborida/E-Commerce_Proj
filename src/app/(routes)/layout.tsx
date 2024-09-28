import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import NavBar from '@/app/(shared)/NavBar/NavBar';
import Footer from '@/app/(shared)/Footer/Footer';
import CartModal from '../(shared)/Cart/CartModal';
import SuccessModal from '../(shared)/SuccessModal/SuccessModal';
import { getCategories } from '../(server)/services/category';
import { getProducts } from '../(server)/services/product';
import NavModal from '../(shared)/NavBar/NavModal';

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
  const categories = await getCategories();
  const products = await getProducts();

  return (
    <html lang="en">
      <body className={inter.className}>
        <CartModal />
        <SuccessModal />
        <NavModal categories={categories} />
        <main className="main">
          <NavBar categories={categories} />
          {children}
        </main>
        <Footer categories={categories} />
      </body>
    </html>
  );
}
