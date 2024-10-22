'use client';

import { useAppSelector } from '@/lib/store';
import Image from 'next/image';
import { useParams } from 'next/navigation';

type imageListType = { smallImages: string[]; largeImage: string };

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
    <div className="imageCollague">
      <div className="imageCollague__img">
        <Image
          src={`/${imagesList.smallImages[0]}.png`}
          alt="PP"
          width={445}
          height={280}
        />
      </div>
      <div className="imageCollague__img">
        <Image
          src={`/${imagesList.smallImages[1]}.png`}
          alt="PP"
          width={445}
          height={280}
        />
      </div>
      <div className="imageCollague__img">
        <Image
          src={`/${imagesList.largeImage}.png`}
          alt="PP"
          width={635}
          height={592}
        />
      </div>
    </div>
  );
}
