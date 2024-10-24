import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import { fetchRoute } from './utils';
import { addProductAction } from './addProduct';
import { getImageType } from './utils';

global.fetch = vi.fn();

vi.mock('./utils', () => ({
  getImageType: vi.fn(() => 'png'),
  fetchRoute: vi.fn((bodyData, method, route) => {
    return new Promise((resolve, reject) => {
      resolve({
        id: 1,
        name: bodyData.name,
        isSubmitted: { value: true },
      });
    });
  }),
}));

describe('addProductAction', () => {
  const mockFormData = new FormData();
  mockFormData.append('name', 'Test Product');
  mockFormData.append('previewImage', new File([], 'preview.png'));
  mockFormData.append('largeImage', new File([], 'large.png'));
  mockFormData.append('smallImage1', new File([], 'small1.png'));
  mockFormData.append('smallImage2', new File([], 'small2.png'));
  mockFormData.append('price', '100');
  mockFormData.append('categoryId', '1');
  mockFormData.append('isNew', '1');
  mockFormData.append('description', 'This is a test product.');
  mockFormData.append('inTheBox', 'Item 1, Item 2');
  mockFormData.append('features', 'Feature 1, Feature 2');

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should return data when the fetch request is successful', async () => {
    const mockResponse = {
      id: 1,
      name: 'Test Product',
    };

    const result = await addProductAction({}, mockFormData);

    expect(result).toEqual({ ...mockResponse, isSubmitted: { value: true } });
  });

  it('should return an error when the fetch request fails', async () => {
    const mockErrorResponse = {
      message: 'Fetching Error',
    };

    (fetchRoute as any).mockRejectedValueOnce(
      new Error(mockErrorResponse.message)
    );

    const result = await addProductAction({}, mockFormData);

    expect(result).toEqual({ error: 'Fetching Error' });
  });

  it('should return an error if required product data is missing', async () => {
    const emptyFormData = new FormData();

    const result = await addProductAction({}, emptyFormData);

    expect(result).toEqual({ message: 'No data provided' });
  });
});
