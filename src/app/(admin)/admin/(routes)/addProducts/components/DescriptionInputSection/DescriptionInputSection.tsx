import Input from '@/app/(shared)/Input/Input';

export default async function DescriptionInputSection() {
  return (
    <section className="addProductsForm__section addProductsForm__description">
      <Input
        name="description"
        label="Description"
        placeholder="Write product description here"
        isTextArea={true}
      />
    </section>
  );
}
