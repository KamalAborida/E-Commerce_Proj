'use client';

import Link from 'next/link';
import { CategoryType } from '../utils/types';
import { useAppSelector } from '@/lib/store';

export default function NavList() {
  const categories = useAppSelector((state) => state.data.categories);

  return (
    <ul className="navList">
      <li className="navList__item">
        <Link href={'/'}>HOME</Link>
      </li>
      {categories &&
        categories.map((category) => {
          return (
            <li className="navList__item" key={category.id}>
              <Link href={`/category/${category.id}`}>
                {category.name.toUpperCase()}
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
