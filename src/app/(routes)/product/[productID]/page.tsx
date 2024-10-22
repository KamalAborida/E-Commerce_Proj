import Mission from '../../(home)/components/Mission/Mission';
import Categories from '../../../shared/Categories/Categories';
import ImageCollague from '../components/ImageCollague/ImageCollague';
import ProductContent from '../components/ProductContent/ProductContent';
import ProductDiv from '../components/ProductDiv/ProductDiv';
import ProductPageBackground from '../components/ProductPageBackground/ProductPageBackground';
import RecommendedProducts from '../components/RecommendedProducts/RecommendedProducts';

export default function ProductPage() {
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
