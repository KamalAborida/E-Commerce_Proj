import ProductCta from '@/app/(routes)/components/ProductCta/ProductCta';
import Image from 'next/image';

export default function Product() {
  return (
    <div className="product">
      <div className="product__img">
        <Image
          src={'/headPhones-preview.png'}
          alt="Product Image"
          width={540}
          height={560}
        />
      </div>
      <div className="product__productCta">
        <ProductCta />
      </div>
    </div>
  );
}
