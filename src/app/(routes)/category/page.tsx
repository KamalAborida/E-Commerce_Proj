import Mission from '../(home)/components/Mission/Mission';
import Categories from '../components/Categories/Categories';
import CategoryBackground from './components/CategoryBackground/CategoryBackground';
import Product from './components/Product/Product';
import Products from './components/Products/Products';

export default function Category() {
  return (
    <main>
      <CategoryBackground />
      <Products />
      <Categories />
      <Mission />
    </main>
  );
}
