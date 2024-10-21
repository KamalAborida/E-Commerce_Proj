import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import Banner from './Banner';
import { useAppSelector } from '@/lib/store';
import { cleanup } from '@testing-library/react';
import { ProductType } from '@/app/shared/utils/types';
import { productsData } from '@/app/shared/utils/mockedData';

// Mock product data for useAppSelector
const mockProduct = productsData[0];

vi.mock('@/lib/store', () => ({
  useAppSelector: vi.fn(() => mockProduct),
}));

describe('Banner', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the Banner with the ProductCta component', () => {
    render(<Banner />);

    const productName = screen.getByText(mockProduct.name);
    expect(productName).toBeDefined();

    const productDescription = screen.getByText(mockProduct.description);
    expect(productDescription).toBeDefined();

    const seeProductButton = screen.getByRole('button', {
      name: /see product/i,
    });
    expect(seeProductButton).toBeDefined();
  });
});
