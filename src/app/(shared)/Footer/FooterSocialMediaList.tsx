import Image from 'next/image';

export default function FooterSocialMediaList() {
  const socialIcons = [
    { src: './facebook-icon.svg', alt: 'facebook' },
    { src: './instagram-icon.svg', alt: 'instagram' },
    { src: './twitter-icon.svg', alt: 'twitter' },
  ];

  return (
    <div className="footer__container__socialMediaList">
      <ul>
        {socialIcons.map((icon, index) => (
          <li key={index}>
            <Image src={icon.src} alt={icon.alt} width={20} height={20} />
          </li>
        ))}
      </ul>
    </div>
  );
}
