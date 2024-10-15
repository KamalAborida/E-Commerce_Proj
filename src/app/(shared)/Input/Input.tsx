'use client';

import InfoTip from './InfoTip';
import { InputEventType } from '../utils/types';

interface InputProps {
  label: string;
  placeholder: string;
  name: string;
  value?: string | File | null; // Handle File for file inputs and string for text inputs
  isTextArea?: boolean;
  isFileInput?: boolean;
  isInfoTip?: boolean;
  infoTip?: string;
  isPassword?: boolean;
  onChange?: (
    event: InputEventType | React.ChangeEvent<HTMLInputElement>
  ) => void;
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
          value={typeof value === 'string' ? value : ''}
        />
      )}

      {isTextArea && (
        <textarea
          className="inputDiv__input"
          placeholder={placeholder}
          name={name}
          id={name}
          onChange={onChange}
          value={typeof value === 'string' ? value : ''}
        />
      )}
    </div>
  );
}
