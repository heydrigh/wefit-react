import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, Product } from './types';

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const movie = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === movie.id);

      if (itemIndex !== -1) {
        state.items[itemIndex].quantity += 1;
      } else {
        state.items.push({ ...movie, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        state.items[itemIndex].quantity += 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === id);

      if (itemIndex === -1) return;

      state.items[itemIndex].quantity -= 1;

      state.items = state.items.filter((item) => item.quantity >= 1);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
