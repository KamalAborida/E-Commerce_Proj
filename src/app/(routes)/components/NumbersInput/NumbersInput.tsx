'use client';

import { useState } from 'react';

export default function NumbersInput() {
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
