'use client';

import CartObject from '../Cart/CartObject';
import { useAppSelector } from '@/lib/store';

export default function GrayDiv() {
  const { cartItems } = useAppSelector((state) => state.cart);

  return (
    <div className="successModal__recipt__grayDiv">
      <ul className="successModal__recipt__grayDiv__objectList">
        {cartItems &&
          cartItems.slice(0, 2).map((cartItem) => (
            <li
              className="successModal__recipt__grayDiv__objectList__item"
              key={cartItem.id}
            >
              <CartObject isEditable={false} cartItem={cartItem} />
            </li>
          ))}
        {cartItems.length > 2 && (
          <li className="successModal__recipt__grayDiv__objectList__item">
            <p>+{cartItems.length - 2} More Items</p>
          </li>
        )}
      </ul>
    </div>
  );
}
