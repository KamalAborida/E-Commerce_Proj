interface ProductDescriptionCtaProps {
  isNew: number;
  name: string;
  description: string;
}

export default function ProductDescriptionCta({
  isNew,
  name,
  description,
}: ProductDescriptionCtaProps) {
  return (
    <div className="productCta__productDescriptionCta">
      {isNew > 0 && (
        <span className="productCta__productDescriptionCta__isNew">
          NEW PRODUCT
        </span>
      )}
      <h1 className="productCta__productDescriptionCta__name">{name}</h1>
      <p className="productCta__productDescriptionCta__description">
        {description}
      </p>
    </div>
  );
}
