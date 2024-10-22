'use client';

import { imageListType } from '@/app/shared/utils/types';
import { useAppSelector } from '@/lib/store';
import Image from 'next/image';
import { useParams } from 'next/navigation';

export default function ImageCollague() {
  const params = useParams();
  const productId = +params.productID;
  const products = useAppSelector((state) => state.data.products);
  const product = products.find((element) => element.id === productId);

  if (!product) {
    return <p>No product with that ID</p>;
  }

  const imagesList: imageListType = JSON.parse(product.images);

  return (
    <div className="imageCollague" role="imageCollague">
      <div className="imageCollague__img">
        <Image
          src={`/${imagesList.smallImages[0]}.png`}
          alt={`${product.name} - 1`}
          width={445}
          height={280}
        />
      </div>
      <div className="imageCollague__img">
        <Image
          src={`/${imagesList.smallImages[1]}.png`}
          alt={`${product.name} - 2`}
          width={445}
          height={280}
        />
      </div>
      <div className="imageCollague__img">
        <Image
          src={`/${imagesList.largeImage}.png`}
          alt={`${product.name}-Large`}
          width={635}
          height={592}
          role="largeImageInCollague"
        />
      </div>
    </div>
  );
}
