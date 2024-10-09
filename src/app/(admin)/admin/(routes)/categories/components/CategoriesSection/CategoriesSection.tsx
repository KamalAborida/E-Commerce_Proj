import ModifiableCategory from '@/app/(admin)/components/ModifiableCategory/ModifiableCategory';

export default async function CategoriesSection() {
  return (
    <section className="categoriesSection">
      <h1 className="categoriesSection__title">CATEGORIES</h1>
      <ul className="categoriesSection__categoriesList">
        <ModifiableCategory href="speakers" name="speakers" />
        <ModifiableCategory href="speakers" name="speakers" />
        <ModifiableCategory href="speakers" name="speakers" />
      </ul>
    </section>
  );
}
