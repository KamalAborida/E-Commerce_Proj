import BestSellingCard from './BestSellingCard';

export default function BestSelling() {
  return (
    <div className="bestSelling">
      <h1 className="bestSelling__title">BEST SELLERS</h1>
      <BestSellingCard btnNavLink="product/5" />
      <BestSellingCard btnNavLink="product/5" />
      <BestSellingCard btnNavLink="product/5" />
    </div>
  );
}
