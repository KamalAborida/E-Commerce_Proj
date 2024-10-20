'use server';

import { getAdminByUsername } from '@/app/server/services/admin';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export interface Admin {
  username: string;
  password: string;
}

const secretKey = process.env.SECRET_KEY;

export async function POST(req: Request) {
  console.log('Request');

  const adminData = await req.json();

  const admin = getAdminByUsername(adminData.username);

  if (!admin) {
    console.log('No admin');

    return NextResponse.json(
      { message: 'There is no admin with that username' },
      { status: 400 }
    );
  }

  const isPasswordValid = bcrypt.compareSync(
    adminData.password,
    admin.password
  );

  if (!isPasswordValid) {
    return NextResponse.json(
      { message: 'Incorrect password' },
      { status: 400 }
    );
  }

  const token = jwt.sign({ username: admin.username }, secretKey!, {
    expiresIn: '1h',
  });

  return NextResponse.json({ token });
}
