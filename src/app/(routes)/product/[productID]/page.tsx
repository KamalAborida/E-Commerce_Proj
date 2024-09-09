import Mission from '../../(home)/components/Mission/Mission';
import Categories from '../../components/Categories/Categories';
import ActionDiv from '../components/ActionDiv/ActionDiv';
import ImageCollague from '../components/ImageCollague/ImageCollague';
import ProductContent from '../components/ProductContent/ProductContent';
import ProductDiv from '../components/ProductDiv/ProductDiv';
import ProductPageBackground from '../components/ProductPageBackground/ProductPageBackground';
import RecommendedProducts from '../components/RecommendedProducts/RecommendedProducts';

export default function Product() {
  return (
    <main>
      <ProductPageBackground />
      <ActionDiv />
      <ProductDiv />
      <ProductContent />
      <ImageCollague />
      <RecommendedProducts />
      <Categories />
      <Mission />
    </main>
  );
}
