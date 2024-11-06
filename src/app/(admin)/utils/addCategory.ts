import { getS3ObjectKey, uploadToS3 } from '@/app/server/awsUtilities';
import { fetchRoute } from './utils';

export const addCategoryAction = async (
  currentState: any,
  formData: FormData
) => {
  const image = formData.get('previewImage') as File;
  const imageName = formData.get('name') as string;

  console.log(image, imageName);

  const s3Key = await getS3ObjectKey(image, imageName.toLowerCase());

  console.log(s3Key);

  const { name, previewImage } = {
    name: formData.get('name'),
    previewImage: `${s3Key}`,
  };

  if (!name || !previewImage) {
    return { error: 'No data provided' };
  }

  try {
    await uploadToS3(image, imageName);

    const response = await fetchRoute(
      { name, previewImage },
      'post',
      'categories'
    );

    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: error.message };
    }
  }
};
