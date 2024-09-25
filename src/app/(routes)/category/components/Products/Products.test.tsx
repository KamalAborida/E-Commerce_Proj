import React, { Suspense } from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { it, expect, vi } from 'vitest';
import { getProducts } from '@/app/(server)/services/product';
import Category from '../../[categoryID]/page';
import { getCategories } from '@/app/(server)/services/category';
import { productsData } from './mockedData';
import { categoriesData } from '@/app/(routes)/components/Categories/mockedData';
import Products from './Products';
import { filterProducts, searchProducts, sortProductsByPrice } from './utils';

vi.mock('@/app/(server)/services/product', () => ({
  getProducts: vi.fn(() => Promise.resolve(productsData)),
}));

vi.mock('@/app/(server)/services/category', () => ({
  getCategories: vi.fn(() => Promise.resolve(categoriesData)),
}));

it('Should fetch categories and products from the server', async () => {
  render(
    <Suspense>
      <Category />
    </Suspense>
  );

  await waitFor(() => {
    expect(getCategories).toBeCalled();
    expect(getProducts).toBeCalled();
  });
});

it('should sort the array asc', () => {
  const sortedArray = sortProductsByPrice(productsData, 'asc');

  expect(sortedArray[0].price).to.greaterThanOrEqual(sortedArray[1].price);
});

it('should sort the array desc', () => {
  const sortedArray = sortProductsByPrice(productsData, 'desc');

  expect(sortedArray[1].price).to.greaterThanOrEqual(sortedArray[0].price);
});

it('should filter the array to the searched term and the array should be less than 1', () => {
  const sortedArray = searchProducts(productsData, 'II');

  expect(sortedArray.length).to.lessThan(productsData.length);
});

it('should filter the array to the searched term and the array should be empty', () => {
  const sortedArray = searchProducts(productsData, 'Underwear');

  expect(sortedArray.length).to.equal(0);
});

it('should filter the array and return only one product', () => {
  const sortedArray = filterProducts(productsData, 200, 400);

  sortedArray.forEach((product) => {
    expect(product.price).toBeGreaterThanOrEqual(200);
    expect(product.price).toBeLessThanOrEqual(400);
  });
});
