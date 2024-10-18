import Input from '@/app/(shared)/Input/Input';
import { InputEventType } from '@/app/(shared)/utils/types';

interface DescriptionInputSectionProps {
  value: string;
  isTouched: boolean;
  errors: string;
  onChange: (event: InputEventType) => void;
}

export default function DescriptionInputSection({
  value,
  isTouched,
  errors,
  onChange,
}: DescriptionInputSectionProps) {
  return (
    <section className="addProductsForm__section addProductsForm__description">
      {isTouched && errors && <p className="p--error">{errors}</p>}
      <Input
        name="description"
        label="Description"
        placeholder="Write product description here"
        isTextArea={true}
        value={value}
        onChange={onChange}
      />
    </section>
  );
}
