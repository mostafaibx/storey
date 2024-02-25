import { addItemToCart } from '@/utils/functions';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = addItemToCart(action.payload, state.cart);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    openCart: (state) => {
      state.isOpen = !state.isOpen;
      console.log(state.isOpen);
    },
  },
});

export const { addToCart, removeFromCart, openCart } = cartSlice.actions;
export const selectCart = ({ cart }) => cart;
export default cartSlice.reducer;
