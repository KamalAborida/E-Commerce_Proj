'use client';

import { useRouter } from 'next/router';
import Product from '../Product/Product';
import { Product as ProductType } from '@/app/(server)/services/product';
import { useParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import ActionDiv from '@/app/(routes)/components/ActionDiv/ActionDiv';
import { ASCENDING, DESCENDING, sortProductsByPrice } from './utils';

interface ProductsProps {
  products: ProductType[] | null;
}

export default function Products({ products }: ProductsProps) {
  const [categoryProducts, setCategoryProducts] = useState(products);
  const [arrangmentType, setArrangmentType] = useState(ASCENDING);
  const params = useParams();
  const categoryId = +params.categoryID;

  const getThisCategoryProducts = useCallback(() => {
    if (products && products.length > 0) {
      const filteredProducts = products.filter(
        (product) => product.categoryId === categoryId
      );
      setCategoryProducts(filteredProducts);
    }
  }, [categoryId, products]);

  useEffect(() => {
    getThisCategoryProducts();
    setCategoryProducts((prev) => sortProductsByPrice(prev!, arrangmentType));
  }, [arrangmentType, getThisCategoryProducts]);

  return (
    <div className="products" role="div">
      <ActionDiv />
      {categoryProducts &&
        categoryProducts.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
    </div>
  );
}
