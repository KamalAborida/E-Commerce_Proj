import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
} from '@testing-library/react';
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import ModifiableCategory from './ModifiableCategory';
import { useFormState } from 'react-dom';
import { FaEdit } from 'react-icons/fa';
import DeleteIcon from './DeleteIcon';

interface MockStateType {
  error: string | null;
  success: boolean;
  message: string;
  status: number;
}

const mockState: MockStateType = {
  error: null,
  success: false,
  message: 'Category deleted successfully',
  status: 200,
};

vi.mock('react-redux', () => ({
  useDispatch: vi.fn(() => vi.fn()),
}));

vi.mock('react-dom', () => ({
  useFormState: vi.fn((firstMockedAction, initialState) => {
    firstMockedAction = vi.fn();
    firstMockedAction();
    return [mockState, firstMockedAction];
  }),
}));

describe('ModifiableCategory Component', () => {
  const defaultProps = {
    href: '/category/1',
    name: 'Category',
    id: 1,
    image: '',
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the static UI elements correctly', () => {
    render(<ModifiableCategory {...defaultProps} />);

    const deleteIcon = screen.getByRole('deleteBtn');
    expect(deleteIcon).toBeDefined();

    const editIcon = screen.getByRole('editIcon');
    expect(editIcon).toBeDefined();

    const category = screen.getByRole('categoryName');
    expect(category).toBeDefined();
    expect(category.textContent?.toLowerCase()).to.equal(
      defaultProps.name.toLowerCase()
    );
  });

  it('should call the delete action when the delete icon is clicked', async () => {
    render(<ModifiableCategory {...defaultProps} />);

    const deleteIcon = screen.getByRole('deleteBtn');

    fireEvent.click(deleteIcon);

    await waitFor(() => {
      expect(useFormState).toHaveBeenCalled();
    });
  });
});
