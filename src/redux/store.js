import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import { productsService } from './services/products.service';

export const store = configureStore({
  reducer: {
    products: productReducer,
    [productsService.reducerPath]: productsService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsService.middleware),
  devTools: true,
});
