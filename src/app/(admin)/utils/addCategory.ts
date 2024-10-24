import { fetchRoute } from './utils';

export const addCategoryAction = async (
  currentState: any,
  formData: FormData
) => {
  const image = formData.get('previewImage');

  const { name, previewImage } = {
    name: formData.get('name'),
    previewImage: `${formData.get('name')}-noBackground.svg`,
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
