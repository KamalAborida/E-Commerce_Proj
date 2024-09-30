'use client';

import React, { useEffect, useState } from 'react';

interface NumbersInputProps {
  setInputNumberState: (quantity: number) => void;
  changeQuantity: ((operation: string) => void) | null;
  quantity: number;
}

function NumbersInput({
  setInputNumberState,
  changeQuantity,
  quantity,
}: NumbersInputProps) {
  const [number, setNumber] = useState<number>(quantity);
  const [operation, setOperation] = useState('');

  const increaseNumber = () => {
    setNumber((prev) => prev + 1);
    setOperation('+');
  };

  const decreaseNumber = () => {
    if (number === 1) {
      return;
    }
    setNumber((prev) => prev - 1);
    setOperation('-');
  };

  useEffect(() => {
    setInputNumberState(number);
    if (changeQuantity && operation) {
      changeQuantity(operation);
    }
  }, [changeQuantity, number, operation, setInputNumberState]);

  return (
    <div className="numbersInput">
      <button className="numbersInput__minus" onClick={decreaseNumber}>
        -
      </button>
      <p className="numbersInput__number">{number}</p>
      <button className="numbersInput__plus" onClick={increaseNumber}>
        +
      </button>
    </div>
  );
}

export default React.memo(NumbersInput); // Memoized to avoid unnecessary re-renders
