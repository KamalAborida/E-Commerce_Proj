import Image from 'next/image';

export default function ImageCollague() {
  return (
    <div className="imageCollague">
      <div className="imageCollague__img">
        <Image
          src={'/imageCollague-s1.png'}
          alt="PP"
          width={445}
          height={280}
        />
      </div>
      <div className="imageCollague__img">
        <Image
          src={'/imageCollague-s2.png'}
          alt="PP"
          width={445}
          height={280}
        />
      </div>
      <div className="imageCollague__img">
        <Image
          src={'/imageCollague-l3.png'}
          alt="PP"
          width={635}
          height={592}
        />
      </div>
    </div>
  );
}
