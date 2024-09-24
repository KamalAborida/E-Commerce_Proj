import ProductFeatures from './ProductFeatures';
import ProductInTheBox from './ProductInTheBox';

interface ProductContentProps {
  features: string;
  inTheBox: string;
}

export default function ProductContent({
  features,
  inTheBox,
}: ProductContentProps) {
  return (
    <div className="productContent">
      <ProductFeatures features={features} />
      <ProductInTheBox inTheBox={inTheBox} />
    </div>
  );
}
