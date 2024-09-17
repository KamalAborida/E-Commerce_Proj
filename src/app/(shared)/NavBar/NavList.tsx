import Link from 'next/link';

export default function NavList() {
  return (
    <ul className="navList">
      <li className="navList__item">
        <Link href={'/category/earphones'}>Earphones</Link>
      </li>
      <li className="navList__item">
        <Link href={'/category/headphones'}>Headphones</Link>
      </li>
      <li className="navList__item">
        <Link href={'/category/home'}>Home</Link>
      </li>
      <li className="navList__item">
        <Link href={'/category/speakers'}>Speakers</Link>
      </li>
    </ul>
  );
}
