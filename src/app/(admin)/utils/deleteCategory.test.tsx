import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import { fetchRoute } from './utils';
import { deleteCategoryAction } from './deleteCategoryAction';

global.fetch = vi.fn();

const mockResponse = {
  success: true,
  message: 'Category deleted successfully',
};

vi.mock('./utils', () => ({
  fetchRoute: vi.fn((bodyData, method, route) => {
    return new Promise((resolve, reject) => {
      resolve(mockResponse);
    });
  }),
}));

describe('deleteCategoryAction', () => {
  const mockFormData = new FormData();
  const categoryId = '1';
  const token = 'xx55';
  mockFormData.append('id', categoryId);
  mockFormData.append('localStorageToken', token);

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should return success when the fetch request is successful', async () => {
    const result = await deleteCategoryAction({}, mockFormData);

    expect(result).toEqual(mockResponse);
    expect(fetchRoute).toHaveBeenCalledWith(
      { categoryId: categoryId },
      'delete',
      'categories',
      token
    );
  });

  it('should return an error when the fetch request fails', async () => {
    const mockErrorResponse = {
      message: 'Category not found',
    };

    (fetchRoute as any).mockRejectedValueOnce(
      new Error(mockErrorResponse.message)
    );

    const result = await deleteCategoryAction({}, mockFormData);

    expect(result).toEqual({ error: mockErrorResponse.message });
  });

  it('should return an error if categoryId is missing', async () => {
    const emptyFormData = new FormData();

    const result = await deleteCategoryAction({}, emptyFormData);

    expect(result).toEqual({ message: 'No data provided' });
  });
});
