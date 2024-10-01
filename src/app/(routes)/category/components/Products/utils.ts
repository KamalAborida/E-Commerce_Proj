import { ProductType } from '@/app/(shared)/utils/types';
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

export function searchProducts(
  categoryProducts: ProductType[],
  searchTerm: string
) {
  const searchedProducts = categoryProducts?.filter((product) => {
    return product.name.includes(searchTerm);
  });
  return searchedProducts;
}

export function filterProducts(
  categoryProducts: ProductType[],
  minValue: number,
  maxValue: number
) {
  const filteredProducts = categoryProducts?.filter((product) => {
    return product.price > minValue && product.price < maxValue;
  });
  return filteredProducts;
}
