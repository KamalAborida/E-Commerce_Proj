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
    const response = await fetch('http://localhost:3000/api/products', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ productId }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to delete product');
    }

    const data = await response.json();
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: error.message };
    }
  }
};
