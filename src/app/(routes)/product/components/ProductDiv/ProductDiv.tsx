import NumbersInput from '@/app/(routes)/components/NumbersInput/NumbersInput';
import ProductDescriptionCta from '@/app/(routes)/components/ProductCta/ProductDescriptionCta';
import Image from 'next/image';

export default function ProductDiv() {
  return (
    <div className="productDiv">
      <div className="productDiv__img">
        <Image
          alt="Product Preview"
          src={'/headphones-preview.png'}
          width={540}
          height={560}
        />
      </div>
      <div className="productDiv__ctaDiv">
        <ProductDescriptionCta />
        <p className="productDiv__ctaDiv__price">25.005$</p>
        <div className="productDiv__ctaDiv__btnDiv">
          <NumbersInput />
          <button className="productDiv__ctaDiv__btnDiv__btn addToCart">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}
