import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import ProductsSection from './ProductsSection';
import { useAppSelector } from '@/lib/store';
import { productsData } from '@/app/shared/utils/mockedData';

// Mocking the useAppSelector hook to return predefined products data
vi.mock('@/lib/store', () => ({
  useAppSelector: vi.fn(() => [...productsData]),
}));

vi.mock('react-redux', () => ({
  useDispatch: vi.fn(() => vi.fn()),
}));

vi.mock('react-dom', () => ({
  useFormStatus: vi.fn(() => ({
    pending: false,
  })),

  useFormState: vi.fn((firstMockedAction, initialState) => {
    firstMockedAction = vi.fn();
    initialState = {};
    firstMockedAction();
    return [{ ...initialState, isSubmitted: true }, firstMockedAction];
  }),
}));

describe('ProductsSection Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the title and the list of products', () => {
    render(<ProductsSection />);

    const title = screen.getByText(/products/i);
    expect(title).toBeDefined();

    const productItems = screen.getByRole('productsSectionList');
    expect(productItems.children.length).toBe(productsData.length);
  });

  it('should not render any product items if the products array is empty', () => {
    (useAppSelector as any).mockReturnValue([]);

    render(<ProductsSection />);

    const productItems = screen.getByRole('productsSectionList');
    expect(productItems.children.length).toBe(0);
  });
});
