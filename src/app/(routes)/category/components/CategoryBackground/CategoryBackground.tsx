'use client';

import { CategoryType } from '@/app/(shared)/utils/types';
import { useParams } from 'next/navigation';

interface CategoryBackgroundProps {
  categories: CategoryType[];
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
