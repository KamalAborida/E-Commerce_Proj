import { InputEventType } from '@/app/(shared)/utils/types';
import { useState } from 'react';

export function useAdminForms() {
  const [formData, setFormData] = useState({
    productName: '',
    price: '',
    isNew: '',
    categoryId: '',
    previewImg: '',
    collagueLargeImg: '',
    collagueSmall1Img: '',
    collagueSmall2Img: '',
    description: '',
    feature: '',
    inTheBox: '',
  });

  const [errors, setErrors] = useState({
    productName: '',
    price: '',
    isNew: '',
    categoryId: '',
    description: '',
    feature: '',
    inTheBox: '',
  });

  const [isTouched, setIsTouched] = useState({
    productName: false,
    price: false,
    isNew: false,
    categoryId: false,
    description: false,
    feature: false,
    inTheBox: false,
  });

  const handleInputChange =
    (field: keyof typeof formData, validationFn?: (value: string) => string) =>
    (event: InputEventType) => {
      const value = event.target.value;

      setFormData((prev) => ({ ...prev, [field]: value }));
      setIsTouched((prev) => ({ ...prev, [field]: true }));

      if (validationFn) {
        const error = validationFn(value);
        setErrors((prev) => ({ ...prev, [field]: error }));
      }
    };

  const validateNotEmpty = (value: string) =>
    value.trim() === '' ? 'Field cannot be empty' : '';
  const validatePrice = (value: string) =>
    isNaN(parseFloat(value)) || parseFloat(value) <= 0
      ? 'Price must be a positive number'
      : '';
  const validateIsNew = (value: string) =>
    ![0, 1].includes(Number(value)) ? 'isNew must be 0 or 1' : '';
  const validateCategoryId = (value: string) =>
    isNaN(Number(value)) || Number(value) <= 0
      ? 'Category ID must be a positive number'
      : '';

  return {
    formData,
    errors,
    isTouched,
    handleProductName: handleInputChange('productName', validateNotEmpty),
    handlePrice: handleInputChange('price', validatePrice),
    handleIsNew: handleInputChange('isNew'),
    handleCategoryId: handleInputChange('categoryId', validateCategoryId),
    handlePreviewImg: handleInputChange('previewImg'),
    handleCollagueLargeImg: handleInputChange('collagueLargeImg'),
    handleCollagueSmall1Img: handleInputChange('collagueSmall1Img'),
    handleCollagueSmall2Img: handleInputChange('collagueSmall2Img'),
    handleDescription: handleInputChange('description', validateNotEmpty),
    handleFeature: handleInputChange('feature', validateNotEmpty),
    handleInTheBox: handleInputChange('inTheBox', validateNotEmpty),
  };
}
