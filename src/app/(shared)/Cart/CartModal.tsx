'use client';
import CartObject from './CartObject';
import InfoLine from '@/app/(routes)/checkout/components/Summary/InfoLine';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { stopPropagation } from '../utils/general';
import { useModal } from '../hooks/modal-hook';

export default function CartModal() {
  const pathName = usePathname();
  const { searchParam, modal, closeModal, openModal } = useModal(
    'cart',
    pathName
  );

  useEffect(() => {
    if (searchParam) {
      openModal();
    } else {
      closeModal();
    }
  }, [closeModal, openModal, searchParam]);

  return (
    <>
      {modal && (
        <div className="backdrop" onClick={closeModal}>
          <div className="cartModal" onClick={stopPropagation}>
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
