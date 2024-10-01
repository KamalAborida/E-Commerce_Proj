import Categories from './components/Categories/Categories';
import Banner from './(home)/components/Banner/Banner';
import BestSelling from './(home)/components/BestSelling/BestSelling';
import Mission from './(home)/components/Mission/Mission';
import HomeBackground from './(home)/components/HomeBackground/HomeBackground';
import { getCategories } from '../(server)/services/category';

export default async function HomePage() {
  const categories = await getCategories();

  return (
    <div>
      <HomeBackground />
      <Banner />
      <Categories categories={categories} />
      <BestSelling />
      <Mission />
    </div>
  );
}
