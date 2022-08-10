import { createSlice, CreateSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    setItem: (state, action) => {
      state.cartItems.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
