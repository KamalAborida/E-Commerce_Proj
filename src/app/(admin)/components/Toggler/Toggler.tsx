'use client';

import { InputEventType } from '@/app/shared/utils/types';
import React, { Dispatch, SetStateAction, useState } from 'react';

interface TogglerProps {
  label: string;
  onChange: (event: InputEventType) => void;
  value: string;
}

export default function Toggler({ label, value, onChange }: TogglerProps) {
  const [isActive, setIsActive] = useState(false);

  const toggleSwitch = (event: React.ChangeEvent<any>) => {
    setIsActive(!isActive);
    event.target.value = !isActive === true ? '1' : '0';
    onChange(event);
  };

  return (
    <div className="toggler">
      <input hidden readOnly name="isNew" value={value} role="togglerInput" />
      <p className="toggler__label">{label}</p>
      <div
        className={`toggler__switch ${isActive ? 'toggler__switch--active' : ''}`}
        onClick={toggleSwitch}
        role="togglerContainer"
      >
        <div className="toggler__ball"></div>
      </div>
    </div>
  );
}
