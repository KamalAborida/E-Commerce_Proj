'use client';

import Image from 'next/image';
import NavList from './NavList';
import NavIconList from './IconsList';
import { useState } from 'react';

export default function NavBar() {
  const [isHamburger, setIsHamburger] = useState(false);

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
          />
        )}
        <Image
          src={'/logo.svg'}
          alt="Audio Store Logo"
          width={143}
          height={25}
          className="nav__hamLogo__logo"
        />
      </div>
      {!isHamburger && <NavList />}
      <NavIconList />
    </nav>
  );
}
