import Link from 'next/link';
import { CategoryType } from '../utils/types';

interface NavListProps {
  categories: CategoryType[];
}

export default function NavList({ categories }: NavListProps) {
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
