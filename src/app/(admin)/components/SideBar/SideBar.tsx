import Image from 'next/image';
import Link from 'next/link';

export default function SideBar() {
  return (
    <nav className="adminSideBar">
      <Image src={'/logo.svg'} alt="logo" width={100} height={100} />
      <ul className="adminSideBar__list">
        <li className="adminSideBar__list__item">
          <Link href={'categories'}>CATEGORIES</Link>
        </li>
        <li className="adminSideBar__list__item">
          <Link href={'products'}>PRODUCTS</Link>
        </li>
        <li className="adminSideBar__list__item">
          <Link href={'addProducts'}>ADD PRODUCT</Link>
        </li>
      </ul>
    </nav>
  );
}
