import Image from 'next/image';
import Link from 'next/link';

interface categoryProps {
  href: string;
  name: string;
  image: string;
}

export default function Category({ href, name, image }: categoryProps) {
  const nameArr = name.split('');
  nameArr[0] = nameArr[0].toUpperCase();
  const title = nameArr.join('');

  // console.log(image);

  return (
    <div className="category">
      <Image
        src={`https://audiophile.s3.eu-north-1.amazonaws.com/${image.toLowerCase()}`}
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
      <h2 role="categoryName" className="category__name">
        {title}
      </h2>
      <Link href={`/${href}`} className="category__shop" role="shopLink">
        <p>Shop</p>
        <Image src={'/arrow-right.svg'} alt="arrow" width={5} height={10} />
      </Link>
    </div>
  );
}
