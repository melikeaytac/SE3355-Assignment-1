import { createSlice } from '@reduxjs/toolkit';

const visitedSlice = createSlice({
  name: 'visited',
  initialState: {
    products: [], // gezilen ürünler listesi
  },
  reducers: {
    addVisitedProduct: (state, action) => {
      const existing = state.products.find((p) => p.id === action.payload.id);

      if (!existing) {
        state.products.unshift(action.payload); // en başa ekle
        if (state.products.length > 10) {
          state.products.pop(); // 10dan fazlaysa sondakini sil
        }
      }
    },
  },
});

export const { addVisitedProduct } = visitedSlice.actions;
export default visitedSlice.reducer;
