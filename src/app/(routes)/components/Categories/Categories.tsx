import { CategoryType } from '@/app/(shared)/utils/types';
import Category from './Category';

interface CategoriesProps {
  categories: CategoryType[];
}

export default function Categories({ categories }: CategoriesProps) {
  return (
    <div className="categories" role="div">
      {categories &&
        categories.map((category) => {
          return (
            <Category
              href={`category/${category.id}`}
              key={category.id}
              name={category.name}
            />
          );
        })}
      {!categories && <p>No categories yet...</p>}
    </div>
  );
}
