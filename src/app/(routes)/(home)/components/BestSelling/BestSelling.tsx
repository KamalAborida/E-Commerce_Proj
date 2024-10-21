'use client';

import { useAppSelector } from '@/lib/store';
import BestSellingCard from './BestSellingCard';

export default function BestSelling() {
  const products = useAppSelector((state) => state.data.products);

  return (
    <div role="bestSelling" className="bestSelling">
      <h1 className="bestSelling__title">BEST SELLERS</h1>
      <BestSellingCard product={products[0]} />
      <BestSellingCard product={products[1]} />
      <BestSellingCard product={products[2]} />
    </div>
  );
}
