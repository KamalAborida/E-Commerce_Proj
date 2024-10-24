import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
} from '@testing-library/react';
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import CategoriesForm from './CategoriesForm';
import { useAdminForms } from '@/app/(admin)/hooks/form-hook';
import { useFormState, useFormStatus } from 'react-dom';

const mockHandleCategoryName = vi.fn();
const mockHandleCategoryPreviewImg = vi.fn();
const mockReset = vi.fn();
const mockAction = vi.fn();

const defaultFormData = {
  categoryName: '',
  categoryPreviewImg: '',
};

const defaultState = {
  isSubmitted: { value: false },
  error: null,
};

const defaultAdminFormReturnValue = {
  formData: defaultFormData,
  handleCategoryName: mockHandleCategoryName,
  handleCategoryPreviewImg: mockHandleCategoryPreviewImg,
  reset: mockReset,
  errors: { categoryName: false },
  isTouched: { categoryName: false },
};

vi.mock('@/app/(admin)/hooks/form-hook', () => ({
  useAdminForms: vi.fn(() => defaultAdminFormReturnValue),
}));

vi.mock('react-dom', () => ({
  useFormStatus: vi.fn(() => ({
    pending: false,
  })),

  useFormState: vi.fn((firstMockedAction, initialState) => {
    firstMockedAction = vi.fn();
    initialState = { ...defaultState };
    firstMockedAction();
    return [{ ...initialState, isSubmitted: true }, firstMockedAction];
  }),
}));

describe('CategoriesForm Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render form elements correctly', () => {
    render(<CategoriesForm />);

    const title = screen.getByText(/CATEGORY$/i);
    expect(title).toBeDefined();

    const categoryNameInput = screen.getByLabelText(/category name/i);
    expect(categoryNameInput).toBeDefined();
    expect(categoryNameInput).toHaveProperty(
      'value',
      defaultFormData.categoryName
    );

    const previewImageInput = screen.getByLabelText(/preview image/i);
    expect(previewImageInput).toBeDefined();
    expect(previewImageInput).toHaveProperty(
      'value',
      defaultFormData.categoryPreviewImg
    );

    const submitButton = screen.getByRole('button', {
      name: /ADD CATEGORY +/i,
    });
    expect(submitButton).toBeDefined();
  });

  it('should display error messages when there are form validation errors', () => {
    const errorP = 'Category name is required';

    (useAdminForms as any).mockReturnValue({
      ...defaultAdminFormReturnValue,
      errors: { categoryName: 'Category name is required' },
      isTouched: { categoryName: true },
    });

    render(<CategoriesForm />);

    const errorMessage = screen.getByText(errorP);
    expect(errorMessage).toBeDefined();
  });

  it('should handle form submission and reset on successful submission', async () => {
    const submittedState = {
      ...defaultAdminFormReturnValue,
      isSubmitted: { value: true },
    };

    (useFormState as any).mockReturnValue([submittedState, mockAction]);

    render(<CategoriesForm />);

    await waitFor(() => {
      expect(mockReset).toHaveBeenCalled();
    });
  });

  it('should call the handleCategoryName function when the category name input changes', () => {
    render(<CategoriesForm />);

    const categoryNameInput = screen.getByLabelText(/Category Name/i);

    fireEvent.change(categoryNameInput, { target: { value: 'New Category' } });

    expect(mockHandleCategoryName).toHaveBeenCalled();
  });

  it('should call the handleCategoryPreviewImg function when the preview image input changes', () => {
    render(<CategoriesForm />);

    const previewImageInput = screen.getByLabelText(/preview image/i);

    fireEvent.change(previewImageInput);

    expect(mockHandleCategoryPreviewImg).toHaveBeenCalled();
  });
});
