'use client';
import CartObject from './CartObject';
import InfoLine from '@/app/(routes)/checkout/components/Summary/InfoLine';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function CartModal() {
  const searchParams = useSearchParams();
  const cartSearchParam = searchParams.get('cart');
  const [cartModal, setCartModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (cartSearchParam) {
      setCartModal(true);
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      setCartModal(false);
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }
  }, [cartSearchParam]);

  const closeModal = () => {
    setCartModal(false);
    router.back();
  };

  return (
    <>
      {cartModal && (
        <div className="backdrop" onClick={closeModal}>
          <div className="cartModal">
            <div className="cartModal__header">
              <p className="cartModal__header__title">Cart (3)</p>
              <p className="cartModal__header__remove">Remove all</p>
            </div>
            <ul className="cartModal__cartObjects">
              <li>
                <CartObject isEditabdle={true} />
              </li>
              <li>
                <CartObject isEditabdle={true} />
              </li>
              <li>
                <CartObject isEditabdle={true} />
              </li>
            </ul>
            <InfoLine isOrange={false} label="Total" value="5000" />
            <button className="cartModal__btn">CHECKOUT</button>
          </div>
        </div>
      )}
    </>
  );
}
