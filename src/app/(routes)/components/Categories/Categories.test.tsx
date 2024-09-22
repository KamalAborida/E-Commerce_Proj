import React, { Suspense } from 'react';
import { render, screen } from '@testing-library/react';
import { it, expect, vi } from 'vitest';
import Categories from './Categories';
import { getCategories } from '@/app/(server)/services/category';

const data = [
  { name: 'MMXX11', id: 1, previewImage: '/headphones-preview.svg' },
  { name: 'MMXX12', id: 2, previewImage: '/headphones-preview.svg' },
  { name: 'MMXX13', id: 3, previewImage: '/headphones-preview.svg' },
];

vi.mock('@/app/(server)/services/category', () => ({
  getCategories: vi.fn(() => {
    return Promise.resolve(data);
  }),
}));

// console.log(React.version);

it('Should fetch data from the server and render categories', async () => {
  render(
    <Suspense>
      <Categories />
    </Suspense>
  );

  const categoriesDiv = await screen.findByRole('div');

  expect(categoriesDiv.children.length).toBe(data.length);
  // screen.debug();
});
