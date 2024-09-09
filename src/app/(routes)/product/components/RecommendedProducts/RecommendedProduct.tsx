import Image from 'next/image';

export default function RecommendedProduct() {
  return (
    <div className="recommendedProductsSection__recommendedProducts__recommendedProduct">
      <div className="recommendedProductsSection__recommendedProducts__recommendedProduct__img">
        <Image
          alt="Product"
          src={'/headPhones-preview-small.png'}
          width={350}
          height={320}
        />
      </div>
      <h3 className="recommendedProductsSection__recommendedProducts__recommendedProduct__name">
        XX99 MARK I
      </h3>
      <button className="recommendedProductsSection__recommendedProducts__recommendedProduct__btn">
        SEE PRODUCT
      </button>
    </div>
  );
}
