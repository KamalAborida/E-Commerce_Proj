import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoryType, ProductType } from '@/app/shared/utils/types';

interface InitialState {
  categories: CategoryType[];
  products: ProductType[];
}

const initialState: InitialState = {
  categories: [],
  products: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<CategoryType[]>) {
      state.categories = action.payload;
    },
    setProducts(state, action: PayloadAction<ProductType[]>) {
      state.products = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice;
