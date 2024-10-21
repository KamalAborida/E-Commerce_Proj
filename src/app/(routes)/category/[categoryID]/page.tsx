import Mission from '../../(home)/components/Mission/Mission';
import Categories from '../../../shared/Categories/Categories';
import CategoryBackground from '../components/CategoryBackground/CategoryBackground';
import Products from '../components/Products/Products';

export default function CategoryPage() {
  return (
    <main>
      <CategoryBackground />
      <Products />
      <Categories />
      <Mission />
    </main>
  );
}
