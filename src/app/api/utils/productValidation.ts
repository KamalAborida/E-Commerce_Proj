import { ProductType, verificationResultType } from '@/app/shared/utils/types';
import { NextResponse } from 'next/server';

export const validateName = (
  productData: ProductType
): verificationResultType => {
  if (!productData.name) {
    return {
      nextResponse: NextResponse.json(
        { message: 'Please provide a name' },
        { status: 400 }
      ),
      success: false,
    };
  }
  return { nextResponse: undefined, success: true };
};

export const validatePrice = (
  productData: ProductType
): verificationResultType => {
  if (!productData.price || productData.price <= 0) {
    return {
      nextResponse: NextResponse.json(
        { message: 'Please provide a price bigger than 0' },
        { status: 400 }
      ),
      success: false,
    };
  }
  return { nextResponse: undefined, success: true };
};

export const validateDescription = (
  productData: ProductType
): verificationResultType => {
  if (!productData.description) {
    return {
      nextResponse: NextResponse.json(
        { message: 'Please provide a description' },
        { status: 400 }
      ),
      success: false,
    };
  }
  return { nextResponse: undefined, success: true };
};

export const validateInTheBoxAndFeatures = (
  productData: ProductType
): verificationResultType => {
  if (!productData.inTheBox || !productData.features) {
    return {
      nextResponse: NextResponse.json(
        { message: 'Please fill all the fields' },
        { status: 400 }
      ),
      success: false,
    };
  }
  return { nextResponse: undefined, success: true };
};

export const getProductDataValidationResult = (
  productData: ProductType
): verificationResultType => {
  const nameResult = validateName(productData);
  const descriptionResult = validateDescription(productData);
  const inTheBoxResult = validateInTheBoxAndFeatures(productData);
  const priceResult = validatePrice(productData);

  if (!nameResult.success) {
    return nameResult;
  }

  if (!descriptionResult.success) {
    return descriptionResult;
  }

  if (!inTheBoxResult.success) {
    return inTheBoxResult;
  }

  if (!priceResult.success) {
    return priceResult;
  }

  return { nextResponse: undefined, success: true };
};
