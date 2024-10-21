import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { it, expect, vi, describe } from 'vitest';
import Categories from './Categories';
import { categoriesData } from '../utils/mockedData';

vi.mock('@/lib/store', () => ({
  useAppSelector: vi.fn(() => [...categoriesData]),
}));

const pushMock = vi.fn();
vi.mock('next/navigation', () => ({
  useRouter: vi.fn(() => ({
    push: pushMock,
  })),
}));

describe('Categories', () => {
  it('Should fetch data from the server and render categories', async () => {
    render(<Categories />);

    const categoriesDiv = await screen.findByRole('categoriesDiv');

    expect(categoriesDiv.children.length).toBe(categoriesData.length);
  });

  it('Should have links that have the right url', async () => {
    const chosenIndex = 0;

    render(<Categories />);

    const shopButton = await screen.findAllByRole('shopLink');

    expect(shopButton[chosenIndex]).toHaveProperty(
      'href',
      `http://localhost:3000/category/${categoriesData[chosenIndex].id}`
    );
  });
});
