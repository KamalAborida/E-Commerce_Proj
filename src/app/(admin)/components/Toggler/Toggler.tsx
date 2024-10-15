'use client';

import { InputEventType } from '@/app/(shared)/utils/types';
import { Dispatch, SetStateAction, useState } from 'react';

interface TogglerProps {
  label: string;
  value: string;
  onChange?: (event: InputEventType) => void;
}

export default function Toggler({ label }: TogglerProps) {
  const [isActive, setIsActive] = useState(false);

  const toggleSwitch = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="toggler">
      <p className="toggler__label">{label}</p>
      <div
        className={`toggler__switch ${isActive ? 'toggler__switch--active' : ''}`}
        onClick={toggleSwitch}
      >
        <div className="toggler__ball"></div>
      </div>
    </div>
  );
}
