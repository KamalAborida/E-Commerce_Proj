import Image from 'next/image';
import Link from 'next/link';

interface categoryProps {
  href: string;
  name: string;
}

export default function Category({ href, name }: categoryProps) {
  const nameArr = name.split('');
  nameArr[0] = nameArr[0].toUpperCase();
  const title = nameArr.join('');

  return (
    <div className="category">
      <Image
        src={`/${name}-noBackground.svg`}
        alt="HeadPhones"
        width={120}
        height={160}
        className="category__img"
      />
      <Image
        src={'/shadow.svg'}
        alt="Shadow"
        width={120}
        height={20}
        className="category__shadow"
      />
      <h2 className="category__name">{title}</h2>
      <Link href={`/${href}`} className="category__shop">
        <p>Shop</p>
        <Image src={'/arrow-right.svg'} alt="arrow" width={5} height={10} />
      </Link>
    </div>
  );
}
