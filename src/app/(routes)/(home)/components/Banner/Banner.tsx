'use client';

import { useAppSelector } from '@/lib/store';
import ProductCta from '../../../../shared/Product/ProductCta';
import { useEffect, useState } from 'react';

export default function Banner() {
  const product = useAppSelector((state) => state.data.products[1]);

  return (
    <div className="banner">{product && <ProductCta product={product} />}</div>
  );
}
