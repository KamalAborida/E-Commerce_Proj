'use client';

import {
  disableScrolling,
  enableScrolling,
} from '@/app/shared/utils/windowFunctions';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const handleVerification = async (
  storedToken: string,
  router: AppRouterInstance
) => {
  disableScrolling();

  if (!storedToken) {
    redirectToLogin(router, false);
    return;
  }

  try {
    const response = await fetchVerifyToken(storedToken);
    const verificationResult = await response.json();
    if (!verificationResult.success) {
      redirectToLogin(router);
    }
  } catch (error) {
    redirectToLogin(router);
  } finally {
    enableScrolling();
  }
};

const redirectToLogin = (
  router: AppRouterInstance,
  isToken: boolean = true
) => {
  if (!isToken) {
    enableScrolling();
    router.push('/admin');
    return;
  }

  localStorage.removeItem('token');
  router.push('/admin');
};

const fetchVerifyToken = async (storedToken: string) => {
  const response = await fetch('/api/verifyToken', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token: storedToken }),
  });

  return response;
};
