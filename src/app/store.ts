import { configureStore } from "@reduxjs/toolkit";
import application from "../features/applicationSlice";
import categories from "../features/categoriesSlice";
import products from "../features/products.Slice";

export const store = configureStore({
  reducer: { 
    application,
    categories,
    products,
  },
});
