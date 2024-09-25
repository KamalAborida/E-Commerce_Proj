import NumbersInput from '@/app/(routes)/components/NumbersInput/NumbersInput';
import ProductDescriptionCta from '@/app/(routes)/components/ProductCta/ProductDescriptionCta';
import Image from 'next/image';

interface ProductDivProps {
  image: string;
  isNew: number;
  name: string;
  description: string;
  price: number;
}

export default function ProductDiv({
  name,
  image,
  isNew,
  description,
  price,
}: ProductDivProps) {
  return (
    <div className="productDiv">
      <div className="productDiv__img">
        <Image
          alt="Product Preview"
          src={`/${image}.png`}
          width={540}
          height={560}
        />
      </div>
      <div className="productDiv__ctaDiv">
        <ProductDescriptionCta
          isNew={isNew}
          name={name}
          description={description}
        />
        <p className="productDiv__ctaDiv__price">{price}$</p>
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
