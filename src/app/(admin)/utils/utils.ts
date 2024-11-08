export const getImageType = (image: File) => {
  return image.type.split('/')[1];
};

export const fetchRoute = async (
  bodyData: object,
  method: string,
  route: string,
  localStorageToken: string
) => {
  const response = await fetch(`http://localhost:3000/api/${route}`, {
    method: method.toUpperCase(),
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorageToken}`,
    },
    body: JSON.stringify(bodyData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to add');
  }

  const data = await response.json();
  return { ...data, isSubmitted: { value: true } };
};
