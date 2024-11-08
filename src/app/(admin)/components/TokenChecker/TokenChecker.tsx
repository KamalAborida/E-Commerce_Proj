'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { FaLock } from 'react-icons/fa';
import { handleVerification } from './utils';

export default function TokenChecker() {
  const router = useRouter();

  const storedToken = localStorage.getItem('token') || '';

  useEffect(() => {
    handleVerification(storedToken, router);
  }, [router, storedToken]);

  if (storedToken === null) {
    return (
      <div className="backdrop backdrop--noOffset backdrop--displayCenter">
        <div className="tokenChecker">
          <FaLock className="tokenChecker__icon" />
          <p className="tokenChecker__text">Checking Token...</p>
        </div>
      </div>
    );
  }

  return null;
}
