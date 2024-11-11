// import AddProductsForm from './components/AddProductsForm/AddProductsForm';

import dynamic from 'next/dynamic';

const AddProductsForm = dynamic(
  () => import('./components/AddProductsForm/AddProductsForm'),
  {
    ssr: false,
  }
);

export default async function AddProductsPage() {
  return (
    <main className="addProductsPage">
      <AddProductsForm />
    </main>
  );
}
