import AddProductsForm from './components/AddProductsForm/AddProductsForm';

export default async function AddProductsPage() {
  // const product = await getProduct(1);

  return (
    <main className="addProductsPage">
      <AddProductsForm />
    </main>
  );
}
