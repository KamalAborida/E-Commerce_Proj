import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const secretKey = process.env.SECRET_KEY;

export async function POST(request: Request) {
  const { token } = await request.json();

  if (!token) {
    return NextResponse.json(
      { success: false, message: 'Access denied' },
      { status: 400 }
    );
  }

  try {
    jwt.verify(token, secretKey!);
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: 'Invalid token' },
      { status: 400 }
    );
  }
}
