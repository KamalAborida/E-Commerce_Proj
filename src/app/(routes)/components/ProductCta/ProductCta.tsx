import ProductDescriptionCta from './ProductDescriptionCta';
import Link from 'next/link';

interface productCtaProps {
  btnNavUrl: string;
}

export default function ProductCta({ btnNavUrl }: productCtaProps) {
  return (
    <div className="productCta">
      <ProductDescriptionCta />
      <Link href={`/${btnNavUrl}`}>
        <button className="productCta__btn">SEE PRODUCT</button>
      </Link>
    </div>
  );
}
