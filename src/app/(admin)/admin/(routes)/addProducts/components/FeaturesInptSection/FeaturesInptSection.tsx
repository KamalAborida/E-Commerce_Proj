import ModifiableList from '@/app/(admin)/components/ModifiableList/ModifiableList';
import Input from '@/app/(shared)/Input/Input';

export default async function FeaturesInptSection() {
  return (
    <section className="addProductsForm__section addProductsForm__features">
      <Input
        name="features"
        label="Features"
        placeholder="Ex. fast, bluetooth"
        isTextArea={true}
      />
      <ModifiableList>
        <ModifiableList.Item text="Fast bka bla bla bal" />
      </ModifiableList>
    </section>
  );
}
