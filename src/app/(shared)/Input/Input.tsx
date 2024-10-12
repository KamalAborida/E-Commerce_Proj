'use client';

import { useState } from 'react';
import InfoTip from './InfoTip';

type eventType =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>;

interface InputProps {
  label: string;
  placeholder: string;
  name: string;
  value?: string;
  isTextArea?: boolean;
  isFileInput?: boolean;
  isInfoTip?: boolean;
  infoTip?: string;
  isPassword?: boolean;
  onChange?: (event: eventType) => void;
}

export default function Input({
  label,
  placeholder,
  name,
  value,
  isTextArea = false,
  isFileInput = false,
  isInfoTip = false,
  infoTip = '',
  isPassword = false,
  onChange,
}: InputProps) {
  return (
    <div className="inputDiv">
      <label className="inputDiv__label">{label}</label>
      {isInfoTip && <InfoTip infoTip={infoTip} />}
      {!isTextArea && (
        <input
          className="inputDiv__input"
          type={`${isPassword ? 'password' : isFileInput ? 'file' : 'text'}`}
          placeholder={placeholder}
          name={name}
          id={name}
          onChange={onChange}
          value={value}
        />
      )}
      {isTextArea && (
        <textarea
          className="inputDiv__input"
          placeholder={placeholder}
          name={name}
          id={name}
          onChange={onChange}
          value={value}
        />
      )}
    </div>
  );
}
