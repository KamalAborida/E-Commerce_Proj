import Image from 'next/image';

interface ImageCollagueProps {
  images: string; // Access the dynamic route params
}

export default function ImageCollague({ images }: ImageCollagueProps) {
  type imageListType = { smallImages: string[]; largeImage: string };
  const imagesList: imageListType = JSON.parse(images);

  return (
    <div className="imageCollague">
      <div className="imageCollague__img">
        <Image
          src={`/${imagesList.smallImages[0]}.png`}
          alt="PP"
          width={445}
          height={280}
        />
      </div>
      <div className="imageCollague__img">
        <Image
          src={`/${imagesList.smallImages[1]}.png`}
          alt="PP"
          width={445}
          height={280}
        />
      </div>
      <div className="imageCollague__img">
        <Image
          src={`/${imagesList.largeImage}.png`}
          alt="PP"
          width={635}
          height={592}
        />
      </div>
    </div>
  );
}
