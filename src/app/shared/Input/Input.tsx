'use client';

import InfoTip from './InfoTip';
import { InputEventType } from '../utils/types';

interface InputProps {
  label: string;
  placeholder: string;
  name: string;
  value?: string | number | undefined;
  isTextArea?: boolean;
  isFileInput?: boolean;
  isInfoTip?: boolean;
  infoTip?: string;
  isPassword?: boolean;
  onChange?: (event: InputEventType) => void;
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

      {!isTextArea && isFileInput && (
        <input
          className="inputDiv__input"
          type="file"
          name={name}
          id={name}
          onChange={onChange}
          value={value}
        />
      )}

      {!isTextArea && !isFileInput && (
        <input
          className="inputDiv__input"
          type={isPassword ? 'password' : 'text'}
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
