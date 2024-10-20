import Categories from '../shared/Categories/Categories';
import Banner from './(home)/components/Banner/Banner';
import BestSelling from './(home)/components/BestSelling/BestSelling';
import Mission from './(home)/components/Mission/Mission';
import HomeBackground from './(home)/components/HomeBackground/HomeBackground';

export default async function HomePage() {
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
