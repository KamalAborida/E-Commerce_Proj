import Mission from '../../(home)/components/Mission/Mission';
import Categories from '../../../shared/Categories/Categories';
import ImageCollague from '../components/ImageCollague/ImageCollague';
import ProductContent from '../components/ProductContent/ProductContent';
import ProductDiv from '../components/ProductDiv/ProductDiv';
import ProductPageBackground from '../components/ProductPageBackground/ProductPageBackground';
import RecommendedProducts from '../components/RecommendedProducts/RecommendedProducts';
import { getProduct, getProducts } from '@/app/server/services/product';
import { getCategories } from '@/app/server/services/category';

export default async function Product() {
  return (
    <main>
      <ProductPageBackground />
      <ProductDiv />
      <ProductContent />
      <ImageCollague />
      <RecommendedProducts />
      <Categories />
      <Mission />
    </main>
  );
}
