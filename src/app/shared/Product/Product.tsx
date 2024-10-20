import ProductCta from '@/app/shared/Product/ProductCta';
import { ProductType } from '@/app/shared/utils/types';
import Image from 'next/image';

interface productProps {
  product: ProductType;
}

export default function Product({ product }: productProps) {
  return (
    <div className="product">
      <div className="product__img">
        <Image
          src={`/${product.previewImage}.png`}
          alt="Product Image"
          width={540}
          height={560}
        />
      </div>
      <div className="product__info">
        <ProductCta product={product} />
      </div>
    </div>
  );
}
