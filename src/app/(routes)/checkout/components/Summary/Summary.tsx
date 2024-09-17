import CartObject from '@/app/(shared)/Cart/CartObject';
import InfoLine from './InfoLine';

export default function Summary() {
  return (
    <div className="summary">
      <h2 className="summary__title">Summary</h2>
      <div className="summary__cartObjects">
        <CartObject isEditabdle={false} />
        <CartObject isEditabdle={false} />
        <CartObject isEditabdle={false} />
      </div>
      <InfoLine isOrange={false} label="VAT" value="500" />
      <InfoLine isOrange={false} label="Bla Bla" value="500" />
      <InfoLine isOrange={false} label="Bla BLa Bla" value="500" />
      <InfoLine isOrange={true} label="GRAND TOTAL" value="1500" />
      <button className="summary__button">CHECKOUT & PAY</button>
    </div>
  );
}
