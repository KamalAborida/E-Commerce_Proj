'use client';

import ModifiableList from '@/app/(admin)/components/ModifiableList/ModifiableList';
import Toggler from '@/app/(admin)/components/Toggler/Toggler';
import Input from '@/app/(shared)/Input/Input';
import GeneralInptSection from '../GeneralInptSection/GeneralInptSection';
import ImagesInptSection from '../ImagesInptsSection/ImagesInptSection';
import InTheBoxInptSection from '../InTheBoxInptSection/InTheBoxInptSection';
import FeaturesInptSection from '../FeaturesInptSection/FeaturesInptSection';
import DescriptionInputSection from '../DescriptionInputSection/DescriptionInputSection';
import { useAdminForms } from '@/app/(admin)/hooks/form-hook';
import { useFormState } from 'react-dom';
import { addProductAction } from '@/app/(admin)/utils/addProduct';

export default function AddProductsForm() {
  const {
    formData,
    handleProductName,
    handlePrice,
    handleIsNew,
    handleCategoryId,
    handleDescription,
    isTouched,
    errors,
  } = useAdminForms();

  const [state, action] = useFormState(addProductAction, {});

  console.log(state);

  return (
    <form className="addProductsForm" action={action}>
      <h1 className="addProductsForm__title">ADD PRODUCT</h1>
      <GeneralInptSection
        values={formData}
        handleCategoryId={handleCategoryId}
        handleIsNew={handleIsNew}
        handleName={handleProductName}
        handlePrice={handlePrice}
        errors={errors}
        isTouched={isTouched}
      />
      <ImagesInptSection />
      <DescriptionInputSection
        value={formData.description}
        onChange={handleDescription}
        errors={errors.description}
        isTouched={isTouched.description}
      />
      <InTheBoxInptSection />
      <FeaturesInptSection />
      <button className="btn btn-orange addProductsForm__btn">
        ADD PRODUCT +
      </button>
    </form>
  );
}
