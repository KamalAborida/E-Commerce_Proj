import Image from 'next/image';

export default function BestSellingCard() {
  return (
    <div className="bestSellingCard">
      <div className="bestSellingCard__img">
        <Image
          src={'/earphones-bestSeller.svg'}
          alt="Product Image"
          width={550}
          height={330}
        />
      </div>
      <div className="bestSellingCard__cta">
        <h2 className="bestSellingCard__cta__name">YX1 EARPHONES</h2>
        <button className="bestSellingCard__cta__btn">SEE PRODUCT</button>
      </div>
    </div>
  );
}
