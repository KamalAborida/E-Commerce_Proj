// import { features } from "process";

import { getImageType } from './utils';

export const addProductAction = async (
  currentState: any,
  formData: FormData
) => {
  const name = formData.get('name') as string;
  const imagesName = name.split(' ').join('_');

  const images = {
    previewImage: formData.get('previewImage') as File,
    largeImage: formData.get('largeImage') as File,
    smallImage1: formData.get('smallImage1') as File,
    smallImage2: formData.get('smallImage2') as File,
  };

  const productData = {
    name,
    price: +formData.get('price')!,
    categoryId: +formData.get('categoryId')!,
    isNew: +formData.get('isNew')!,
    description: formData.get('description'),
    inTheBox: formData.get('inTheBox'),
    features: formData.get('features'),
    previewImage: `${imagesName}-preview.${getImageType(images.previewImage)}`,
    images: {
      smallImages: [
        `${imagesName}-image2.${getImageType(images.smallImage1)}`,
        `${imagesName}-image3.${getImageType(images.smallImage2)}`,
      ],
      largeImage: `${imagesName}-image1.${getImageType(images.largeImage)}`,
    },
  };

  // console.log(productData);

  // return { ...productData, isSubmitted: { value: true } };

  if (!productData) {
    return { message: 'No data provided' };
  }

  try {
    const response = await fetch('http://localhost:3000/api/products', {
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
    return { ...data, isSubmitted: { value: true } };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: error.message };
    }
  }
};
