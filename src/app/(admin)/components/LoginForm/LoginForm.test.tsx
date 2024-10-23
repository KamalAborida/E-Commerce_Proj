import React from 'react';
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import LoginForm from './LoginForm';
import { useFormStatus } from 'react-dom';

interface MockStateType {
  error: string | null;
  token: string | null;
}

const mockAction = vi.fn();
const mockState: MockStateType = {
  error: null,
  token: null,
};

vi.mock('react-dom', () => ({
  useFormState: vi.fn(() => [mockState, mockAction]),
  useFormStatus: vi.fn(() => ({ pending: false })),
}));

const pushMock = vi.fn();
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: pushMock,
  }),
}));

describe('LoginForm Component - Failed Login State', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  afterEach(() => {
    cleanup();
    localStorage.clear();
  });

  it('should render the static UI elements correctly', () => {
    render(<LoginForm />);

    const logo = screen.getByAltText(/logo/i);
    expect(logo).toBeDefined();
    expect(logo).toHaveProperty('src', expect.stringContaining('/logo.svg'));

    const usernameInput = screen.getByLabelText(/username/i);
    expect(usernameInput).toBeDefined();
    expect(usernameInput).toHaveProperty('name', 'username');

    const passwordInput = screen.getByLabelText(/password/i);
    expect(passwordInput).toBeDefined();
    expect(passwordInput).toHaveProperty('name', 'password');
    expect(passwordInput).toHaveProperty('type', 'password');

    const loginButton = screen.getByRole('button');
    expect(loginButton).toBeDefined();
    expect(loginButton.textContent).to.equal('Login');
  });

  it('should render the error message on failed login', async () => {
    mockState.error = 'Invalid credentials';

    render(<LoginForm />);

    await waitFor(() => {
      expect(screen.getByText(/Invalid credentials/i)).toBeDefined();
    });
  });

  it('should disable the login button while form is pending', async () => {
    (useFormStatus as any).mockReturnValue({ pending: true });

    render(<LoginForm />);

    const loginButton = screen.getByRole('button');
    expect(loginButton.textContent).to.equal('Pending...');
  });
});
