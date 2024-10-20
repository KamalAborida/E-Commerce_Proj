'use client';

import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Product from '../../../../shared/Product/Product';
import ActionDiv from '@/app/(routes)/components/ActionDiv/ActionDiv';
import {
  ASCENDING,
  DESCENDING,
  filterProducts,
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

  const getFilteredProducts = useCallback(() => {
    return (
      products?.filter((product) => product.categoryId === categoryId) || []
    );
  }, [categoryId, products]);

  useEffect(() => {
    if (areProductsAvailable) {
      const filtered = getFilteredProducts();
      setCategoryProducts(filtered);
    }
  }, [getFilteredProducts, areProductsAvailable]);

  useEffect(() => {
    setCategoryProducts((prev) => searchProducts(prev!, searchTerm));
  }, [searchTerm]);

  useEffect(() => {
    setCategoryProducts((prev) => sortProductsByPrice(prev!, arrangementType));
  }, [arrangementType]);

  useEffect(() => {
    setCategoryProducts((prev) => filterProducts(prev!, minValue, maxValue));
  }, [minValue, maxValue]);

  if (isNaN(categoryId)) {
    return <p>Invalid category ID</p>;
  }

  return (
    <div className="products" role="div">
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
