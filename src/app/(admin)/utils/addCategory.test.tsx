import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { addCategoryAction } from './addCategory';
import { cleanup } from '@testing-library/react';
import { fetchRoute } from './utils';

global.fetch = vi.fn();

vi.mock('@/app/server/awsUtilities');

vi.mock('./utils', () => ({
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

describe('addCategoryAction', () => {
  const mockFormData = new FormData();
  mockFormData.append('name', 'Speakers');
  mockFormData.append('previewImage', 'image.png');

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should return data when the fetch request is successful', async () => {
    const mockResponse = {
      id: 1,
      name: 'Speakers',
    };

    const result = await addCategoryAction({}, mockFormData);

    expect(result).toEqual({ ...mockResponse, isSubmitted: { value: true } });
  });

  it('should return an error when the fetch request fails', async () => {
    const mockErrorResponse = {
      message: 'Category name already exists',
    };
    (fetchRoute as any).mockRejectedValueOnce(
      new Error(mockErrorResponse.message)
    );

    const result = await addCategoryAction({}, mockFormData);

    expect(result).toEqual({ error: 'Category name already exists' });
  });

  it('should return an error if name or previewImage is missing', async () => {
    const emptyFormData = new FormData();

    const result = await addCategoryAction({}, emptyFormData);

    expect(result).toEqual({ error: 'Please Complete the category data' });
  });
});
