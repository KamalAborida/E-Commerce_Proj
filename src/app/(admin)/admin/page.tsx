import Input from '@/app/(shared)/Input/Input';
import Toggler from '../components/Toggler/Toggler';
import ModifiableCategory from '../components/ModifiableCategory/ModifiableCategory';
import ModifiableList from '../components/ModifiableList/ModifiableList';
import ModifiableProduct from '../components/ModifiableProduct/ModifiableProduct';
import { getProduct } from '@/app/(server)/services/product';
import CategoriesForm from './(routes)/categories/components/CategoriesForm/CategoriesForm';
import CategoriesSection from './(routes)/categories/components/CategoriesSection/CategoriesSection';

export default async function AdminPage() {
  // const product = await getProduct(1);

  return (
    <main className="adminPage">
      <CategoriesForm />
      <br></br>
      <CategoriesSection />
    </main>
  );
}
