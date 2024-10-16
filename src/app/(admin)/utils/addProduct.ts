export const addProductAction = async (
  currentState: any,
  formData: FormData
) => {
  const productData = {
    name: formData.get('name'),
    price: +formData.get('price')!,
    categoryId: +formData.get('categoryId')!,
    isNew: +formData.get('isNew')!,
    description: formData.get('description'),
  };

  console.log(productData);

  return productData;

  if (!productData) {
    return { message: 'No data provided' };
  }

  try {
    const response = await fetch('http://localhost:3000/api/categories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to add a new category');
    }

    const data = await response.json();
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: error.message };
    }
  }
};
