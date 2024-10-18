'use client';

import GeneralInptSection from '../GeneralInptSection/GeneralInptSection';
import ImagesInptSection from '../ImagesInptsSection/ImagesInptSection';
import InTheBoxInptSection from '../InTheBoxInptSection/InTheBoxInptSection';
import FeaturesInptSection from '../FeaturesInptSection/FeaturesInptSection';
import DescriptionInputSection from '../DescriptionInputSection/DescriptionInputSection';
import { useAdminForms } from '@/app/(admin)/hooks/form-hook';
import { useFormState } from 'react-dom';
import { addProductAction } from '@/app/(admin)/utils/addProduct';
import { useEffect } from 'react';
import ProductSubmitButton from '../SubmitButton/SubmitButton';

export default function AddProductsForm() {
  const {
    formData,
    handleProductName,
    handlePrice,
    handleIsNew,
    handleCategoryId,
    handleDescription,
    handleInTheBox,
    handleFeatures,
    handleCollagueLargeImg,
    handleCollagueSmall1Img,
    handleCollagueSmall2Img,
    handlePreviewImg,
    reset,
    isTouched,
    errors,
  } = useAdminForms();

  const [state, action] = useFormState(addProductAction, {});

  useEffect(() => {
    if (state.isSubmitted && state.isSubmitted.value) {
      reset();
    }
  }, [reset, state.isSubmitted]);

  return (
    <form className="addProductsForm" action={action}>
      <h1 className="addProductsForm__title">ADD PRODUCT</h1>
      {state && state.error && (
        <p className="addProductsForm__errorState p--error">{state.error}</p>
      )}
      <GeneralInptSection
        values={formData}
        handleCategoryId={handleCategoryId}
        handleIsNew={handleIsNew}
        handleName={handleProductName}
        handlePrice={handlePrice}
        errors={errors}
        isTouched={isTouched}
      />
      <ImagesInptSection
        handleCollagueLargeImg={handleCollagueLargeImg}
        handleCollagueSmall1Img={handleCollagueSmall1Img}
        handleCollagueSmall2Img={handleCollagueSmall2Img}
        handlePreviewImg={handlePreviewImg}
        values={formData}
        errors={errors}
        isTouched={isTouched}
      />
      <DescriptionInputSection
        value={formData.description}
        onChange={handleDescription}
        errors={errors.description}
        isTouched={isTouched.description}
      />
      <InTheBoxInptSection
        handleInTheBox={handleInTheBox}
        value={formData.inTheBox}
      />
      <FeaturesInptSection
        handleFeatures={handleFeatures}
        value={formData.features}
      />
      <ProductSubmitButton />
    </form>
  );
}
