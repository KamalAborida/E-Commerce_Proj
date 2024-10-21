'use client';

import { CategoryType } from '@/app/shared/utils/types';
import { useAppSelector } from '@/lib/store';
import { useParams } from 'next/navigation';

export default function CategoryBackground() {
  const { categoryID } = useParams();
  const categories = useAppSelector((state) => state.data.categories);

  const category = categories.find((category) => +categoryID === category.id);

  return (
    <div className="categoryBackground">
      <h1 role="categoryBackgroundTitle">{category?.name}</h1>
    </div>
  );
}
