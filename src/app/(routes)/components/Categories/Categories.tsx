import Category from './Category';

export default function Categories() {
  return (
    <div className="categories">
      <Category href="category/headphones" />
      <Category href="category/earphones" />
      <Category href="category/speakers" />
    </div>
  );
}
