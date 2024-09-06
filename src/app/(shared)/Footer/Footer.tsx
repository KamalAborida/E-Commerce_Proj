import Image from 'next/image';
import NavList from '../NavBar/NavList';
import FooterAbout from './FooterAbout';
import FooterSocialMediaList from './FooterSocialMediaList';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <FooterAbout />
        <div className="footer__container__navList">
          <NavList />
        </div>
        <FooterSocialMediaList />
      </div>
    </footer>
  );
}
