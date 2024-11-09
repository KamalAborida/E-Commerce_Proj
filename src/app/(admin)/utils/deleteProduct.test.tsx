import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import { fetchRoute } from './utils';
import { deleteProductAction } from './deleteProductAction';

global.fetch = vi.fn();

const mockResponse = {
  success: true,
  message: 'Product deleted successfully',
};

// Mock the `fetchRoute` function.
vi.mock('./utils', () => ({
  fetchRoute: vi.fn((bodyData, method, route) => {
    return new Promise((resolve, reject) => {
      resolve(mockResponse);
    });
  }),
}));

describe('deleteProductAction', () => {
  const mockFormData = new FormData();
  const productId = '1';
  const token = 'xx55';
  mockFormData.append('id', productId);
  mockFormData.append('localStorageToken', token);

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should return success when the fetch request is successful', async () => {
    const result = await deleteProductAction({}, mockFormData);

    expect(result).toEqual(mockResponse);
    expect(fetchRoute).toHaveBeenCalledWith(
      { productId: productId },
      'delete',
      'products',
      token
    );
  });

  it('should return an error when the fetch request fails', async () => {
    const mockErrorResponse = {
      message: 'Product not found',
    };

    (fetchRoute as any).mockRejectedValueOnce(
      new Error(mockErrorResponse.message)
    );

    const result = await deleteProductAction({}, mockFormData);

    expect(result).toEqual({ error: 'Product not found' });
  });

  it('should return an error if productId is missing', async () => {
    const emptyFormData = new FormData();

    const result = await deleteProductAction({}, emptyFormData);

    expect(result).toEqual({ message: 'No data provided' });
  });
});
