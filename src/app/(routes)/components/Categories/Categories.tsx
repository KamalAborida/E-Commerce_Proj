import { getCategories } from '@/app/(server)/services/category';
import Category from './Category';

export default async function Categories() {
  const categories = await getCategories();

  return (
    <div className="categories" role="div">
      {categories &&
        categories.map((category) => {
          return (
            <Category
              href={`category/${category.name.toLowerCase()}`}
              key={category.id}
              name={category.name}
            />
          );
        })}
      {!categories && <p>No categories yet...</p>}
    </div>
  );
}
