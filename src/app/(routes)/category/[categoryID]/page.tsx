import { getProducts } from '@/app/(server)/services/product';
import Mission from '../../(home)/components/Mission/Mission';
import Categories from '../../components/Categories/Categories';
import CategoryBackground from '../components/CategoryBackground/CategoryBackground';
import Products from '../components/Products/Products';
import { getCategories } from '@/app/(server)/services/category';
import ActionDiv from '../../components/ActionDiv/ActionDiv';

export default async function Category() {
  const products = await getProducts();
  const categories = await getCategories();

  return (
    <main>
      <CategoryBackground categories={categories} />
      <Products products={products} />
      <Categories />
      <Mission />
    </main>
  );
}
