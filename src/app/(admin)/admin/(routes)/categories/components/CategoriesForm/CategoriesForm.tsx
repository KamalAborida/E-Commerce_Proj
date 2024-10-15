'use client';

import { addCategoryAction } from '@/app/(admin)/utils/addCategory';
import Input from '@/app/(shared)/Input/Input';
import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';

export default function CategoriesForm() {
  const [name, setName] = useState('');
  const [previewImage, setPreviewImage] = useState('');
  const [formResponse, setFormResponse] = useState('');
  const [state, action] = useFormState(addCategoryAction, null);

  const handleName = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setName(event.target.value);
  };

  const handlePreviewImage = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPreviewImage(event.target.value);
  };

  useEffect(() => {
    if (state) {
      if (state.error) {
        setFormResponse(state.error);
      } else {
        setFormResponse(state.message);
      }
    }
  }, [state]);

  return (
    <form className="categoriesForm" action={action}>
      {state && <p>{formResponse}</p>}
      <h1 className="categoriesForm__title">CATEGORY</h1>
      <section className="categoriesForm__inptsSection">
        <Input
          label="Category Name"
          placeholder="Speakers"
          name="name"
          onChange={handleName}
          value={name}
        />
        <Input
          label="Preview Image"
          placeholder=""
          name="previewImage"
          isFileInput={true}
          isInfoTip={true}
          infoTip="This is the image that will be shown when previewing the category"
          onChange={handlePreviewImage}
          value={previewImage}
        />
      </section>
      <button className="btn btn-orange categoriesForm__btn">
        CREATE CATEGORY
      </button>
    </form>
  );
}
