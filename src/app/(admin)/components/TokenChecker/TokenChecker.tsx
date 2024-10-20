'use client';

import {
  disableScrolling,
  enableScrolling,
} from '@/app/shared/utils/windowFunctions';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaLock } from 'react-icons/fa';

export default function TokenChecker() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      disableScrolling();
      const storedToken = localStorage.getItem('token');
      setToken(storedToken);

      if (token) {
        enableScrolling();
      }

      if (!storedToken) {
        router.push('/admin');
        enableScrolling();
      }
    }
  }, [router, token]);

  if (token === null) {
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
