import { fetchRoute } from './utils';

export const deleteCategoryAction = async (
  currentState: any,
  formData: FormData
) => {
  const { categoryId } = {
    categoryId: formData.get('id'),
  };

  if (!categoryId) {
    return { message: 'No data provided' };
  }

  try {
    const response = await fetchRoute({ categoryId }, 'delete', 'categories');
    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: error.message };
    }
  }
};
