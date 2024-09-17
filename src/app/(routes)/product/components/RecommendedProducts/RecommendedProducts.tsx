import RecommendedProduct from './RecommendedProduct';

export default function RecommendedProducts() {
  return (
    <section className="recommendedProductsSection">
      <h1 className="recommendedProductsSection__title">You May Also Like</h1>
      <div className="recommendedProductsSection__recommendedProducts">
        <RecommendedProduct btnNavUrl="product/5" />
        <RecommendedProduct btnNavUrl="product/5" />
        <RecommendedProduct btnNavUrl="product/5" />
      </div>
    </section>
  );
}
