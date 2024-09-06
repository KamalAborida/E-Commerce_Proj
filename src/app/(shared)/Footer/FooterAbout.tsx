import Image from 'next/image';
import NavList from '../NavBar/NavList';

export default function FooterAbout() {
  return (
    <div className="footer__container__about">
      <Image
        className="footer__container__about__img"
        src={'./logo.svg'}
        alt="Brand Logo"
        width={145}
        height={25}
      />
      <p className="footer__container__about__description">
        {`Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.`}
      </p>
      <p className="footer__container__about__copyrights">
        Copyright 2021. All Rights Reserved
      </p>
    </div>
  );
}
