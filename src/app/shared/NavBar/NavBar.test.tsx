import { cleanup, render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useAppSelector } from '@/lib/store';
import { useRouter } from 'next/navigation';
import NavBar from './NavBar';
import { categoriesData } from '../utils/mockedData';

vi.mock('@/lib/store', () => ({
  useAppSelector: vi.fn(() => [...categoriesData]),
}));

vi.mock('next/navigation', () => ({
  useRouter: vi.fn(() => ({
    push: vi.fn(),
  })),
}));

describe('NavBar', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render hamburger menu when window.innerWidth <= 800', () => {
    global.innerWidth = 799;

    window.dispatchEvent(new Event('resize'));

    render(<NavBar />);

    const hamburgerIcon = screen.getByAltText('Hamburger');
    expect(hamburgerIcon).toBeDefined();

    const logo = screen.getByAltText('Audio Store Logo');
    expect(logo).toBeDefined();
  });

  it('should render full nav list when window.innerWidth > 800', async () => {
    global.innerWidth = 850;

    window.dispatchEvent(new Event('resize'));

    render(<NavBar />);

    // screen.debug();

    const navList = await screen.findByText('HEADPHONES');
    expect(navList).toBeDefined();

    const logo = screen.getByAltText('Audio Store Logo');
    expect(logo).toBeDefined();
  });
});
