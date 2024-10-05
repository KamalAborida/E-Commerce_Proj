import React, { Suspense } from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { it, expect, vi } from 'vitest';
import { getProducts } from '@/app/(server)/services/product';
import Category from '../../[categoryID]/page';
import { getCategories } from '@/app/(server)/services/category';
import { productsData } from './mockedData';
import { categoriesData } from '@/app/(shared)/Categories/mockedData';
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
