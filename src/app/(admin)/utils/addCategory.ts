import { fetchRoute } from './utils';

export const addCategoryAction = async (
  currentState: any,
  formData: FormData
) => {
  const image = formData.get('previewImage') as File;
  const prevImageName = formData.get('name') as string;

  const { name, previewImage } = {
    name: formData.get('name'),
    previewImage: `${prevImageName.toLowerCase()}-noBackground.svg`,
  };

  if (!name || !previewImage) {
    return { error: 'No data provided' };
  }

  try {
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
