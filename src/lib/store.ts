import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './features/cart/cart-slice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import dataSlice from './features/cart/data-slice';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    data: dataSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
