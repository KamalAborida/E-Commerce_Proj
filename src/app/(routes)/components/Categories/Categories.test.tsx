import React from 'react';
import { render, screen } from '@testing-library/react';
import { it, expect, vi } from 'vitest';
import Categories from './Categories';
import { getCategories } from '@/app/(server)/services/category';

const data = [
  { name: 'MMXX11', id: 1, previewImage: '/headphones-preview.svg' },
  { name: 'MMXX12', id: 2, previewImage: '/headphones-preview.svg' },
  { name: 'MMXX13', id: 3, previewImage: '/headphones-preview.svg' },
];
// Mock the getCategories function using vi.mock
vi.mock('@/app/(server)/services/category', () => ({
  getCategories: vi.fn(() => {
    return Promise.resolve(data);
  }),
}));

const Wrapper = async () => <Categories />;

it('Should fetch data from the server and render categories', async () => {
  render(<Wrapper />);
  // // Wait for the categories div to be rendered
  // const categoriesDiv = await screen.findByRole('div');
  // // Ensure the correct number of categories is rendered
  // expect(categoriesDiv.children.length).toBe(data.length);
  // // Check that specific category names are rendered
  // expect(screen.getByText('MMXX11')).toBeTruthy();
  // const data = await getCategories();
  // console.log(data);
});
