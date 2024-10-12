'use client';

import Image from 'next/image';
import Input from '@/app/(shared)/Input/Input';
import React, { useEffect, useState } from 'react';
import { authenticateAdmin } from '../../utils/login';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [state, action] = useFormState(authenticateAdmin, null);
  const router = useRouter();

  const handleUsername = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setUsername(event.target.value);
  };

  const handlePassword = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      router.push('admin/categories');
    }

    if (state) {
      if (state.error) {
        setError(state.error);
        return;
      }

      if (state.token) {
        localStorage.setItem('token', state.token);
        router.push('admin/categories');
      }
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
      <button className="btn btn-orange loginForm__btn">Login</button>
    </form>
  );
}
