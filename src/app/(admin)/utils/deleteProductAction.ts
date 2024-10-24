import { fetchRoute } from './utils';

export const deleteProductAction = async (
  currentState: any,
  formData: FormData
) => {
  const { productId } = {
    productId: formData.get('id'),
  };

  if (!productId) {
    return { message: 'No data provided' };
  }

  try {
    const response = await fetchRoute({ productId }, 'delete', 'products');
    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: error.message };
    }
  }
};
