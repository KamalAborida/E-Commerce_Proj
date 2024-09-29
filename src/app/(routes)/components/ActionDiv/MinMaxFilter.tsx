// 'use client';

import { ChangeEvent, Dispatch, SetStateAction } from 'react';

interface MinMaxFilterProps {
  setMinValue: Dispatch<SetStateAction<number>>;
  setMaxValue: Dispatch<SetStateAction<number>>;
}

export default function MinMaxFilter({
  setMaxValue,
  setMinValue,
}: MinMaxFilterProps) {
  const handleMinValue = (event: ChangeEvent<HTMLInputElement>) => {
    setMinValue(+event.currentTarget.value);
  };

  const handleMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
    if (+event.currentTarget.value <= 0) {
      setMaxValue(10000000000);
      return;
    }
    setMaxValue(+event.currentTarget.value);
  };

  return (
    <div className="actionDiv__minMaxFunc">
      <input
        className="actionDiv__minMaxFunc__minInpt"
        type="number"
        placeholder="Min value"
        onChange={handleMinValue}
      />
      <input
        className="actionDiv__minMaxFunc__maxInpt"
        type="number"
        placeholder="Max value"
        onChange={handleMaxValue}
      />
    </div>
  );
}
