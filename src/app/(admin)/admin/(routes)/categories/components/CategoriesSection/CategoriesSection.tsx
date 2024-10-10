'use client';

import ModifiableCategory from '@/app/(admin)/components/ModifiableCategory/ModifiableCategory';
import { useAppSelector } from '@/lib/store';

export default function CategoriesSection() {
  const categories = useAppSelector((state) => state.data.categories);

  return (
    <section className="categoriesSection">
      <h1 className="categoriesSection__title">CATEGORIES</h1>
      <ul className="categoriesSection__list">
        {categories.length > 0 &&
          categories.map((category) => {
            return (
              <li className="categoriesSection__list__item" key={category.id}>
                <ModifiableCategory href={''} name={category.name} />
              </li>
            );
          })}
      </ul>
    </section>
  );
}
