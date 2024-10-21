import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import { productsData } from '@/app/shared/utils/mockedData';
import BestSellingCard from './BestSellingCard';

describe('BestSelling', () => {
  const chosenProduct = productsData[0];

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the BestSelling component with its title and best-selling cards', () => {
    render(<BestSellingCard product={chosenProduct} />);

    const productName = screen.getByText(chosenProduct.name);
    expect(productName).toBeDefined();

    const productButton = screen.getByText('SEE PRODUCT');
    expect(productButton).toBeDefined();
    expect(productButton).toHaveProperty(
      'href',
      `http://localhost:3000/product/${chosenProduct.id}`
    );
  });
});
