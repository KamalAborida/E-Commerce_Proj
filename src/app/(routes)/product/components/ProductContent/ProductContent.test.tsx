import { cleanup, render, screen } from '@testing-library/react';
import { vi, describe, beforeEach, it, expect, afterEach } from 'vitest';
import ProductContent from './ProductContent';
import { productsData } from '@/app/shared/utils/mockedData';
import { useParams } from 'next/navigation';

vi.mock('next/navigation', () => ({
  useParams: vi.fn(),
}));

vi.mock('@/lib/store', () => ({
  useAppSelector: vi.fn(() => [...productsData]),
}));

describe('ProductContent Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the product features and in-the-box content correctly', () => {
    const indexID = 1;
    (useParams as any).mockReturnValue({ productID: indexID });
    const featuresList = productsData[indexID].features.split(',');
    const inTheBoxList = JSON.parse(productsData[indexID].inTheBox);

    render(<ProductContent />);

    const featuresTitle = screen.getByText('FEATURES');
    const featuresItems = screen.getAllByRole('featuresListItem');
    const inTheBoxTitle = screen.getByText('IN THE BOX');
    const inTheBoxItems = screen.getAllByRole('inTheBoxListItem');

    expect(featuresTitle).toBeDefined();

    for (let i = 0; i < featuresList.length; i++) {
      expect(featuresItems[i].textContent).to.equal(featuresList[i]);
    }

    expect(inTheBoxTitle).toBeDefined();

    for (let i = 0; i < inTheBoxList.length; i++) {
      expect(inTheBoxItems[i].textContent).to.equal(inTheBoxList[i].item);
    }
  });

  it('should show a message if no product is found', () => {
    const indexID = 10; // Assuming no product with this ID
    (useParams as any).mockReturnValue({ productID: indexID });

    render(<ProductContent />);

    const noProductMessage = screen.getByText('No product');
    expect(noProductMessage).toBeDefined();
  });
});
