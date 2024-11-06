'use client';

import { AppDispatch } from '@/lib/store';
import { cartActions } from '@/lib/features/cart/cart-slice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { CartProductType } from '../utils/types';

import NumbersInput from '@/app/(routes)/components/NumbersInput/NumbersInput';
import Image from 'next/image';
import { FaTrash } from 'react-icons/fa';

interface CartObjectProps {
  isEditable: boolean;
  cartItem: CartProductType;
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

  const deleteItem = () => {
    dispatch(cartActions.removeAnEntireItem(+cartItem.id));
  };

  return (
    <div className="cartObject">
      <Image
        className="cartObject__img"
        // src={`/${cartItem.previewImage}.png`}
        src={`https://audiophile.s3.eu-north-1.amazonaws.com/${cartItem.previewImage}.png`}
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
            defaultQuantity={inputNumber}
            changeQuantity={changeQuantity}
            setInputNumberState={setInputNumber}
          />
          <FaTrash
            className="cartObject__numbersInputDiv__trashIcon"
            onClick={deleteItem}
          />
        </div>
      )}
    </div>
  );
}
