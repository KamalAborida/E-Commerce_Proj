'use server';

import { ProductType } from '@/app/shared/utils/types';
import sanitize from 'sanitize-html';
import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import {
  addProduct,
  deleteProduct,
  getProducts,
} from '@/app/server/services/product';
import { getTokenVerificationResult } from '../utils/tokens';
import { getProductDataValidationResult } from '../utils/productValidation';

export interface Admin {
  username: string;
  password: string;
}

export async function POST(req: Request) {
  const tokenVerificationResult = getTokenVerificationResult(req);

  if (!tokenVerificationResult.success) {
    return tokenVerificationResult.nextResponse as NextResponse;
  }

  const productData: ProductType = await req.json();

  const productValidationResult = getProductDataValidationResult(productData);

  if (!productValidationResult.success) {
    return productValidationResult.nextResponse as NextResponse;
  }

  const cleanProductData: ProductType = {
    ...productData,
    name: sanitize(String(productData.name)),
    price: +sanitize(String(productData.price)),
    description: sanitize(String(productData.description)),
    features: sanitize(String(productData.features)),
    inTheBox: sanitize(String(productData.inTheBox)),
  };

  try {
    await addProduct(cleanProductData);

    revalidatePath('admin', 'layout');
    revalidatePath('/', 'layout');

    const newProductslist = await getProducts();

    return NextResponse.json(
      { message: 'Success', data: [...newProductslist] },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: 'Failed to add product' },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  const tokenVerificationResult = getTokenVerificationResult(req);

  if (!tokenVerificationResult.success) {
    return tokenVerificationResult.nextResponse as NextResponse;
  }

  const { productId } = await req.json();

  if (!productId) {
    return NextResponse.json(
      { message: 'Category ID is required' },
      { status: 400 }
    );
  }

  try {
    await deleteProduct(productId);

    revalidatePath('admin', 'layout');
    revalidatePath('/', 'layout');

    const newProductslist = await getProducts();

    return NextResponse.json(
      { message: 'Category deleted successfully', data: [...newProductslist] },
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
