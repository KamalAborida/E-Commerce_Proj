'use client';

import Toggler from '@/app/(admin)/components/Toggler/Toggler';
import Input from '@/app/(shared)/Input/Input';
import { InputEventType } from '@/app/(shared)/utils/types';
import { useAppSelector } from '@/lib/store';

interface GeneralInptSectionProps {
  values: { [key: string]: any };
  isTouched: { [key: string]: boolean };
  errors: { [key: string]: string };
  handleName: (event: InputEventType) => void;
  handlePrice: (event: InputEventType) => void;
  handleCategoryId: (event: InputEventType) => void;
  handleIsNew: (event: InputEventType) => void;
}

export default function GeneralInptSection({
  values,
  isTouched,
  errors,
  handleCategoryId,
  handleIsNew,
  handleName,
  handlePrice,
}: GeneralInptSectionProps) {
  const categories = useAppSelector((state) => state.data.categories);

  return (
    <section className="addProductsForm__section addProductsForm__general">
      <Input
        name="name"
        label="Product Name"
        placeholder="Ex. Speakers"
        value={values.productName}
        onChange={handleName}
      />
      <Input
        name="price"
        label="Price"
        placeholder="Ex. 500"
        value={values.price}
        onChange={handlePrice}
      />
      <select
        name="categoryId"
        className="inputDiv inputDiv--dropdown"
        value={values.categoryId}
        onChange={handleCategoryId}
      >
        {categories.length > 0 &&
          categories.map((category) => {
            return (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            );
          })}
      </select>
      <Toggler
        label="New Product"
        value={values.isNew}
        onChange={handleIsNew}
      />
    </section>
  );
}
