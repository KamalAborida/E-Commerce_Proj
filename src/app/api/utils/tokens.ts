'use server';

import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { verificationResultType } from '@/app/shared/utils/types';

const secretKey = process.env.SECRET_KEY;

export const verifyToken = (token: string): verificationResultType => {
  if (!token) {
    return {
      nextResponse: NextResponse.json(
        { message: 'Access denied' },
        { status: 400 }
      ),

      success: false,
    };
  }

  try {
    jwt.verify(token, secretKey!);
    return { nextResponse: undefined, success: true };
  } catch (err) {
    return {
      nextResponse: NextResponse.json(
        { message: 'Invalid token' },
        { status: 400 }
      ),
      success: false,
    };
  }
};

export const getToken = async (req: Request) => {
  const authHeader = await req.headers.get('authorization');
  const token = authHeader && authHeader.split(' ')[1];
  return token;
};

export const getTokenVerificationResult = async (
  req: Request
): Promise<verificationResultType> => {
  const token = await getToken(req);

  if (!token) {
    return {
      nextResponse: NextResponse.json(
        { message: 'Access denied' },
        { status: 400 }
      ),
      success: false,
    };
  }

  const verificationResult = verifyToken(token);

  return verificationResult;
};
