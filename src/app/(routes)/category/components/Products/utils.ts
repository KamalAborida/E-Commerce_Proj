import { Product as ProductType } from '@/app/(server)/services/product';
import { SetStateAction } from 'react';

export const DESCENDING = 'desc';
export const ASCENDING = 'asc';

export function sortProductsByPrice(
  categoryProducts: ProductType[],
  arrangmentType: string
) {
  const sortedProducts = categoryProducts?.sort((a, b) => {
    if (arrangmentType === 'asc') {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  return sortedProducts;
}
