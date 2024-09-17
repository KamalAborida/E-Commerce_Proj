import { useRouter } from 'next/navigation';
import ProductCta from '../../../components/ProductCta/ProductCta';
import HeadphonesImage from './HeadPhonesImage';

export default function Banner() {
  return (
    <div className="banner">
      <ProductCta btnNavUrl="product/10" />
    </div>
  );
}
