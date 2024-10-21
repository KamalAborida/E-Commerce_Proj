import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import { CategoryType, ProductType } from '@/app/shared/utils/types';
import { categoriesData, productsData } from '../shared/utils/mockedData';
import HomePage from './page';
import Categories from '../shared/Categories/Categories';

// Mock data for useAppSelector
const mockProducts: ProductType[] = [...productsData];
const mockCategories: CategoryType[] = [...categoriesData];

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

describe('HomePage Integration Test', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the HomePage with all components', async () => {
    render(<HomePage />);

    const homeBackground = screen.getByRole('blackBackground');
    expect(homeBackground).toBeDefined();

    const bannerProductName = screen.getAllByText(mockProducts[1].name);
    expect(bannerProductName[0]).toBeDefined();

    const categories = screen.getByRole('categoriesDiv');
    expect(categories).toBeDefined();
    expect(categories.children.length).to.greaterThan(0);

    const bestSelling = screen.getByRole('bestSelling');
    expect(bestSelling).toBeDefined();
    expect(bestSelling.children.length).to.equal(4); // 3 card + 1 title

    // // Verify that the Mission component is rendered
    const mission = screen.getByRole('missionDiv');
    expect(mission).toBeDefined();
    expect(mission.children.length).to.greaterThan(0);
  });
});
