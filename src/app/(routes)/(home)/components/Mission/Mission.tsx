import Image from 'next/image';

export default function Mission() {
  return (
    <div className="mission">
      <div className="mission__content">
        <h2 className="mission__content__title">
          Bringing you the <span className="text-orange">best</span> audio gear
        </h2>
        <p className="mission__content__description">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="mission__img">
        <Image
          src={'/mission.png'}
          alt="Our Mission"
          width={540}
          height={590}
        />
      </div>
    </div>
  );
}
