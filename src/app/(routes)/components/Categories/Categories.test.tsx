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

  // await screen.debug();
  // // Wait for the categories div to be rendered
  const categoriesDiv = await screen.findByRole('div');
  // // Ensure the correct number of categories is rendered

  expect(categoriesDiv.children.length).toBe(data.length);

  // screen.debug();
  // // Check that specific category names are rendered
  // expect(screen.getByText('MMXX11')).toBeTruthy();
  // const data = await getCategories();
  // console.log(data);
});
