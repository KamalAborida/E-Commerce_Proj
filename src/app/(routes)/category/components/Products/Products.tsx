'use client';

import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Product from '../../../../shared/Product/Product';
import ActionDiv from '@/app/(routes)/components/ActionDiv/ActionDiv';
import {
  ASCENDING,
  DESCENDING,
  filterProductsByPrice,
  filterProductsByCategoryId,
  searchProducts,
  sortProductsByPrice,
} from './utils';
import { useAppSelector } from '@/lib/store';

export default function Products() {
  const products = useAppSelector((state) => state.data.products);

  const [categoryProducts, setCategoryProducts] = useState(products);
  const [arrangementType, setArrangementType] = useState(ASCENDING);
  const [searchTerm, setSearchTerm] = useState('');
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(Number.MAX_SAFE_INTEGER);

  const params = useParams();
  const categoryId = +params.categoryID;

  const areProductsAvailable = products && products.length > 0;

  useEffect(() => {
    if (!areProductsAvailable) return;
    setCategoryProducts(filterProductsByCategoryId(products, categoryId));
    setCategoryProducts((prev) => searchProducts(prev!, searchTerm));
    setCategoryProducts((prev) => sortProductsByPrice(prev!, arrangementType));
    setCategoryProducts((prev) =>
      filterProductsByPrice(prev!, minValue, maxValue)
    );
  }, [
    areProductsAvailable,
    arrangementType,
    categoryId,
    maxValue,
    minValue,
    products,
    searchTerm,
  ]);

  if (isNaN(categoryId)) {
    return <p>Invalid category ID</p>;
  }

  return (
    <div className="products" role="productsDiv">
      <ActionDiv
        setArrangementType={setArrangementType}
        setMaxValue={setMaxValue}
        setMinValue={setMinValue}
        setSearchTerm={setSearchTerm}
      />
      {categoryProducts && categoryProducts.length > 0 ? (
        categoryProducts.map((product) => (
          <Product product={product} key={product.id} />
        ))
      ) : (
        <p>No products available in this category</p>
      )}
    </div>
  );
}
