'use client';

import { Category } from '@/app/(server)/services/category';
import { useParams } from 'next/navigation';

interface CategoryBackgroundProps {
  categories: Category[];
}

export default function CategoryBackground({
  categories,
}: CategoryBackgroundProps) {
  const { categoryID } = useParams();

  const category = categories.find((category) => +categoryID === category.id);

  return (
    <div className="categoryBackground">
      <h1>{category?.name}</h1>
    </div>
  );
}
