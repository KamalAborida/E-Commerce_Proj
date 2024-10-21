import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useAppSelector } from '@/lib/store';
import { useParams } from 'next/navigation';
import { cleanup } from '@testing-library/react';
import { ProductType, CategoryType } from '@/app/shared/utils/types';
import { productsData, categoriesData } from '@/app/shared/utils/mockedData';
import CategoryPage from './page';

const mockProducts: ProductType[] = [...productsData];
const mockCategories: CategoryType[] = [...categoriesData];

const indexId = 0;

vi.mock('@/lib/store', () => ({
  useAppSelector: vi.fn((selector) =>
    selector({
      data: {
        products: mockProducts,
        categories: mockCategories,
      },
    })
  ),
}));

vi.mock('next/navigation', () => ({
  useParams: vi.fn(() => ({
    categoryID: indexId,
  })),
}));

describe('CategoryPage Integration Test', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render CategoryPage with all components', () => {
    render(<CategoryPage />);

    const categoryName = screen.getByRole('categoryBackgroundTitle');
    expect(categoryName.textContent).to.equal(mockCategories[indexId].name);

    const product1 = screen.getByText(mockProducts[0].name);
    const product2 = screen.getByText(mockProducts[1].name);
    expect(product1).toBeDefined();
    expect(product2).toBeDefined();

    const categories = screen.getByRole('categoriesDiv');
    expect(categories).toBeDefined();
    expect(categories.children.length).to.greaterThan(2);

    const mission = screen.getByRole('missionDiv');
    expect(mission).toBeDefined();
    expect(mission.children.length).to.greaterThan(0);
  });
});
