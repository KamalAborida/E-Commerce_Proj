'use client';

import { useContext, useEffect, useState } from 'react';
import RadioBtnContext from './radioBtns-context';

interface radioBtnProps {
  label: string;
  name: string;
  value: string;
}

export default function RadioBtn({ label, name, value }: radioBtnProps) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const ctx = useContext(RadioBtnContext);

  useEffect(() => {
    setIsActive(ctx.currentValue === value);
  }, [ctx.currentValue, value]);

  const handleRadioBtn = () => {
    ctx.setRadioValue(value);
  };

  return (
    <div
      onClick={handleRadioBtn}
      className={`radioBtn ${isActive ? 'radioBtn-active' : ''}`}
    >
      <input
        className="radioBtn__input"
        type="radio"
        id={name}
        name={name}
        value={value}
        checked={isActive}
        readOnly
      />
      <label className="radioBtn__label">{label}</label>
    </div>
  );
}
