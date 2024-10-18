'use server';

import { getAdminByUsername } from '@/app/(server)/services/admin';
import { addCategory, deleteCategory } from '@/app/(server)/services/category';
import { CategoryType, ProductType } from '@/app/(shared)/utils/types';
import bcrypt from 'bcrypt';
import DOMPurify from 'dompurify';
import sanitize from 'sanitize-html';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { addProduct, deleteProduct } from '@/app/(server)/services/product';

export interface Admin {
  username: string;
  password: string;
}

const secretKey = process.env.SECRET_KEY;

export async function POST(req: Request) {
  const authHeader = req.headers.get('authorization');
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return NextResponse.json({ message: 'Access denied' }, { status: 400 });
  }

  jwt.verify(token, secretKey!, (err) => {
    if (err) {
      if (err && err.name === 'TokenExpiredError') {
        return NextResponse.json({ message: 'Token expired' });
      }

      return NextResponse.json({ message: 'Invalid token' }, { status: 400 });
    }
  });

  const productData: ProductType = await req.json();

  if (!productData.name) {
    return NextResponse.json(
      { message: 'Please provide a name' },
      { status: 400 }
    );
  }

  if (!productData.price) {
    return NextResponse.json(
      { message: 'Please provide a price bigger than 0' },
      { status: 400 }
    );
  }

  if (!productData.description) {
    return NextResponse.json(
      { message: 'Please provide a description' },
      { status: 400 }
    );
  }

  if (!productData.inTheBox || !productData.features) {
    return NextResponse.json(
      { message: 'Please fill all the fields' },
      { status: 400 }
    );
  }

  const cleanProductData: ProductType = {
    ...productData,
    name: sanitize(String(productData.name)),
    price: +sanitize(String(productData.price)),
    description: sanitize(String(productData.description)),
    features: sanitize(String(productData.features)),
    inTheBox: sanitize(String(productData.inTheBox)),
  };

  // console.log(cleanProductData);

  try {
    await addProduct(cleanProductData);

    revalidatePath('/admin');

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: 'Failed to add product' },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  const authHeader = req.headers.get('authorization');
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return NextResponse.json({ message: 'Access denied' }, { status: 400 });
  }

  jwt.verify(token, secretKey!, (err) => {
    if (err) {
      if (err && err.name === 'TokenExpiredError') {
        return NextResponse.json({ message: 'Token expired' });
      }

      return NextResponse.json({ message: 'Invalid token' }, { status: 400 });
    }
  });

  const { productId } = await req.json();

  if (!productId) {
    return NextResponse.json(
      { message: 'Category ID is required' },
      { status: 400 }
    );
  }

  try {
    await deleteProduct(productId);

    revalidatePath('/admin');

    return NextResponse.json(
      { message: 'Category deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting category:', error);
    return NextResponse.json(
      { message: 'Failed to delete category' },
      { status: 500 }
    );
  }
}
