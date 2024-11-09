'use server';

import { getS3ObjectKey, uploadToS3 } from '@/app/server/awsUtilities';
import { fetchRoute } from './utils';

export const addCategoryAction = async (
  currentState: any,
  formData: FormData
) => {
  const token = formData.get('localStorageToken') as string;

  const image = formData.get('previewImage') as File;
  const imageName = formData.get('name') as string;

  if (!imageName || !image) {
    return { error: 'Please Complete the category data' };
  }

  const s3Key = await getS3ObjectKey(image, imageName.toLowerCase());

  const { name, previewImage } = {
    name: formData.get('name'),
    previewImage: `${s3Key}`,
  };

  try {
    await uploadToS3(image, imageName);

    const response = await fetchRoute(
      { name, previewImage },
      'post',
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
