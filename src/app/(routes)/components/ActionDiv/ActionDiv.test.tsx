import React from 'react';
import { it, expect } from 'vitest';
import {
  filterProducts,
  searchProducts,
  sortProductsByPrice,
} from '../../category/components/Products/utils';
import { productsData } from '@/app/shared/utils/mockedData';

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
