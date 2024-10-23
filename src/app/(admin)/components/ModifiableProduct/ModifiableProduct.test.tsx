import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
} from '@testing-library/react';
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import ModifiableProduct from './ModifiableProduct';
import { useFormState, useFormStatus } from 'react-dom';
import { ProductType } from '@/app/shared/utils/types';
import { productsData } from '@/app/shared/utils/mockedData';

interface MockStateType {
  error: string | null;
  success: boolean;
  message: string;
  status: number;
}

const mockState: MockStateType = {
  error: null,
  success: false,
  message: 'Product deleted successfully',
  status: 200,
};

const mockAction = vi.fn();

vi.mock('react-dom', () => ({
  useFormState: vi.fn(() => [mockState, mockAction]),
  useFormStatus: vi.fn(() => ({ pending: false })),
}));

describe('ModifiableProduct Component', () => {
  const defaultProduct: ProductType = { ...productsData[0] };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the static UI elements correctly', () => {
    render(<ModifiableProduct product={defaultProduct} />);

    const productName = screen.getByText(defaultProduct.name);
    expect(productName).toBeDefined();

    const deleteButton = screen.getByRole('deleteButton');
    expect(deleteButton).toBeDefined();

    const editButton = screen.getByRole('button', { name: /Edit/i });
    expect(editButton).toBeDefined();
  });

  it('should call the delete action when the delete button is clicked', async () => {
    render(<ModifiableProduct product={defaultProduct} />);

    const deleteButton = screen.getByRole('deleteButton');

    fireEvent.click(deleteButton);

    await waitFor(() => {
      expect(useFormState).toHaveBeenCalled();
    });
  });

  it('should disable the login button while form is pending', async () => {
    (useFormStatus as any).mockReturnValue({ pending: true });

    render(<ModifiableProduct product={defaultProduct} />);

    const deleteButton = screen.getByRole('deleteButton');
    expect(deleteButton.textContent).to.equal('Pending...');
  });
});
