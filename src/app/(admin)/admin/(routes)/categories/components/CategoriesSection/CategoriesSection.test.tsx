import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import CategoriesSection from './CategoriesSection';
import { useAppSelector } from '@/lib/store';
import { categoriesData } from '@/app/shared/utils/mockedData';
import { useAppSelectorMock } from '@/app/__mocks__/appSelectore';
// import { categoriesData } from '../utils/mockedData';

vi.mock('@/lib/store', () => ({
  useAppSelector: vi.fn(() => [...categoriesData]),
}));

vi.mock('react-redux', () => ({
  useDispatch: vi.fn(() => vi.fn()),
}));

vi.mock('react-dom', () => ({
  useFormState: vi.fn((firstMockedAction, initialState) => {
    firstMockedAction = vi.fn();
    firstMockedAction();
    return [initialState, firstMockedAction];
  }),
}));

describe('CategoriesSection Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the title and the list of categories', () => {
    render(<CategoriesSection />);

    const title = screen.getByText(/categories/i);
    expect(title).toBeDefined();

    const categoryItems = screen.getByRole('categoriesSectionList');
    expect(categoryItems.children.length).toBe(categoriesData.length);
  });

  it('should not render any category items if the categories array is empty', () => {
    (useAppSelector as any).mockReturnValue([]);

    render(<CategoriesSection />);

    const categoryItems = screen.getByRole('categoriesSectionList');
    expect(categoryItems.children.length).toBe(0);
  });
});
