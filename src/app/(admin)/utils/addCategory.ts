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
    const response = await fetch('http://localhost:3000/api/categories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ name, previewImage }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to add a new category');
    }

    const data = await response.json();
    return { ...data, isSubmitted: { value: true } };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: error.message };
    }
  }
};
