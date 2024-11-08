'use server';

import { S3 } from '@aws-sdk/client-s3';
import { getCategory } from './services/category';
import { getProduct } from './services/product';

const s3 = new S3({
  region: 'eu-north-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
});

export const getImageExtension = async (image: File) => {
  const extension = (await image.name.split('.').pop()) || 'png';
  return extension;
};

export const getS3ObjectKey = async (image: File, objectName: string) => {
  const extension = await getImageExtension(image);
  const fileName = `${objectName}.${extension}`;
  return fileName;
};

export const uploadToS3 = async (image: File, name: string) => {
  // console.log('uploadToS3: ', image, name);

  const fileName = await getS3ObjectKey(image, name);

  const bufferedImage = await image.arrayBuffer();

  console.log(fileName);

  try {
    await s3.putObject({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: fileName.toLowerCase(),
      Body: Buffer.from(bufferedImage),
      ContentType: image.type,
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(`Failed to upload image: ${err}`);
    }
  }
};

export const deleteCategoryImageFromS3 = async (categoryId: number) => {
  const category = await getCategory(categoryId);

  if (!category) {
    throw new Error('No category found');
  }

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: category.previewImage,
  };

  s3.deleteObject(params, async (err: unknown) => {
    if (err) {
      throw new Error('Failed to delete image');
    }
  });
};

export const deleteProductImagesFromS3 = async (productId: number) => {
  const product = await getProduct(productId);

  if (!product) {
    throw new Error('No product found');
  }

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: product.previewImage,
  };

  s3.deleteObject(params, async (err: unknown) => {
    if (err) {
      throw new Error('Failed to delete image');
    }
  });
};
