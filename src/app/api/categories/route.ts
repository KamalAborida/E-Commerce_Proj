'use server';

import { addCategory, deleteCategory } from '@/app/server/services/category';
import { CategoryType } from '@/app/shared/utils/types';
import sanitize from 'sanitize-html';
import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { getTokenVerificationResult } from '../utils/tokens';

export interface Admin {
  username: string;
  password: string;
}

export async function POST(req: Request) {
  const tokenVerificationResult = getTokenVerificationResult(req);

  if (!tokenVerificationResult.success) {
    return tokenVerificationResult.nextResponse!;
  }

  const categoryData: CategoryType = await req.json();

  if (!categoryData) {
    return NextResponse.json(
      { message: 'Please complete the form' },
      { status: 400 }
    );
  }

  const cleanCategoryData: CategoryType = {
    ...categoryData,
    name: sanitize(String(categoryData.name)),
    previewImage: sanitize(String(categoryData.previewImage)),
  };

  try {
    await addCategory(cleanCategoryData.name, cleanCategoryData.previewImage);

    revalidatePath('admin');

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: 'Failed to add category' },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  const tokenVerificationResult = getTokenVerificationResult(req);

  if (!tokenVerificationResult.success) {
    return tokenVerificationResult.nextResponse!;
  }

  const { categoryId } = await req.json();

  if (!categoryId) {
    return NextResponse.json(
      { message: 'Category ID is required' },
      { status: 400 }
    );
  }

  try {
    await deleteCategory(categoryId);

    revalidatePath('admin');

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
