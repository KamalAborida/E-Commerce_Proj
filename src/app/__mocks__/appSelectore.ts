import { vi } from 'vitest';
import { categoriesData, productsData } from '@/app/shared/utils/mockedData';

// Mock the `useAppSelector` hook for the store
const useAppSelectorMock = () => {
  vi.mock('@/lib/store', () => ({
    useAppSelector: vi.fn((selector) =>
      selector({
        data: {
          products: [...productsData],
          categories: [...categoriesData],
        },
      })
    ),
  }));
};

export { useAppSelectorMock };
