import React from 'react';
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import TokenChecker from './TokenChecker';
import { useRouter } from 'next/navigation';
import {
  disableScrolling,
  enableScrolling,
} from '@/app/shared/utils/windowFunctions';

const pushMock = vi.fn();

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: pushMock,
  }),
}));

vi.mock('@/app/shared/utils/windowFunctions', () => ({
  disableScrolling: vi.fn(),
  enableScrolling: vi.fn(),
}));

describe('TokenChecker Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the loading state while checking token', () => {
    render(<TokenChecker />);

    const loadingText = screen.getByText(/Checking Token.../i);

    expect(loadingText).toBeDefined();
  });

  it('should disable scrolling when component mounts', () => {
    render(<TokenChecker />);

    expect(disableScrolling).toHaveBeenCalled();
  });

  it('should enable scrolling and navigate to /admin if no token is found', async () => {
    render(<TokenChecker />);

    await waitFor(() => {
      expect(localStorage.getItem('token')).toBeNull();
      expect(enableScrolling).toHaveBeenCalled();
      expect(pushMock).toHaveBeenCalledWith('/admin');
    });
  });

  it('should enable scrolling when a token is found', async () => {
    localStorage.setItem('token', 'test-token');

    render(<TokenChecker />);

    await waitFor(() => {
      expect(localStorage.getItem('token')).toBe('test-token');
      expect(enableScrolling).toHaveBeenCalled();
    });
  });
});
