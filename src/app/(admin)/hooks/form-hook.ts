import { InputEventType } from '@/app/(shared)/utils/types';
import { features } from 'process';
import { useCallback, useMemo, useState } from 'react';
import {
  dataInitialStateFunc,
  errorsInitialStateFunc,
  touchedInitialStateFunc,
} from './initialStates';

export function useAdminForms() {
  const dataInitialState = useMemo(dataInitialStateFunc, []);

  const touchedInitialState = useMemo(touchedInitialStateFunc, []);

  const errorsInitialState = useMemo(errorsInitialStateFunc, []);

  const [formData, setFormData] = useState(dataInitialState);

  const [errors, setErrors] = useState(errorsInitialState);

  const [isTouched, setIsTouched] = useState(touchedInitialState);

  const handleInputChange = useCallback(
    (field: keyof typeof formData, validationFn?: (value: string) => string) =>
      (event: InputEventType) => {
        const value = event.target.value;

        setFormData((prev) => ({ ...prev, [field]: value }));
        setIsTouched((prev) => ({ ...prev, [field]: true }));

        if (validationFn) {
          const error = validationFn(value);
          setErrors((prev) => ({ ...prev, [field]: error }));
        }
      },
    []
  );

  const reset = useCallback(() => {
    setFormData(dataInitialState);
    setErrors(errorsInitialState);
    setIsTouched(touchedInitialState);
  }, [dataInitialState, errorsInitialState, touchedInitialState]);

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

  const handleInTheBox = useCallback(handleInputChange('inTheBox'), [
    handleInputChange,
  ]);

  const handleFeatures = useCallback(handleInputChange('features'), [
    handleInputChange,
  ]);

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
    handleFeatures,
    handleInTheBox,
    reset,
  };
}
