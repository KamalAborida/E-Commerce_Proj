import ProductCta from '@/app/(routes)/components/ProductCta/ProductCta';
import { Product as ProductType } from '@/app/(server)/services/product';
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
      <div className="product__productCta">
        <ProductCta product={product} />
      </div>
    </div>
  );
}
