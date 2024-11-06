'use client';

import { CategoryType } from '@/app/shared/utils/types';
import Category from './Category';
import { useAppSelector } from '@/lib/store';
import { useEffect, useState } from 'react';

export default function Categories() {
  const categories = useAppSelector((state) => state.data.categories);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or <ul className="navList"><li>Loading...</li></ul> as a placeholder
  }

  return (
    <div className="categories" role="categoriesDiv">
      {categories &&
        categories.map((category) => {
          return (
            <Category
              href={`category/${category.id}`}
              key={category.id}
              name={category.name}
              image={category.previewImage}
            />
          );
        })}
      {!categories && <p>No categories yet...</p>}
    </div>
  );
}
