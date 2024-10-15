import { InputEventType } from '@/app/(shared)/utils/types';
import { useCallback, useState } from 'react';

export function useAdminForms() {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [isNew, setIsNew] = useState('');
  const [previewImg, setPreviewImg] = useState('');
  const [collagueLargeImg, setCollagueLargeImg] = useState('');
  const [collagueSmall1Img, setCollagueSmall1Img] = useState('');
  const [collagueSmall2Img, setCollagueSmall2Img] = useState('');
  const [description, setDescription] = useState('');
  const [feature, setFeature] = useState('');
  const [inTheBox, setInTheBox] = useState('');

  const [errors, setErrors] = useState({
    productName: '',
    price: '',
    isNew: '',
    description: '',
    feature: '',
    inTheBox: '',
  });

  // Handlers for each state with validation
  const handleProductName = (event: InputEventType) => {
    const value = event.target.value;
    if (value.trim() === '') {
      setErrors((prev) => ({
        ...prev,
        productName: 'Product name cannot be empty',
      }));
    } else {
      setErrors((prev) => ({ ...prev, productName: '' }));
      setProductName(value);
    }
  };

  const handlePrice = (event: InputEventType) => {
    const value = event.target.value;
    const priceValue = parseFloat(value);
    if (isNaN(priceValue) || priceValue <= 0) {
      setErrors((prev) => ({
        ...prev,
        price: 'Price must be a positive number',
      }));
    } else {
      setErrors((prev) => ({ ...prev, price: '' }));
      setPrice(value);
    }
  };

  const handleIsNew = (event: InputEventType) => {
    const value = event.target.value;
    if (![0, 1].includes(Number(value))) {
      setErrors((prev) => ({ ...prev, isNew: 'isNew must be 0 or 1' }));
    } else {
      setErrors((prev) => ({ ...prev, isNew: '' }));
      setIsNew(value);
    }
  };

  const handlePreviewImg = (event: InputEventType) => {
    setPreviewImg(event.target.value);
  };

  const handleCollagueLargeImg = (event: InputEventType) => {
    setCollagueLargeImg(event.target.value);
  };

  const handleCollagueSmall1Img = (event: InputEventType) => {
    setCollagueSmall1Img(event.target.value);
  };

  const handleCollagueSmall2Img = (event: InputEventType) => {
    setCollagueSmall2Img(event.target.value);
  };

  const handleDescription = (event: InputEventType) => {
    const value = event.target.value;
    if (value.trim() === '') {
      setErrors((prev) => ({
        ...prev,
        description: 'Description cannot be empty',
      }));
    } else {
      setErrors((prev) => ({ ...prev, description: '' }));
      setDescription(value);
    }
  };

  const handleFeature = (event: InputEventType) => {
    const value = event.target.value;
    if (value.trim() === '') {
      setErrors((prev) => ({ ...prev, feature: 'Feature cannot be empty' }));
    } else {
      setErrors((prev) => ({ ...prev, feature: '' }));
      setFeature(value);
    }
  };

  const handleInTheBox = (event: InputEventType) => {
    const value = event.target.value;
    if (value.trim() === '') {
      setErrors((prev) => ({
        ...prev,
        inTheBox: 'In the box cannot be empty',
      }));
    } else {
      setErrors((prev) => ({ ...prev, inTheBox: '' }));
      setInTheBox(value);
    }
  };

  return {
    // Values
    productName,
    price,
    isNew,
    previewImg,
    collagueLargeImg,
    collagueSmall1Img,
    collagueSmall2Img,
    description,
    feature,
    inTheBox,

    // Validation errors
    errors,

    // Handlers
    handleProductName,
    handlePrice,
    handleIsNew,
    handlePreviewImg,
    handleCollagueLargeImg,
    handleCollagueSmall1Img,
    handleCollagueSmall2Img,
    handleDescription,
    handleFeature,
    handleInTheBox,
  };
}
