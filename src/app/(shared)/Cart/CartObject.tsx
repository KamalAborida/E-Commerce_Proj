'use client';

import NumbersInput from '@/app/(routes)/components/NumbersInput/NumbersInput';
import { cartActions, CartProduct } from '@/lib/features/cart/cart-slice';
import { AppDispatch } from '@/lib/store';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

interface CartObjectProps {
  isEditable: boolean;
  cartItem: CartProduct;
}

export default function CartObject({ isEditable, cartItem }: CartObjectProps) {
  const [inputNumber, setInputNumber] = useState(cartItem.quantity);
  const dispatch = useDispatch<AppDispatch>();

  const changeQuantity = (operation: string) => {
    if (operation === '+') {
      dispatch(cartActions.addItemToCart({ ...cartItem, quantity: 1 }));
    } else if (operation === '-') {
      dispatch(cartActions.removeItemFromCart(cartItem.id));
    }
  };

  return (
    <div className="cartObject">
      <Image
        className="cartObject__img"
        src={'/headphones-cart.png'}
        alt="Headphones"
        width={64}
        height={64}
      />
      <p className="cartObject__name">{cartItem.name}</p>
      <p className="cartObject__price">{cartItem.price}$</p>
      {!isEditable && (
        <div className="cartObject__number">
          <p>x{cartItem.quantity}</p>
        </div>
      )}
      {isEditable && (
        <div className="cartObject__numbersInputDiv">
          <NumbersInput
            quantity={inputNumber}
            changeQuantity={changeQuantity}
            setInputNumberState={setInputNumber}
          />
        </div>
      )}
    </div>
  );
}
