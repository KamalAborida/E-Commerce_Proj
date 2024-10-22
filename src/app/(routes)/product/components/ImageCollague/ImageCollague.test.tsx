import { cleanup, render, screen } from '@testing-library/react';
import { vi, describe, beforeEach, it, expect, afterEach } from 'vitest';
import ImageCollague from './ImageCollague';
import { productsData } from '@/app/shared/utils/mockedData';
import { useParams } from 'next/navigation';

// Mock the dependencies
vi.mock('next/navigation', () => ({
  useParams: vi.fn(),
}));

vi.mock('@/lib/store', () => ({
  useAppSelector: vi.fn(() => [...productsData]),
}));

describe('ImageCollague Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the images correctly', () => {
    const indexID = 1;
    (useParams as any).mockReturnValue({ productID: indexID });

    render(<ImageCollague />);

    const imagesDiv = screen.getByRole('imageCollague');
    expect(imagesDiv.children.length).to.equal(3);

    const largeImage = screen.getByRole('largeImageInCollague');
    expect(largeImage).toHaveProperty(
      'alt',
      `${productsData[indexID].name}-Large`
    );
  });

  it('should show a message if no product is found', () => {
    const indexID = 10;
    (useParams as any).mockReturnValue({ productID: indexID });

    render(<ImageCollague />);

    expect(screen.getByText('No product with that ID')).toBeDefined();
  });
});
