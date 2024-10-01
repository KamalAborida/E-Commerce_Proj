import { Product } from '@/app/(server)/services/product';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  cartItems: CartProduct[];
  totalPrice: number;
  totalQuantity: number;
}

export interface CartProduct extends Product {
  quantity: number;
}

const initialState: InitialState = {
  cartItems: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    removeAll(state) {
      state.totalQuantity = 0;
      state.cartItems = [];
      state.totalPrice = 0;
    },
    addItemToCart(state, action: PayloadAction<CartProduct>) {
      const newItem = action.payload;

      if (state.cartItems.length <= 0) {
        state.cartItems.push(newItem);
        state.totalQuantity += newItem.quantity;
        state.totalPrice += newItem.price * newItem.quantity;
        return;
      }

      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.cartItems.push(newItem);
      }

      state.totalQuantity += newItem.quantity;
      state.totalPrice += newItem.price * newItem.quantity;
    },
    removeItemFromCart(state, action: PayloadAction<number>) {
      const id = action.payload;

      const existingItem = state.cartItems.find((item) => item.id === id);

      if (!existingItem) {
        return;
      }

      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        state.totalPrice -= existingItem.price;
      }

      state.totalQuantity--;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
