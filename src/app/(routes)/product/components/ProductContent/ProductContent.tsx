'use client';

import { useParams } from 'next/navigation';
import ProductFeatures from './ProductFeatures';
import ProductInTheBox from './ProductInTheBox';
import { useAppSelector } from '@/lib/store';

export default function ProductContent() {
  const params = useParams();
  const productId = +params.productID;
  const products = useAppSelector((state) => state.data.products);
  const product = products.find((element) => element.id === productId);

  if (!product) {
    return <p>No product</p>;
  }

  return (
    <div className="productContent">
      <ProductFeatures features={product.features} />
      <ProductInTheBox inTheBox={product.inTheBox} />
    </div>
  );
}
