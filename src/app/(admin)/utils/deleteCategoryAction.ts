'use server';

import { deleteCategoryImageFromS3 } from '@/app/server/awsUtilities';
import { fetchRoute } from './utils';

export const deleteCategoryAction = async (
  currentState: any,
  formData: FormData
) => {
  const token = formData.get('localStorageToken') as string;

  const { categoryId } = {
    categoryId: formData.get('id'),
  };

  if (!categoryId) {
    return { message: 'No data provided' };
  }

  try {
    await deleteCategoryImageFromS3(+categoryId);
    const response = await fetchRoute(
      { categoryId },
      'delete',
      'categories',
      token
    );
    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: error.message };
    }
  }
};
