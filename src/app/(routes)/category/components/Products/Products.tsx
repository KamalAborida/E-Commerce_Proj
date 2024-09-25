'use client';

import { useRouter } from 'next/router';
import Product from '../Product/Product';
import { Product as ProductType } from '@/app/(server)/services/product';
import { useParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import ActionDiv from '@/app/(routes)/components/ActionDiv/ActionDiv';
import {
  ASCENDING,
  DESCENDING,
  filterProducts,
  searchProducts,
  sortProductsByPrice,
} from './utils';

interface ProductsProps {
  products: ProductType[] | null;
}

export default function Products({ products }: ProductsProps) {
  const [categoryProducts, setCategoryProducts] = useState(products);
  const [arrangmentType, setArrangmentType] = useState(ASCENDING);
  const [searchTerm, setSearchTerm] = useState('');
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1000000000000000);
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
    setCategoryProducts((prev) => searchProducts(prev!, searchTerm));
    setCategoryProducts((prev) => sortProductsByPrice(prev!, arrangmentType));
    setCategoryProducts((prev) => filterProducts(prev!, minValue, maxValue));
  }, [arrangmentType, getThisCategoryProducts, maxValue, minValue, searchTerm]);

  return (
    <div className="products" role="div">
      <ActionDiv
        setArrangmentType={setArrangmentType}
        setMaxValue={setMaxValue}
        setMinValue={setMinValue}
        setSearchTerm={setSearchTerm}
      />
      {categoryProducts &&
        categoryProducts.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
    </div>
  );
}
