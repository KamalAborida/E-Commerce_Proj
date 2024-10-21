import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useAppSelector } from '@/lib/store';
import { useModal } from '../hooks/modal-hook';
import CartModal from './CartModal';
import { cleanup } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { cartActions } from '@/lib/features/cart/cart-slice';

// Mock data for the cart state
const mockCartItems = [
  { id: '1', name: 'Product 1', quantity: 2, price: 49.99 },
  { id: '2', name: 'Product 2', quantity: 1, price: 19.99 },
];

const mockCartState = {
  cartItems: mockCartItems,
  totalPrice: mockCartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  ),
  totalQuantity: mockCartItems.reduce((sum, item) => sum + item.quantity, 0),
};

vi.mock('@/lib/store', () => ({
  useAppSelector: vi.fn(() => mockCartState),
}));

const dispatchMock = vi.fn();
vi.mock('react-redux', () => ({
  useDispatch: () => dispatchMock,
}));

vi.mock('../hooks/modal-hook', () => ({
  useModal: vi.fn(() => ({
    searchParam: '',
    modal: true,
    closeModal: vi.fn(),
    openModal: vi.fn(),
  })),
}));

vi.mock('@/lib/features/cart/cart-slice', () => ({
  cartActions: {
    removeAll: vi.fn(),
  },
}));

describe('CartModal', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the CartModal with cart items, total price, and total quantity', () => {
    render(<CartModal />);

    const modalTitle = screen.getByText(
      `Cart (${mockCartState.totalQuantity})`
    );
    expect(modalTitle).toBeDefined();

    mockCartItems.forEach((item) => {
      const cartItem = screen.getByText(item.name);
      expect(cartItem).toBeDefined();
    });

    const totalPrice = screen.getByText('Total');
    expect(totalPrice).toBeDefined();

    const removeAllButton = screen.getByText('Remove all');
    expect(removeAllButton).toBeDefined();

    const checkoutButton = screen.getByText('CHECKOUT');
    expect(checkoutButton).toBeDefined();
  });

  it('should call removeAll when the "Remove all" button is clicked', () => {
    render(<CartModal />);

    const removeAllButton = screen.getByText('Remove all');
    expect(removeAllButton).toBeDefined();

    fireEvent.click(removeAllButton);

    expect(dispatchMock).toHaveBeenCalledWith(cartActions.removeAll());
    expect(cartActions.removeAll).toHaveBeenCalled();
  });
});
