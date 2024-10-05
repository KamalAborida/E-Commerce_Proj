'use client';

import { useAppSelector } from '@/lib/store';
import RecommendedProduct from './RecommendedProduct';

export default function RecommendedProducts() {
  const products = useAppSelector((state) => state.data.products);

  return (
    <section className="recommendedProductsSection">
      <h1 className="recommendedProductsSection__title">You May Also Like</h1>
      <div className="recommendedProductsSection__recommendedProducts">
        <RecommendedProduct product={products[0]} />
        <RecommendedProduct product={products[1]} />
        <RecommendedProduct product={products[2]} />
      </div>
    </section>
  );
}
