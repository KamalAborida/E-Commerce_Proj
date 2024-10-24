import CategoriesForm from './components/CategoriesForm/CategoriesForm';
import CategoriesSection from './components/CategoriesSection/CategoriesSection';

export default function CategoriesAdminPage() {
  return (
    <main className="categoriesAdminPage">
      <CategoriesForm />
      <CategoriesSection />
    </main>
  );
}
