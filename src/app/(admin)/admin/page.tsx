import Input from '@/app/(shared)/Input/Input';
import Toggler from '../components/Toggler/Toggler';
import ModifiableCategory from '../components/ModifiableCategory/ModifiableCategory';
import ModifiableList from '../components/ModifiableList/ModifiableList';
import ModifiableProduct from '../components/ModifiableProduct/ModifiableProduct';
import { getProduct } from '@/app/(server)/services/product';

export default async function AdminPage() {
  const product = await getProduct(1);
  return (
    <main className="adminPage">
      <Input
        label="Area"
        placeholder="Type here..."
        name="area"
        isTextArea={true}
      />
      <br></br>
      <Input label="AREA" placeholder="Type here..." name="area" />
      <br></br>
      <Input
        label="AREA"
        placeholder="Type here..."
        name="area"
        isFileInput={true}
        isInfoTip={true}
        infoTip={'Upload an image here'}
      />
      <br></br>
      <Toggler label="New Product ?" />
      <br></br>
      <br></br>
      <br></br>
      <ModifiableCategory name="Speakers" href="category/speakers" />
      <br></br>
      <br></br>
      <ModifiableList>
        <ModifiableList.Item text="Cable x1" />
        <ModifiableList.Item text="USB x2" />
        <ModifiableList.Item text="Manual x1" />
      </ModifiableList>
      <br></br>
      {product && <ModifiableProduct product={product} />}
    </main>
  );
}
