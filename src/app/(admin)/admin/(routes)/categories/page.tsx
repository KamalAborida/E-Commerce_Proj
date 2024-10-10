import CategoriesForm from './components/CategoriesForm/CategoriesForm';
import CategoriesSection from './components/CategoriesSection/CategoriesSection';

export default async function CategoriesAdminPage() {
  // const product = await getProduct(1);

  return (
    <main className="categoriesAdminPage">
      <CategoriesForm />
      <CategoriesSection />
    </main>
  );
}
