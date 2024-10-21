import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import Product from './Product';
import { ProductType } from '@/app/shared/utils/types';
import { cleanup } from '@testing-library/react';
import { productsData } from '../utils/mockedData';

// Mock product data
const mockProduct = productsData[0];

describe('Product', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the Product component with product details', async () => {
    render(<Product product={mockProduct} />);

    // screen.debug();

    const productImage = screen.getByAltText('Product Image');
    expect(productImage).toBeDefined();

    const productName = screen.getByText(mockProduct.name);
    expect(productName).toBeDefined();

    const productDescription = screen.getByText(mockProduct.description);
    expect(productDescription).toBeDefined();

    const newProductLabel = await screen.getByText(/new product/i);
    expect(newProductLabel).toBeDefined();
  });

  it('should render a link with the correct href for "SEE PRODUCT"', () => {
    render(<Product product={mockProduct} />);

    const seeProductLink = screen.getByRole('seeProductLink');
    expect(seeProductLink).toBeDefined();
    expect(seeProductLink).toHaveProperty(
      'href',
      `http://localhost:3000/product/${mockProduct.id}`
    );
  });
});
