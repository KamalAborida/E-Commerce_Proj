import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import BestSelling from './BestSelling';
import { useAppSelector } from '@/lib/store';
import { cleanup } from '@testing-library/react';
import { ProductType } from '@/app/shared/utils/types';
import { productsData } from '@/app/shared/utils/mockedData';

// Mock product data for useAppSelector
const mockProducts: ProductType[] = [...productsData];

vi.mock('@/lib/store', () => ({
  useAppSelector: vi.fn(() => mockProducts),
}));

describe('BestSelling', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the BestSelling component with its title and best-selling cards', () => {
    render(<BestSelling />);

    const title = screen.getByText('BEST SELLERS');
    expect(title).toBeDefined();

    mockProducts.forEach((product) => {
      const productName = screen.getByText(product.name);
      expect(productName).toBeDefined();
    });
  });
});
