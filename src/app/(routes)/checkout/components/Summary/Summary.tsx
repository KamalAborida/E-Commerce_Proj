'use client';

import CartObject from '@/app/(shared)/Cart/CartObject';
import InfoLine from './InfoLine';
import Link from 'next/link';
import { useAppSelector } from '@/lib/store';

export default function Summary() {
  const { cartItems, totalPrice, totalQuantity } = useAppSelector(
    (state) => state.cart
  );
  const vat = totalPrice / 5.5;
  const totalWithVat = vat + totalPrice;

  return (
    <div className="summary">
      <h2 className="summary__title">Summary</h2>
      <div className="summary__cartObjects">
        {cartItems &&
          cartItems.map((cartItem) => {
            return (
              <CartObject
                isEditable={false}
                cartItem={cartItem}
                key={cartItem.id}
              />
            );
          })}
      </div>
      <InfoLine isOrange={false} label="VAT" value={vat.toFixed(2)} />
      <InfoLine
        isOrange={true}
        label="GRAND TOTAL"
        value={totalWithVat.toFixed(2)}
      />
      <Link href={'?success=true'}>
        <button className="summary__button">CHECKOUT & PAY</button>
      </Link>
    </div>
  );
}
