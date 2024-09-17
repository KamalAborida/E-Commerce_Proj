import Categories from './components/Categories/Categories';
import Banner from './(home)/components/Banner/Banner';
import BestSelling from './(home)/components/BestSelling/BestSelling';
import Mission from './(home)/components/Mission/Mission';
import HomeBackground from './(home)/components/HomeBackground/HomeBackground';
import CartModal from '../(shared)/Cart/CartModal';

export default function Home() {
  return (
    <div>
      <HomeBackground />
      <Banner />
      <Categories />
      {/* <CartModal /> */}
      <BestSelling />
      <Mission />
    </div>
  );
}
