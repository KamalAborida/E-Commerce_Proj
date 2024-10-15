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
    const response = await fetch('http://localhost:3000/api/categories', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ categoryId }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to delete category');
    }

    const data = await response.json();
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: error.message };
    }
  }
};
