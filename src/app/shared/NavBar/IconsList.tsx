'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function NavIconList() {
  return (
    <ul className="navIconList">
      <li className="navIconList__item">
        <Link href={'?cart=true'}>
          <Image
            src={'/cart-icon.svg'}
            alt="Shopping Cart Icon"
            width={20}
            height={20}
          />
        </Link>
      </li>
    </ul>
  );
}
