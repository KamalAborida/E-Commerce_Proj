// import { features } from "process";

import { fetchRoute, getImageType } from './utils';

export const addProductAction = async (
  currentState: any,
  formData: FormData
) => {
  const token = formData.get('localStorageToken') as string;

  const name = formData.get('name') as string;
  const imagesName = name ? name.split(' ').join('_') : '';

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
    // previewImage: `${imagesName}-preview.${getImageType(images.previewImage)}`,
    previewImage: `${imagesName}-preview.${getImageType(images.previewImage)}`,
    images: {
      smallImages: [
        `${imagesName}-image2.${getImageType(images.smallImage1)}`,
        `${imagesName}-image3.${getImageType(images.smallImage2)}`,
      ],
      largeImage: `${imagesName}-image1.${getImageType(images.largeImage)}`,
    },
  };

  if (!productData.name && !productData.price && !productData.description) {
    return { message: 'No data provided' };
  }

  try {
    const response = await fetchRoute(productData, 'post', 'products', token);
    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: error.message };
    }
  }
};
