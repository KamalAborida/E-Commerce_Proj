import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import { vi, describe, beforeEach, it, expect, afterEach } from 'vitest';
import ProductDiv from './ProductDiv';
import { productsData } from '@/app/shared/utils/mockedData';
import { useParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { cartActions } from '@/lib/features/cart/cart-slice';

vi.mock('next/navigation', () => ({
  useParams: vi.fn(),
}));

vi.mock('@/lib/store', () => ({
  useAppSelector: vi.fn(() => [...productsData]),
}));

const dispatchMock = vi.fn();
vi.mock('react-redux', () => ({
  useDispatch: () => dispatchMock,
}));

describe('ProductDiv Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the product details correctly', () => {
    const indexID = 1;
    (useParams as any).mockReturnValue({ productID: indexID });

    render(<ProductDiv />);

    const productImage = screen.getByAltText('Product Preview');
    expect(productImage).toHaveProperty(
      'src',
      expect.stringContaining(`${productsData[indexID].previewImage}.png`)
    );

    const productName = screen.getByText(productsData[indexID].name);
    const productPrice = screen.getByText(`${productsData[indexID].price}$`);
    const productDescription = screen.getByText(
      productsData[indexID].description
    );

    expect(productName).toBeDefined();
    expect(productDescription).toBeDefined();
    expect(productPrice).toBeDefined();
  });

  it('should show a message if no product is found', () => {
    const indexID = 999;
    (useParams as any).mockReturnValue({ productID: indexID });

    render(<ProductDiv />);

    expect(screen.getByText('No Product')).toBeDefined();
  });

  it('should dispatch addItemToCart action when "ADD TO CART" is clicked', () => {
    const indexID = 1;
    (useParams as any).mockReturnValue({ productID: indexID });

    render(<ProductDiv />);

    const addToCartButton = screen.getByText('ADD TO CART');
    fireEvent.click(addToCartButton);

    expect(dispatchMock).toHaveBeenCalledWith(
      cartActions.addItemToCart({
        ...productsData[indexID],
        quantity: 1,
      })
    );
  });
});
