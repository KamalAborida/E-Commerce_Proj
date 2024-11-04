import { CartProductType } from '@/app/shared/utils/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  cartItems: CartProductType[];
  totalPrice: number;
  totalQuantity: number;
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
    removeAnEntireItem(state, action: PayloadAction<number>) {
      const id = action.payload;

      const existingItem = state.cartItems.find((item) => item.id === id);

      if (!existingItem) {
        return;
      }

      state.cartItems = state.cartItems.filter((item) => item.id !== id);

      const existingTotalPrice = existingItem.price * existingItem.quantity;
      const newTotalPrice = state.totalPrice - existingTotalPrice;

      state.totalPrice = parseFloat(newTotalPrice.toFixed(2));
      state.totalQuantity = state.totalQuantity - existingItem.quantity;
    },
    addItemToCart(state, action: PayloadAction<CartProductType>) {
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
