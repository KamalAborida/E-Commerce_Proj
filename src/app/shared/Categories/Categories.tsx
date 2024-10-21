'use client';

import { CategoryType } from '@/app/shared/utils/types';
import Category from './Category';
import { useAppSelector } from '@/lib/store';

export default function Categories() {
  const categories = useAppSelector((state) => state.data.categories);

  return (
    <div className="categories" role="categoriesDiv">
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
