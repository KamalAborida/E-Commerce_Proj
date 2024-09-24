'use client';

import { useRouter } from 'next/router';
import Product from '../Product/Product';
import { Product as ProductType } from '@/app/(server)/services/product';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface ProductsProps {
  products: ProductType[];
}

export default function Products({ products }: ProductsProps) {
  const [categoryProducts, setCategoryProducts] = useState<
    ProductType[] | null
  >([]);
  const params = useParams();
  const categoryId = +params.categoryID;

  useEffect(() => {
    if (products.length > 0) {
      const filteredProducts = products.filter(
        (product) => product.categoryId === categoryId
      );
      setCategoryProducts(filteredProducts);
    }
  }, [categoryId, products]);

  return (
    <div className="products" role="div">
      {categoryProducts &&
        categoryProducts.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
    </div>
  );
}
