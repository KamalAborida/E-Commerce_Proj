'use client';

import ModifiableCategory from '@/app/(admin)/components/ModifiableCategory/ModifiableCategory';
import { useAppSelector } from '@/lib/store';

export default function CategoriesSection() {
  const categories = useAppSelector((state) => state.data.categories);

  return (
    <section className="categoriesSection">
      <h1 className="categoriesSection__title">CATEGORIES</h1>
      <ul className="categoriesSection__categoriesList">
        {categories.length > 0 &&
          categories.map((category) => {
            return (
              <ModifiableCategory
                key={category.id}
                href={''}
                name={category.name}
              />
            );
          })}
      </ul>
    </section>
  );
}
