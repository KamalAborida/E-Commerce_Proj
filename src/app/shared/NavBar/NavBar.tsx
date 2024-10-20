'use client';

import Image from 'next/image';
import NavList from './NavList';
import NavIconList from './IconsList';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NavBar() {
  const [isHamburger, setIsHamburger] = useState(false);
  const router = useRouter();

  const handleHamburger = () => {
    router.push('?nav=true');
  };

  // console.log('NavBar rendered');

  useEffect(() => {
    console.log('Rendering NavBar - ID:', Math.random());
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
      {!isHamburger && <NavList />}
      <NavIconList />
    </nav>
  );
}