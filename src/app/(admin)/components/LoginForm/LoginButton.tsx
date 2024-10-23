'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';

export default function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button className="btn btn-orange loginForm__btn" disabled={pending}>
      {pending ? 'Pending...' : 'Login'}
    </button>
  );
}
