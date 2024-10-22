import { cleanup, render, screen } from '@testing-library/react';
import { vi, describe, beforeEach, it, expect, afterEach } from 'vitest';
import RecommendedProducts from './RecommendedProducts';
import { productsData } from '@/app/shared/utils/mockedData';
import { useAppSelector } from '@/lib/store';

// Mock the dependencies
vi.mock('@/lib/store', () => ({
  useAppSelector: vi.fn(() => [...productsData]),
}));

describe('RecommendedProducts Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the recommended products section with title and products', () => {
    render(<RecommendedProducts />);

    expect(screen.getByText('You May Also Like')).toBeDefined();

    const recommendedProducts = screen.getAllByAltText('Product');
    expect(recommendedProducts.length).toBe(3);
    expect(recommendedProducts[0]).toHaveProperty(
      'src',
      expect.stringContaining(`${productsData[0].previewImage}.png`)
    );
    expect(recommendedProducts[1]).toHaveProperty(
      'src',
      expect.stringContaining(`${productsData[1].previewImage}.png`)
    );
    expect(recommendedProducts[2]).toHaveProperty(
      'src',
      expect.stringContaining(`${productsData[2].previewImage}.png`)
    );
  });

  it('should display "No product" message if a product is missing', () => {
    (useAppSelector as any).mockReturnValue([]);

    render(<RecommendedProducts />);

    const noProductPhrase = screen.getAllByText('No product')[0];

    expect(noProductPhrase).toBeDefined();
  });
});
