import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import visitedReducer from './visitedSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    visited: visitedReducer,
  },
});
