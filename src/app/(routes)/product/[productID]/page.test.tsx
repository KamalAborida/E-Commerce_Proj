import { cleanup, render, screen } from '@testing-library/react';
import { vi, describe, beforeEach, it, expect, afterEach } from 'vitest';
import { useParams } from 'next/navigation';
import { categoriesData, productsData } from '@/app/shared/utils/mockedData';
import ProductPage from './page';

// Mock the dependencies
vi.mock('next/navigation', () => ({
  useParams: vi.fn(),
}));

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

const dispatchMock = vi.fn();
vi.mock('react-redux', () => ({
  useDispatch: () => dispatchMock,
}));

describe('Product Page Integration', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (useParams as any).mockReturnValue({ productID: 1 });
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the entire Product page correctly', () => {
    render(<ProductPage />);

    const productPageBackground = screen.getByRole('productPageBackground');
    const productPrice = screen.getByText(`${productsData[1].price}$`);
    const productDescription = screen.getByText(productsData[1].description);
    const featuresTitle = screen.getByText('FEATURES');
    const inTheBoxTitle = screen.getByText('IN THE BOX');
    const imagesDiv = screen.getByRole('imageCollague');
    const recommendedProductsTitle = screen.getByText('You May Also Like');
    const categoriesDiv = screen.getByRole('categoriesDiv');
    const missionDiv = screen.getByRole('missionDiv');

    expect(productPageBackground).toBeDefined();
    expect(productDescription).toBeDefined();
    expect(productPrice).toBeDefined();
    expect(featuresTitle).toBeDefined();
    expect(inTheBoxTitle).toBeDefined();
    expect(imagesDiv.children.length).to.equal(3);
    expect(recommendedProductsTitle).toBeDefined();
    expect(categoriesDiv).toBeDefined();

    categoriesData.forEach((category) => {
      const categoryElement = screen.getByText(category.name);
      expect(categoryElement).toBeDefined();
    });

    expect(missionDiv).toBeDefined();
  });

  it('should show "No product" message when product is not found', () => {
    (useParams as any).mockReturnValue({ productID: 10 });

    render(<ProductPage />);

    const noProductMessage = screen.getByText('No product');
    expect(noProductMessage).toBeDefined();
  });
});
