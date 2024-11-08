// import CategoriesForm from './components/CategoriesForm/CategoriesForm';
import CategoriesSection from './components/CategoriesSection/CategoriesSection';
import dynamic from 'next/dynamic';

const CategoriesForm = dynamic(
  () => import('./components/CategoriesForm/CategoriesForm'),
  {
    ssr: false,
  }
);

export default function CategoriesAdminPage() {
  return (
    <main className="categoriesAdminPage">
      <CategoriesForm />
      <CategoriesSection />
    </main>
  );
}
