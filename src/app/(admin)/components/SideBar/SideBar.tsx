'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SideBar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/admin');
  };

  return (
    <nav className="adminSideBar">
      <Image src={'/logo.svg'} alt="logo" width={100} height={100} />
      <ul className="adminSideBar__list">
        <li className="adminSideBar__list__item">
          <Link href={'categories'}>CATEGORIES</Link>
        </li>
        <li className="adminSideBar__list__item">
          <Link href={'products'}>PRODUCTS</Link>
        </li>
        <li className="adminSideBar__list__item">
          <Link href={'addProducts'}>ADD PRODUCT</Link>
        </li>
        <li className="adminSideBar__list__item" onClick={handleLogout}>
          <Link href={'/admin'}>LOGOUT</Link>
        </li>
      </ul>
    </nav>
  );
}
