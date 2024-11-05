import { ProductType } from '@/app/shared/utils/types';
import Image from 'next/image';
import Link from 'next/link';

interface recommendedProductProps {
  product: ProductType;
}

export default function RecommendedProduct({
  product,
}: recommendedProductProps) {
  if (!product) {
    return <p>No product</p>;
  }

  return (
    <div className="recommendedProductsSection__recommendedProducts__recommendedProduct">
      <div className="recommendedProductsSection__recommendedProducts__recommendedProduct__img">
        <Image
          alt="Product"
          src={`/${product.previewImage}.png`}
          width={350}
          height={320}
        />
      </div>
      <h3 className="recommendedProductsSection__recommendedProducts__recommendedProduct__name">
        {product.name}
      </h3>
      <Link href={`/product/${product.id}`}>
        <button className="recommendedProductsSection__recommendedProducts__recommendedProduct__btn btn-orange">
          SEE PRODUCT
        </button>
      </Link>
    </div>
  );
}
