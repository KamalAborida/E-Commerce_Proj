'use client';
import CartObject from './CartObject';
import InfoLine from '@/app/(routes)/checkout/components/Summary/InfoLine';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { stopPropagation } from '../utils/general';
import { useModal } from '../hooks/modal-hook';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, useAppSelector } from '@/lib/store';
import { cartActions } from '@/lib/features/cart/cart-slice';
import Link from 'next/link';

export default function CartModal() {
  const { searchParam, modal, closeModal, openModal } = useModal('cart', '');
  const { cartItems, totalPrice, totalQuantity } = useAppSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleRemoveAllItems = () => {
    dispatch(cartActions.removeAll());
  };

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
              <p className="cartModal__header__title">Cart ({totalQuantity})</p>
              <p
                className="cartModal__header__remove"
                onClick={handleRemoveAllItems}
              >
                Remove all
              </p>
            </div>
            <ul className="cartModal__cartObjects">
              {cartItems &&
                cartItems.map((cartItem) => {
                  return (
                    <li key={cartItem.id}>
                      <CartObject isEditable={true} cartItem={cartItem} />
                    </li>
                  );
                })}
            </ul>
            <InfoLine
              isOrange={false}
              label="Total"
              value={totalPrice.toFixed(2).toString()}
            />
            <Link href={'/checkout'}>
              <button className="cartModal__btn">CHECKOUT</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
