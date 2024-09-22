import { Category, getCategories } from '@/app/(server)/services/category';
import Link from 'next/link';

interface NavListProps {
  categories: Category[];
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
              <Link href={`/category/${category.name.toLowerCase()}`}>
                {category.name.toUpperCase()}
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
