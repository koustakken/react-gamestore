import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/reducer';
import favReducer from './favorites/reduser';
import cardsReducer from './card/reducer';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favReducer,
    cards: cardsReducer,
  },
});
