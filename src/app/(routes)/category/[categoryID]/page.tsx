import { getProducts } from '@/app/(server)/services/product';
import Mission from '../../(home)/components/Mission/Mission';
import Categories from '../../../(shared)/Categories/Categories';
import CategoryBackground from '../components/CategoryBackground/CategoryBackground';
import Products from '../components/Products/Products';
import { getCategories } from '@/app/(server)/services/category';

export default async function CategoryPage() {
  return (
    <main>
      <CategoryBackground />
      <Products />
      <Categories />
      <Mission />
    </main>
  );
}
