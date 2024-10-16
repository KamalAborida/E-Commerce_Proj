import ModifiableList from '@/app/(admin)/components/ModifiableList/ModifiableList';
import Input from '@/app/(shared)/Input/Input';

export default function InTheBoxInptSection() {
  return (
    <section className="addProductsForm__section addProductsForm__inTheBox">
      <Input
        name="inTheBox"
        label="What is in the product's box ?"
        placeholder="Ex. cable, manual, etc..."
      />
      <ModifiableList>
        <ModifiableList.Item text="Cable x1" />
      </ModifiableList>
    </section>
  );
}
