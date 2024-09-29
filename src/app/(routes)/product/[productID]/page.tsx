import Mission from '../../(home)/components/Mission/Mission';
import Categories from '../../components/Categories/Categories';
import ActionDiv from '../../components/ActionDiv/ActionDiv';
import ImageCollague from '../components/ImageCollague/ImageCollague';
import ProductContent from '../components/ProductContent/ProductContent';
import ProductDiv from '../components/ProductDiv/ProductDiv';
import ProductPageBackground from '../components/ProductPageBackground/ProductPageBackground';
import RecommendedProducts from '../components/RecommendedProducts/RecommendedProducts';
import { getProducts } from '@/app/(server)/services/product';
import { getCategories } from '@/app/(server)/services/category';

interface ProductPageProps {
  params: { productID: string }; // Access the dynamic route params
}

export default async function Product({ params }: ProductPageProps) {
  const products = await getProducts();
  const categories = await getCategories();
  const productID = +params.productID;

  const product = products.filter((product) => product.id === productID)[0];

  // console.log(product);

  return (
    <main>
      <ProductPageBackground />
      <ProductDiv
        name={product.name}
        isNew={product.isNew}
        image={product.previewImage}
        description={product.description}
        price={product.price}
      />
      <ProductContent features={product.features} inTheBox={product.inTheBox} />
      <ImageCollague images={product.images} />
      <RecommendedProducts />
      <Categories categories={categories} />
      <Mission />
    </main>
  );
}
