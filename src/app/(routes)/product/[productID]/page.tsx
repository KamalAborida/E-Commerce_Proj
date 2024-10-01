import Mission from '../../(home)/components/Mission/Mission';
import Categories from '../../components/Categories/Categories';
import ImageCollague from '../components/ImageCollague/ImageCollague';
import ProductContent from '../components/ProductContent/ProductContent';
import ProductDiv from '../components/ProductDiv/ProductDiv';
import ProductPageBackground from '../components/ProductPageBackground/ProductPageBackground';
import RecommendedProducts from '../components/RecommendedProducts/RecommendedProducts';
import { getProduct, getProducts } from '@/app/(server)/services/product';
import { getCategories } from '@/app/(server)/services/category';

interface ProductPageProps {
  params: { productID: string };
}

export default async function Product({ params }: ProductPageProps) {
  const productID = +params.productID;
  const product = await getProduct(productID);

  if (!product) {
    return <p>No product found</p>;
  }

  return (
    <main>
      <ProductPageBackground />
      <ProductDiv product={product} />
      <ProductContent features={product.features} inTheBox={product.inTheBox} />
      <ImageCollague images={product.images} />
      <RecommendedProducts />
      <Categories />
      <Mission />
    </main>
  );
}
