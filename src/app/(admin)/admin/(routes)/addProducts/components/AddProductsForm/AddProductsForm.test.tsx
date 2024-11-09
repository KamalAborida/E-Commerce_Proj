import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
} from '@testing-library/react';
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import AddProductsForm from './AddProductsForm';
import { useAdminForms } from '@/app/(admin)/hooks/form-hook';
import { useFormState, useFormStatus } from 'react-dom';
import { productsData } from '@/app/shared/utils/mockedData';

const mockHandleProductName = vi.fn();
const mockHandlePrice = vi.fn();
const mockHandleIsNew = vi.fn();
const mockHandleCategoryId = vi.fn();
const mockHandleDescription = vi.fn();
const mockHandleInTheBox = vi.fn();
const mockHandleFeatures = vi.fn();
const mockHandleCollagueLargeImg = vi.fn();
const mockHandleCollagueSmall1Img = vi.fn();
const mockHandleCollagueSmall2Img = vi.fn();
const mockHandlePreviewImg = vi.fn();
const mockReset = vi.fn();

const defaultFormData = {
  productName: '',
  price: '',
  categoryId: '',
  isNew: false,
  description: '',
  inTheBox: '',
  features: '',
  previewImg: '',
  collagueLargeImg: '',
  collagueSmall1Img: '',
  collagueSmall2Img: '',
};

const defaultAdminFormReturnValue = {
  formData: defaultFormData,
  handleProductName: mockHandleProductName,
  handlePrice: mockHandlePrice,
  handleIsNew: mockHandleIsNew,
  handleCategoryId: mockHandleCategoryId,
  handleDescription: mockHandleDescription,
  handleInTheBox: mockHandleInTheBox,
  handleFeatures: mockHandleFeatures,
  handleCollagueLargeImg: mockHandleCollagueLargeImg,
  handleCollagueSmall1Img: mockHandleCollagueSmall1Img,
  handleCollagueSmall2Img: mockHandleCollagueSmall2Img,
  handlePreviewImg: mockHandlePreviewImg,
  reset: mockReset,
  isTouched: {},
  errors: {},
};

const defaultState = {
  isSubmitted: { value: false },
  error: null,
  data: [],
};

vi.mock('react-redux', () => ({
  useDispatch: vi.fn(() => vi.fn()),
}));

vi.mock('@/app/(admin)/hooks/form-hook', () => ({
  useAdminForms: vi.fn(() => defaultAdminFormReturnValue),
}));

vi.mock('@/lib/store', () => ({
  useAppSelector: vi.fn(() => [...productsData]),
}));

vi.mock('react-dom', () => ({
  useFormState: vi.fn((firstMockedAction, initialState) => {
    firstMockedAction = vi.fn();
    initialState = { ...defaultState };
    firstMockedAction();
    return [{ ...initialState, isSubmitted: true }, firstMockedAction];
  }),

  useFormStatus: vi.fn(() => ({
    pending: false,
  })),
}));

describe('AddProductsForm Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render all sections and form elements', () => {
    render(<AddProductsForm />);

    expect(screen.getByText('ADD PRODUCT')).toBeDefined();
    expect(screen.getByLabelText(/Product Name/i)).toBeDefined();
    expect(screen.getByLabelText(/Price/i)).toBeDefined();
    expect(screen.getByLabelText(/Description/i)).toBeDefined();
    expect(screen.getByLabelText(/Preview Image/i)).toBeDefined();
    expect(screen.getByLabelText(/Collague Large Image/i)).toBeDefined();
    expect(screen.getByLabelText(/Small Image 1/i)).toBeDefined();
    expect(screen.getByLabelText(/Small Image 2/i)).toBeDefined();
    expect(screen.getByText("What is in the product's box ?")).toBeDefined();
    expect(
      screen.getByPlaceholderText('Ex. cable, manual, etc...')
    ).toBeDefined();
    expect(screen.getByLabelText(/Features/i)).toBeDefined();
    expect(screen.getByRole('button', { name: 'ADD PRODUCT +' })).toBeDefined();
  });

  it('should handle input changes and call respective handlers', () => {
    render(<AddProductsForm />);

    fireEvent.change(screen.getByLabelText(/Product Name/i), {
      target: { value: 'New Product' },
    });
    expect(mockHandleProductName).toHaveBeenCalled();

    fireEvent.change(screen.getByLabelText(/Price/i), {
      target: { value: '100' },
    });
    expect(mockHandlePrice).toHaveBeenCalled();

    fireEvent.change(screen.getByLabelText(/Description/i), {
      target: { value: 'This is a product description.' },
    });
    expect(mockHandleDescription).toHaveBeenCalled();

    fireEvent.change(screen.getByLabelText(/Preview Image/i));
    expect(mockHandlePreviewImg).toHaveBeenCalled();
  });

  it('should display error message if there is an error in form state', () => {
    (useFormState as any).mockReturnValue([
      { error: 'Error submitting form' },
      vi.fn(),
    ]);

    render(<AddProductsForm />);

    expect(screen.getByText(/Error submitting form/i)).toBeDefined();
  });

  it('should disable the submit button when form is pending', async () => {
    (useFormStatus as any).mockReturnValue({ pending: true });

    render(<AddProductsForm />);

    const submitButton = screen.getByRole('button', { name: 'Submitting' });

    expect(submitButton).toBeDefined();
  });

  it('should reset form when submission is successful', async () => {
    const submittedState = {
      ...defaultState,
      isSubmitted: { value: true },
    };

    (useFormState as any).mockReturnValue([submittedState, vi.fn()]);

    render(<AddProductsForm />);

    await waitFor(() => {
      expect(mockReset).toHaveBeenCalled();
    });
  });
});
