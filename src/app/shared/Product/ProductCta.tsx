import { ProductType } from '@/app/shared/utils/types';
import ProductDescriptionCta from './ProductDescriptionCta';
import Link from 'next/link';

interface productCtaProps {
  product: ProductType;
}

export default function ProductCta({ product }: productCtaProps) {
  return (
    <div className="productCta">
      <ProductDescriptionCta
        name={product.name}
        isNew={product.isNew}
        description={product.description}
      />
      <Link role="seeProductLink" href={`/product/${product.id}`}>
        <button className="productCta__btn">SEE PRODUCT</button>
      </Link>
    </div>
  );
}
