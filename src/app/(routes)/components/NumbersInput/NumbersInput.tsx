'use client';

import { useEffect, useState } from 'react';

interface NumbersInputProps {
  setInputNumberState: (quantity: number) => void;
}

export default function NumbersInput({
  setInputNumberState,
}: NumbersInputProps) {
  const [number, setNumber] = useState<number>(1);

  const increaseNumber = () => {
    setNumber((prev) => ++prev);
  };

  const decreaseNumber = () => {
    if (number === 0) {
      return;
    }

    setNumber((prev) => --prev);
  };

  useEffect(() => {
    setInputNumberState(number);
  }, [number, setInputNumberState]);

  return (
    <div className="numbersInput">
      <button className="numbersInput__plus" onClick={decreaseNumber}>
        -
      </button>
      <p className="numbersInput__number">{number}</p>
      <button className="numbersInput__minus" onClick={increaseNumber}>
        +
      </button>
    </div>
  );
}
