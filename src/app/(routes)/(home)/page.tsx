import Categories from '../components/Categories/Categories';
import Banner from './components/Banner/Banner';
import BestSelling from './components/BestSelling/BestSelling';
import Mission from './components/Mission/Mission';

export default function Home() {
  return (
    <div>
      <Banner />
      <Categories />
      <BestSelling />
      <Mission />
    </div>
  );
}
