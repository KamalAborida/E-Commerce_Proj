'use client';

import { useState } from 'react';
import InfoTip from './InfoTip';

interface InputProps {
  label: string;
  placeholder: string;
  name: string;
  isTextArea?: boolean;
  isFileInput?: boolean;
  isInfoTip?: boolean;
  infoTip?: string;
}

export default function Input({
  label,
  placeholder,
  name,
  isTextArea = false,
  isFileInput = false,
  isInfoTip = false,
  infoTip = '',
}: InputProps) {
  return (
    <div className="inputDiv">
      <label className="inputDiv__label">{label}</label>
      {isInfoTip && <InfoTip infoTip={infoTip} />}
      {!isTextArea && (
        <input
          className="inputDiv__input"
          type={`${isFileInput ? 'file' : 'text'}`}
          placeholder={placeholder}
          name={name}
          id={name}
        />
      )}
      {isTextArea && (
        <textarea
          className="inputDiv__input"
          placeholder={placeholder}
          name={name}
          id={name}
        />
      )}
    </div>
  );
}
