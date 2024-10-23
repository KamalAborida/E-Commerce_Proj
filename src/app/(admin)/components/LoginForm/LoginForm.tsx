'use client';

import Image from 'next/image';
import Input from '@/app/shared/Input/Input';
import React, { useEffect, useState, useCallback } from 'react';
import { authenticateAdmin } from '../../utils/login';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';
import { InputEventType } from '@/app/shared/utils/types';
import LoginButton from './LoginButton';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [state, action] = useFormState(authenticateAdmin, null);
  const router = useRouter();

  const handleUsername = useCallback((event: InputEventType) => {
    setUsername(event.target.value);
  }, []);

  const handlePassword = useCallback((event: InputEventType) => {
    setPassword(event.target.value);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.push('admin/categories');
      return;
    }

    if (state?.error) {
      setError(state.error);
    } else if (state?.token) {
      localStorage.setItem('token', state.token);
      router.push('admin/categories');
    }
  }, [router, state]);

  return (
    <form className="loginForm" action={action}>
      <Image
        src={'/logo.svg'}
        alt="logo"
        width={100}
        height={100}
        className="loginForm__logo"
      />
      {error && <p className="p--error">{error}</p>}
      <Input
        name="username"
        placeholder=""
        label="Username"
        onChange={handleUsername}
        value={username}
      />
      <Input
        name="password"
        placeholder=""
        label="Password"
        isPassword={true}
        onChange={handlePassword}
        value={password}
      />
      <LoginButton />
    </form>
  );
}
