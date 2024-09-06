import Image from 'next/image';
import NavList from './NavList';
import NavIconList from './IconsList';

export default function NavBar() {
  return (
    <nav className="nav">
      <Image src={'/logo.svg'} alt="Audio Store Logo" width={143} height={25} />
      <NavList />
      <NavIconList />
    </nav>
  );
}
