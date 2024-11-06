import { ProductType } from '@/app/shared/utils/types';
import Image from 'next/image';
import Link from 'next/link';

interface bestSellingCardProps {
  product: ProductType;
}

export default function BestSellingCard({ product }: bestSellingCardProps) {
  if (!product) {
    return <p>No product</p>;
  }

  return (
    <div className="bestSellingCard">
      <div className="bestSellingCard__img">
        <Image
          src={`https://audiophile.s3.eu-north-1.amazonaws.com/${product.previewImage}.png`}
          alt="Product Image"
          width={550}
          height={330}
        />
      </div>
      <div className="bestSellingCard__cta">
        <h2 className="bestSellingCard__cta__name">{product.name}</h2>
        <button className="bestSellingCard__cta__btn">
          <Link href={`/product/${product.id}`}>SEE PRODUCT</Link>
        </button>
      </div>
    </div>
  );
}
