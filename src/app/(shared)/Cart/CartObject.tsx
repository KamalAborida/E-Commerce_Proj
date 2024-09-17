import NumbersInput from '@/app/(routes)/components/NumbersInput/NumbersInput';
import Image from 'next/image';

interface cartObjectProps {
  isEditabdle: boolean;
}

export default function CartObject({ isEditabdle }: cartObjectProps) {
  return (
    <div className="cartObject">
      <Image
        className="cartObject__img"
        src={'/headPhones-cart.png'}
        alt="Headphones"
        width={64}
        height={64}
      />
      <p className="cartObject__name">MXXX1 550</p>
      <p className="cartObject__price">1600$</p>
      {!isEditabdle && (
        <div className="cartObject__number">
          <p>x5</p>
        </div>
      )}
      {isEditabdle && (
        <div className="cartObject__numbersInputDiv">
          <NumbersInput />
        </div>
      )}
    </div>
  );
}
