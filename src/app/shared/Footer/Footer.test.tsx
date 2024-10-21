import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import Footer from './Footer';
import { cleanup } from '@testing-library/react';
import { categoriesData } from '../utils/mockedData';

// Mock useAppSelector
vi.mock('@/lib/store', () => ({
  useAppSelector: vi.fn(() => [...categoriesData]),
}));

// Mock useRouter
vi.mock('next/navigation', () => ({
  useRouter: vi.fn(() => ({
    push: vi.fn(),
  })),
}));

describe('Footer', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the Footer with logo, navigation list, about section, and social media links', () => {
    render(<Footer />);

    const logo = screen.getByAltText('Brand Logo');
    expect(logo).toBeDefined();

    categoriesData.forEach((category) => {
      const categoryLink = screen.getByText(category.name.toUpperCase());
      expect(categoryLink).toBeDefined();
    });

    const aboutDescription = screen.getByText(
      /Audiophile is an all in one stop to fulfill your audio needs/i
    );
    expect(aboutDescription).toBeDefined();

    const copyrightText = screen.getByText(
      /Copyright 2021. All Rights Reserved/i
    );
    expect(copyrightText).toBeDefined();

    const socialMediaIcons = ['facebook', 'instagram', 'twitter'];
    socialMediaIcons.forEach((altText) => {
      const socialIcon = screen.getByAltText(altText);
      expect(socialIcon).toBeDefined();
    });
  });
});
