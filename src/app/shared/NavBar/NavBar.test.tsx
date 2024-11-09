import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useAppSelector } from '@/lib/store';
import { useRouter, useSearchParams } from 'next/navigation';
import NavBar from './NavBar';
import { categoriesData } from '../utils/mockedData';

vi.mock('@/lib/store', () => ({
  useAppSelector: vi.fn(() => [...categoriesData]),
}));

const getParamMock = vi.fn((searchParam: string) => {
  return true;
});

const pushMock = vi.fn();
vi.mock('next/navigation', () => ({
  useRouter: vi.fn(() => ({
    push: pushMock,
  })),

  useSearchParams: vi.fn(() => ({
    get: getParamMock,
  })),
}));

describe.only('NavBar', () => {
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

    const navList = await screen.findByText('HEADPHONES');
    expect(navList).toBeDefined();

    const logo = screen.getByAltText('Audio Store Logo');
    expect(logo).toBeDefined();
  });

  it('should call handleHamburger when the hamburger menu is clicked', () => {
    (useSearchParams as any).mockReturnValue({
      get: () => {
        false;
      },
    });

    global.innerWidth = 799;
    window.dispatchEvent(new Event('resize'));
    const navPathTrigger = '?nav=true';

    render(<NavBar />);

    const hamburgerIcon = screen.getByAltText('Hamburger');
    expect(hamburgerIcon).toBeDefined();

    fireEvent.click(hamburgerIcon);

    expect(pushMock).toHaveBeenCalledWith(navPathTrigger);
  });
});
