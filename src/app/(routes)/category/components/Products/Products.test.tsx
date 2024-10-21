import { render, screen, fireEvent } from '@testing-library/react';
import {
  describe,
  it,
  expect,
  vi,
  beforeEach,
  afterEach,
  vitest,
} from 'vitest';
import Products from './Products';
import { useAppSelector } from '@/lib/store';
import { useParams } from 'next/navigation';
import { cleanup } from '@testing-library/react';
import { ProductType } from '@/app/shared/utils/types';
import { categoriesData, productsData } from '@/app/shared/utils/mockedData';

const mockProducts: ProductType[] = [...productsData];

vi.mock('@/lib/store', () => ({
  useAppSelector: vi.fn(() => mockProducts),
}));

vi.mock('next/navigation', () => ({
  useParams: vi.fn(() => ({
    categoryID: 0,
  })),
}));

describe('Products Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render products based on the category ID', () => {
    render(<Products />);

    // // Verify that the correct products are displayed for categoryId 1
    const product1 = screen.getByText(productsData[0].name);
    const product2 = screen.getByText(productsData[1].name);
    const product3 = screen.getByText(productsData[2].name);
    expect(product1).toBeDefined();
    expect(product2).toBeDefined();
    expect(product3).toBeDefined();

    // // Verify that the product not in this category is not displayed
    const product4 = screen.queryByText('Bla Bla Bla');
    expect(product4).toBeNull();
  });

  it('should display a message if no products are available in the selected category', () => {
    (useParams as any).mockReturnValue({ categoryID: 10 });

    render(<Products />);

    const noProductsMessage = screen.getByText(
      'No products available in this category'
    );
    expect(noProductsMessage).toBeDefined();
  });

  it('should display "Invalid category ID" for a non-numeric category ID', () => {
    (useParams as any).mockReturnValue({ categoryID: 'invalid' });

    render(<Products />);

    const invalidCategoryMessage = screen.getByText('Invalid category ID');
    expect(invalidCategoryMessage).toBeDefined();
  });
});
