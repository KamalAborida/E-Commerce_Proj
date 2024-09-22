import { getCategories } from '@/app/(server)/services/category';
import Category from './Category';

export default async function Categories() {
  const categories = await getCategories();

  if (!categories) {
    return <div>Loading...</div>; // Handle empty or loading state
  }

  return (
    <div className="categories" role="div">
      {categories.map((category) => (
        <Category
          href={`category/${category.name.toLowerCase()}`}
          key={category.id}
          name={category.name}
        />
      ))}
    </div>
  );
}
