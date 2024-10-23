import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import SideBar from './SideBar';
import { useRouter } from 'next/navigation';

const pushMock = vi.fn();

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: pushMock,
  }),
}));

describe('SideBar Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the static UI elements correctly', () => {
    render(<SideBar />);

    const logo = screen.getByAltText(/logo/i);
    expect(logo).toBeDefined();
    expect(logo).toHaveProperty('src', expect.stringContaining('/logo.svg'));

    expect(screen.getByRole('link', { name: /CATEGORIES/i })).toHaveProperty(
      'href',
      expect.stringContaining('categories')
    );
    expect(screen.getByRole('link', { name: /PRODUCTS/i })).toHaveProperty(
      'href',
      expect.stringContaining('products')
    );
    expect(screen.getByRole('link', { name: /ADD PRODUCT/i })).toHaveProperty(
      'href',
      expect.stringContaining('addProducts')
    );
    expect(screen.getByRole('link', { name: /LOGOUT/i })).toHaveProperty(
      'href',
      expect.stringContaining('/admin')
    );
  });

  it('should clear localStorage and navigate to /admin when logout is clicked', () => {
    render(<SideBar />);

    localStorage.setItem('token', 'test-token');

    const logoutItem = screen.getByText(/LOGOUT/i);
    fireEvent.click(logoutItem);

    expect(localStorage.getItem('token')).toBeNull();

    expect(pushMock).toHaveBeenCalledWith('/admin');
  });
});
