'use client';

import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { store } from './store';
import { CategoryType, ProductType } from '@/app/(shared)/utils/types';
import { dataActions } from './features/cart/data-slice';

interface ReduxProviderProps {
  categories: CategoryType[];
  products: ProductType[];
  children: React.ReactNode;
}

const InitDataProvider: React.FC<ReduxProviderProps> = ({
  categories,
  products,
  children,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataActions.setCategories(categories));
    dispatch(dataActions.setProducts(products));
  }, [dispatch, categories, products]);

  return <>{children}</>;
};

export default function ReduxProvider({
  categories,
  products,
  children,
}: ReduxProviderProps) {
  return (
    <Provider store={store}>
      <InitDataProvider categories={categories} products={products}>
        {children}
      </InitDataProvider>
    </Provider>
  );
}
