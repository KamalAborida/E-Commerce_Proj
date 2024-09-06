import Image from 'next/image';

export default function NavIconList() {
  return (
    <ul className="navIconList">
      <li className="navIconList__item">
        <Image
          src={'/cart-icon.svg'}
          alt="Shopping Cart Icon"
          width={20}
          height={20}
        />
      </li>
    </ul>
  );
}
