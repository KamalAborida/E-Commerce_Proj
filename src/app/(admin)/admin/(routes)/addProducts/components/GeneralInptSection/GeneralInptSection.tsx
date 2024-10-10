import Toggler from '@/app/(admin)/components/Toggler/Toggler';
import Input from '@/app/(shared)/Input/Input';

export default async function GeneralInptSection() {
  return (
    <section className="addProductsForm__section addProductsForm__general">
      <Input name="name" label="Product Name" placeholder="Ex. Speakers" />
      <Input name="price" label="Price" placeholder="Ex. 500" />
      <Toggler label="New Product" />
    </section>
  );
}
