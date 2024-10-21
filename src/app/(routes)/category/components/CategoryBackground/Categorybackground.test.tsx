import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import CategoryBackground from './CategoryBackground';
import { useAppSelector } from '@/lib/store';
import { useParams } from 'next/navigation';
import { cleanup } from '@testing-library/react';
import { CategoryType } from '@/app/shared/utils/types';
import { categoriesData } from '@/app/shared/utils/mockedData';

const mockCategories: CategoryType[] = [...categoriesData];

vi.mock('@/lib/store', () => ({
  useAppSelector: vi.fn(() => mockCategories),
}));

vi.mock('next/navigation', () => ({
  useParams: vi.fn(() => ({
    categoryID: 0,
  })),
}));

describe('CategoryBackground Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the category name based on the category ID', () => {
    const indexId = 1;
    (useParams as any).mockReturnValue({ categoryID: indexId });

    render(<CategoryBackground />);

    const categoryName = screen.getByText(mockCategories[indexId].name);
    expect(categoryName).toBeDefined();
  });

  it('should render nothing if the category is not found', () => {
    (useParams as any).mockReturnValue({ categoryID: '999' });

    render(<CategoryBackground />);

    const categoryName = screen.queryByText(mockCategories[0].name);
    expect(categoryName).toBeNull();
  });

  it('should render nothing if categoryID is invalid', () => {
    (useParams as any).mockReturnValue({ categoryID: 'invalid' });

    render(<CategoryBackground />);

    const categoryName = screen.queryByText(mockCategories[0].name);
    expect(categoryName).toBeNull();
  });
});
