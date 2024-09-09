import ProductFeatures from './ProductFeatures';
import ProductInTheBox from './ProductInTheBox';

export default function ProductContent() {
  return (
    <div className="productContent">
      <ProductFeatures />
      <ProductInTheBox />
    </div>
  );
}
