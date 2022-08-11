import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/reducer';
import favReducer from './favorites/reduser';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favReducer,
  },
});
