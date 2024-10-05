import React, { Suspense } from 'react';
import { render, screen } from '@testing-library/react';
import { it, expect, vi } from 'vitest';
import Categories from './Categories';
import { getCategories } from '@/app/(server)/services/category';
import { categoriesData } from './mockedData';

vi.mock('@/app/(server)/services/category', () => ({
  getCategories: vi.fn(() => {
    return Promise.resolve(categoriesData);
  }),
}));

it('Should fetch data from the server and render categories', async () => {
  render(
    <Suspense>
      <Categories />
    </Suspense>
  );

  const categoriesDiv = await screen.findByRole('div');

  expect(categoriesDiv.children.length).toBe(categoriesData.length);
});
