import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartsSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
