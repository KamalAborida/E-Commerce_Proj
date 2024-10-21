import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import NumbersInput from './NumbersInput';
import { cleanup } from '@testing-library/react';

describe('NumbersInput', () => {
  const setInputNumberStateMock = vi.fn();
  const changeQuantityMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup(); // Ensure the DOM is clean between tests
  });

  it('should render with the default quantity', () => {
    render(
      <NumbersInput
        setInputNumberState={setInputNumberStateMock}
        changeQuantity={null}
        defaultQuantity={5}
      />
    );

    const numberDisplay = screen.getByText('5');
    expect(numberDisplay).toBeDefined();
  });

  it('should increase the number when the "+" button is clicked', () => {
    render(
      <NumbersInput
        setInputNumberState={setInputNumberStateMock}
        changeQuantity={changeQuantityMock}
        defaultQuantity={5}
      />
    );

    const plusButton = screen.getByText('+');
    fireEvent.click(plusButton);

    const numberDisplay = screen.getByText('6');
    expect(numberDisplay).toBeDefined();

    expect(setInputNumberStateMock).toHaveBeenCalledWith(6);
    expect(changeQuantityMock).toHaveBeenCalledWith('+');
  });

  it('should decrease the number when the "-" button is clicked', () => {
    render(
      <NumbersInput
        setInputNumberState={setInputNumberStateMock}
        changeQuantity={changeQuantityMock}
        defaultQuantity={5}
      />
    );

    const minusButton = screen.getByText('-');
    fireEvent.click(minusButton);

    const numberDisplay = screen.getByText('4');
    expect(numberDisplay).toBeDefined();

    expect(setInputNumberStateMock).toHaveBeenCalledWith(4);
    expect(changeQuantityMock).toHaveBeenCalledWith('-');
  });

  it('should not decrease the number below 1', () => {
    render(
      <NumbersInput
        setInputNumberState={setInputNumberStateMock}
        changeQuantity={changeQuantityMock}
        defaultQuantity={1}
      />
    );

    const minusButton = screen.getByText('-');
    fireEvent.click(minusButton);

    const numberDisplay = screen.getByText('1');
    expect(numberDisplay).toBeDefined();

    expect(setInputNumberStateMock).not.toHaveBeenCalledWith(0);
    expect(changeQuantityMock).not.toHaveBeenCalledWith('-');
  });
});
