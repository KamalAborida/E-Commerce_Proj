'use client';

import Image from 'next/image';
import NavList from './NavList';
import NavIconList from './IconsList';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Category } from '@/app/(server)/services/category';
import { useRouter } from 'next/navigation';
import NavModal from './NavModal';

interface NavBarProps {
  categories: Category[];
}

export default function NavBar({ categories }: NavBarProps) {
  const [isHamburger, setIsHamburger] = useState(false);
  const router = useRouter();

  const handleHamburger = () => {
    router.push('?nav=true');
  };

  useEffect(() => {
    if (window.innerWidth < 800) {
      setIsHamburger(true);
    }
  }, []);

  return (
    <nav className="nav">
      <div className="nav__hamLogo">
        {isHamburger && (
          <Image
            src={'/hamburger-icon.svg'}
            alt="Hamburger"
            width={15}
            height={15}
            className="nav__hamLogo__hamburger"
            onClick={handleHamburger}
          />
        )}
        <Link href={'/'}>
          <Image
            src={'/logo.svg'}
            alt="Audio Store Logo"
            width={143}
            height={25}
            className="nav__hamLogo__logo"
          />
        </Link>
      </div>
      {!isHamburger && categories && <NavList categories={categories} />}
      <NavIconList />
    </nav>
  );
}
