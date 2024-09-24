import { useRouter } from 'next/navigation';
import ProductCta from '../../../components/ProductCta/ProductCta';
import HeadphonesImage from './HeadPhonesImage';
import { getProduct } from '@/app/(server)/services/product';

export default async function Banner() {
  const product = await getProduct(1);

  return (
    <div className="banner">{product && <ProductCta product={product} />}</div>
  );
}
