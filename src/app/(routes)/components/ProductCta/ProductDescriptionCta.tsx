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
    <div className="productDescriptionCta">
      {isNew > 0 && (
        <span className="productDescriptionCta__isNew">NEW PRODUCT</span>
      )}
      <h1 className="productDescriptionCta__name">{name}</h1>
      <p className="productDescriptionCta__description">{description}</p>
    </div>
  );
}
