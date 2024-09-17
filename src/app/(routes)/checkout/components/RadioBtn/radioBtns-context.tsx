// radioBtns-context.ts
'use client';

import React, { useState } from 'react';

const RadioBtnContext = React.createContext<{
  isTouched: boolean;
  currentValue: string;
  setRadioValue: (value: string) => void; // Add a setter function to the context
}>({
  isTouched: false,
  currentValue: 'e-money',
  setRadioValue: () => {},
});

export function RadioBtnContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isTouched, setIsTouched] = useState(false);
  const [currentValue, setCurrentValue] = useState('e-money');

  const setRadioValue = (value: string) => {
    setIsTouched(true);
    setCurrentValue(value);
  };

  return (
    <RadioBtnContext.Provider
      value={{ isTouched, currentValue, setRadioValue }}
    >
      {children}
    </RadioBtnContext.Provider>
  );
}

export default RadioBtnContext;
