'use client';

import { useAppSelector } from '@/lib/store';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';

export default function NavIconList() {
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  useEffect(() => {
    if (cartItems.length > 0) {
      setIsCartEmpty(false);
    } else {
      setIsCartEmpty(true);
    }
  }, [cartItems]);

  return (
    <ul className="navIconList">
      <li className="navIconList__item">
        <Link href={'?cart=true'}>
          <FaCartPlus className="navIconList__icon" />
          {!isCartEmpty && <div className="isNotEmptyBall"></div>}
        </Link>
      </li>
    </ul>
  );
}
