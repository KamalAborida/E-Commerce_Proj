'use client';

import { useAdminForms } from '@/app/(admin)/hooks/form-hook';
import { addCategoryAction } from '@/app/(admin)/utils/addCategory';
import Input from '@/app/shared/Input/Input';
import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import SubmitButton from '../SubmitButton/SubmitButton';
import CategorySubmitButton from '../SubmitButton/SubmitButton';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/lib/store';
import { dataActions } from '@/lib/features/cart/data-slice';

export default function CategoriesForm() {
  const {
    formData,
    handleCategoryName,
    handleCategoryPreviewImg,
    reset,
    errors,
    isTouched,
  } = useAdminForms();

  const [state, action] = useFormState(addCategoryAction, {});

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (state.isSubmitted && state.isSubmitted.value) {
      dispatch(dataActions.setCategories([...state.data]));
      reset();
    }
  }, [dispatch, reset, state.data, state.isSubmitted]);

  return (
    <form className="categoriesForm" action={action}>
      <h1 className="categoriesForm__title">CATEGORY</h1>
      {state && state.error && <p className="p--error">{state.error}</p>}
      {isTouched.categoryName && errors.categoryName && (
        <p className="p--error">{errors.categoryName}</p>
      )}
      <section className="categoriesForm__inptsSection">
        <Input
          label="Category Name"
          placeholder="Speakers"
          name="name"
          onChange={handleCategoryName}
          value={formData.categoryName}
        />
        <Input
          label="Preview Image"
          placeholder=""
          name="previewImage"
          isFileInput={true}
          isInfoTip={true}
          infoTip="This is the image that will be shown when previewing the category"
          onChange={handleCategoryPreviewImg}
          value={formData.categoryPreviewImg}
        />
      </section>
      <CategorySubmitButton />
    </form>
  );
}
