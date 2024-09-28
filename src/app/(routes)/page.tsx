import Categories from './components/Categories/Categories';
import Banner from './(home)/components/Banner/Banner';
import BestSelling from './(home)/components/BestSelling/BestSelling';
import Mission from './(home)/components/Mission/Mission';
import HomeBackground from './(home)/components/HomeBackground/HomeBackground';
import CartModal from '../(shared)/Cart/CartModal';
import { getCategories } from '../(server)/services/category';

export default async function Home() {
  const categories = await getCategories();

  return (
    <div>
      <HomeBackground />
      <Banner />
      <Categories categories={categories} />
      {/* <CartModal /> */}
      <BestSelling />
      <Mission />
    </div>
  );
}
