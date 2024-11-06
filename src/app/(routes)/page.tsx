import Categories from '../shared/Categories/Categories';
import Mission from './(home)/components/Mission/Mission';
import HomeBackground from './(home)/components/HomeBackground/HomeBackground';
import dynamic from 'next/dynamic';

const Banner = dynamic(() => import('./(home)/components/Banner/Banner'), {
  ssr: false,
});

const BestSelling = dynamic(
  () => import('./(home)/components/BestSelling/BestSelling'),
  {
    ssr: false,
  }
);

export default function HomePage() {
  return (
    <div>
      <HomeBackground />
      <Banner />
      <Categories />
      <BestSelling />
      <Mission />
    </div>
  );
}
