import Image from 'next/image';
import Link from 'next/link';

interface categoryProps {
  href: string;
}

export default function Category({ href }: categoryProps) {
  return (
    <div className="categories__category">
      <Image
        src={'/headPhones-noBackground.svg'}
        alt="HeadPhones"
        width={120}
        height={160}
        className="categories__category__img"
      />
      <Image
        src={'/shadow.svg'}
        alt="Shadow"
        width={120}
        height={20}
        className="categories__category__shadow"
      />
      <h2 className="categories__category__name">Headphones</h2>
      <Link href={`/${href}`} className="categories__category__shop">
        <p>Shop</p>
        <Image src={'/arrow-right.svg'} alt="arrow" width={5} height={10} />
      </Link>
    </div>
  );
}
