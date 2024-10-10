'use client';

import ModifiableProduct from '@/app/(admin)/components/ModifiableProduct/ModifiableProduct';
import { useAppSelector } from '@/lib/store';

export default function ProductsSection() {
  // const product = await getProduct(1);
  const products = useAppSelector((state) => state.data.products);

  return (
    <section className="productsSection">
      <h1 className="productsSection__title">Products</h1>
      <ul className="productsSection__productsList">
        {products.length > 0 &&
          products.map((product) => {
            return (
              <li className="productsSection__list__item" key={product.id}>
                <ModifiableProduct product={product} />
              </li>
            );
          })}
      </ul>
    </section>
  );
}
