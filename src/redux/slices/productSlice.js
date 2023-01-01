import { createSlice } from "@reduxjs/toolkit";

const initialState = { products: [] };

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      state.products.push(payload);
    },
    removeProduct: (state, { payload }) => {
      state.products.splice(payload.index, 1)
    },
    updateProduct: (state, { payload }) => {
      const { index, newProduct } = payload;
      state.products = state.products.map((p, i) =>
        i === index ? newProduct : p
      );
    },
  },
});

export const { addProduct, removeProduct, updateProduct } =
  productSlice.actions;

export default productSlice.reducer;
