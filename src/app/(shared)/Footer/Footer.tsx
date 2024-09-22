import Image from 'next/image';
import NavList from '../NavBar/NavList';
import FooterAbout from './FooterAbout';
import FooterSocialMediaList from './FooterSocialMediaList';
import { Category } from '@/app/(server)/services/category';

interface FooterProps {
  categories: Category[];
}

export default function Footer({ categories }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container__upperPart">
          <Image
            className="footer__container__upperPart__logo"
            src={'/logo.svg'}
            alt="Brand Logo"
            width={145}
            height={25}
          />
          <NavList categories={categories} />
        </div>
        <div className="footer__container__lowerPart">
          <FooterAbout />
          <FooterSocialMediaList />
        </div>
      </div>
    </footer>
  );
}
