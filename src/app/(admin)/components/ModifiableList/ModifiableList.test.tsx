import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import ModifiableList from './ModifiableList';
import { FaTrashAlt } from 'react-icons/fa';

describe('ModifiableList Component', () => {
  const defaultProps = {
    text: 'Sample Item',
    handleDelete: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the list and list items correctly', () => {
    render(
      <ModifiableList>
        <ModifiableList.Item {...defaultProps} />
      </ModifiableList>
    );

    // Check if the list is rendered.
    const list = screen.getByRole('list');
    expect(list).toBeDefined();

    const listItem = screen.getByText(/Sample Item/i);
    expect(listItem).toBeDefined();

    const deleteButton = screen.getByRole('deleteButton-list');
    expect(deleteButton).toBeDefined();
  });

  it('should call the handleDelete function when the delete button is clicked', () => {
    render(
      <ModifiableList>
        <ModifiableList.Item {...defaultProps} />
      </ModifiableList>
    );

    const deleteButton = screen.getByRole('deleteButton-list');

    fireEvent.click(deleteButton);

    expect(defaultProps.handleDelete).toHaveBeenCalledWith('Sample Item');
  });
});
