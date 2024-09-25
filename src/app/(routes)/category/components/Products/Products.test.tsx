import React, { Suspense } from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { it, expect, vi } from 'vitest';
import { getProducts } from '@/app/(server)/services/product';
import Category from '../../[categoryID]/page';
import { getCategories } from '@/app/(server)/services/category';
import { productsData } from './mockedData';
import { categoriesData } from '@/app/(routes)/components/Categories/mockedData';
import Products from './Products';
import { sortProductsByPrice } from './utils';

vi.mock('@/app/(server)/services/product', () => ({
  getProducts: vi.fn(() => Promise.resolve(productsData)),
}));

vi.mock('@/app/(server)/services/category', () => ({
  getCategories: vi.fn(() => Promise.resolve(categoriesData)),
}));

// it('Should fetch categories and products from the server', async () => {
//   render(
//     <Suspense>
//       <Category />
//     </Suspense>
//   );

//   await waitFor(() => {
//     expect(getCategories).toBeCalled();
//     expect(getProducts).toBeCalled();
//   });
// });

it('should sort the array asc', () => {
  const sortedArray = sortProductsByPrice(productsData, 'asc');

  expect(sortedArray[0].price).to.greaterThanOrEqual(sortedArray[1].price);
});

it('should sort the array desc', () => {
  const sortedArray = sortProductsByPrice(productsData, 'desc');

  expect(sortedArray[1].price).to.greaterThanOrEqual(sortedArray[0].price);
});
