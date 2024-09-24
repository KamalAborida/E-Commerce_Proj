import { Product } from '@/app/(server)/services/product';
import ProductDescriptionCta from './ProductDescriptionCta';
import Link from 'next/link';

interface productCtaProps {
  product: Product;
}

export default function ProductCta({ product }: productCtaProps) {
  return (
    <div className="productCta">
      <ProductDescriptionCta
        name={product.name}
        isNew={product.isNew}
        description={product.description}
      />
      <Link href={`/product/${product.id}`}>
        <button className="productCta__btn">SEE PRODUCT</button>
      </Link>
    </div>
  );
}
