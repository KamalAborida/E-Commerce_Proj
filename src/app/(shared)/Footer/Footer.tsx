import Image from 'next/image';
import NavList from '../NavBar/NavList';
import FooterAbout from './FooterAbout';
import FooterSocialMediaList from './FooterSocialMediaList';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container__upperPart">
          <Image
            className="footer__container__upperPart__logo"
            src={'./logo.svg'}
            alt="Brand Logo"
            width={145}
            height={25}
          />
          <NavList />
        </div>
        <div className="footer__container__lowerPart">
          <FooterAbout />
          <FooterSocialMediaList />
        </div>
      </div>
    </footer>
  );
}
