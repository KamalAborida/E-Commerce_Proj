interface ProductFeaturesProps {
  features: string;
}

export default function ProductFeatures({ features }: ProductFeaturesProps) {
  const featuresList = features.split(',');

  return (
    <div className="productContent__features">
      <h2 className="productContent__features__title">FEATURES</h2>
      <ul className="productContent__features__list">
        {featuresList &&
          featuresList.map((feature) => {
            return (
              <li
                className="productContent__features__list__item"
                key={feature}
                role="featuresListItem"
              >
                <p className="productContent__features__list__item__p">
                  {feature}
                </p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
