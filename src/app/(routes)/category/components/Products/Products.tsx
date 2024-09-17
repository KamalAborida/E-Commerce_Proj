import { useRouter } from 'next/router';
import Product from '../Product/Product';

export default function Products() {
  return (
    <div className="products">
      <Product btnNavUrl="product/5" />
      <Product btnNavUrl="product/1" />
      <Product btnNavUrl="product/3" />
    </div>
  );
}
