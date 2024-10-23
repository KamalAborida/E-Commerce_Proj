import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import Toggler from './Toggler';
import { InputEventType } from '@/app/shared/utils/types';

describe('Toggler Component', () => {
  const mockOnChange = vi.fn();
  const defaultProps = {
    label: 'Test Label',
    value: '0',
    onChange: mockOnChange,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the static UI elements correctly', () => {
    render(<Toggler {...defaultProps} />);

    const label = screen.getByText(/Test Label/i);
    expect(label).toBeDefined();

    const toggleSwitch = screen.getByRole('togglerContainer');
    expect(toggleSwitch).toBeDefined();
  });

  it('should call onChange with the correct value when toggled', () => {
    render(<Toggler {...defaultProps} />);

    const toggleSwitch = screen.getByRole('togglerContainer');

    fireEvent.click(toggleSwitch);

    expect(mockOnChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          value: '1',
        }),
      })
    );
  });

  it('should toggle the isActive state and apply the active class', () => {
    render(<Toggler {...defaultProps} />);

    const toggleSwitch = screen.getByRole('togglerContainer');

    fireEvent.click(toggleSwitch);
    expect(toggleSwitch.className).toContain('toggler__switch--active');

    fireEvent.click(toggleSwitch);
    expect(toggleSwitch.className).not.toContain('toggler__switch--active');
  });
});
