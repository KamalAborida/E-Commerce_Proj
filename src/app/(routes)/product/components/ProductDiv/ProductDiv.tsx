'use client';

import NumbersInput from '@/app/(routes)/components/NumbersInput/NumbersInput';
import ProductDescriptionCta from '@/app/(routes)/components/ProductCta/ProductDescriptionCta';
import { ProductType } from '@/app/(shared)/utils/types';
import { cartActions } from '@/lib/features/cart/cart-slice';
import { AppDispatch } from '@/lib/store';
import Image from 'next/image';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

interface ProductDivProps {
  product: ProductType;
}

export default function ProductDiv({ product }: ProductDivProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [inputNumber, setInputNumber] = useState(1);

  const setInputNumberState = (quantity: number) => {
    setInputNumber(quantity);
  };

  const handleAddToCart = () => {
    dispatch(cartActions.addItemToCart({ ...product, quantity: inputNumber }));
  };

  return (
    <div className="productDiv">
      <div className="productDiv__img">
        <Image
          alt="Product Preview"
          src={`/${product.previewImage}.png`}
          width={540}
          height={560}
        />
      </div>
      <div className="productDiv__ctaDiv">
        <ProductDescriptionCta
          isNew={product.isNew}
          name={product.name}
          description={product.description}
        />
        <p className="productDiv__ctaDiv__price">{product.price}$</p>
        <div className="productDiv__ctaDiv__btnDiv">
          <NumbersInput
            setInputNumberState={setInputNumberState}
            changeQuantity={null}
            defaultQuantity={1}
          />
          <button
            className="productDiv__ctaDiv__btnDiv__btn addToCart"
            onClick={handleAddToCart}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}
